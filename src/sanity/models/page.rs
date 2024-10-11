// This represents the 'page' document type in Sanity and defines helpers for interacting with it.

use sanity::async_client::SanityConfig;
use anyhow::{Context, Ok};
use url::form_urlencoded::byte_serialize;
use serde::{Deserialize, Serialize};

// use chrono::DateTime;

use crate::sanity::client::{create_client, SanityResponse, SanityResult};
use crate::sanity::types::section::SectionTemplate;
use crate::sanity::types::{SectionTypes, Slug};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Page {
    pub title: String,
    pub slug: Slug,
    pub sections: Option<Vec<SectionTypes>>,
}

#[derive(askama::Template)]
#[template(path = "pages/show.html")]
pub struct PageTemplate {
    pub title: String,
    pub sections: Vec<SectionTemplate>,
}

pub async fn find_by_slug(slug: &str) -> anyhow::Result<Page> {
    let mut client: SanityConfig = create_client();
    let groq_query = format!("*[_type == 'page' && slug.current == '{}'][0]{{ title, slug, sections[]->{{ _type, ... }} }}", slug);
    let encoded: String = byte_serialize(&groq_query.as_bytes()).collect();

    let resp = client.get(&encoded).await?;
    if resp.status().is_success() {
        let text = resp.text().await.context("Failed to get data")?;
        let sanity_response: SanityResponse<Page> = serde_json::from_str(&text)
            .context("Failed to parse SanityResponse")?;

        // Extract the Page from the result
        let page = match sanity_response.result {
            SanityResult::Single(page) => page,
            SanityResult::Multiple(pages) => pages.into_iter().next()
                .ok_or_else(|| anyhow::anyhow!("No page found"))?,
        };

        Ok(page)
    } else {
        Err(anyhow::anyhow!("Failed to find page"))
    }
}

// async fn create_section(section)

pub async fn fetch_image_asset(image_ref: &str) -> anyhow::Result<ImageAsset> {
    let mut client: SanityConfig = create_client();
    let groq_query = format!("*[_type == 'sanity.imageAsset' && _id == '{}'][0]", image_ref);
    let encoded: String = byte_serialize(&groq_query.as_bytes()).collect();

    let resp = client.get(&encoded).await?;
    if resp.status().is_success() {
        let text = resp.text().await.context("Failed to get image data")?;
        let sanity_response: SanityResponse<ImageAsset> = serde_json::from_str(&text)
            .context("Failed to parse ImageAsset")?;

        match sanity_response.result {
            SanityResult::Single(asset) => Ok(asset),
            SanityResult::Multiple(assets) => assets.into_iter().next()
                .ok_or_else(|| anyhow::anyhow!("No image asset found")),
        }
    } else {
        Err(anyhow::anyhow!("Failed to find image asset"))
    }
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct ImageAsset {
    #[serde(rename = "_id")]
    pub id: String,
    #[serde(rename = "_type")]
    pub _type: String,
    pub url: String,
    pub metadata: Option<ImageMetadata>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct ImageMetadata {
    pub dimensions: ImageDimensions,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct ImageDimensions {
    pub width: u32,
    pub height: u32,
}
