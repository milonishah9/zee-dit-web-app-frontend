import { useLayoutEffect, useRef } from 'react';

import * as d3 from 'd3v4';

import './BarChart.css';

const BarChart = (props) => {

    const {
        data,
        width = 750, height, translateX, translateY, xAxisConfigs, yAxisConfigs, barFill } = props;

    // console.log(data, 'data');

    const svgRef = useRef();

    // const data = [
    //     {
    //         key: "United States",
    //         Value: 12394
    //     },
    //     {
    //         key: "Russia",
    //         Value: 6148
    //     },
    //     {
    //         key: "Germany (FRG)",
    //         Value: 10653
    //     },
    //     {
    //         key: "France",
    //         Value: 9162
    //     },
    //     {
    //         key: "United Kingdom",
    //         Value: 10214
    //     },
    //     {
    //         key: "China",
    //         Value: 11131
    //     },
    // ]

    useLayoutEffect(() => {

        var margin = { top: 30, right: 30, bottom: 70, left: 60 },
            width = 550 - margin.left - margin.right,
            height = 180 - margin.top - margin.bottom;
        // var margin = { top: 30, right: 30, bottom: 70, left: 60 },
        //     width = 840 - margin.left - margin.right,
        //     height = 400 - margin.top - margin.bottom;

        const svg = d3
            .select(svgRef.current)
            .classed("barchart-svg-container", true)
            .attr("viewBox", "0 0 470 90")
            .attr('preserveAspectRatio', 'xMinYMin')
            .append("g")
        // .attr("transform",
        //     "translate(" + 0 + "," + 155 + ")");

        // Add Y axis
        var x = d3.scaleBand()
            .range([0, width])
            .domain(data.map(function (d) { return d.key }))
            .padding(0.35);

        let xAixs = d3.axisBottom(x)
            .tickSize(0)
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(xAixs)

        // .selectAll("text")
        // .attr("transform", "translate(-10,0)rotate(-45)")
        // .style("text-anchor", "end");

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, 100])
            .range([height, 0]);

        let yAixs = d3.axisLeft(y)
            .tickSize(-width)
            .ticks(3)
            .tickValues([0, 50, 100])

        svg.append("g")
            .classed('y-axis', true)
            .call(yAixs)

        svg.selectAll('.tick')
            .select('line')
            .attr("stroke", "#D8D8D8")
            // .attr('x1','-20')
            .attr("stroke-width", "1")
            .attr("opacity", ".6")
            .attr("stroke-dasharray", "0.8");

        svg.selectAll('.tick')
            .select('text')
            .attr("fill", "#D8D8D8")
            .attr("opacity", "1")
        // .attr("stroke-width", "5")
        // .attr("font-size","1rem")
        // .attr("stroke-width", "1")
        // .attr("opacity", ".6")
        // .attr("stroke-dasharray", "0.8");

        // Bars

        // if (showBarBackground === true) {
        //     svg.selectAll("mybar-fill")
        //         .data(data)
        //         .enter()
        //         .append("rect")
        //         .attr("x", function (d) { return x(d.key); })
        //         .attr("y", function (d) { return y(13000) })
        //         // .attr("y0", function (d) { return y(13000) - y(d.Value); })
        //         .attr("width", x.bandwidth())
        //         .attr("height", y(height))
        //         .attr("fill", '#E5E5E5')
        //         .attr("stroke", "none")
        //         // .style('z-index', '-100')
        //         .attr('opacity', '0.5')
        // } else { }
        // .attr("transform", "translate(0," + -100 + ")")

        svg.selectAll("mybar")
            .data(data)
            .enter()
            .append("rect")
            .classed("mybar", true)
            .attr("x", function (d) { return x(d.key); })
            .attr("y", function (d) {
                // console.log(y(d.value))
                // console.log(d.value)
                return y(d.value);
            })
            .attr("width", x.bandwidth())
            .attr("height", function (d) {
                return height - y(d.value);
                // return y(d.value);

            })
            // .attr("fill", '#00C48C')
            .attr("fill", function (d) {
                if (d.dateOfRelease) return "#402177"
                else return "#C996EB"
                // return "#C996EB"
            })
            .attr("stroke", "none")
            // .style("padding-right", "3p")
            // .style('z-index', '100')
            ;

        const tooltip = d3
            .select(".barchart-container")
            .append("div")
            .style("visibility", "hidden")
            .classed("barchart-tooltip", true);

        tooltip.selectAll("*").remove();

        const onMouseOver = (event, d) => {
            tooltip
                .style("visibility", "visible");
        }

        const onMouseMove = (event, d) => {
            tooltip.html(`<p>Play Percentage: ${Math.round(((d3.event.target.__data__.Value * 100) / 13000))}% </p>`)
                .style("left", d3.event.pageX + 20 + "px")
                .style("top", d3.event.pageY + 15 + "px");
        }

        const onMouseLeave = (event, d) => {
            tooltip.style("visibility", "hidden");
        }

        svg
            .selectAll(".mybar")
            .on("mousemove", onMouseMove)
            .on("mouseleave", onMouseLeave)
            .on("mouseover", onMouseOver);

    }, [data]);

    return (
        <div class='barchart-container'>
            <svg ref={svgRef}></svg>
        </div>
    );
}

export default BarChart;