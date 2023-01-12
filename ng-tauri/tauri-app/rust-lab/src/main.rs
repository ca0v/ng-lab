/**
 * It is difficult to develop rust code in the tauri environment.
 * I created this rust-lab project to develop rust code.
 * Specifically, I want to discover the folder sizes on a local drive.
 * Those library methods will be developed here, and ported to the tauri app.
 */
use std::fs;

fn main() {
    println!("Hello, world!");
    let folder = "/home/ca0v";
    let folders = list_all_files_in_folder(folder);
    println!("folders: {:?}", folders);
}

fn list_all_files_in_folder(folder: &str) -> Vec<String> {
    // create a vector of strings as the return value
    let mut result: Vec<String> = Vec::new();

    let paths = fs::read_dir(folder).unwrap();
    for path in paths {
        println!("{:?}", path.unwrap().path());
    }
    return result;
}
