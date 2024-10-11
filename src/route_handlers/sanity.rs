use axum::extract::Path;
use futures::future::join_all;

use crate::sanity::models::page::{fetch_image_asset, find_by_slug, PageTemplate};
use crate::sanity::types::section::{HeroTemplate, SectionTemplate};
use crate::sanity::types::SectionTypes;
use super::html_template::HtmlTemplate;

pub async fn handler(slug: Option<Path<String>>) -> impl axum::response::IntoResponse {
    let slug = slug.map(|Path(s)| s).unwrap_or_else(|| "/".to_string());
    let page_result = find_by_slug(&slug).await;

    let template = match page_result {
        Ok(page) => {
            let section_futures: Vec<_> = page.sections.unwrap_or_default().into_iter().map(|section| async {
                match section {
                    SectionTypes::Hero(mut hero) => {
                        if let Some(image) = &hero.image {
                            if let Ok(image_asset) = fetch_image_asset(&image.asset._ref).await {
                                // Update the hero with the full image asset data
                                hero.image_url = Some(image_asset.url);
                                // You can add more fields from image_asset if needed
                            }
                        }
                        SectionTemplate::Hero(HeroTemplate::from(&hero))
                    },
                    // Handle other section types similarly
                    // SectionTypes::BlockText(block_text) => SectionTemplate::BlockText(BlockTextTemplate::from(&block_text)),
                    // SectionTypes::CardDeck(card_deck) => SectionTemplate::CardDeck(CardDeckTemplate::from(&card_deck)),
                }
            }).collect();

            let sections = join_all(section_futures).await;

            PageTemplate {
                title: page.title,
                sections,
            }
        },
        Err(_) => {
            PageTemplate {
                title: "Error".to_string(),
                sections: Vec::new(),
            }
        }
    };

    HtmlTemplate(template)
}
