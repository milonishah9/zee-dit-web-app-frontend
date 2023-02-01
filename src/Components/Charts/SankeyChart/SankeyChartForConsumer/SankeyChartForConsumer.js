import { useRef, useLayoutEffect } from 'react';

import * as d3 from 'd3';

import './SankeyChartForConsumer.css';

const SankeyChartForConsumer = (props) => {

    const svgRef = useRef();

    useLayoutEffect(() => {

        const xPosition = 125, yPosition = 400;

        // const point = [[35,25], [125,25], [205,25]]

        var nodeData = [
            { id: "Organic", x: xPosition - 100, y: yPosition - 375, value: 70.38, name: "Organic", absoluteValue: 66.3, percentageValue: 46, percentageChage: -2 },
            { id: "Paid", x: xPosition + 125, y: yPosition - 375, value: 79.9, name: "Paid", absoluteValue: 77.9, percentageValue: 54, percentageChage: 6 },
            { id: "Returning", x: xPosition - 100, y: yPosition - 195, value: 122.9, name: "Returning", absoluteValue: 15, percentageValue: 25, percentageChage: 10 },
            { id: "New", x: xPosition + 125, y: yPosition - 195, value: 122.9, name: "New", absoluteValue: 51, percentageValue: 75, percentageChage: -3 },
            { id: "Anonymous", x: xPosition - 100, y: yPosition - 15, value: 86.71, name: "Anonymous", absoluteValue: 31, percentageValue: 82, percentageChage: -12 },
            { id: "Sign up", x: xPosition + 125, y: yPosition - 15, value: 33.21, name: "Sign Up", absoluteValue: 66.3, percentageValue: 18, percentageChage: 7 },
            { id: "Explore", x: xPosition - 35, y: yPosition + 205, value: 86.71, name: "Explore", absoluteValue: 66.3, percentageValue: 50, percentageChage: 5 },
            { id: "Search", x: xPosition + 55, y: yPosition + 205, value: 33.21, name: "Search", absoluteValue: 66.3, percentageValue: 20, percentageChage: -20 },
            { id: "Exit-signup", x: xPosition + 125, y: yPosition + 205, value: 5.5, name: "Exit", absoluteValue: 66.3, percentageValue: 27, percentageChage: 13 },
            { id: "Exit-anonymous", x: xPosition - 100, y: yPosition + 205, value: 5.5, name: "Exit", absoluteValue: 66.3, percentageValue: 3, percentageChage: -0 },
            { id: "Subscribed", x: xPosition - 25, y: yPosition + 405, value: 86.71, name: "Subscribed", absoluteValue: 54, percentageValue: 7, percentageChage: -2 },
            { id: "Watched Ads", x: xPosition + 50, y: yPosition + 405, value: 33.21, name: "Watched Ads", absoluteValue: 66.3, percentageValue: 30, percentageChage: -2 },
            { id: "Exit-Search", x: xPosition + 125, y: yPosition + 405, value: 33.21, name: "Exit", absoluteValue: 66.3, percentageValue: 12, percentageChage: -2 },
            { id: "Exit-Explore", x: xPosition - 100, y: yPosition + 405, value: 33.21, name: "Exit", absoluteValue: 66.3, percentageValue: 51, percentageChage: -2 },
            { id: "Watch Premium Content", x: xPosition - 15, y: yPosition + 575, value: 86.71, name: "Watch Premium Content", absoluteValue: 66.3, percentageValue: 3, percentageChage: -2 },
            { id: "Watch Free Content", x: xPosition + 35, y: yPosition + 575, value: 86.71, name: "Watch Free Content", absoluteValue: 66.3, percentageValue: 54, percentageChage: -2 },
            { id: "Exit - Watch Ads", x: xPosition + 100, y: yPosition + 575, value: 86.71, name: "Exit", absoluteValue: 66.3, percentageValue: 43, percentageChage: -2 },
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
            { source: [xPosition - 25, yPosition + 415], target: [xPosition - 15, yPosition + 565], fill: "#FFB78E" }, //Subscribed - Watch Premium Content
            { source: [xPosition - 25, yPosition + 415], target: [xPosition + 35, yPosition + 565,], fill: "#FFB78E" }, //Subscribed - Watch Free Content
            { source: [xPosition + 50, yPosition + 415], target: [xPosition + 35, yPosition + 565,], fill: "#768CFF" }, //Explore - WatchAds
            { source: [xPosition + 50, yPosition + 415], target: [xPosition + 100, yPosition + 565], fill: "#CAB6B6" }, //Explore - Exit Watch Ads
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

        const points = [[35, 250], [110, 200], [130, 90], [190, 30], [178, 35], [120, 80], [90, 200], [35, 250]]

        const svg = d3
            .select(svgRef.current)
            .attr("viewBox", "0 0 1030 300")
            .attr('preserveAspectRatio', 'xMinYMin')
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
            .on("click", () => { console.log('Clicked') })

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
            .attr("y", d => d.name === "Exit" ? d.x + 18 : d.x + 30)
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
            .attr("y", d => d.name === "Exit" ? d.x + 28 : d.x + 40)
            .classed("node-percentage", true)
            .text(d => `(${d.percentageValue}%)`);

        svg
            .selectAll("p")
            .data(nodeData)
            .join("text")
            .attr("text-anchor", "middle")
            // .attr("x", d => d.y + 24)
            // .attr("y", d => d.x + 26)
            .attr("x", d => d.name === "Exit" ? d.y + 28 : d.y + 28)
            .attr("y", d => d.name === "Exit" ? d.x + 12 : d.x + 26)
            .attr("class", d => d.percentageChage >= 0 ? "node-percentage-change-pos" : "node-percentage-change-neg")
            .text(d => `${Math.abs(d.percentageChage)}%`);

        svg
            .append('path')
            .attr('d', curve(points))
            // .attr('stroke', 'black')
            .attr("opacity", "0.5")
            // with multiple points defined, if you leave out fill:none,
            // the overlapping space defined by the points is filled with
            // the default value of 'black'
            .attr('fill', '#768CFF');

        svg
            .append("p")
            // .selectAll("p")
            .data(nodeData)
            .join("text")
            .attr("x", d => d.y)
            .attr("y", d => d.x + 30)
            // .classed("node-title", true)
            .text(d => d.name.toUpperCase());

    }, []);

    return (
        <div className='sankey-chart-for-consumer-container'>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default SankeyChartForConsumer;