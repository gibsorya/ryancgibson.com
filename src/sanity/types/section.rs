use std::ops::Deref;
use std::fmt;
use askama::Template;
use askama::Result;

use crate::sanity::models::section::hero::{Image, SectionHero};

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


pub enum SectionTemplate {
    Hero(HeroTemplate),
}

impl SectionTemplate {
    pub fn render(&self) -> askama::Result<String> {
        match self {
            SectionTemplate::Hero(template) => Template::render(template),
            // SectionTemplate::BlockText(template) => Template::render(template),
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
