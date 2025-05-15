use std::ops::Deref;
use std::fmt;
use askama::Template;
use askama::Result;

use crate::sanity::models::section::block_text::SectionBlockText;
use crate::sanity::models::section::hero::{Image, SectionHero};
use crate::sanity::models::section::Block;

#[derive(askama::Template)]
#[template(path = "sections/hero.html")]
pub struct HeroTemplate {
    pub title: String,
    pub description: String,
    pub image_url: Option<String>,
    pub image: Option<Image>,
}

impl From<&SectionHero> for HeroTemplate {
    fn from(hero: &SectionHero) -> Self {
        HeroTemplate {
            title: hero.title.clone(),
            description: hero.description.clone(),
            image_url: hero.image_url.clone(),
            image: hero.image.clone(),
        }
    }
}

#[derive(askama::Template)]
#[template(path = "sections/block_text.html")]
pub struct BlockTextTemplate {
    pub title: String,
    pub rich_text: Vec<Block>,
}

impl From<&SectionBlockText> for BlockTextTemplate {
    fn from(block_text: &SectionBlockText) -> Self {
        BlockTextTemplate {
            title: block_text.title.clone(),
            rich_text: block_text.rich_text.clone(),
        }
    }
}

#[derive(askama::Template)]
#[template(path = "sections/card_deck.html")]
pub struct CardDeckTemplate {
    // Add fields as needed
}

// #[derive(askama::Template)]
// #[template(path = "sections/block_text.html")]
// pub struct BlockTextTemplate {
//     pub title: String,
//     pub content: String,
// }

// impl From<&SectionBlockText> for BlockTextTemplate {
//     fn from(block_text: &SectionBlockText) -> Self {
//         BlockTextTemplate {
//             title: block_text.title.clone(),
//             content: block_text.content.clone(),
//         }
//     }
// }

// #[derive(askama::Template)]
// #[template(path = "sections/card_deck.html")]
// pub struct CardDeckTemplate {
//     pub title: String,
//     pub cards: Vec<CardTemplate>,
// }

// #[derive(askama::Template)]
// #[template(path = "sections/card.html")]
// pub struct CardTemplate {
//     pub title: String,
//     pub description: String,
// }

// impl From<&SectionCardDeck> for CardDeckTemplate {
//     fn from(card_deck: &SectionCardDeck) -> Self {
//         CardDeckTemplate {
//             title: card_deck.title.clone(),
//             cards: card_deck.cards.iter().map(|card| CardTemplate {
//                 title: card.title.clone(),
//                 description: card.description.clone(),
//             }).collect(),
//         }
//     }
// }

pub enum SectionTemplate {
    Hero(HeroTemplate),
    BlockText(BlockTextTemplate),
    // CardDeck(CardDeckTemplate),
    // Add other section types as needed
}

impl SectionTemplate {
    pub fn render(&self) -> askama::Result<String> {
        match self {
            SectionTemplate::Hero(template) => Template::render(template),
            SectionTemplate::BlockText(template) => Template::render(template),
            // SectionTemplate::CardDeck(template) => Template::render(template),
            // Add other section types as needed
        }
    }
}

impl fmt::Display for SectionTemplate {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self.render() {
            Ok(rendered) => write!(f, "{}", rendered),
            Err(_) => write!(f, "Error rendering template"),
        }
    }
}
