use askama::Template;

#[derive(Template)]
#[template(path = "error.html")]
pub struct ErrorTemplate {
    pub status_code: u16,
    pub message: String,
}
