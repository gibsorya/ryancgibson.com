use std::fmt;

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct SectionHero {
    pub title: String,
    pub description: String,
    pub image: Option<Image>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Image {
    #[serde(rename = "_type")]
    pub _type: String,
    pub asset: ImageAssetRef,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct ImageAssetRef {
    #[serde(rename = "_type")]
    pub _type: String,
    #[serde(rename = "_ref")]
    pub _ref: String,
}

impl fmt::Display for ImageAssetRef {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}:{}", self._type, self._ref)
    }
}
