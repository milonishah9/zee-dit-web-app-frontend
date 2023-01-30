import { useRef } from 'react';

import * as d3 from 'd3';
// import * as d3 from 'd3v4';

import './SankeyChartForConsumer.css';
import { useLayoutEffect } from 'react';

const SankeyChartForConsumer = (props) => {

    const svgRef = useRef();

    useLayoutEffect(() => {

        var nodeData = [
            {id: "D3",       x: 100, y: 25},
            {id: "Scales",   x: 25, y: 175},
            {id: "Shapes",   x: 175, y: 175}];
            // { id: "Organic", x: 25, y: 25 },
            // { id: "Paid", x: 175, y: 25 },
            // { id: "Guest", x: 25, y: 225 },
            // { id: "Sign-up", x: 175, y: 225 },
            // { id: "Explore", x: 25, y: 425 },
            // { id: "Search", x: 175, y: 425 },
        

        var linkData = [
            {source: [80,25], target: [175,175]},   // D3 -> Shapes
            {source: [80,25], target: [25,175]} // D3 -> Scales
            // { source: [25, 35], target: [175, 215], fill: "#74CDFF" },   // D3 -> Shapes
            // { source: [175, 35], target: [25, 215], fill: "#768CFF" },
            // { source: [20, 235], target: [25, 415], fill: "#FFB78E" },
            // { source: [25, 235], target: [175, 415], fill: "#40BCBC" },
        ]; // D3 -> Scales

        // Begin making the horizontal link diagram
        
        var link = d3.linkHorizontal()
            .source(function (d) {
                return [d.source[1], d.source[0]];
            })
            .target(function (d) {
                return [d.target[1], d.target[0]];
            });

        // var link = d3.link(d3.curveBumpX)
        //     .x(d => d.y)
        //     .y(d => d.x)

        d3.select(svgRef.current) //Adding the Circle nodes
            .selectAll("circle")
            .data(nodeData)
            .join("circle")
            .attr("r", "7")
            .attr("cx", d => d.y)
            .attr("cy", d => d.x)
            .attr("fill", "#3E1F76")
            .classed("circle", true);

        d3.select(svgRef.current) //Adding the link paths
            .selectAll("path")
            .data(linkData)
            .join("path")
            .attr("d", link)
            .attr("fill", function (d) { return d.fill })
            .classed("link", true);

        d3.select(svgRef.current) //Adding the text labels
            .selectAll("text")
            .data(nodeData)
            .join("text")
            .attr("font-size", "12px")
            .attr("text-anchor", "middle")
            .attr("x", d => d.y)
            .attr("y", d => d.x + 20)
            .classed("node-title", true)
            .text(d => d.id);

        //Begin making the vertical link diagram
        var link = d3.linkVertical();

        d3.select("#quickDemoV") //Adding the circle nodes
            .selectAll("circle")
            .data(nodeData)
            .join("circle")
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .classed("circle", true);

        d3.select("#quickDemoV") //Adding the link paths
            .selectAll("path")
            .data(linkData)
            .join("path")
            .attr("d", link)
            .classed("link", true);

        d3.select("#quickDemoV") //Adding the text label
            .selectAll("text")
            .data(nodeData)
            .join("text")
            .attr("font-size", "12px")
            .attr("text-anchor", "middle")
            .attr("x", d => d.id === "D3" ? d.x + 15 : d.x) //If the node is the D3 node, move it over some so it fits right, otherwise d.x
            .attr("y", d => d.y + 20)
            .text(n => n.id);

        //Begin making radial link diagram
        var link = d3.linkRadial()
            .angle(d => xAngleScale(d[0]))
            .radius(d => yRadiusScale(d[1]));

        var xAngleScale = d3.scaleLinear().domain([25, 175]).range([Math.PI, Math.PI * 2]);
        var yRadiusScale = d3.scaleLinear().domain([25, 175]).range([0, 80]);

        d3.select("#quickDemoR") //Adding the circle nodes
            .selectAll("circle")
            .data(nodeData)
            .join("circle")
            .attr("cx", d => d3.pointRadial(xAngleScale(d.x), yRadiusScale(d.y))[0])
            .attr("cy", d => d3.pointRadial(xAngleScale(d.x), yRadiusScale(d.y))[1])
            .classed("circle", true)
            .attr("transform", "translate(100,100)");

        d3.select("#quickDemoR") //Adding the link paths
            .selectAll("path")
            .data(linkData)
            .join("path")
            .attr("d", link)
            .classed("link", true)
            .attr("transform", "translate(100,100)");

        d3.select("#quickDemoR") //Adding the text label
            .selectAll("text")
            .data(nodeData)
            .join("text")
            .attr("font-size", "12px")
            .attr("text-anchor", "left")
            .attr("x", d => d3.pointRadial(xAngleScale(d.x), yRadiusScale(d.y))[0] + 10)
            .attr("y", d => d3.pointRadial(xAngleScale(d.x), yRadiusScale(d.y))[1])
            .text(n => n.id)
            .attr("transform", "translate(100,100)");

    }, []);

    // d3.linkHorizontal().

    return (
        <div className='sankey-chart-for-consumer-container'>
            <svg ref={svgRef} width="500" height="300"></svg>
            {/* <svg id='quickDemoR' width="200" height="200"></svg> */}
        </div>
    )
}

export default SankeyChartForConsumer;