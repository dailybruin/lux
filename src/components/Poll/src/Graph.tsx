import React from "react";
import * as d3 from "d3";

export default class Graph extends React.Component {
  componentDidMount() {
    this.draw();
  }

  componentWillUpdate() {
    this.draw();
  }

  draw = () => {
    let data = [...this.props.data];
    data.sort((a, b) => a.votes - b.votes);

    let svg = d3.select(this.svg);
    let margin = { top: 10, right: 120, bottom: 20, left: 70 };
    let width = svg.attr("width") - margin.left - margin.right;
    let height = svg.attr("height") - margin.top - margin.bottom;

    svg.selectAll("g").remove();

    let g = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // define x axis
    let x = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.votes)])
      .rangeRound([0, width]);

    // define y axis
    let y = d3
      .scaleBand()
      .rangeRound([height, 0])
      .padding(0.2)
      .domain(data.map(d => d.title));

    // y.domain([0, data.map(d => d.title)]);

    //append y axis to svg
    g
      .append("g")
      // draw axis & remove ticks on axis
      .call(d3.axisLeft(y).tickSize(0))
      // set axis font
      .attr("font-family", "PT Serif")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      // hide y axis line
      .selectAll("path")
      .attr("stroke", "transparent");

    g
      .append("g")
      // draw axis & remove ticks on axis
      .call(d3.axisTop(x).tickSize(0))
      // set axis font
      .attr("font-family", "PT Serif")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      // hide y axis line
      .selectAll("path")

    //append bars
    g
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("y", d => y(d.title))
      .attr("height", y.bandwidth())
      .style("fill", "#0080C6")
      .transition()
      .delay(250)
      .attr("width", d => x(d.votes));
  };

  render() {
    return (
      <div>
        <h3 class="legend">*Number of Students</h3>
        <svg
          width={this.props.width}
          height={this.props.height}
          ref={e => (this.svg = e)}
          />
      </div>
    );
  }
}
