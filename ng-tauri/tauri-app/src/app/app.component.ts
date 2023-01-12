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

  parentDirectory: string | null = null
  rootDirectory: string | null = null

  folders: Array<Folder> = []

  async drill(folder: string) {
    this.rootDirectory = folder
    const folders = await this.generateFolders(this.rootDirectory)
    this.parentDirectory = folders.parent_folder
    this.folders = folders.folders
  }

  async generateFolders(folder: string) {
    // calls rust function
    let data = await invoke<Explorer>("explore_folder", { folder })
    if (typeof data === "string") {
      console.log("converting string to object")
      data = JSON.parse(data)
    }
    return data
  }

  async ngOnInit() {
    this.drill(this.rootDirectory || "/home/ca0v")
  }
}
