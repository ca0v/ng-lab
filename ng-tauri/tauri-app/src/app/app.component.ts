import { Component } from "@angular/core"
import { invoke } from "@tauri-apps/api/tauri"

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <h1>Tauri Disk Space Analyzer</h1>

      <div class="row">
        <img src="/assets/tauri.svg" class="logo tauri" alt="Tauri logo" />
      </div>

      <div class="row">
        <div>
          <input #greetInput id="greet-input" placeholder="Enter path..." />
          <button type="button" (click)="greet(greetInput.value || '.')">Show Folder Content</button>
        </div>
      </div>

      <p>{{ greetingMessage }}</p>
    </div>
  `,
  styles: [
    `
      .logo.angular:hover {
        filter: drop-shadow(0 0 2em #e32727);
      }
    `,
  ],
  standalone: true,
})
export class AppComponent {
  greetingMessage = ""

  greet(name: string): void {
    // calls rust function greet
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text
    })

  }
}
