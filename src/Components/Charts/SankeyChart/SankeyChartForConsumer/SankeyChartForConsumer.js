import { useRef, useLayoutEffect } from 'react';

import * as d3 from 'd3';

import './SankeyChartForConsumer.css';

const SankeyChartForConsumer = (props) => {

    const svgRef = useRef();

    useLayoutEffect(() => {

        //   const width = 1000, height = 300;

        var nodeData = [
            { id: "Organic", x: 25, y: 25, value: 70.38, name: "Organic", absoluteValue: 66.3, percentageValue: 46, percentageChage: -2 },
            { id: "Paid", x: 250, y: 25, value: 79.9, name: "Paid", absoluteValue: 77.9, percentageValue: 54, percentageChage: 6 },
            { id: "Returning", x: 70, y: 225, value: 122.9, name: "Returning", absoluteValue: 15, percentageValue: 25, percentageChage: 10 },
            { id: "New", x: 195, y: 225, value: 122.9, name: "New", absoluteValue: 51, percentageValue: 75, percentageChage: -3 },
            { id: "Anonymous", x: 45, y: 425, value: 86.71, name: "Anonymous", absoluteValue: 31, percentageValue: 82, percentageChage: -12 },
            { id: "Sign up", x: 220, y: 425, value: 33.21, name: "Sign Up", absoluteValue: 66.3, percentageValue: 18, percentageChage: 7 },
            { id: "Explore", x: 90, y: 625, value: 86.71, name: "Explore", absoluteValue: 66.3, percentageValue: 50, percentageChage: 5 },
            { id: "Search", x: 180, y: 625, value: 33.21, name: "Search", absoluteValue: 66.3, percentageValue: 20, percentageChage: -20 },
            { id: "Exit-signup", x: 250, y: 625, value: 5.5, name: "Exit", absoluteValue: 66.3, percentageValue: 27, percentageChage: 13 },
            { id: "Exit-anonymous", x: 25, y: 625, value: 5.5, name: "Exit", absoluteValue: 66.3, percentageValue: 3, percentageChage: -0 },
            { id: "Subscribed", x: 100, y: 825, value: 86.71, name: "Subscribed", absoluteValue: 54, percentageValue: 7, percentageChage: -2 },
            { id: "Watched Ads", x: 170, y: 825, value: 33.21, name: "Watched Ads", absoluteValue: 66.3, percentageValue: 30, percentageChage: -2 },
            { id: "Exit-Search", x: 230, y: 825, value: 33.21, name: "Exit", absoluteValue: 66.3, percentageValue: 12, percentageChage: -2 },
            { id: "Exit-Explore", x: 40, y: 825, value: 33.21, name: "Exit", absoluteValue: 66.3, percentageValue: 51, percentageChage: -2 },
            { id: "Watch Premium Content", x: 110, y: 925, value: 86.71, name: "Watch Premium Content", absoluteValue: 66.3, percentageValue: 3, percentageChage: -2 },
            { id: "Watch Free Content", x: 160, y: 925, value: 86.71, name: "Watch Free Content", absoluteValue: 66.3, percentageValue: 54, percentageChage: -2 },
            { id: "Exit - Watch Ads", x: 225, y: 925, value: 86.71, name: "Exit", absoluteValue: 66.3, percentageValue: 43, percentageChage: -2 },
        ];

        var linkData = [
            { source: [25, 35], target: [195, 215], fill: "#74CDFF" }, //Organic - New
            { source: [25, 35], target: [70, 215], fill: "#74CDFF" }, //Orgainc - Returning
            { source: [250, 35], target: [70, 215], fill: "#768CFF" }, //Paid - Returning
            { source: [250, 35], target: [195, 215], fill: "#768CFF" }, //Paid - New
            { source: [70, 235], target: [45, 415], fill: "#FFB78E" },  //Returning - Anonymous
            { source: [70, 235], target: [220, 415], fill: "#FFB78E" }, //Returning - Sign up
            { source: [195, 235], target: [45, 415], fill: "#74CDFF" },  //New - Anonymous
            { source: [195, 235], target: [220, 415], fill: "#74CDFF" }, //New - Sign up
            { source: [45, 435], target: [90, 615], fill: "#768CFF" }, //Anonymous - Explore
            { source: [45, 435], target: [180, 615], fill: "#768CFF" }, //Anonymous - Search
            { source: [45, 435], target: [25, 615], fill: "#D60F0F" }, //Anonymous - Exit
            { source: [45, 435], target: [100, 815], fill: "#768CFF" }, //Anonymous - Subscribed
            { source: [220, 435], target: [90, 615], fill: "#74CDFF" }, //Sign up - Explore
            { source: [220, 435], target: [180, 615], fill: "#74CDFF" }, //Sign up - Search
            { source: [220, 435], target: [250, 615], fill: "#D60F0F" }, //Sign up - Exit
            { source: [90, 635], target: [100, 815], fill: "#768CFF" }, //Explore - Subscribed
            { source: [90, 635], target: [170, 815], fill: "#768CFF" }, //Explore - WatchAds
            { source: [90, 635], target: [40, 815], fill: "#D60F0F" }, //Explore - WatchAds
            { source: [180, 635], target: [100, 815], fill: "#FFB78E" }, //Search - Subscribed
            { source: [180, 635], target: [170, 815], fill: "#FFB78E" }, //Search - WatchAds
            { source: [180, 635], target: [230, 815], fill: "#D60F0F" }, //Explore - WatchAds
            { source: [100, 835], target: [110, 915], fill: "#FFB78E" }, //Subscribed - Watch Premium Content
            { source: [100, 835], target: [160, 915], fill: "#FFB78E" }, //Subscribed - Watch Free Content
            { source: [170, 835], target: [160, 915], fill: "#768CFF" }, //Explore - WatchAds
            { source: [170, 835], target: [225, 915], fill: "#768CFF" }, //Explore - Exit Watch Ads
        ];

        // Begin making the horizontal link diagram

        var link = d3.linkHorizontal()
            .source(function (d) {
                return [d.source[1], d.source[0]];
            })
            .target(function (d) {
                return [d.target[1], d.target[0]];
            });

        let line = d3.line().curve(d3.curveBasis)


        const svg = d3
            .select(svgRef.current)
            .attr("viewBox", "0 0 1000 300")
            // .attr('preserveAspectRatio', 'xMinYMin')
            .classed("sankey-chart-for-consumer-svg", true);

        // svg.append("path")
        //     .classed("custom-link", true)
        //     .attr("d", line([[25, 35], [195, 215]]))

        //Adding the link paths
        svg
            .selectAll("path")
            .data(linkData)
            .join("path")
            .attr("d", link)
            .attr("fill", "none")
            .attr("stroke", d => d.fill)
            .attr("stroke-width", "6px")
            .attr("opacity", "0.5")
            .classed("link", true);

        //Adding the Circle nodes
        svg
            .selectAll("circle")
            .data(nodeData)
            .join("circle")
            .attr("r", d => d.name === "Exit" ? 0 : 5)
            .attr("cx", d => d.y)
            .attr("cy", d => d.x)
            .attr("fill", "#3E1F76")
            .attr("opacity", "0.8")
            .classed("circle", true);

        //Adding the text labels
        svg
            .selectAll("text")
            .data(nodeData)
            .join("text")
            .attr("font-size", "12px")
            .attr("text-anchor", "middle")
            // .attr("x", d => d.y)
            // .attr("y", d => d.x + 15)
            .attr("x", d => d.name === "Exit" ? d.y + 3 : d.y)
            .attr("y", d => d.name === "Exit" ? d.x + 2 : d.x + 15)
            .classed("node-title", true)
            .text(d => d.name.toUpperCase());

        svg
            .selectAll("p")
            .data(nodeData)
            .join("text")
            .attr("text-anchor", "middle")
            // .attr("x", d => d.y)
            // .attr("y", d => d.x + 28)
            .attr("x", d => d.name === "Exit" ? d.y + 3 : d.y)
            .attr("y", d => d.name === "Exit" ? d.x + 15 : d.x + 28)
            .classed("node-value", true)
            .text(d => d.value);

        svg
            .selectAll("p")
            .data(nodeData)
            .join("text")
            .attr("text-anchor", "middle")
            // .attr("x", d => d.y)
            // .attr("y", d => d.x + 38)
            .attr("x", d => d.name === "Exit" ? d.y + 3 : d.y)
            .attr("y", d => d.name === "Exit" ? d.x + 25 : d.x + 38)
            .classed("node-percentage", true)
            .text(d => `(${d.percentageValue}%)`);

        svg
            .selectAll("p")
            .data(nodeData)
            .join("text")
            .attr("text-anchor", "middle")
            // .attr("x", d => d.y + 24)
            // .attr("y", d => d.x + 26)
            .attr("x", d => d.name === "Exit" ? d.y + 25 : d.y + 24)
            .attr("y", d => d.name === "Exit" ? d.x + 12 : d.x + 26)
            // .attr("color", "red")
            .attr("class", d => d.percentageChage >= 0 ? "node-percentage-change-pos" : "node-percentage-change-neg")
            // .classed("node-percentage-change", true)
            .text(d => `${Math.abs(d.percentageChage)}%`);

        // svg
        // .append("p")
        // // .selectAll("p")
        // .data(nodeData)
        // .join("text")
        // .attr("x", d => d.y)
        // .attr("y", d => d.x + 30)
        // // .classed("node-title", true)
        // .text(d => d.name.toUpperCase());

        // svg
        //     .append("text")
        //     // .data(nodeData)
        //     .attr("x", 25)
        //     .attr("y", 50)
        //     .text("abc")



    }, []);

    return (
        <div className='sankey-chart-for-consumer-container'>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default SankeyChartForConsumer;