use axum::extract::Path;

use crate::sanity::models::page::{find_by_slug, PageTemplate};
use crate::sanity::types::section::{HeroTemplate, SectionTemplate};
use crate::sanity::types::SectionTypes;
use super::html_template::HtmlTemplate;

pub async fn handler(slug: Option<Path<String>>) -> impl axum::response::IntoResponse {
    let slug = slug.map(|Path(s)| s).unwrap_or_else(|| "/".to_string());
    let page = find_by_slug(&slug).await;

    let template = match page {
        Ok(page) => {
            PageTemplate {
                title: page.title,
                sections: page.sections.unwrap_or_default().into_iter().map(|section| {
                    match section {
                        SectionTypes::Hero(hero) => SectionTemplate::Hero(HeroTemplate::from(&hero)),
                    }
                }).collect(),
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
