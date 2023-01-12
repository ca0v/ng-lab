# Rust Lab

For building a Tauri application

## deploy.sh

The main() implements a useful stand-along CLI tool and this is how it can be deployed:

    cargo install --path .
    sudo cp ./target/release/rust-lab /usr/bin/

Usage example:

> rust-lab .

Why is it useful?  It displays file and folder size information.
The Tauri app will render a pie chart, but if I sorted by size instead of name it would facilitate storage analysis.