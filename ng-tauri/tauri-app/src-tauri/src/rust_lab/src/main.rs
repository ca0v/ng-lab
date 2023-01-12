mod explorer;

use explorer::discover;

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
    discover(folder);
}
