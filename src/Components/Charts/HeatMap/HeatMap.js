import { useRef, useLayoutEffect } from 'react';

import * as d3 from 'd3';

import wholeDataSet from './data';
import './HeatMap.css';
import { useState } from 'react';

const HeatMap = (props) => {

    // const { shallDisableIfAllNotSelected = false, isAllDropdownsSelected = true } = props
    const { selectedSelectOptions, isAllDropdownsSelected = true } = props;

    // console.log("selectedSelectOptions in heatmap", selectedSelectOptions)

    // const [shows, setShows] = useState([]);

    let tempShowsArray = [];

    for (let obj in selectedSelectOptions) {
        if (obj !== 'All' & selectedSelectOptions[obj] === true) {
            tempShowsArray.push(obj)
        }
    }
    // setShows(tempShowsArray);

    let data = [];
    wholeDataSet.filter(element => {
        tempShowsArray.forEach(item => {
            if (element.show === item) data.push(element)
        })
    })

    // console.log('tempShowsArray', tempShowsArray, 'tempArray', data);
    // console.log('data', data);

    // console.log('isAllDropdownsSelected', isAllDropdownsSelected);

    const svgRef = useRef(null);

    useLayoutEffect(() => {

        let timeZone = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
            "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

        let shows = tempShowsArray;
        // let data = tempArray;

        const svg = d3
            .select(svgRef.current)
            // .attr("viewBox", `0 0 660 35`)
            .attr("viewBox", `0 0 660 ${(12 * shows.length)+9}`)
            .classed("heat-map-svg", true)
            .append("g")
            .attr("transform", "translate(30,10)");

        svg.selectAll('*').remove();

        let xScale = d3
            .scaleBand()
            .range([0, 600])
            .domain(timeZone)
            .padding(0.08);

        let xAxis = d3.axisBottom(xScale)
            .tickSize(0)
            .tickValues(["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
                "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]);

        svg.append("g")
            .attr("transform", "translate(20," + -10 + ")")
            .classed('x-axis', true)
            .call(xAxis);
        // .style("opacity", isAllDropdownsSelected ? 1 : 0.2);

        let yScale = d3
            .scaleBand()
            // .range([25, 0])
            .range([shows.length * 12, 0])
            .domain(shows)
            .padding(0.08);

        let yAxis = d3.axisLeft(yScale)
            .tickSize(50)
            // .attr("stroke", "#E04836")
            // .attr("stroke-width", "10")
            // .attr("opacity", ".6")
            .tickValues(shows);

        svg.append("g")
            // .data(data)
            // .enter()
            // .append("rect")
            .call(yAxis)
            .attr("transform", "translate(20," + 0 + ")")
            .classed("y-axis-tick", true);

        svg.select(".y-axis-tick")
            .selectAll("line")
            .attr("stroke", "#E9EFFF")
            .attr("stroke-width", "10")
        // .attr("opacity", ".6")
        // .attr("stroke-dasharray", "4");

        svg.select(".y-axis-tick")
            .selectAll("text")
            .attr("x", -2)
        // .attr("text-anchor", "")

        let heatMapBoxColors = d3
            .scaleLinear()
            .range(["white", "#4F277C"])
            .domain([1, 120]);

        let tooltip = d3.select('.heat-map-container')
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip");
        // .style("background-color", "white")
        // .style("border", "solid")
        // .style("border-width", "2px")
        // .style("border-radius", "5px")
        // .style("padding", "5px");

        let mouseover = function (event) {
            tooltip.style("opacity", 1)
        }

        let mousemove = function (event) {
            tooltip
                .html("<p>Chanel: " + event.target.__data__.show + "</p><p> Time: " + event.target.__data__.time + "</p><p>Watch Time: " + event.target.__data__.watchTime + "</p>")
                .style("left", event.pageX + 20 + "px")
                .style("top", event.pageY + 15 + "px");
        }

        let mouseleave = function (event) {
            tooltip.style("opacity", 0)
        }

        svg
            .selectAll()
            .data(data, d => d.time + ':' + d.show)
            .enter()
            .append("rect")
            .attr("transform", "translate(20," + 0 + ")")
            .attr("x", d => xScale(d.time))
            .attr("y", d => yScale(d.show))
            // .attr("rx", 1.5)
            // .attr("ry", 1.5)
            // .style("opacity", isAllDropdownsSelected ? 1 : 0.2)
            .attr("width", xScale.bandwidth())
            .attr("height", yScale.bandwidth())
            .style("fill", d => heatMapBoxColors(d.watchTime))
            .on("mouseover", mouseover)
            // .on("mousemove", isAllDropdownsSelected ? mousemove : null)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);

    }, [isAllDropdownsSelected, selectedSelectOptions]);

    return (
        <div className='heat-map-container'>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default HeatMap;