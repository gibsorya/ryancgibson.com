use serde::{Deserialize, Serialize};

use super::Block;

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct SectionBlockText {
    pub title: String,
    pub rich_text: Option<Vec<Block>>,
}

pub async fn parse_rich_text(rich_text: Vec<Block>) -> Vec<String> {
    rich_text.iter().map(|block| block.children.iter().map(|child| child.text.clone()).collect()).collect()
}
