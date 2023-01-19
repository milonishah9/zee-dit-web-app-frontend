import { useCallback, useEffect, useRef, useState } from "react";
import {
    select,
    scaleBand,
    axisBottom,
    axisLeft,
    stack,
    max,
    scaleLinear,
    stackOrderAscending,
    line,
    scaleOrdinal,
    axisTop,
    pointer,
} from "d3";

import * as d3v4 from 'd3v4';

import useResizeObserver from "./useResizeObserver";

import {
    data, keys, colors
} from "./data";
import "./StackedBarChart.css";
import { useMediaQuery } from "@material-ui/core";

const StackedBarChart = (props) => {
    const svgRef = useRef();
    const yAxisRef = useRef();
    const wrapperRef = useRef();

    const width1366 = useMediaQuery('(max-width: 1366px)');
    const width1230 = useMediaQuery('(max-width: 1230px)');
    const width1024 = useMediaQuery('(max-width: 1024px)');
    console.log(width1366);

    var width = 300;
    var height = 100;

    if (width1366) {
        width = 250;
    }
    if(width1230){
        width = 200;
    }
    if(width1024){
        width = 300;
    }

    useEffect(() => {

        // drawStackedBarChart();

        // window.addEventListener('resize', () => {
        //     // console.log(window.innerWidth, window.innerHeight)
        //     drawStackedBarChart();
        // })

        const {
            handleActiveClassName,
            marginForRightChart = 0
        } = props;

        const svg = select(svgRef.current);

        // const everything = svg.selectAll("*");
        // everything.remove();

        const averagelineSvg = svg.select('.line');
        averagelineSvg.remove();
        // let width = 330, height=90;
        // let { width, height } = wrapperRef.current.getBoundingClientRect();

        // if (window.innerWidth > 1200 && window.innerWidth < 1366) {
        //     console.log('inside if loop');
        //     //    cha width = 250;
        //     //     height = 90;
        //     setChartDimensions({
        //         width: 250,
        //         height: 90,
        //     })
        // } else {
        //     // width = wrapperRef.current.getBoundingClientRect().width;
        //     // height = wrapperRef.current.getBoundingClientRect().height;
        //     // width = 330;
        // }


        // const width = 300, height = 90;

        let chartNumberDimensions;
        let tooltipDimensions = {
            pageX: 0, pageY: 0
        }

        console.log('window.innerWidth', window.innerWidth);

        if (window.innerWidth >= 1366) {

            if (marginForRightChart)
                chartNumberDimensions = {
                    sevenDays: width - 100 + marginForRightChart,
                    divider: width - 90 + marginForRightChart,
                    max: width - 65 + marginForRightChart,
                }
            else
                chartNumberDimensions = {
                    sevenDays: width - 35,
                    divider: width - 27,
                    max: width
                }

            // chartNumberDimensions = {
            //     sevenDays: width - 10 + marginForRightChart,
            //     divider: width - 27 + marginForRightChart,
            //     max: width + marginForRightChart,
            // }
        }
        else if (window.innerWidth >= 1024 && window.innerWidth < 1366) {
            if (marginForRightChart)
                chartNumberDimensions = {
                    sevenDays: width - 100 + marginForRightChart,
                    divider: width - 90 + marginForRightChart,
                    max: width - 65 + marginForRightChart,
                }
            else
                chartNumberDimensions = {
                    sevenDays: width - 35 + marginForRightChart,
                    divider: width - 27 + marginForRightChart,
                    max: width + marginForRightChart,
                }

            // chartNumberDimensions = {
            //     sevenDays: width - 35 + marginForRightChart,
            //     divider: width - 27 + marginForRightChart,
            //     max: width + marginForRightChart,
            // }
        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            if (marginForRightChart)
                chartNumberDimensions = {
                    sevenDays: width + 10 + marginForRightChart,
                    divider: width + 20 + marginForRightChart,
                    max: width + 45 + marginForRightChart
                }
            else
                chartNumberDimensions = {
                    sevenDays: width + 90,
                    divider: width + 98,
                    max: width + 125
                }
        } else if (window.innerWidth > 470 && window.innerWidth < 768) {
            if (marginForRightChart)
                chartNumberDimensions = {
                    sevenDays: width + 110 + marginForRightChart,
                    divider: width + 125 + marginForRightChart,
                    max: width + 150 + marginForRightChart
                }
            else {
                chartNumberDimensions = {
                    sevenDays: width + 90,
                    divider: width + 98,
                    max: width + 125
                }
            }
        } else if (window.innerWidth <= 470) {
            if (marginForRightChart) {
                chartNumberDimensions = {
                    sevenDays: width - 100 + marginForRightChart,
                    divider: width - 95 + marginForRightChart,
                    max: width - 70 + marginForRightChart
                }
                tooltipDimensions = {
                    pageX: 520,
                    pageY: -320,
                }
            }
            else {
                chartNumberDimensions = {
                    sevenDays: width - 40,
                    divider: width - 35,
                    max: width - 10
                }

                tooltipDimensions = {
                    pageX: 600,
                    pageY: -320,
                }
            }
        }

        // const everything = svg.selectAll("*");
        // everything.remove();

        const yAxisSvg = select(yAxisRef.current);

        const stackGenerator = stack().keys(keys).order(stackOrderAscending);
        const layers = stackGenerator(data);

        const extent = [
            0,
            max(layers, layer => max(layer, sequence => sequence[1] + 10))
        ];

        const xScale = scaleBand()
            .domain(data.map(d => d.key))
            .range([0, width])
            .padding(0.27);

        const yScale = scaleLinear()
            .domain(extent)
            .range([height + 50, 0]);

        svg
            .attr("width", width)
            .attr("height", height)
            .selectAll(".layer")
            .data(layers)
            .join("g")
            .attr("class", "layer")
            .attr("fill", (layer) => colors[layer.key])
            .selectAll("rect")
            .data((layer) => layer)
            .join("rect")
            .attr("class", "data-bar")
            .attr("x", (sequence) => xScale(sequence.data.key))
            .attr("width", xScale.bandwidth())
            .attr("y", (sequence) => yScale(sequence[1]))
            .attr("height", (sequence) => {
                if (!isNaN(sequence[0]) && !isNaN(sequence[1])) {
                    return yScale(sequence[0]) - yScale(sequence[1]);
                } else {
                    return 0;
                }
            })
            // .style("stroke", "none")
            .style("opacity", 1);

        const xAxis = axisBottom(xScale)
            .tickSize(0);

        const xAxisTop = axisTop(xScale)
            .tickSize(0)
            .ticks(0)
            .tickValues([]);

        svg
            .select(".x-axis")
            .attr("transform", `translate(0, ${height + 50})`)
            .call(xAxis)
            .selectAll("text")
            .attr("class", "stacekd-bar-chart-ticks");

        svg
            .select(".x-axis-top")
            .call(xAxisTop)
            .selectAll("text")
            .attr("class", "stacekd-bar-chart-ticks");

        svg
            .selectAll(".domain")
            .attr("stroke", "#D8D8D8")
            .attr("stroke-width", "1")
            .attr("opacity", ".6")
            .attr("stroke-dasharray", "2");

        const yAxis = axisLeft(yScale)
            .tickSize(0)
            .ticks(2)
            .tickValues([0, 120, 80]);

        yAxisSvg
            .select(".y-axis")
            .attr("height", height)
            .call(yAxis)
            .selectAll("text")
            .attr("class", "stacekd-bar-chart-ticks");

        yAxisSvg
            .select(".domain")
            .attr("stroke", "#D8D8D8")
            .attr("stroke-width", "1")
            .attr("opacity", ".6")
            .attr("stroke-dasharray", "2");

        let x2 = scaleOrdinal()
            .domain(data.map(d => d.key))
            .range([0, width]);

        const averageline = line()
            .x(function (d, i) {
                return x2(d.key) + i;
            })
            .y(function (d, i) { return yScale(80); });

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr('fill', ' red')
            .attr("stroke-width", "1")
            .attr("d", averageline);
        svg.append("text")
            .attr("class", "chart-label")
            .attr("text-anchor", "start")
            .attr('fill', '#808080')
            .attr("y", -5)
            // .attr
            // .attr("y", 0)
            // .attr("dy", ".75em")
            .text(marginForRightChart ? "Watch Time in Min." : "Viewers in Mn.");

        svg.selectAll(".x-label-7days").remove();
        svg.selectAll(".x-label-max").remove();

        svg.append("text")
            .attr("class", "x-label-7days")
            .attr("text-anchor", "end")
            .attr("x", chartNumberDimensions.sevenDays)
            .attr("y", -5)
            .text("Last 7 Days");

        svg.append("text")
            .attr("class", "x-label-7days")
            .attr("text-anchor", "end")
            // .attr("x", width - 27 + marginForRightChart)
            .attr("y", -5)
            .attr("x", chartNumberDimensions.divider)
            .text("|");

        svg.append("text")
            .attr("class", "x-label-max")
            .attr("text-anchor", "end")
            // .attr("x", width + marginForRightChart)
            .attr("y", -5)
            .attr("x", chartNumberDimensions.max)
            .text("Max")
            .on("click", () => {
                handleActiveClassName(true);
            });

        var Tooltip = select(".stacked-barchart-sub-div")
            .append("div")
            .style("visibility", 'hidden')
            .attr("class", marginForRightChart ? "tooltip-stacked-bar-chart-right" : "tooltip-stacked-bar-chart");

        Tooltip.selectAll("*").remove();

        var mouseover = function (event, d) {

            Tooltip
                // .transition()
                // .duration(200)
                .style('visibility', 'visible')
        }

        const tootTipHtml = (event) => `<div><p>Date: ${event.target.__data__.data.key}</p><p>Match 1: ${event.target.__data__.data.matchOne}</p><p>Match 2: ${event.target.__data__.data.matchTwo}</p></div>`;

        var mousemove = function (event, d) {

            // console.log('event', event);

            Tooltip
                .html(tootTipHtml(event))
                // .style("top", (pointer(event)[1]) + "px")
                // .style("left", (pointer(event)[0] - 50) + "px");
                .style("left", event.pageX - 600 + tooltipDimensions.pageX + "px")
                .style("top", event.pageY - 200 + tooltipDimensions.pageY + "px");
        }
        var mouseleave = function (event, d) {
            Tooltip
                .style('visibility', 'hidden');

            // select(this.node())
            //     .transition()
            //     .duration(200)
            //     .style("opacity", 0.7)
            //     .style("transform", "scale3d(1,1,1)");
        }

        svg.selectAll(".layer")
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
            .on("mouseover", mouseover)

    }, [width]);

    return (

        <div>
            <div className="stacked-barchart-sub-div">
                <div ref={wrapperRef} className="svg-wrap w-100">
                    <div>
                        <svg ref={yAxisRef} className="y-axis-svg" width="10">
                            <g className="y-axis" />
                        </svg>
                    </div>

                    <div className="x-axis-scroll">
                        <svg className="energy-svg" ref={svgRef}>
                            <g className="x-axis" />
                            <g className="x-axis-top" />
                            {/* <g className="tooltip-area-stcked-barchart">
                                <text className="tooltip-area__text-stcked-barchart"></text>
                            </g> */}
                        </svg>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default StackedBarChart;