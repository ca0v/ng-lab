import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { invoke } from "@tauri-apps/api/tauri"
import { greatest } from "d3"
import { UsagePieChartComponent } from "./usage-pie-chart/usage-pie-chart.component"

export type Folder = {
  name: string
  size: number
}
@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  imports: [CommonModule, UsagePieChartComponent],
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

  parentDirectory = "/home/ca0v/"

  folders: Array<Folder> = []

  async drill(folder: string) {
    this.parentDirectory = folder
    const folders = await this.generateFolders(this.parentDirectory)
    this.folders = folders
  }

  async generateFolders(folder: string) {
    folder = folder || "./"
    // calls rust function
    const text = await invoke<string>("explore_folder", { folder })
    return text
      .split(",")
      .map((v) => v.substring(folder.length))
      .map((v) => ({ name: v, size: Math.floor(1000 * 1000 * Math.random()) }))
  }

  async ngOnInit() {
    this.folders = await this.generateFolders(this.parentDirectory)
  }
}
