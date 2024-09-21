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
    pub asset: ImageAsset,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct ImageAsset {
    #[serde(rename = "_type")]
    pub _type: String,
    #[serde(rename = "_ref")]
    pub _ref: String,
}