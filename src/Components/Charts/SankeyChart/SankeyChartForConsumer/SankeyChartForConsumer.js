import { useEffect, useRef, useLayoutEffect } from 'react';

import * as d3 from 'd3';
// import * as d3v4 from 'd3v4';

import './SankeyChartForConsumer.css';

const SankeyChartForConsumer = (props) => {

    const svgRef = useRef();

    // const createLineCoOrdinates = (source, target, distance) => {

    //     let xDifference = target[0] - source[0], yDifference = target[1] - source[1];
    //     let calculatedPoints = [
    //         source,
    //         [source[0] + 30, source[1] - 2 * distance],
    //         [source[0] + xDifference / 2, source[1] - 3 * distance],
    //         [target[0] - 30, source[1] - 2 * distance],
    //         target,
    //         [target[0] - 25, source[1] - distance],
    //         [target[0] - xDifference / 2, source[1] - 2 * distance],
    //         [source[0] + 30, source[1] - distance],
    //         source
    //     ]

    //     return calculatedPoints;

    // }

    useLayoutEffect(() => {

        const xPosition = 125, yPosition = 400;

        var nodeData = [
            { id: "Organic", x: xPosition - 100, y: yPosition - 375, value: 70.38, name: "Organic", absoluteValue: 66.3, percentageValue: 46, percentageChage: -2 },
            { id: "Paid", x: xPosition + 125, y: yPosition - 375, value: 79.11, name: "Paid", absoluteValue: 77.9, percentageValue: 54, percentageChage: 6 },
            { id: "Returning", x: xPosition - 100, y: yPosition - 195, value: 12.91, name: "Returning", absoluteValue: 15, percentageValue: 25, percentageChage: 10 },
            { id: "New", x: xPosition + 125, y: yPosition - 195, value: 12.91, name: "New", absoluteValue: 51, percentageValue: 75, percentageChage: -3 },
            { id: "Anonymous", x: xPosition - 100, y: yPosition - 15, value: 86.71, name: "Anonymous", absoluteValue: 31, percentageValue: 82, percentageChage: -12 },
            { id: "Sign up", x: xPosition + 125, y: yPosition - 15, value: 33.21, name: "Sign Up", absoluteValue: 66.3, percentageValue: 18, percentageChage: 7 },
            { id: "Explore", x: xPosition - 35, y: yPosition + 205, value: 86.71, name: "Explore", absoluteValue: 66.3, percentageValue: 50, percentageChage: 5 },
            { id: "Search", x: xPosition + 55, y: yPosition + 205, value: 33.21, name: "Search", absoluteValue: 66.3, percentageValue: 20, percentageChage: -20 },
            { id: "Exit-signup", x: xPosition + 125, y: yPosition + 205, value: 55.55, name: "Exit", absoluteValue: 66.3, percentageValue: 27, percentageChage: 13 },
            { id: "Exit-anonymous", x: xPosition - 100, y: yPosition + 205, value: 55.55, name: "Exit", absoluteValue: 66.3, percentageValue: 3, percentageChage: -0 },
            { id: "Subscribed", x: xPosition - 25, y: yPosition + 405, value: 86.71, name: "Subscribed", absoluteValue: 54, percentageValue: 7, percentageChage: -2 },
            { id: "Watched Ads", x: xPosition + 50, y: yPosition + 405, value: 33.21, name: "Watched Ads", absoluteValue: 66.3, percentageValue: 30, percentageChage: -2 },
            { id: "Exit-Search", x: xPosition + 125, y: yPosition + 405, value: 33.21, name: "Exit", absoluteValue: 66.3, percentageValue: 12, percentageChage: -2 },
            { id: "Exit-Explore", x: xPosition - 100, y: yPosition + 405, value: 33.21, name: "Exit", absoluteValue: 66.3, percentageValue: 51, percentageChage: -2 },
            { id: "Watch Premium Content", x: xPosition - 25, y: yPosition + 575, value: 86.71, name: "Watch Premium Content", absoluteValue: 66.3, percentageValue: 3, percentageChage: -2 },
            // { id: "Watch Premium Content", x: xPosition - 65, y: yPosition + 575, value: 86.71, name: "Watch Premium Content", absoluteValue: 66.3, percentageValue: 3, percentageChage: -2 },
            { id: "Watch Free Content", x: xPosition + 50, y: yPosition + 575, value: 86.71, name: "Watch Free Content", absoluteValue: 66.3, percentageValue: 54, percentageChage: -2 },
            // { id: "Watch Free Content", x: xPosition + 5, y: yPosition + 575, value: 86.71, name: "Watch Free Content", absoluteValue: 66.3, percentageValue: 54, percentageChage: -2 },
            { id: "Exit - Watch Ads", x: xPosition + 125, y: yPosition + 575, value: 86.71, name: "Exit", absoluteValue: 66.3, percentageValue: 43, percentageChage: -2 },
        ];

        var linkData = [
            { source: [xPosition - 100, yPosition - 365], target: [xPosition + 125, yPosition - 205], fill: "#74CDFF" }, //Organic - New
            { source: [xPosition - 100, yPosition - 365], target: [xPosition - 100, yPosition - 205], fill: "#74CDFF" }, //Orgainc - Returning
            { source: [xPosition + 125, yPosition - 365], target: [xPosition - 100, yPosition - 205], fill: "#768CFF" }, //Paid - Returning
            { source: [xPosition + 125, yPosition - 365], target: [xPosition + 125, yPosition - 205], fill: "#768CFF" }, //Paid - New
            { source: [xPosition - 100, yPosition - 185], target: [xPosition - 100, yPosition - 25], fill: "#FFB78E" },  //Returning - Anonymous
            { source: [xPosition - 100, yPosition - 185], target: [xPosition + 125, yPosition - 25], fill: "#FFB78E" }, //Returning - Sign up
            { source: [xPosition + 125, yPosition - 185], target: [xPosition - 100, yPosition - 25], fill: "#74CDFF" },  //New - Anonymous
            { source: [xPosition + 125, yPosition - 185], target: [xPosition + 125, yPosition - 25], fill: "#74CDFF" }, //New - Sign up
            { source: [xPosition - 100, yPosition - 5], target: [xPosition - 35, yPosition + 195], fill: "#768CFF" }, //Anonymous - Explore
            { source: [xPosition - 100, yPosition - 5], target: [xPosition + 55, yPosition + 195], fill: "#768CFF" }, //Anonymous - Search
            { source: [xPosition - 100, yPosition - 5], target: [xPosition - 100, yPosition + 195], fill: "#CAB6B6" }, //Anonymous - Exit
            { source: [xPosition - 100, yPosition - 5], target: [xPosition - 25, yPosition + 395], fill: "#768CFF" }, //Anonymous - Subscribed
            { source: [xPosition + 125, yPosition - 5], target: [xPosition - 35, yPosition + 195], fill: "#74CDFF" }, //Sign up - Explore
            { source: [xPosition + 125, yPosition - 5], target: [xPosition + 55, yPosition + 195], fill: "#74CDFF" }, //Sign up - Search
            // { source: [xPosition + 125, yPosition - 5], target: [xPosition + 125, yPosition + 195], fill: "#D60F0F" }, //Sign up - Exit
            { source: [xPosition + 125, yPosition - 5], target: [xPosition + 125, yPosition + 195], fill: "#CAB6B6" }, //Sign up - Exit
            { source: [xPosition - 35, yPosition + 215], target: [xPosition - 25, yPosition + 395], fill: "#768CFF" }, //Explore - Subscribed
            { source: [xPosition - 35, yPosition + 215], target: [xPosition + 50, yPosition + 395], fill: "#768CFF" }, //Explore - WatchAds
            { source: [xPosition - 35, yPosition + 215], target: [xPosition - 100, yPosition + 395], fill: "#CAB6B6" }, //Explore - Exit
            { source: [xPosition + 55, yPosition + 215], target: [xPosition - 25, yPosition + 395], fill: "#FFB78E" }, //Search - Subscribed
            { source: [xPosition + 55, yPosition + 215], target: [xPosition + 50, yPosition + 395], fill: "#FFB78E" }, //Search - WatchAds
            { source: [xPosition + 55, yPosition + 215], target: [xPosition + 125, yPosition + 395], fill: "#CAB6B6" }, //Explore - WatchAds
            { source: [xPosition - 25, yPosition + 415], target: [xPosition - 25, yPosition + 565], fill: "#FFB78E" }, //Subscribed - Watch Premium Content
            // { source: [xPosition - 25, yPosition + 415], target: [xPosition - 65, yPosition + 565], fill: "#FFB78E" }, //Subscribed - Watch Premium Content
            { source: [xPosition - 25, yPosition + 415], target: [xPosition + 50, yPosition + 565,], fill: "#FFB78E" }, //Subscribed - Watch Free Content
            // { source: [xPosition - 25, yPosition + 415], target: [xPosition + 5, yPosition + 565,], fill: "#FFB78E" }, //Subscribed - Watch Free Content
            { source: [xPosition + 50, yPosition + 415], target: [xPosition + 50, yPosition + 565,], fill: "#768CFF" }, //Watched Ads - Watch Free Content
            { source: [xPosition + 50, yPosition + 415], target: [xPosition + 125, yPosition + 565], fill: "#CAB6B6" }, //Watched Ads - Exit Watch Ads
        ];

        // Begin making the horizontal link diagram

        var link = d3.linkHorizontal()
            .source(function (d) {
                return [d.source[1], d.source[0]];
            })
            .target(function (d) {
                return [d.target[1], d.target[0]];
            });

        const curve = d3
            .line()
            .curve(d3.curveNatural)

        const coOrdinates = [
            // Organinc - New
            // {
            //     point: [[35, 25], [110, 75], [135, 160], [200, 240], [160, 215], [120, 170], [90, 75], [35, 25]],
            //     fill: "#74CDFF",
            // },
            // Organic - Returning
            // {
            //     point: createLineCoOrdinates([35, 25], [195, 25], 8),
            //     fill: "#74CDFF"
            // },
            // Paid - Returning
            // {
            //     point: [[35, 250], [110, 200], [130, 90], [195, 30], [178, 35], [120, 80], [90, 200], [35, 250]],
            //     fill: "#768CFF",
            // },
            // Paid - New
            // {
            //     point: createLineCoOrdinates([35, 250], [195, 250], -8),
            //     fill: "#768CFF",
            // },
            // Returning - Sign Up  [215, 25][375, 250]
            // {
            //     point: [[215, 25], [290, 75], [315, 160], [380, 240], [335, 215], [300, 170], [265, 75], [215, 25]],
            //     fill: "#FFB78E",
            // },
            // New - Anonymous  [215, 250][375, 25]
            // {
            //     point: [[215, 250], [270, 200], [305, 90], [375, 30], [358, 35], [290, 80], [250, 200], [215, 250]],
            //     fill: "#768CFF",
            // },
            //Returning - Anonymous
            // {
            //     point: createLineCoOrdinates([215, 25], [375, 25], 8),
            //     fill: "#FFB78E"
            // },
            // //New - Sign Up
            // {
            //     point: createLineCoOrdinates([215, 25], [375, 25], 8),
            //     fill: "#FFB78E"
            // },
            //New - Sign Up
            // {
            //     point: createLineCoOrdinates([215, 250], [375, 250], -8),
            //     fill: "#74CDFF"
            // }

        ]

        const svg = d3
            .select(svgRef.current)
            .attr("viewBox", "0 0 1035 305")
            // .attr('preserveAspectRatio', 'xMinYMin')
            .classed("sankey-chart-for-consumer-svg", true);

        //Adding the link paths

        svg
            .selectAll("path")
            .data(linkData)
            .join("path")
            .attr("d", link)
            .attr("fill", "none")
            .attr("stroke", d => d.fill)
            .attr("stroke-width", "11px")
            .attr("opacity", "0.5")
            .classed("link", true);

        //Adding the Circle nodes
        svg
            .selectAll("circle")
            .data(nodeData)
            .join("circle")
            .attr("r", d => d.name === "Exit" ? 0 : 5.5)
            .attr("cx", d => d.y)
            .attr("cy", d => d.x)
            .attr("fill", "#3E1F76")
            .attr("opacity", "0.8")
            .classed("circle", true)
        // .on("click", () => { console.log('Clicked') })

        //Adding the text labels
        svg
            .selectAll("text")
            .data(nodeData)
            .join("text")
            .attr("font-size", "12px")
            .attr("color", "#00C48C")
            .attr("text-anchor", "middle")
            .attr("x", d => d.name === "Exit" ? d.y + 3 : d.y)
            .attr("y", d => d.name === "Exit" ? d.x + 2 : d.x + 17)
            .classed("node-title", true)
            .text(d => d.name.toUpperCase());

        svg
            .selectAll("p")
            .data(nodeData)
            .join("text")
            .attr("text-anchor", "middle")
            .attr("x", d => d.name === "Exit" ? d.y + 3 : d.y)
            .attr("y", d => d.name === "Exit" ? d.x + 22 : d.x + 34)
            .classed("node-value", true)
            .text(d => d.value)

        svg
            .selectAll("p")
            .data(nodeData)
            .join("text")
            .attr("text-anchor", "middle")
            .attr("x", d => d.name === "Exit" ? d.y + 3 : d.y)
            .attr("y", d => d.name === "Exit" ? d.x + 33 : d.x + 46)
            .classed("node-percentage", true)
            .text(d => `(${d.percentageValue}%)`);

        svg
            .selectAll("p")
            .data(nodeData)
            .join("text")
            .attr("text-anchor", "middle")
            .attr("x", d => d.name === "Exit" ? d.y + 37 : d.y + 37)
            .attr("y", d => d.name === "Exit" ? d.x + 16 : d.x + 30)
            .text(d => `${Math.abs(d.percentageChage)}%`)
            .attr("class", d => d.percentageChage >= 0 ? "node-percentage-change-pos" : "node-percentage-change-neg")

        svg
            .selectAll(".node-percentage-change-pos")
            .append("path")
            .attr("d", "M4.35355 0.646407C4.15829 0.451145 3.84171 0.451145 3.64645 0.646407L0.464467 3.82839C0.269204 4.02365 0.269204 4.34023 0.464466 4.53549C0.659729 4.73076 0.976311 4.73076 1.17157 4.53549L4 1.70707L6.82843 4.53549C7.02369 4.73076 7.34027 4.73076 7.53553 4.53549C7.7308 4.34023 7.7308 4.02365 7.53553 3.82839L4.35355 0.646407ZM4.5 7.69043L4.5 0.99996L3.5 0.99996L3.5 7.69043L4.5 7.69043Z")
            .attr("fill", "#00C48C")
            // .attr("x", d => d.name === "Exit" ? d.y + 40 : d.y + 40)
            // .attr("y", d => d.name === "Exit" ? d.x + 16 : d.x + 30)
        svg
            .selectAll('.link-to-node')
            .data(coOrdinates)
            .join('path')
            .attr('d', d => curve(d.point))
            .attr("opacity", "0.5")
            .attr('fill', d => d.fill);

    }, []);

    return (
        <div className='sankey-chart-for-consumer-container'>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default SankeyChartForConsumer;