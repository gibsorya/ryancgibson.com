use axum::{
    routing::get,
    Router,
};

use dotenv::dotenv;

mod route_handlers;
mod sanity;

#[tokio::main]
async fn main() {
    dotenv().ok();
    // build our application with a route
    let app = Router::new()
        .route("/favicon.ico", get(favicon_handler))
        .route("/", get(route_handlers::sanity::handler))
        .route("/*slug", get(route_handlers::sanity::handler));

    // run our app with hyper, listening globally on port 3000
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn favicon_handler() -> impl axum::response::IntoResponse {
    axum::http::StatusCode::OK
}