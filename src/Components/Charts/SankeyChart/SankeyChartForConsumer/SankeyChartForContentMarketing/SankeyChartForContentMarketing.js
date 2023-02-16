import { useLayoutEffect, useRef } from 'react';

import * as d3 from 'd3';

import './SankeyChartForContentMarketing.css';

const SankeyChartForContentMarketing = (props) => {

    const svgRef = useRef();



    useLayoutEffect(() => {

        const xPosition = 125, yPosition = 400;

        // let SankeyChartForContentMarketingSampleData = [
        //     {
        //         name: 'Non Trailer Viewers who Watched Content',
        //         value: 300
        //     },
        //     {
        //         name: 'Trailer Viewers who became SAWF Content Viewers',
        //         value: 100
        //     },
        //     {
        //         name: 'Trailer Viewers who became content viewers',
        //         value: 241.58
        //     },
        //     {
        //         name: 'Trailer Viewers who did not watch content',
        //         value: 150
        //     },
        // ]

        let nodeData = [
            { id: "nonTrailerViewersStart", x: xPosition + 15, y: 50, yOffSet: 25, name: "Non Trailer Viewers who Watched Content", value: 300, fill: "#6979F8", showText: true },
            { id: "trailerViewersSAWFStart", x: xPosition + 15, y: 300, yOffSet: 100, name: "Trailer Viewers who became SAWF Content Viewers", value: 100, fill: "#7343A9", showText: true },
            { id: "trailerViewersContentViewersStart", x: xPosition + 15, y: 353, yOffSet: 1, name: "Trailer Viewers who became content viewers", value: 241.58, fill: "#A943A5", showText: true },
            { id: "trailerViewersNotWatchedContentStart", x: xPosition + 15, y: 476.5, yOffSet: 1, name: "Trailer Viewers who did not watch content", value: 150, fill: "#FF647C", showText: true },
            { id: "nonTrailerViewersEnd", x: xPosition + 355, y: 74, yOffSet: 25, name: "Non Trailer Viewers who Watched Content", value: 300, fill: "#6979F8", showText: false },
            { id: "trailerViewersSAWFEnd", x: xPosition + 355, y: 227, yOffSet: 1, name: "Trailer Viewers who became SAWF Content Viewers", value: 100, fill: "#7343A9", showText: false },
            { id: "trailerViewersContentViewersEnd", x: xPosition + 355, y: 280, yOffSet: 1, name: "Trailer Viewers who became content viewers", value: 241.58, fill: "#A943A5", showText: false },
            // { id: "trailerViewersNotWatchedContentEnd", x: xPosition + 125, y: yPosition - 195, name: "Trailer Viewers who did not watch content", value: 150, fill: "#6979F8" },
        ];

        let maxValueFromSankeyChartForContentMarketingSampleData = d3.max(nodeData.map(item => item.value));

        // console.log('maxValueFromSankeyChartForContentMarketingSampleData', maxValueFromSankeyChartForContentMarketingSampleData);

        let barHeightRatio = 150 / maxValueFromSankeyChartForContentMarketingSampleData;

        let previousElementValue = 0;

        // let nodeData = sampleData.map((element, index) => {
        //     // let tempArr = [];
        //     if (index === 0) {
        //         let barheight = isNaN(barHeightRatio * element.value) ? 0 : (barHeightRatio * element.value);
        //         previousElementValue += barheight ;
        //         console.log('previousElementValue index=0', previousElementValue);
        //         element.y=element.yOffSet
        //         return element;
        //         // tempArr.push(element);
        //         // return element;
        //     } else {
        //         // element.y += isNaN(barHeightRatio * tempArr[0].value) ? 0 : (barHeightRatio * sampleData[0].value);
        //         element.y += previousElementValue;
        //         let barheight = isNaN(barHeightRatio * element.value) ? 0 : (barHeightRatio * element.value);
        //         console.log('previousElementValue index!=0 previous', previousElementValue)
        //         previousElementValue += element.y ;
        //         console.log(element.y, 'element.y')
        //         console.log('previousElementValue index!=0', previousElementValue)
        //         // console.log(element.y, index);
        //         // tempArr.push(element);
        //         // console.log(tempArr)
        //         // previousElementValue = element.value;
        //         return element;
        //     }

        // })

        // console.log('nodeData', nodeData);

        var linkData = [
            { source: [125, 160], target: [149, 480], fill: "#6979F8", height: 150 }, //Organic - New
            { source: [325, 150], target: [252, 480], fill: "#7343A9", height: 50 }, //Orgainc - Returning
            { source: [413.4, 150], target: [340.4, 480], fill: "#A943A5", height: 120.8 }, //Paid - Returning

            // { source: [150, 50], target: [480, 75], fill: "#6979F8" }, //Organic - New
            // { source: [150, 300], target: [480, 227], fill: "#7343A9" }, //Orgainc - Returning
            // { source: [150, 352], target: [480, 279], fill: "#A943A5" }, //Paid - Returning
        ];

        const annotations = [
            {
                note: {
                    label: "Here is the annotation label",
                    title: "Annotation title"
                },
                x: 100,
                y: 100,
                dy: 100,
                dx: 100
            }
        ]

        var link = d3.linkHorizontal()
            .source(function (d) {
                return [d.source[1], d.source[0]];
            })
            .target(function (d) {
                return [d.target[1], d.target[0]];
            });

        const svg = d3
            .select(svgRef.current)
            .attr("viewBox", "0 0 600 600")
            // .attr('preserveAspectRatio', 'xMinYMin')
            .classed("sankey-chart-for-consumer-svg", true);

        // svg
        //     .selectAll("circle")
        //     .data(nodeData)
        //     .join("circle")
        //     .attr("r", d => d.name === "Exit" ? 0 : 5.5)
        //     .attr("cx", d => d.y)
        //     .attr("cy", d => d.x)
        //     .attr("fill", "#3E1F76")
        //     .attr("opacity", "0.8")
        //     .classed("circle", true)

        svg.selectAll("mybar")
            .data(nodeData)
            .enter()
            .append("rect")
            .classed("mybar", true)
            .attr("x", function (d) { return d.x })
            .attr("y", function (d) {
                // console.log(y(d.value))
                // console.log(d.value)
                // return y(d.value);
                // return d.y + (isNaN(barHeightRatio * d.value) ? 0 : (barHeightRatio * d.value))
                return d.y
            })
            .attr("width", 20)
            .attr("height", function (d) {
                return isNaN(barHeightRatio * d.value) ? 0 : (barHeightRatio * d.value)
            })
            // .attr("fill", '#00C48C')
            .attr("fill", function (d) {
                return d.fill
                // return "#C996EB"
            })
            .attr("stroke", "none")
        // .style("padding-right", "3p")
        // .style('z-index', '100')

        svg
            .selectAll("path")
            .data(linkData)
            .join("path")
            .attr("d", link)
            .attr("fill", "none")
            .attr("stroke", d => d.fill)
            // .attr('x','50')
            .attr("stroke-width", d => d.height)
            .attr("opacity", "0.25")
            .classed("link", true);

        svg
            .selectAll("text")
            .data(nodeData)
            .join('text')
            .classed('sankay-chart-text', true)
            .attr('x', d => d.x - 80)
            .attr('y', d => d.y)
            .text(d => d.showText ? d.name : null)
            .attr('font-size', 12)

        const makeAnnotations = d3.annotation()
            .annotations(annotations)
        d3.select("svg")
            .append("g")
            .call(makeAnnotations)


    }, [])

    return (
        <div className='sankey-chart-for-content-marketing-container'>
            <svg ref={svgRef}></svg>
        </div>
    )

}

export default SankeyChartForContentMarketing;