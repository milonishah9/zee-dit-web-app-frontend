import { useEffect, useRef } from "react";
import './CatalogueEnrichmentStackBarChart.css'
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

const CatalogueEnrichmentStackBarChart = (props) => {
    const {height, width} = props;
    const svgRef = useRef();
    const yAxisRef = useRef();
    const wrapperRef = useRef();

    const data = [
        {
            key: "Jan1'23",
            matchTwo: 70,
        },
        {
            key: "2",
            matchTwo: 60,
        },
        {
            key: "3",
            matchTwo: 50,
        },
        {
            key: "4",
            matchTwo: 55,
        },
        {
            key: "5",
            matchTwo: 40,
        },
        {
            key: "6",
            matchTwo: 50,
        },
        {
            key: "7",
            matchTwo: 55,
        },
        {
            key: "8",
            matchTwo: 70,
        },
        {
            key: "9",
            matchTwo: 60,
        },
        {
            key: "10",
            matchTwo: 50,
        },
        {
            key: "11",
            matchTwo: 55,
        },
        {
            key: "12",
            matchTwo: 40,
        },
        {
            key: "13",
            matchTwo: 50,
        },
        {
            key: "14",
            matchTwo: 55,
        },
        {
            key: "15",
            matchTwo: 70,
        },
        {
            key: "16",
            matchTwo: 60,
        },
        {
            key: "17",
            matchTwo: 50,
        },
        {
            key: "18",
            matchTwo: 55,
        },
        {
            key: "19",
            matchTwo: 40,
        },
        {
            key: "20",
            matchTwo: 50,
        },
        {
            key: "21",
            matchTwo: 55,
        },
        {
            key: "22",
            matchTwo: 70,
        },
        {
            key: "23",
            matchTwo: 60,
        },
        {
            key: "24",
            matchTwo: 50,
        },
        {
            key: "25",
            matchTwo: 55,
        },
        {
            key: "26",
            matchTwo: 40,
        },
        {
            key: "27",
            matchTwo: 50,
        },
        {
            key: "28",
            matchTwo: 55,
        },
        {
            key: "29",
            matchTwo: 70,
        },
        {
            key: "30",
            matchTwo: 60,
        },
        {
            key: "31",
            matchTwo: 50,
        },
        {
            key: "32",
            matchTwo: 55,
        },
        {
            key: "33",
            matchTwo: 40,
        },
        {
            key: "34",
            matchTwo: 50,
        },
        {
            key: "35",
            matchTwo: 55,
        },
        {
            key: "36",
            matchTwo: 40,
        },
        {
            key: "37",
            matchTwo: 50,
        },
        {
            key: "38",
            matchTwo: 55,
        },
        {
            key: "39",
            matchTwo: 70,
        },
        {
            key: "40",
            matchTwo: 60,
        },
        {
            key: "41",
            matchTwo: 50,
        },
        {
            key: "42",
            matchTwo: 55,
        },
        {
            key: "43",
            matchTwo: 40,
        },
        {
            key: "44",
            matchTwo: 50,
        },
        {
            key: "45",
            matchTwo: 70,
        },
        {
            key: "46",
            matchTwo: 60,
        },
        {
            key: "47",
            matchTwo: 50,
        },
        {
            key: "48",
            matchTwo: 55,
        },
        {
            key: "49",
            matchTwo: 40,
        },
        {
            key: "50",
            matchTwo: 50,
        },
        {
            key: "51",
            matchTwo: 55,
        },
        {
            key: "52",
            matchTwo: 70,
        },
        {
            key: "53",
            matchTwo: 60,
        },
        {
            key: "54",
            matchTwo: 50,
        },
        {
            key: "55",
            matchTwo: 55,
        },
        {
            key: "56",
            matchTwo: 40,
        },
        {
            key: "57",
            matchTwo: 50,
        },
        {
            key: "58",
            matchTwo: 55,
        },
        {
            key: "59",
            matchTwo: 70,
        },
        {
            key: "60",
            matchTwo: 60,
        },
        {
            key: "61",
            matchTwo: 50,
        },
        {
            key: "62",
            matchTwo: 55,
        },
        {
            key: "63",
            matchTwo: 40,
        },
        {
            key: "64",
            matchTwo: 50,
        },
        {
            key: "65",
            matchTwo: 55,
        },
        {
            key: "66",
            matchTwo: 40,
        },
        {
            key: "67",
            matchTwo: 50,
        },
        {
            key: "68",
            matchTwo: 55,
        },
        {
            key: "69",
            matchTwo: 70,
        },
        {
            key: "70",
            matchTwo: 60,
        },
        {
            key: "71",
            matchTwo: 50,
        },
        {
            key: "72",
            matchTwo: 55,
        },
        {
            key: "73",
            matchTwo: 40,
        },
        {
            key: "74",
            matchTwo: 50,
        },
        {
            key: "75",
            matchTwo: 55,
        },
        {
            key: "76",
            matchTwo: 40,
        },
        {
            key: "77",
            matchTwo: 50,
        },
        {
            key: "78",
            matchTwo: 55,
        },
        {
            key: "79",
            matchTwo: 70,
        },
        {
            key: "80",
            matchTwo: 60,
        },
        {
            key: "81",
            matchTwo: 50,
        },
        {
            key: "82",
            matchTwo: 55,
        },
        {
            key: "83",
            matchTwo: 40,
        },
        {
            key: "84",
            matchTwo: 50,
        },
        {
            key: "85",
            matchTwo: 55,
        },
        {
            key: "86",
            matchTwo: 40,
        },
        {
            key: "87",
            matchTwo: 50,
        },
        {
            key: "88",
            matchTwo: 55,
        },
        {
            key: "89",
            matchTwo: 70,
        },
        {
            key: "90",
            matchTwo: 60,
        },
    ]
    
    const keys = [
        "matchTwo",
    ]
    
    const colors = {
        matchTwo: "#C996EB",
    }
    
    // const dimensions = useResizeObserver(wrapperRef);

    useEffect(() => {

        const svg = select(svgRef.current);
        // const yAxisSvg = select(yAxisRef.current);

        const everything = svg.selectAll("*");
        everything.remove();
        

        // const { width, height } = wrapperRef.current.getBoundingClientRect();

        const stackGenerator = stack().keys(keys).order(stackOrderAscending);
        const layers = stackGenerator(data);

        const extent = [
            0,
            max(layers, layer => max(layer, sequence => sequence[1] + 10))
        ];

        const xScale = scaleBand()
            .domain(data.map(d => d.key))
            .range([0, width - 90])
            .padding(0.3);

        const yScale = scaleLinear()
            .domain(extent)
            .range([height - 70, 0]);

        svg
            .attr("width", 190)
            .attr("height", 10) 
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
            });

        const xAxis = axisBottom(xScale)
            .tickSize(0);

        const xAxisTop = axisTop(xScale)
            .tickSize(0)
            .ticks(0)
            .tickValues([]);

        svg
            .select(".x-axis")
            .attr("transform", `translate(0, ${height})`)
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

        // const yAxis = axisLeft(yScale)
        //     .tickSize(0)
        //     .ticks(11)
        //     .tickValues([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

        // yAxisSvg
        //     .select(".y-axis")
        //     .attr("height", height)
        //     .call(yAxis)
        //     .selectAll("text")
        //     .attr("class", "stacekd-bar-chart-ticks");

        // yAxisSvg
        //     .select(".domain")
        //     .attr("stroke", "#D8D8D8")
        //     .attr("stroke-width", "1")
        //     .attr("opacity", ".6")
        //     .attr("stroke-dasharray", "2");

        // yAxisSvg
        //     .selectAll('tick')
        //     .attr("stroke", "#D8D8D8")
        //     .attr("stroke-width", "1")
        //     .attr("opacity", ".6")
        //     .attr("stroke-dasharray", "2");

        // let x2 = scaleOrdinal()
        //     .domain(data.map(d => d.key))
        //     .range([0, width - 120]);

        // const averageline = line()
        //     .x(function (d, i) {
        //         return x2(d.key) + i;
        //     })
        //     .y(function (d, i) { return yScale(80); });

        // svg.append("path")
        //     .datum(data)
        //     .attr("class", "line")
        //     .attr("stroke-width", "1")
        //     .attr("d", averageline);

        var Tooltip = select(wrapperRef.current)
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip");

        Tooltip.selectAll("*").remove();

        var mouseover = function (d) {
            Tooltip
                .style("opacity", 1)
        }

        const tootTipHtml = (event) => `<div><p>Date: ${event.target.__data__.data.key}</p><p>Match 1: ${event.target.__data__.data.matchOne}</p><p>Match 2: ${event.target.__data__.data.matchTwo}</p></div>`;

        var mousemove = function (event, d) {
            Tooltip
                .html(tootTipHtml(event))
                .style("top", event.pageY - 400 + "px")
                .style("left", event.pageX -100  + "px")
        }
        var mouseleave = function (d) {
            Tooltip
                .style("opacity", 0)
            select(this)
                .style("stroke", "none")
                .style("opacity", 1)
        }

        svg
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
            .on("mouseover", mouseover)

    }, [colors, data, keys]);

    return (

        <div className="stacked-bar-chart-cont">
            <div ref={wrapperRef} className="svg-wrap-all-days-stacked-bar-chart">
                <div>
                    <svg ref={yAxisRef} className="y-axis-svg" width="1">
                        <g className="y-axis" />
                    </svg>
                </div>
                <div className="x-axis-scroll">

                    <svg className="energy-svg" ref={svgRef}>
                        <g className="x-axis" />
                        <g className="x-axis-top" />
                        <g className="tooltip-area">
                            <text className="tooltip-area__text"></text>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )


}

export default CatalogueEnrichmentStackBarChart;