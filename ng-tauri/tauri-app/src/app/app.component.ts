import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { invoke } from "@tauri-apps/api/tauri"
import { UsagePieChartComponent } from "./usage-pie-chart/usage-pie-chart.component"

type Explorer = {
  parent_folder: string
  files: Array<File>
  folders: Array<Folder>
}

type File = {
  name: string
  size: number
}

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
  removePathPrefix(qualifiedPath: string) {
    const i = qualifiedPath.lastIndexOf("/")
    if (i === -1) return qualifiedPath
    return qualifiedPath.substring(i + 1) || qualifiedPath
  }

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

  parentDirectory = "/home/ca0v/code/"

  folders: Array<Folder> = []

  async drill(folder: string) {
    this.parentDirectory = folder
    const folders = await this.generateFolders(this.parentDirectory)
    this.folders = folders
  }

  async generateFolders(folder: string) {
    folder = folder || "./"
    // calls rust function
    let data = await invoke<Explorer>("explore_folder", { folder })
    if (typeof data === "string") {
      console.log("converting string to object")
      data = JSON.parse(data)
    }
    console.log({ data })
    return data.folders
  }

  async ngOnInit() {
    this.folders = await this.generateFolders(this.parentDirectory)
  }
}
