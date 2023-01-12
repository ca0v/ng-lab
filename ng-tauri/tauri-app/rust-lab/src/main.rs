/**
 * It is difficult to develop rust code in the tauri environment.
 * I created this rust-lab project to develop rust code.
 * Specifically, I want to discover the folder sizes on a local drive.
 * Those library methods will be developed here, and ported to the tauri app.
 * Banner width 40
 * ************ PARENT FOLDER ************
 * 012345678901 0123456789012 012345678901
 */
use std::fs;

fn main() {
    // read the 1st input argument
    let args: Vec<String> = std::env::args().collect();

    // if no input argument, exit
    if args.len() < 2 {
        println!("Please provide a folder path as the 1st argument.");
        return;
    }

    let folder = &args[1];
    discover(folder);
}

fn discover(folder: &str) {
    // confirm directory exists
    if !std::path::Path::new(folder).exists() {
        println!("'{}' does not exist.", folder);
        return;
    }

    banner("PARENT FOLDER");
    println!("{}", get_parent_folder(folder));

    banner("CHILD FOLDERS");
    let mut folders = list_all_folders_in_folder(folder);
    folders.sort();
    for (_, folder) in folders.iter().enumerate() {
        println!(
            "{:>6} {:60} {:>6} files",
            file_size_in_human_readable_format(get_folder_size(folder)),
            folder,
            get_file_count(folder),
        );
    }

    banner("FILES");
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

fn banner(title: &str) {
    let banner_size = 80;
    let total_padding = banner_size - title.len() - 2;
    let left_padding = total_padding / 2;
    let right_padding = total_padding - left_padding;

    // generate padding string
    let mut left_pad = String::new();
    for _ in 0..left_padding {
        left_pad.push('*');
    }

    let mut right_pad = String::new();
    for _ in 0..right_padding {
        right_pad.push('*');
    }

    println!(
        "\n{:*<width$}\n{} {} {}\n{:*<width$}",
        "",
        left_pad,
        title,
        right_pad,
        "",
        width = banner_size
    );
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

fn get_parent_folder(folder: &str) -> String {
    let result = std::path::Path::new(&folder)
        .parent()
        .map(|p| p.to_str().unwrap().to_string());
    return result.unwrap();
}

fn list_all_folders_in_folder(folder: &str) -> Vec<String> {
    // create a vector of strings as the return value
    let mut result: Vec<String> = Vec::new();

    let paths = fs::read_dir(folder);
    match paths {
        Ok(paths) => {
            for path in paths {
                match path {
                    Ok(path) => {
                        let meta = fs::metadata(path.path());
                        match meta {
                            Ok(meta) => {
                                if meta.is_dir() {
                                    result.push(path.path().to_str().unwrap().to_string());
                                }
                            }
                            Err(e) => eprintln!("{} {:?}", folder, e),
                        }
                    }
                    Err(e) => eprintln!("{} {:?}", folder, e),
                }
            }
            return result;
        }
        Err(e) => {
            eprintln!("{} {:?}", folder, e);
            return result;
        }
    }
}

fn list_all_files_in_folder(folder: &str) -> Vec<String> {
    // create a vector of strings as the return value
    let mut result: Vec<String> = Vec::new();

    let paths = fs::read_dir(folder);
    match paths {
        Ok(paths) => {
            for path in paths {
                match path {
                    Ok(path) => {
                        let meta = fs::metadata(path.path());
                        match meta {
                            Ok(meta) => {
                                if meta.is_file() {
                                    result.push(path.path().to_str().unwrap().to_string());
                                }
                            }
                            Err(e) => eprintln!("{:?}", e),
                        }
                    }
                    Err(e) => eprintln!("{:?}", e),
                }
            }
            return result;
        }
        Err(e) => {
            eprintln!("{:?}", e);
            return result;
        }
    }
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

fn get_file_count(folder: &str) -> usize {
    let mut result: usize = 0;
    let files = list_all_files_in_folder(folder);
    result += files.len();

    let folders = list_all_folders_in_folder(folder);
    for folder in folders {
        result += get_file_count(&folder);
    }
    return result;
}
