import React, { useState } from "react";
import "./BubbleChart.css";
import * as d3 from "d3v4";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount, setHoverValue } from "../../../features/HoverValues";

const BubbleChart = (props) => {
  const json = props.files;

  const dispatch = useDispatch();

  let dataURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDBNxYoYHix886AjlohpJuB-vB9NNrsQ_A0rAO1g&s";
  useEffect(() => {
    // d3 colour scheme for bubbles
    // var color = d3.scaleOrdinal().range(["rgb(148, 94, 210, 0.1)"]);
    // tooltip with styling

    var tooltip = d3
      .select("#chart")
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

    //on filter remove other svg
    d3.select(".svg-content").remove();

    // fit bubble chart to the user's window
    var margin = { left: 10, right: 10, top: 10, bottom: 10 },
      width = 920,
      height = 350,
      svg = d3.select("#chart").append("svg");

    var defs = svg.append("svg:defs");

    svg
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 -20 850 250")
      .classed("svg-content", true)
      .append("g");
    const image = d3;

    // var button = d3
    //   .select("#chart")
    //   .append("button")
    //   .attr("id", "btn1")
    //   .attr("class", "btn1")
    //   .text("Show Legend")
    //   .on("click", myFunction());

    var simulation = d3
      .forceSimulation()
      .velocityDecay(0.1)
      .force("x", d3.forceX(width / 2).strength(0.005))
      .force("y", d3.forceY(height / 3.6).strength(0.09))
      .force(
        "collide",
        d3
          .forceCollide(function (d) {
            return d.Count / 15;
          })
          .iterations(100)
      );

    defs
      .append("svg:pattern")
      .attr("id", "grump_avatar")
      .data(json)
      .attr("width", 1)
      .attr("height", 1)
      // .attr("patternUnits", "userSpaceOnUse")
      .append("svg:image")
      .attr("xlink:href", function (d) {
        return d.img;
      })
      .attr("width", 50)
      .attr("height", 50)
      .attr("x", 0)
      .attr("y", 0);

    var circles = svg
      .selectAll(".artist")
      .data(json)
      .enter()
      .append("circle")
      // .classed('back-img', true)
      .attr("stroke", "#945ED2")
      .attr("stroke-width", 1)
      .attr("stroke-opacity", 2)
      .attr("class", "artist")
      .attr("fill", "url(#grump_avatar)")
      .attr("r", function (d) {
        return d.Count / 17;
      })
      // .style("fill", function (d, i) {
      //   var bubbleColor = d3.color(d.Name);
      //     d3.select("#bubble-legend").append(
      //       '<li><span class="bubble-legend-box" style="background:' +
      //         bubbleColor +
      //         '"></span><span class="accessible">' +
      //         d.Count +
      //         '</span><span class="bubble-legend-label" >' +
      //         d.Name +
      //         "</span></li>"
      //     );
      //   return bubbleColor;
      // })

      // .attr("color", function (d) {
      //   return d3.select(this).style("fill");
      // })
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      )
      .on("mouseover", function (d) {
        //tooltips

        tooltip.text(d.Name + ": " + d.Count);
        // props.onClick(d.Name + d.Count);
        tooltip.style("visibility", "visible");
      })

      .on("mousemove", function () {
        return tooltip
          .style("top", d3.event.pageY - 35 + "px")
          .style("left", d3.event.pageX + 0 + "px");
      })

      .on("mouseout", function () {
        // props.onClick("");
        // dispatch(setHoverValue(''))

        tooltip.style("visibility", "hidden");
      })
      .on("click", function (d, i) {
        dispatch(setHoverValue(d.Name));
        d3.select(this).attr("stroke-width", 2);
      });

    // circles
    // .append("svg:image")
    // // .attr("transform", d => "translate(" + d.x + "," + d.y + ")")
    // .attr("xlink:href", dataURL)
    // // .attr("x", 0)
    // // .attr("y", 0)
    // // .attr("width", d => d.Count / 1.5);

    function wrap(text, width) {
      text.each(function () {
        var text = d3.select(this),
          words = text.text().split(" ", 3).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 0, // ems
          y = text.attr("y"),
          dy = parseFloat(text.attr("dy")),
          tspan = text.text(null).append("tspan");
        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text
              .append("tspan")
              .attr("dx", "-6.5em")
              .attr("dy", lineNumber * lineHeight + dy + "em")
              .text(word);
          }
        }
      });
    }

    //text for name in bubble
    var textName = svg
      .selectAll(null)
      .data(json)
      .enter()
      .append("text")
      .style("text-anchor", "middle")
      .attr("dy", "1.5em")
      .text(function (d) {
        return d.Count > 351 ? d.Name : " ";
      })
      .call(wrap, 60);

    //text for count in bubble
    var textCount = svg
      .selectAll(null)
      .data(json)
      .enter()
      .append("text")
      .text(function (d) {
        return d.Count > 351 ? d.Count : "";
      })
      .attr("dy", "0.1em")
      .style("text-anchor", "middle")
      .attr("class", "service-title");

    simulation.nodes(json).on("tick", ticked);

    function ticked() {
      circles
        .attr("cx", function (d) {
          return d.x;
        })
        .attr("cy", function (d) {
          return d.y;
        });
      textName
        .attr("x", function (d) {
          return d.x;
        })
        .attr("y", function (d) {
          return d.y - 3;
        });
      textCount
        .attr("x", function (d) {
          return d.x;
        })
        .attr("y", function (d) {
          return d.y - 3;
        });
    }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = null;
      d.fy = null;
    }

    // function myFunction() {
    //   d3.select("#btn1").on("click", function() {
    //     if (d3.select("#bubble-legend-container").css("display") == "none") {
    //       //$("#bubble-legend").css("display","block");
    //       d3.select("#bubble-legend-container").slideDown("slow");
    //       d3.select("#btn1").text("Hide Legend");
    //     } else {
    //       d3.select("#bubble-legend-container").slideUp("slow");
    //       // $("#bubble-legend").css("display","none");
    //       d3.select("#btn1").text("Show Legend");
    //     }
    //   });
    // }
  }, [json]);

  return (
    <div className=" col-12">
      <div className="" style={{ paddingLeft: "2%", paddingRight: "2%" }}>
        Bubble size represents Reach
        <div className="indicators">
          <img
            src="/static/images/logos/xxk.svg"
            className="xxk"
            alt="Viewers Logo"
          />
          xxk
          <img
            src="/static/images/logos/xxk-2.svg"
            className="xxk"
            alt="Viewers Logo"
          />
          xxk
          <img
            src="/static/images/logos/xxk-3.svg"
            className="xxk"
            alt="Viewers Logo"
          />
          xxk
          <img
            src="/static/images/logos/xxk-4.svg"
            className="xxk"
            alt="Viewers Logo"
          />
          xxk
        </div>
      </div>
      <div id="chart" className=""></div>
    </div>
  );
};

export default BubbleChart;
