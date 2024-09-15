use axum::{
    routing::get,
    Router,
};

use dotenv::dotenv;

mod route_handlers;
mod router;
mod sanity;

#[shuttle_runtime::main]
pub async fn axum(#[shuttle_runtime::Secrets] secrets: shuttle_runtime::SecretStore) -> shuttle_axum::ShuttleAxum {
    dotenv().ok();
    // build our application with a route
    let router = router::init_router();

    Ok(router.into())
}

async fn favicon_handler() -> impl axum::response::IntoResponse {
    axum::http::StatusCode::OK
}