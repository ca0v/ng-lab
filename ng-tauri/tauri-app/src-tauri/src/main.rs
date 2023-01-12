#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// import discovery module
mod explorer;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn explore_folder(folder: &str) -> String {
    let data = explorer::list_all(folder);
    // convert data to json
    let json = serde_json::to_string(&data);
    match json {
        Ok(json) => {
            return json;
        }
        Err(e) => {
            eprintln!("error: {}", e);
            return "".to_string();
        }
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![explore_folder])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
