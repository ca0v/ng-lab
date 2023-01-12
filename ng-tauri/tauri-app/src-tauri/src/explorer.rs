use serde::Serialize;

use std::fs;

// create a structure to hold the file name and size
#[derive(Serialize)]
pub struct File {
    pub name: String,
    pub size: u64,
}

// create a structure to hold the folder name and size
#[derive(Serialize)]
pub struct Folder {
    pub name: String,
    pub size: u64,
}

#[derive(Serialize)]
pub struct Explorer {
    pub parent_folder: String,
    pub files: Vec<File>,
    pub folders: Vec<Folder>,
}

pub fn discover(folder: &str) {
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

pub fn banner(title: &str) {
    let banner_size = 60;
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

pub fn file_size_in_human_readable_format(size: u64) -> String {
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

pub fn get_parent_folder(folder: &str) -> String {
    let result = std::path::Path::new(&folder)
        .parent()
        .map(|p| p.to_str().unwrap().to_string());
    return result.unwrap();
}

pub fn list_all_folders_in_folder(folder: &str) -> Vec<String> {
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

pub fn list_all_files_in_folder(folder: &str) -> Vec<String> {
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

pub fn list_all(folder: &str) -> Explorer {
    let folders = list_all_folders_in_folder(folder);
    let files = list_all_files_in_folder(folder);

    let file_sizes = files
        .iter()
        .map(|file| File {
            size: get_file_size(file),
            name: file.to_string(),
        })
        .collect::<Vec<File>>();

    let folder_sizes = folders
        .iter()
        .map(|folder| Folder {
            size: get_folder_size(folder),
            name: folder.to_string(),
        })
        .collect::<Vec<Folder>>();

    // create an Explorer
    let mut explorer = Explorer {
        parent_folder: get_parent_folder(folder),
        folders: folder_sizes,
        files: file_sizes,
    };
    return explorer;
}
