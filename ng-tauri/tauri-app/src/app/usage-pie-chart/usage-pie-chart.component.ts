import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import type { Folder } from "../app.component"

@Component({
  standalone: true,
  selector: "app-usage-pie-chart",
  templateUrl: "./usage-pie-chart.component.html",
  styleUrls: ["./usage-pie-chart.component.css"],
  imports: [CommonModule],
})
export class UsagePieChartComponent {
  // allow parent component to pass in data
  @Input() folders: Folder[] = []
}
