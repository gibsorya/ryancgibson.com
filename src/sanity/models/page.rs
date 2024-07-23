// This represents the 'page' document type in Sanity and defines helpers for interacting with it.

use sanity::async_client::SanityConfig;
use anyhow::{Context, Ok};
use url::form_urlencoded::byte_serialize;
// use chrono::DateTime;

use crate::sanity::client::{create_client, SanityResponse};

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Slug {
    pub _type: String,
    pub current: String
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Page {
    pub title: String,
    pub slug: Slug
}

pub async fn find_by_slug(slug: &str) -> anyhow::Result<Page> {
    let mut client: SanityConfig = create_client();
    println!("Finding page with slug: {}", slug);
    let encoded: String = byte_serialize(&format!("*[_type=='page' && slug.current=='{}']", slug).as_bytes()).collect();

    let resp = client.get(&encoded).await?;
    if resp.status().is_success() {
        let text = resp.text().await.context("Failed to get data")?;
        let page: SanityResponse<Page> = serde_json::from_str(&text).context("Failed to parse deserialize JSON")?;
        let page = page.result.first().cloned().ok_or_else(|| anyhow::Error::msg("No page found"))?;
        Ok(page)
    } else {
        Err(anyhow::Error::msg("Failed to find page"))
    }
}
