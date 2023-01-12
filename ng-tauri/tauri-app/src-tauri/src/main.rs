#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// import fs
use std::{fs, path::Path};

// import discovery module
mod explorer;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn explore_folder(folder: &str) -> String {
    // discover the folder
    let mut folders = explorer::list_all_folders_in_folder(folder);
    folders.sort();

    let mut files = explorer::list_all_files_in_folder(folder);
    files.sort();

    // get the parent folder
    let parent_folder = explorer::get_parent_folder(folder);

    // combine the results
    let mut result: Vec<String> = Vec::new();
    result.push(parent_folder);
    result.append(&mut folders);
    result.append(&mut files);

    // convert the result to a string
    let result = result.join(",");
    // return the result
    return result;
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![explore_folder])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
