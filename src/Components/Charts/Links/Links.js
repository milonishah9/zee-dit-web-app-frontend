import React from "react";
// import "./Links.css";
import * as d3 from "d3";
import { useEffect } from "react";

const Links = () => {
  var data = [
    {
      year: 2000,
      popularity: 80,
    },
    {
      year: 2001,
      popularity: 50,
    },
    {
      year: 2002,
      popularity: 80,
    },
    {
      year: 2003,
      popularity: 50,
    },
    {
      year: 2004,
      popularity: 80,
    },
    {
      year: 2005,
      popularity: 50,
    },
    {
      year: 2006,
      popularity: 80,
    },
  ];

  useEffect(() => {
    // Create SVG and padding for the chart
    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("height", 200)
      .attr("width", 1000);
    const margin = { top: 0, bottom: 20, left: 30, right: 20 };
    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`);
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;
    const grp = chart
      .append("g")
      .attr("transform", `translate(-${margin.left},-${margin.top})`);

    // Add empty scales group for the scales to be attatched to on update
    // chart.append("g").attr("class", "x-axis");
    // chart.append("g").attr("class", "y-axis");

    // Add empty path
    const path = grp
      .append("path")
      .attr("transform", `translate(${margin.left},0)`)
      .attr("fill", "none")
      .attr("stroke", "#D8D8D8")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 2.5);

    function updateScales(data) {
      // Create scales
      const yScale = d3
        .scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, (dataPoint) => dataPoint.popularity)]);
      const xScale = d3
        .scaleLinear()
        .range([0, width])
        .domain(d3.extent(data, (dataPoint) => dataPoint.year));
      return { yScale, xScale };
    }

    function createLine(xScale, yScale) {
      return d3
        .line()
        .x((dataPoint) => xScale(dataPoint.year))
        .y((dataPoint) => yScale(dataPoint.popularity));
    }

    // function updateAxes(data, chart, xScale, yScale) {
    //   chart
    //     .select(".x-axis")
    //     .attr("transform", `translate(0,${height})`)
    //     .call(d3.axisBottom(xScale).ticks(data.length));
    //   chart
    //     .select(".y-axis")
    //     .attr("transform", `translate(0, 0)`)
    //     .call(d3.axisLeft(yScale));
    // }

    function updatePath(data, line) {
      const updatedPath = d3
        .select("path")
        .interrupt()
        .datum(data)
        .attr("d", line);

      const pathLength = updatedPath.node().getTotalLength();
      // D3 provides lots of transition options, have a play around here:
      // https://github.com/d3/d3-transition
      const transitionPath = d3.transition().ease(d3.easeSin).duration(2500);
      updatedPath
        .attr("stroke-dashoffset", pathLength)
        .attr("stroke-dasharray", pathLength)
        .transition(transitionPath)
        .attr("stroke-dashoffset", 0);
    }

    function updateChart(data) {
      const { yScale, xScale } = updateScales(data);
      const line = createLine(xScale, yScale);
      // updateAxes(data, chart, xScale, yScale);
      updatePath(data, line);
    }

    updateChart(data);
    // Update chart when button is clicked
    d3.select("button").on("click", () => {
      // Create new fake data
      const newData = data.map((row) => {
        // return { ...row, popularity: row.popularity * Math.random() };
      });
      updateChart(newData);
    });
  }, []);

  return (
    <div className="line-chart-with-animation">
      <div className="line-chart-all-dots">
        {/* <button>Update Chart</button> */}
        <div className="line-chart-acquisitions">
          <p>Acquisitions</p>
          <label className="line-chart-dots"></label>
        </div>
        <div className="line-chart-acquisitions">
          <p>Discovery</p>
          <label className="line-chart-dots"></label>
        </div>
        <div className="line-chart-acquisitions">
          <p>Advertisement​</p>
          <label className="line-chart-dots"></label>
        </div>
        <div className="line-chart-acquisitions">
          <p>Subscriptions</p>
          <label className="line-chart-dots"></label>
        </div>
        <div className="line-chart-acquisitions">
          <p>Engagement</p>
          <label className="line-chart-dots"></label>
        </div>
        <div className="line-chart-acquisitions">
          <p>Loyalty</p>
          <label className="line-chart-dots"></label>
        </div>
        
      </div>
      <div id="chart"></div>
    </div>
  );
};

export default Links;
