import { useRef, useLayoutEffect } from 'react';

import * as d3 from 'd3';
import ReactSpeedometer from 'react-d3-speedometer';

import './GuageChart.css';

const GuageChart = (props) => {

    const svgRef = useRef();

    // console.log(svgRef.current.getBoundingClientRect())
    const width = 900,
        height = 0.56 * width;
    // height = 500;
    const centerX = width / 2, centerY = height / 2;
    const mouthRadious = 235;
    const mouthWidth = 45;

    const calculateNeedleAngle = (min, max, val) => {
        let unitVal = (max - min) / 178;
        return -90 + (val / unitVal);
    }

    const createArc = (innerRadius, outerRadious, startAngle, endAngle) => {
        let arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadious)
            .startAngle(startAngle)
            .endAngle(endAngle);

        return arc();
    }

    useLayoutEffect(() => {

        let svg = d3
            .select(svgRef.current)
            .classed("guage-chart-svg-container", true)
            .attr("viewBox", "90 -119 750 405")
            // .attr("viewBox", "90 -130 900 405")
            .attr('preserveAspectRatio', 'xMinYMin')
            .append("g")
            .attr("transform",
                `translate(${centerX}, ${centerY})`);

        // const scale = d3
        //     .scaleLinear()
        //     .range([0, 1])
        //     .domain([1, 100]);

        // const ticks = scale.ticks(4)

        // const tickData = d3.range(4).map((d, index) => (index * 33) + 1);

        // console.log('tickData', tickData);
        // console.log('ticks', ticks);

        svg
            .append('path')
            .attr("d", createArc(mouthRadious + 10, mouthRadious + mouthWidth + 10, -Math.PI / 2, -Math.PI / 6))
            .attr("fill", "#FF647C")
        svg
            .append('path')
            .attr("d", createArc(mouthRadious + 10, mouthRadious + mouthWidth + 10, -Math.PI / 6, Math.PI / 6))
            .attr("fill", "#FFC656")
        svg
            .append('path')
            .attr("d", createArc(mouthRadious + 10, mouthRadious + mouthWidth + 10, Math.PI / 6, Math.PI / 2))
            .attr("fill", "#00C48C");
        svg
            .append('path')
            .attr("d", createArc(mouthRadious - 52, mouthRadious + 10, -Math.PI / 2, Math.PI / 2))
            .attr("fill", "#F1F1F1");

        var lineData = [[10, 0],      //[pointerWidth, 0]
        [0, -320],                   //[0, pointerHeadLength]
        [-10, 0],                     //[-pointerWidth, 0]
        [0, 0],                      //[0, pointerTailLength]
        [10, 0]];                     //[pointerWidth, 0]

        var pointerLine = d3
            .line()
            .curve(d3.curveLinear);

        var pg = svg
            .data([lineData])
            .attr('class', 'pointer');

        let pointer = pg.append('path')
            .attr('d', pointerLine/*function (d) { return pointerLine(d) + 'Z';}*/)
            .attr('transform', 'rotate(' + -90 + ')');

        pointer
            .transition()
            .duration(1500)
            // .ease(d3.easeElastic)
            .ease(d3.easeQuadInOut)
            .attr('transform', 'rotate(' + calculateNeedleAngle(1, 100, 50) + ')')

        svg
            .append('path')
            // .attr("d", createArc(mouthRadious - 9, mouthRadious - 10, -Math.PI / 2, Math.PI / 2))
            .attr("d", createArc(mouthRadious - 52, mouthRadious - 50, -Math.PI / 2, Math.PI / 2))
            .attr("fill", "#D8D8D8");
        svg
            .append('path')
            .attr("d", createArc(0, mouthRadious - 52, -Math.PI / 2, Math.PI / 2))
            .attr("fill", "#F1F1F1");

        svg
            .append("text")
            .text("50%")
            .attr("transform", `translate(-60, -50)`)
            .classed('guage-chart-value', true);

        svg
            .append("text")
            .text("0")
            .attr("transform", `translate(-325, 0)`)
            .classed('guage-chart-ticks', true);

        svg
            .append("text")
            .text("40")
            .attr("transform", `translate(-180, -270)`)
            .classed('guage-chart-ticks', true);

        svg
            .append("text")
            .text("60")
            .attr("transform", `translate(130, -270)`)
            .classed('guage-chart-ticks', true)

        svg
            .append("text")
            .text("100")
            .attr("transform", `translate(300, 0)`)
            .classed('guage-chart-ticks', true);

        // let lg = svg
        //     .selectAll("text")
        //     .data(ticks)
        //     .enter()
        //     .append('text')
        //     .attr('transform', function (d) {
        //         console.log('d', d);
        //         var ratio = scale(d);

        //         console.log("ratio", ratio);

        //         var newAngle = 180 - ((1 - ratio) * 100);
        //         return 'rotate(' + newAngle + ') translate(0,' + (mouthRadious + mouthWidth + 50) + ')';
        //     })
        //     .text(d3.format('d'))
        //     .style("font-size", "30px")
        //     .style("font-weight", "600")

    }, []);

    return <svg ref={svgRef}></svg>
}

export default GuageChart;