import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import type { Folder } from "../app.component"
import * as d3 from "d3"

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

  ngAfterViewInit() {
    console.log("initializing chart", this.folders)
    this.createChart()
  }

  // when data changes, update the chart
  ngOnChanges() {
    console.log("updating chart", this.folders)
    this.createChart()
  }

  // create a d3 pie chart using the data
  createChart() {
    // create a svg element
    const svg = d3.select("svg")
    if (!svg) throw "svg tag required"

    // clear the svg
    svg.select("g").remove()


    // get the svg viewBox
    const WIDTH = 1000

    // scale the data
    const angleGen = d3.pie<Folder>().value((d) => d.size)
    const data = angleGen(this.folders)

    // get the domain of the data
    const domain = d3.extent(data, (d) => d.data.size) as number[]
    if (!domain) throw "domain required"

    console.log("create a group element")
    const g = svg.append("g").attr("transform", `translate(${WIDTH/2}, ${WIDTH/2})`)

    const colorScale = d3
      .scaleSequential(
        d3.interpolate(
          getCssVariable("color-pie-start"),
          getCssVariable("color-pie-end")
        )
      )
      .domain([0, this.folders.length])

    // create a group for each data point
    const arcGen = d3.arc().innerRadius(0).outerRadius(0.4 * WIDTH)

    g.selectAll("path")
      .data(data)
      .enter()
      .append("path")
      .attr("d", <any>arcGen)
      .attr("fill", (d, i) => colorScale(i))
      .attr("stroke", "white")

    // label each arc
    g.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("x", (d) => d3.pointRadial((d.startAngle + d.endAngle) / 2, WIDTH / 4)[0])
      .attr("y", (d) => d3.pointRadial((d.startAngle + d.endAngle) / 2, WIDTH / 4)[1])
      .text((d) => d.data.name)
      .attr("font-size", d => `${(d.endAngle - d.startAngle) * 1.5}em`)
      .attr("fill", getCssVariable("color-font"))

    // render the title
    svg
      .append("text")
      .attr("x", 150)
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .text("Usage Pie Chart")
  }
}
function getCssVariable(cssVariableName: string): string {
  const root = document.querySelector("html") as HTMLElement
  const value = getComputedStyle(root).getPropertyValue(`--${cssVariableName}`)
  console.log({ cssVariableName, value })
  if (!value) throw "value required"
  return value
}
