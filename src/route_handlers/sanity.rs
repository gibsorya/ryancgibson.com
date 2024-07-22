use axum::extract::Path;

use crate::sanity::models::page::find_by_slug;

pub async fn handler(slug: Option<Path<String>>) -> impl axum::response::IntoResponse {
    let slug = slug.map(|Path(s)| s).unwrap_or_else(|| "/".to_string());
    let page = find_by_slug(&slug).await;

    match page {
        Ok(page) => {
            format!("This is the page: {}", page.title)
        },
        Err(err) => {
            format!("oh oh! Page not found! {}", err)
        }
    }
}