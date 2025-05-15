use serde::{Deserialize, Serialize};

pub mod hero;
pub mod block_text;

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Block {
  pub _type: String,
  pub style: String,
  pub children: Vec<Element>
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Element {
  pub _type: String,
  pub _key: String,
  pub text: String,
  pub marks: Vec<String>
}
