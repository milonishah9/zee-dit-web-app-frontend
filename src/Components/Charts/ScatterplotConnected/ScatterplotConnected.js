import React from "react";
import './ScatterplotConnected.css';
import * as d3 from 'd3';
import * as d4 from "d3v4";
import { useEffect } from "react";
import { select } from "d3";

const ScatterplotConnected = () => {
    const driving =  [
        {side: "left",  miles: 10, gas: 40},
        {side: "right",  miles: 20, gas: 30},
        {side: "bottom",  miles: 30, gas:45},
        {side: "top", miles: 35, gas: 25},
        {side: "right",  miles: 55, gas: 20},
        {side: "bottom",  miles: 60, gas: 30},
        {side: "right",  miles: 70, gas: 40},
        {side: "bottom",  miles: 80, gas: 20},
        {side: "bottom",  miles: 90, gas: 30},
        {side: "bottom", miles: 100, gas: 26},
        {side: "top",  miles: 110, gas: 30},
        {side: "bottom", miles: 120, gas: 40},
        {side: "right", miles: 130, gas: 30},
        {side: "right", miles: 140, gas: 40},
        {side: "right",  miles: 150, gas: 25},
        {side: "bottom",  miles: 160, gas: 35},
        {side: "bottom", miles: 170, gas: 45},
        {side: "right", miles: 180, gas: 44},
        {side: "left",  miles: 190, gas: 29},
        {side: "bottom",  miles: 200, gas: 40},
      ]
      let color = '#FF9355';
    useEffect(() => {
        ConnectedScatterplot(driving, {
            x: d => d.miles,
            y: d => d.gas,
            title: d => d.year,
            orient: d => d.side,
            yFormat: ".2f",
            xLabel: "Miles driven (per capita per year) →",
            yLabel: "Watch time till date (Mn)",
            width : 1300,
            height: 150,
            duration: 5000 // for the intro animation; 0 to disable
          })
    }, [driving])

    // Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/connected-scatterplot
function ConnectedScatterplot(data, {
    x = ([x]) => x, // given d in data, returns the (quantitative) x-value
    y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
    r = 3, // (fixed) radius of dots, in pixels
    title, // given d in data, returns the label
    orient = () => "top", // given d in data, returns a label orientation (top, right, bottom, left)
    defined, // for gaps in data
    curve = d3.curveCatmullRom, // curve generator for the line
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    marginTop = 20, // top margin, in pixels
    marginRight = 20, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 30, // left margin, in pixels
    inset = r * 2, // inset the default range, in pixels
    insetTop = inset, // inset the default y-range
    insetRight = inset, // inset the default x-range
    insetBottom = inset, // inset the default y-range
    insetLeft = inset, // inset the default x-range
    xType = d3.scaleLinear, // type of x-scale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft + insetLeft, width - marginRight - insetRight], // [left, right]
    xFormat, // a format specifier string for the x-axis
    xLabel, // a label for the x-axis
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom - insetBottom, marginTop + insetTop], // [bottom, top]
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    fill = "white", // fill color of dots
    stroke = "currentColor", // stroke color of line and dots
    strokeWidth = 2, // stroke width of line and dots
    strokeLinecap = "round", // stroke line cap of line
    strokeLinejoin = "round", // stroke line join of line
    halo = "#fff", // halo color for the labels
    haloWidth = 6, // halo width for the labels
    duration = 0 // intro animation in milliseconds (0 to disable)
  } = {}) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const T = title == null ? null : d3.map(data, title);
    const O = d3.map(data, orient);
    const I = d3.range(X.length);
    if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
    const D = d3.map(data, defined);
  
     // Compute default domains.
    if (xDomain === undefined) xDomain = d3.nice(...d3.extent(X), width / 80);
    if (yDomain === undefined) yDomain = d3.nice(0, 60);
  
    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80, xFormat);
    const yAxis = d3.axisLeft(yScale).ticks(height / 50, yFormat);
  
    // Construct the line generator.
    const line = d3.line()
        .curve(curve)
        .defined(i => D[i])
        .x(i => xScale(X[i]))
        .y(i => yScale(Y[i]));
  
    const svg = d3.select(".scatterplot-connected")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-10, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");
  
    // svg.append("g")
        // .attr("transform", `translate(0,${height - marginBottom})`)
        // .call(xAxis)
        // .call(g => g.select(".domain").remove())
        // .call(g => g.selectAll(".tick line").clone()
        //     .attr("y2", marginTop + marginBottom - height)
        //     .attr("stroke-opacity", 0.1))
        // .call(g => g.append("text")
        //     .attr("x", width)
        //     .attr("y", marginBottom - 4)
        //     .attr("fill", "currentColor")
        //     .attr("text-anchor", "end")
        //     .text(xLabel));
  
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.08))
        .call(g => g.append("text")
            .attr("x", 5)
            .attr("y", 18)
            .attr("fill", "currentColor").style('font-size', '10px').classed('text-svg', true)
            .attr("text-anchor", "start")
            .text(yLabel));
  
