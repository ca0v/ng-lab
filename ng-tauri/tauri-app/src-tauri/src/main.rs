#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

// import fs
use std::fs;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn discover_folders(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn greet(name: &str) -> String {
    /* list all directories in the current directory */
    let paths = fs::read_dir(name);
    // convert to a string list
    let paths = paths.unwrap().map(|p| p.unwrap().path().to_str().unwrap().to_string()).collect::<Vec<String>>();
    // convert to json
    let json = serde_json::to_string(&paths).unwrap();
    return json;
}

fn main() {
    tauri::Builder
        ::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}