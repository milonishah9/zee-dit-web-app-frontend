import { useEffect, useState, useRef } from 'react';

import * as d3 from 'd3v4';

// import { pointer, format } from 'd3';

import './AreaChartWithToolTips.css';
import areaChartWithToolTipsData from './data';
import { useMediaQuery } from '@material-ui/core';

const AreaChartWithToolTips = (props) => {

    const svgRef = useRef();

    const [data, setData] = useState(areaChartWithToolTipsData);

    const { isViewers = true } = props;
    var width = 280, height = 70;
    const width1366 = useMediaQuery('(max-width: 1366px)');
    const width1230 = useMediaQuery('(max-width: 1230px)');
    const width1029 = useMediaQuery('(max-width: 1029px)');
    const width920 = useMediaQuery('(max-width: 920px)');
    const width767 = useMediaQuery('(max-width: 767px)');
    const width363 = useMediaQuery('(max-width: 363px)');
    // console.log(width1366);

    if (width1366) {
        width = 250;
    }
    if(width1230){
        width = 240;
    }
    if(width1029){
        width = 400;
    }
    if(width767){
        width = 300
    }
    if(width363){
        width = 250
    }
    if(width920){
        width = 230
    }
    
    useEffect(() => {

        console.log(width);  

        // const { width, height } = svgRef.current.getBoundingClientRect();

        // const margin = { top: 40, right: 20, bottom: 20, left: 40 };
        const margin = { top: 0, right: 0, bottom: 0, left: 0 };

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height);

        svg.selectAll('*').remove();
        // .attr("viewBox", `0 0 70 300`)

        const xExtent = d3.extent(data, d => d.date);

        const xScale = d3.scaleTime()
            .domain(xExtent)
            .range([margin.left, width - margin.right]);

        const yMax = d3.max(data, d => d.population);
        const yMin = 0;
        const yScale = d3.scaleLinear()
            .domain([yMin, yMax])
            .range([height - margin.bottom, margin.top]);

        const area = d3.area()
            .x(d => xScale(d.date))
            .y1(d => yScale(d.population))
            .y0(yScale(0));

        svg.append('path')
            .attr('d', area(data))
            .attr('stroke', 'rgb(148, 94, 210)')
            .attr('stroke-width', '1px')
            .attr('fill', 'rgba(148, 94, 210, 0.1)');

        // const lineGenerator = d3
        //     .line()
        //     .x((d) => xScale(d.date))
        //     .y((d) => yScale(d.population));
        // //.curve(d3.curveBasis);

        // // 7. Convert X and Y into Path

        // const line = svg
        //     .append("path")
        //     .attr("d", lineGenerator(data))
        //     .attr("fill", "none")
        //     .attr("stroke", "rgb(148, 94, 210)")
        //     .attr("stroke-width", 1);

        // console.log(data);

        // const xAxis = d3.axisBottom()
        //     .scale(xScale);
        // const xAxisTranslate = height - margin.bottom;

        // svg.append('g')
        //     .attr('transform', `translate(0, ${xAxisTranslate})`)
        //     .call(xAxis);

        // const yAxis = d3.axisLeft()
        //     .scale(yScale);

        // svg.append('g')
        //     .attr('transform', `translate(${margin.left}, 0)`)
        //     .call(yAxis);

        svg
            .append('line')
            .classed('hoverLine', true);
        svg
            .append('circle')
            .classed('hoverPoint', true);

        svg.append('rect')
            .attr('fill', 'transparent')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', width)
            .attr('height', height);

        const tooltip = d3.select(".area-chart-with-tooltips-container")
            .append("div")
            .style('visibility', 'hidden')
            .classed('hoverText', true);

        tooltip.selectAll("*").remove();

        svg.on('mouseover', mouseOver);
        svg.on('mousemove', mouseMove);
        svg.on('mouseout', mouseOut);

        function mouseOver(event) {
            svg.selectAll('.hoverLine')
                .style('visibility', 'visible');

            svg.selectAll('.hoverPoint')
                .style('visibility', 'visible');

            // svg.selectAll('.hoverText')
            //     .style('visibility', 'visible');
            tooltip
                .style('visibility', 'visible');
        }

        function mouseMove(event, d) {

            d3.event.preventDefault();

            const mouse = d3.mouse(d3.event.target);
            const [
                xCoord,
                // yCoord,
            ] = mouse;

            const mouseDate = xScale.invert(xCoord);
            const mouseDateSnap = d3.timeYear.floor(mouseDate);

            if (xScale(mouseDateSnap) < margin.left ||
                xScale(mouseDateSnap) > width - margin.right) {
                return;
            }

            const bisectDate = d3.bisector(d => d.date).right;
            const xIndex = bisectDate(data, mouseDateSnap, 1);
            
            
            const mousePopulation = data[xIndex].population ;

            svg.selectAll('.hoverLine')
                .attr('x1', xScale(mouseDateSnap))
                .attr('y1', margin.top)
                .attr('x2', xScale(mouseDateSnap))
                .attr('y2', height - margin.bottom)
                .attr('stroke', 'rgb(148, 94, 210)')
                .attr('fill', 'rgb(148, 94, 210)');

            svg.selectAll('.hoverPoint')
                .attr('cx', xScale(mouseDateSnap))
                .attr('cy', yScale(mousePopulation))
                .attr('r', '5')
                .attr('fill', 'rgb(148, 94, 210)');

            // const isLessThanHalf = xIndex > data.length / 2;
            // const hoverTextX = isLessThanHalf ? '-0.75em' : '0.75em';
            // const hoverTextAnchor = isLessThanHalf ? 'end' : 'start';

            // svg.selectAll('.hoverText')
            //     .attr('x', xScale(mouseDateSnap))
            //     .attr('y', yScale(mousePopulation))
            //     .attr('dx', hoverTextX)
            //     .attr('dy', '1.25em')
            //     .style('text-anchor', hoverTextAnchor)
            //     .html('<p>Anant</p>')
            //     .text(`${d3.format('.5s')(mousePopulation)} on ${d3.timeFormat("%d/%m/%Y")(mouseDateSnap)}`);
                
            tooltip
                .html(`<p>Date: ${d3.timeFormat("%b %d, %Y")(mouseDateSnap)}</p><p>${isViewers ? "Viewers: " : "Watch Time: "}${d3.format("s")((Math.abs(mousePopulation)/1000).toFixed(1))}</p>`)
                // .style("left", (d3.mouse(this)[0] - 20) + "px") 
                // .style("top", (d3.mouse(this)[1] + 280) + "px");
                .style("left", d3.event.pageX + 20 + "px")
                .style("top", d3.event.pageY + 15 + "px");

        }

        function mouseOut(event) {
            svg.selectAll('.hoverLine')
                .style('visibility', 'hidden');

            svg.selectAll('.hoverPoint')
                .style('visibility', 'hidden');

            // svg.selectAll('.hoverText')
            //     .style('visibility', 'hidden');

            tooltip
                .style('visibility', 'hidden');
        }

    }, [width, height]);

    return (
        <div className='area-chart-with-tooltips-container'>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default AreaChartWithToolTips;