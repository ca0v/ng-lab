import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { invoke } from "@tauri-apps/api/tauri"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {
  asFileSize(fileSizeInBytes: number) {
    if (fileSizeInBytes < 1024) {
      return `${fileSizeInBytes} B`
    } else if (fileSizeInBytes < 1024 * 1024) {
      return `${Math.round(fileSizeInBytes / 1024)} KB`
    } else if (fileSizeInBytes < 1024 * 1024 * 1024) {
      return `${Math.round(fileSizeInBytes / (1024 * 1024))} MB`
    } else {
      return `${Math.round(fileSizeInBytes / (1024 * 1024 * 1024))} GB`
    }
  }

  parentDirectory = "/home/username/"

  folders = generateFolders()

  drill(folder: string) {
    this.folders = generateFolders()
  }

  greet(name: string): void {
    // calls rust function greet
    invoke<string>("greet", { name }).then((text) => {
      this.parentDirectory = text
    })
  }
}
function generateFolders() {
  console.log("generating folders")
  return ["src", "public", "tauri"].map((f) => ({
    name: f,
    size: Math.floor(1000 * 1000 * Math.random()),
  }))
}
