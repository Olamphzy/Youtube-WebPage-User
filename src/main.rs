extern crate core;

use std::env;

use actix_web::{get, web, App, HttpResponse, HttpServer};
use youtube::YouTube;

#[get("/{username}")]
async fn user_info(username: web::Path<String>) -> HttpResponse {
    let api_key = env::var("YOUTUBE_API_KEY").expect("YOUTUBE_API_KEY must be set");
    let youtube = YouTube::new(&api_key);

    match youtube.get_user(&username).await {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(_) => HttpResponse::NotFound().body("User not found"),
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(user_info))
        .bind("127.0.0.1:8000")?
        .run()
        .await
}
