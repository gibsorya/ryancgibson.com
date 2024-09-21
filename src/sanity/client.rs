use sanity::async_client::SanityConfig;

use dotenv::dotenv;
use serde::Deserialize;
use std::env;

pub fn create_client() -> SanityConfig {
    dotenv().ok();

    let client = sanity::async_client::create(
        &env::var("SANITY_PROJECT_ID").unwrap(),
        &env::var("SANITY_DATASET").unwrap(),
        &env::var("SANITY_API_TOKEN").unwrap(),
        false
    );

    return client;
}

#[derive(Deserialize)]
#[serde(untagged)]
pub enum SanityResult<T> {
    Single(T),
    Multiple(Vec<T>),
}

#[derive(Deserialize)]
pub struct SanityResponse<T> {
    pub query: String,
    pub result: SanityResult<T>,
    pub ms: u64
}
