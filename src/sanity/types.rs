pub mod section;

use serde::{Deserialize, Serialize};

use crate::sanity::models::section::hero::SectionHero;
use crate::sanity::models::section::block_text::SectionBlockText;

// Custom types
#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(tag = "_type")]
pub enum SectionTypes {
    #[serde(rename = "sectionHero")]
    Hero(SectionHero),
    #[serde(rename = "sectionBlockText")]
    BlockText(SectionBlockText),
}


// Sanity types
#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(rename = "_type")]
pub struct Slug {
    pub _type: String,
    pub current: String
}
