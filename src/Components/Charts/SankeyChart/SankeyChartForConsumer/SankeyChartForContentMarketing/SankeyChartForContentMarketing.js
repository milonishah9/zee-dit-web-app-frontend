import { useLayoutEffect, useRef } from 'react';

import * as d3 from 'd3';

import './SankeyChartForContentMarketing.css';

const SankeyChartForContentMarketing = (props) => {

    const svgRef = useRef();

    useLayoutEffect(() => {

        const xPosition = 125, yPosition = 400;

        let nodeData = [
            { id: "nonTrailerViewersStart", x: xPosition + 70, y: 50, yOffSet: 25, name: "Non Trailer Viewers who Watched Content", value: 300, fill: "#6979F8", showText: true },
            { id: "trailerViewersSAWFStart", x: xPosition + 70, y: 310, yOffSet: 100, name: "Trailer Viewers who became SAWF Content Viewers", value: 100, fill: "#7343A9", showText: true },
            { id: "trailerViewersContentViewersStart", x: xPosition + 70, y: 366, yOffSet: 1, name: "Trailer Viewers who became content viewers", value: 241.58, fill: "#A943A5", showText: true },
            { id: "trailerViewersNotWatchedContentStart", x: xPosition + 70, y: 492.5, yOffSet: 1, name: "Trailer Viewers who did not watch content", value: 150, fill: "#FF647C", showText: true },
            { id: "nonTrailerViewersEnd", x: xPosition + 355, y: 99, yOffSet: 25, name: "Non Trailer Viewers who Watched Content", value: 300, fill: "#6979F8", showText: false },
            { id: "trailerViewersSAWFEnd", x: xPosition + 355, y: 255, yOffSet: 1, name: "Trailer Viewers who became SAWF Content Viewers", value: 100, fill: "#7343A9", showText: false },
            { id: "trailerViewersContentViewersEnd", x: xPosition + 355, y: 311, yOffSet: 1, name: "Trailer Viewers who became content viewers", value: 241.58, fill: "#A943A5", showText: false },
            // { id: "nonTrailerViewersStart", x: xPosition + 70, y: 50, yOffSet: 25, name: "Non Trailer Viewers who Watched Content", value: 300, fill: "#6979F8", showText: true },
            // { id: "trailerViewersSAWFStart", x: xPosition + 70, y: 310, yOffSet: 100, name: "Trailer Viewers who became SAWF Content Viewers", value: 100, fill: "#7343A9", showText: true },
            // { id: "trailerViewersContentViewersStart", x: xPosition + 70, y: 363, yOffSet: 1, name: "Trailer Viewers who became content viewers", value: 241.58, fill: "#A943A5", showText: true },
            // { id: "trailerViewersNotWatchedContentStart", x: xPosition + 70, y: 486.5, yOffSet: 1, name: "Trailer Viewers who did not watch content", value: 150, fill: "#FF647C", showText: true },
            // { id: "nonTrailerViewersEnd", x: xPosition + 355, y: 99, yOffSet: 25, name: "Non Trailer Viewers who Watched Content", value: 300, fill: "#6979F8", showText: false },
            // { id: "trailerViewersSAWFEnd", x: xPosition + 355, y: 252, yOffSet: 1, name: "Trailer Viewers who became SAWF Content Viewers", value: 100, fill: "#7343A9", showText: false },
            // { id: "trailerViewersContentViewersEnd", x: xPosition + 355, y: 305, yOffSet: 1, name: "Trailer Viewers who became content viewers", value: 241.58, fill: "#A943A5", showText: false },
        ];

        let maxValueFromSankeyChartForContentMarketingSampleData = d3.max(nodeData.map(item => item.value));

        let barHeightRatio = 150 / maxValueFromSankeyChartForContentMarketingSampleData;

        var linkData = [
            { source: [125, 215], target: [174, 480], fill: "#6979F8", height: 150 },
            { source: [335, 215], target: [280, 480], fill: "#7343A9", height: 50 },
            { source: [426.4, 215], target: [371.4, 480], fill: "#A943A5", height: 120.8 },
        ];

        var link = d3.linkHorizontal()
            .source(function (d) {
                return [d.source[1], d.source[0]];
            })
            .target(function (d) {
                return [d.target[1], d.target[0]];
            });

        const svg = d3
            .select(svgRef.current)
            .attr("viewBox", "0 0 550 600")
            .classed("sankey-chart-for-consumer-svg", true);

        svg.selectAll("mybar")
            .data(nodeData)
            .enter()
            .append("rect")
            .classed("mybar", true)
            .attr("x", d => d.x)
            .attr("y", d => d.y)
            .attr("width", 20)
            .attr("height", d => isNaN(barHeightRatio * d.value) ? 0 : (barHeightRatio * d.value))
            .attr("fill", d => d.fill)
            .attr("stroke", "none");

        svg
            .selectAll("path")
            .data(linkData)
            .join("path")
            .attr("d", link)
            .attr("fill", "none")
            .attr("stroke", d => d.fill)
            .attr("stroke-width", d => d.height)
            .attr("opacity", "0.25")
            .classed("link", true);

        // svg
        //     .selectAll("text")
        //     .data(nodeData)
        //     .join('text')
        //     .classed('sankay-chart-text', true)
        //     .attr('x', d => d.x - 120)
        //     .attr('y', d => d.y + 10)
        //     // .attr('dy', d => d.y + 20)
        //     // .text(d => d.showText ? d.name : null)
        //     .html(d => d.showText ? d.name : null)
        //     .attr('font-size', 12)

        svg
            .append("text")
            .classed('sankay-chart-text', true)
            .attr('x', 95)
            .attr('y', 85)
            .html('Non Trailer')
            .attr('font-size', 12);

        svg
            .append("text")
            .classed('sankay-chart-text', true)
            .attr('x', 80)
            .attr('y', 106)
            .html('Viewers who')
            .attr('font-size', 12)

        svg
            .append("text")
            .classed('sankay-chart-text', true)
            .attr('x', 40)
            .attr('y', 127)
            .html('Watched Content')
            .attr('font-size', 12)

        svg
            .append("text")
            .classed('sankay-chart-value', true)
            .attr('x', 135)
            .attr('y', 156)
            .html('300')
            .attr('font-size', 12)

        // svg
        //     .append("text")
        //     .classed('sankay-chart-value', true)
        //     .attr('x', 140)
        //     .attr('y', 160)
        //     .html('300')
        //     .attr('font-size', 12)
        // .attr('font-family','GothamBold');

    }, [])

    return (
        <div className='sankey-chart-for-content-marketing-container'>
            <svg ref={svgRef}>
                <text x={10} y={265} className='sankay-chart-value' fill='#333333'>Trailer Viewers - 491.58</text>

                <text x={23} y={303} className='sankay-chart-text' fill='#333333'>Trailer Viewers who</text>
                <text x={60} y={324} className='sankay-chart-text' fill='#333333'>became SAWF</text>
                <text x={47} y={343} className='sankay-chart-text' fill='#333333'>Content Viewers</text>
                <text x={135} y={370} className='sankay-chart-value' fill='#333333'>100</text>

                <text x={63} y={395} className='sankay-chart-text' fill='#333333'>Trailer Viewers </text>
                <text x={76} y={416} className='sankay-chart-text' fill='#333333'>who became</text>
                <text x={46} y={437} className='sankay-chart-text' fill='#333333'>Content Viewers</text>
                <text x={102} y={466} className='sankay-chart-value' fill='#333333'>241.58</text>

                <text x={65} y={503} className='sankay-chart-text' fill='#333333'>Trailer Viewers</text>
                <text x={86} y={523} className='sankay-chart-text' fill='#333333'>who did not</text>
                <text x={69} y={543} className='sankay-chart-text' fill='#333333'>watch content</text>
                <text x={143} y={569} className='sankay-chart-value' fill='#333333'>150</text>

                <text x={290} y={513} className='sankay-chart-value' fill='#333333'>Content Viewers</text>
                <text x={420} y={545} className='sankay-chart-value' fill='#333333'>641.58</text>
            </svg>
        </div>
    )

}

export default SankeyChartForContentMarketing;