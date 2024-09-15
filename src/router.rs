use axum::{
    routing::{delete, get},
    Extension, Router,
};

pub fn init_router() -> Router {
    Router::new()
        .route("/favicon.ico", get(favicon_handler))
        .route("/", get(crate::route_handlers::sanity::handler))
        .route("/*slug", get(crate::route_handlers::sanity::handler))
}

async fn favicon_handler() -> impl axum::response::IntoResponse {
    axum::http::StatusCode::OK
}