// ------------line--------------
    const path = svg.append("path")
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 1)
        .attr("stroke-linejoin", strokeLinejoin)
        .attr("stroke-linecap", strokeLinecap)
        .attr("d", line(I));


        var Tooltip = d3
        .select("#my_dataviz")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("color", "black")
        .style("padding", "8px")
        .style("background-color", "white")
        .style("border-radius", "4px")
        .style("font", "12px GothamLight")
        .text("tooltip");
    
// ------------circles-----------
    const g = svg.append("g")
        .attr("fill", color)
        .attr("stroke", color)
        .attr("stroke-width", 5)
        var myData
    const circle = g.selectAll("circle")
        .data(I.filter(i => D[i]))
        .join("circle")
        .attr("cx", i => xScale(X[i]))
        .attr("cy", i => yScale(Y[i]))
        .attr("r", r)
        .on("mouseover", function (d, index) {
            myData = data.filter((data, i) => i === index)
            // select(this).append('text').html('this is d3').style("visibility", "visible")
           
          Tooltip.html(myData[0].side +': '+ myData[0].miles).style("visibility", "visible").style("top", d4.event.pageY + 130 + "px")
        // Three function that change the tooltip when user hover / move / leave a cell
        // var mouseover = function (d) {
        //   Tooltip.style("opacity", 1);
        // };
        // var mousemove = function (d) {
        //   Tooltip.html("Exact value: " + d.value)
        //     // .style("left", d3.mouse(this)[0] + 70 + "px")
        //     // .style("top", d3.mouse(this)[1] + "px");
        // };
        // var mouseleave = function (d) {
        //   Tooltip.style("opacity", 0);
        // };
            // })
        // .on("mousemove", function () {
            
          })

          .on("mouseout", function () {
            d3.selectAll('.tooltip').style("visibility", "hidden")
          })
    //   .on("click", function (I, i) {
    //     console.log(I, i);
    //   });
  
    const label = svg.append("g")
        .attr("font-family", "GothamLight")
        .attr("font-size", '14px')
        .attr("stroke-linejoin", "round")
      .selectAll("g")
      .data(I.filter(i => D[i]))
      .join("g")
        .attr("transform", i => `translate(${xScale(X[i])},${yScale(Y[i])})`);
  
    if (T) label.append("text")
        .text(i => T[i])
        .each(function(i) {
          const t = d3.select(this);
          switch (O[i]) {
            case "bottom": t.attr("text-anchor", "middle").attr("dy", "1.4em"); break;
            case "left": t.attr("dx", "-0.5em").attr("dy", "0.32em").attr("text-anchor", "end"); break;
            case "right": t.attr("dx", "0.5em").attr("dy", "0.32em").attr("text-anchor", "start"); break;
            default: t.attr("text-anchor", "middle").attr("dy", "-0.7em"); break;
          }
        })
        .call(text => text.clone(true))
        .attr("fill", "red")
        .attr("stroke", halo)
        .attr("stroke-width", haloWidth);
  
    // Measure the length of the given SVG path string.
    function length(path) {
      return d3.create("svg:path").attr("d", path).node().getTotalLength();
    }
  
    function animate() {
      if (duration > 0) {
        const l = length(line(I));
  
        path
            .interrupt()
            .attr("stroke-dasharray", `0,${l}`)
          .transition()
            .duration(duration)
            .ease(d3.easeLinear)
            .attr("stroke-dasharray", `${l},${l}`);
  
        label
            .interrupt()
            .attr("opacity", 0)
          .transition()
            .delay(i => length(line(I.filter(j => j <= i))) / l * (duration - 125))
            .attr("opacity", 1);
      }    
    }
  
    animate();
  
    return Object.assign(svg.node(), {animate});
  }
    return (
        <div id="my_dataviz">
            <svg className="scatterplot-connected"></svg>
        </div>
    )

}

export default ScatterplotConnected;