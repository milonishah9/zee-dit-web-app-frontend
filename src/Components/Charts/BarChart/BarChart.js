import { useLayoutEffect, useRef } from 'react';

import * as d3 from 'd3v4';

import './BarChart.css';

const BarChart = (props) => {

    const svgRef = useRef();

    const data = [
        {
            Country: "United States",
            Value: 12394
        },
        {
            Country: "Russia",
            Value: 6148
        },
        {
            Country: "Germany (FRG)",
            Value: 10653
        },
        {
            Country: "France",
            Value: 9162
        },
        {
            Country: "United Kingdom",
            Value: 10214
        },
        {
            Country: "China",
            Value: 11131
        },
    ]

    useLayoutEffect(() => {

        var margin = { top: 30, right: 30, bottom: 70, left: 60 },
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        const svg = d3
            .select(svgRef.current)
            .classed("barchart-svg-container", true)
            .attr("viewBox", "0 0 460 400")
            .append("g")
            .attr("transform",
                "translate(" + 0 + "," + 105 + ")");

        // Add Y axis
        var x = d3.scaleBand()
            .range([0, width])
            .domain(data.map(function (d) { return d.Country; }))
            .padding(0.35);

        let xAixs = d3.axisBottom(x)
        // .tickSize(-height)
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
        // .call(xAixs)

        // .selectAll("text")
        // .attr("transform", "translate(-10,0)rotate(-45)")
        // .style("text-anchor", "end");

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, 13000])
            .range([height, 0]);
        // svg.append("g")
        //     .call(d3.axisLeft(y));

        // Bars
        svg.selectAll("mybar")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function (d) { return x(d.Country); })
            .attr("y", function (d) { return y(d.Value); })
            .attr("width", x.bandwidth())
            .attr("height", function (d) { return height - y(d.Value); })
            .attr("fill", '#00C48C')
            .attr("stroke", "none");

    }, [data]);

    return <svg ref={svgRef}></svg>
}

export default BarChart