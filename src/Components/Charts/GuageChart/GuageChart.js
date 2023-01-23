import { useRef, useLayoutEffect } from 'react';

import * as d3 from 'd3';

import './GuageChart.css';

const GuageChart = (props) => {

    const svgRef = useRef();

    const colors = ["#FF647C", "#FFC656", "#00C48C"];

    const degreeToRadian = (degree) => degree * (Math.PI / 180);

    useLayoutEffect(() => {

        var margin = { top: 30, right: 30, bottom: 70, left: 60 },
            width = 600 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .append('svg')
            // .attr("width", '100%')
            // .attr("height", '100%')
            .attr("viewBox", "0 0 550 405")
            .attr('preserveAspectRatio', 'xMinYMin')
            .append("g")
            .attr("transform", "translate(" + Math.min(width, height) / 2 + "," + Math.min(width, height) / 2 + ")");

        let c = {
            element: 'body',
            width: 400,
            height: 200,
            thickness: 45,
            gaugeColor: '#dde9f7',
            backgroundColor: '#f5f5f5'
        };

        svg
            .append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', c.width)
            .attr('height', c.height)
            .attr('fill', 'none');

        let r = c.width / 2;

        let createArc = function (sa, ea) {
            return d3.arc()
                .outerRadius(r)
                .innerRadius(r - c.thickness)
                .startAngle(degreeToRadian(sa))
                .endAngle(degreeToRadian(ea));
        };

        let addArc = function (arc, color) {
            return svg.append('path')
                .attr('d', arc).attr('fill', color)
                .attr('transform', 'translate('
                    + r + ',' + r + '), scale(1, 1)');
        };

        // Create a 1/2 circle arc and put it at the center
        addArc(createArc(-90, 90), c.gaugeColor);

    }, []);

    return <svg ref={svgRef}></svg>
}

export default GuageChart;