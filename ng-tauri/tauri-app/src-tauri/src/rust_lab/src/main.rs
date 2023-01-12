mod explorer;

/**
 * It is difficult to develop rust code in the tauri environment.
 * I created this rust-lab project to develop rust code.
 * Specifically, I want to discover the folder sizes on a local drive.
 * Those library methods will be developed here, and ported to the tauri app.
 * Banner width 40
 * ************ PARENT FOLDER ************
 * 012345678901 0123456789012 012345678901
 */

fn main() {
    // read the 1st input argument
    let args: Vec<String> = std::env::args().collect();

    // if no input argument, exit
    if args.len() < 2 {
        println!("Please provide a folder path as the 1st argument.");
        return;
    }

    let folder = &args[1];
    explorer::banner(folder);

    let data = explorer::list_all(folder);

    // print the data
    explorer::banner("FOLDER DATA");

    // print the data.folders
    for folder in data.folders {
        println!(
            "{:>6} {:60}",
            explorer::file_size_in_human_readable_format(folder.size),
            folder.name,
        );
    }

    explorer::banner("FILE DATA");

    // print the data.files
    for file in data.files {
        println!(
            "{:>6} {:60}",
            explorer::file_size_in_human_readable_format(file.size),
            file.name,
        );
    }
    
}
