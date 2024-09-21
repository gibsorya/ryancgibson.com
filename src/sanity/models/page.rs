// This represents the 'page' document type in Sanity and defines helpers for interacting with it.

use sanity::async_client::SanityConfig;
use anyhow::{Context, Ok};
use url::form_urlencoded::byte_serialize;
use serde::{Deserialize, Serialize};

// use chrono::DateTime;

use crate::sanity::client::{create_client, SanityResponse, SanityResult};
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
