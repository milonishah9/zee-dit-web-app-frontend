import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3-sankey";
import * as d33 from "d3";
import RNDIMAGE from "./RNDimage.png";
import "./RND.css"

const RNDs = props => {

    function update(data) {


        // Set the sankey diagram properties.
        //NOTHING SEEMS TO BE HAPPENING HERE
        var aSankey = d3Sankey.sankey()
            .size([gWidth, gHeight]);


        var path = d3Sankey.sankeyLinkHorizontal();



        aSankey
            .nodes(testData.nodes)
            .links(testData.links);


            console.log(testData);
        // add in the links
        var link = dataLr.append("g").selectAll(".link")
            .data(testData.links)
            .enter().append("path")
            .attr("class", "link")
            .attr("d", path)
            .style("stroke-width", function(d) { return Math.max(1, d.dy); })
            .sort(function(a, b) { return b.dy - a.dy; });


        // add the link titles
        link.append("title")
            .text(function(d) {
                //console.log(d);
                return d.source.name + " → " +
                    d.target.name + "\n" + format(d.value);
            });


        // add in the nodes
        var node = dataLr.append("g").selectAll(".node")
            .data(testData.nodes)
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                //console.log(d);
              //THESE PROPERTIES ARE NOT PRESENT IN THE SANKEY DATA:
                return "translate(" + d.x + "," + d.y + ")";
                //return "translate(" + 20 + "," + 50 + ")";
            });
        }
}

export default RNDs;
