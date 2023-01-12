#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

// import fs
use std::{fs, path::Path};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn explore_folder(folder: &str) -> String {

    // check if folder exists
    if !Path::new(folder).exists() {
        return "<folder does not exist>".to_string();
    }

    // set the current directory to the name directory
    std::env::set_current_dir(folder).unwrap();

    // get the parent folder of the current directory
    let parent_folder = std::env::current_dir().unwrap().parent().unwrap().to_str().unwrap().to_string();

    /* list all directories in the current directory */
    let paths = fs::read_dir(".");

    // combine the result with the current directory
    let current_dir = std::env::current_dir().unwrap().to_str().unwrap().to_string();

    // convert to string[]
    let result = paths.unwrap()
    .map(|p| p.unwrap().path().to_str().unwrap().to_string())
    // combine current_dir with path    
    .map(|p| Path::new(&current_dir).join(&p));

   // convert result to an array of strings
    let mut result = result.map(|p| p.to_str().unwrap().to_string()).collect::<Vec<String>>();

    // append parentFolder to the end of the result array
    // create a vector containing parentFolder
    result.push(parent_folder);
        
    // convert to comma separated string
    let result = result.join(",");
    
    return result;
}

fn main() {
    tauri::Builder
        ::default()
        .invoke_handler(tauri::generate_handler![explore_folder])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}