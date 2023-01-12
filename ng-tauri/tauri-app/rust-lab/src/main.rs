/**
 * It is difficult to develop rust code in the tauri environment.
 * I created this rust-lab project to develop rust code.
 * Specifically, I want to discover the folder sizes on a local drive.
 * Those library methods will be developed here, and ported to the tauri app.
 */
use std::fs;

fn main() {
    let folder = "/home/ca0v/code";

    println!("FOLDERS");
    let mut folders = list_all_folders_in_folder(folder);
    folders.sort();
    for (_, folder) in folders.iter().enumerate() {
        println!(
            "{:>6} {}",
            file_size_in_human_readable_format(get_folder_size(folder)),
            folder,
        );
    }

    println!("FILES");
    let mut files = list_all_files_in_folder(folder);
    // sort files
    files.sort();
    
    for (_, file) in files.iter().enumerate() {
        println!(
            "{:>6} {}",
            file_size_in_human_readable_format(get_file_size(file)),
            file,
        );

    }
}

fn file_size_in_human_readable_format(size: u64) -> String {
    let mut size = size;
    let mut unit: String = "B".to_string();
    if size > 1024 {
        size /= 1024;
        unit = "KB".to_string();
    }
    if size > 1024 {
        size /= 1024;
        unit = "MB".to_string();
    }
    if size > 1024 {
        size /= 1024;
        unit = "GB".to_string();
    }
    if size > 1024 {
        size /= 1024;
        unit = "TB".to_string();
    }
    if size > 1024 {
        size /= 1024;
        unit = "PB".to_string();
    }
    return format!("{} {}", size, unit);
}

fn list_all_folders_in_folder(folder: &str) -> Vec<String> {
    // create a vector of strings as the return value
    let mut result: Vec<String> = Vec::new();

    let paths = fs::read_dir(folder).unwrap();
    for path in paths {
        match path {
            Ok(path) => {
                if fs::metadata(path.path()).unwrap().is_dir() {
                    result.push(path.path().to_str().unwrap().to_string());
                }
            }
            Err(e) => println!("{:?}", e),
        }
    }
    return result;
}

fn list_all_files_in_folder(folder: &str) -> Vec<String> {
    // create a vector of strings as the return value
    let mut result: Vec<String> = Vec::new();

    let paths = fs::read_dir(folder).unwrap();
    for path in paths {
        match path {
            Ok(path) => {
                if fs::metadata(path.path()).unwrap().is_file() {
                    result.push(path.path().to_str().unwrap().to_string());
                }
            }
            Err(e) => println!("{:?}", e),
        }
    }
    return result;
}

fn get_file_size(file: &str) -> u64 {
    return fs::metadata(file).unwrap().len();
}

fn get_folder_size(folder: &str) -> u64 {
    let mut result: u64 = 0;
    let files = list_all_files_in_folder(folder);
    for file in files {
        result += get_file_size(&file);
    }

    let folders = list_all_folders_in_folder(folder);
    for folder in folders {
        result += get_folder_size(&folder);
    }
    return result;
}
