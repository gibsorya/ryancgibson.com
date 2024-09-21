use axum::{
    routing::get, Router,
};

use tower_http::services::{ServeDir, ServeFile};
use crate::route_handlers::sanity::handler as sanity_handler;

pub fn init_router() -> Router {
    let main_path = match std::env::current_dir() {
        Ok(path) => path,
        Err(_) => std::path::PathBuf::from("./"),
    };

    let assets_path = format!("{}/assets", main_path.to_str().unwrap());
    let public_path = format!("{}/public", main_path.to_str().unwrap());

    Router::new()
        .route("/", get(sanity_handler))
        .route("/*slug", get(sanity_handler))
        .nest_service("/assets", ServeDir::new(assets_path))
        .nest_service("/favicon.ico", ServeFile::new(public_path)) 
}

async fn favicon_handler() -> impl axum::response::IntoResponse {
    axum::http::StatusCode::OK
}
