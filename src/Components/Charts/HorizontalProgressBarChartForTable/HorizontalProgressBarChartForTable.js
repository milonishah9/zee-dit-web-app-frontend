import { useRef, useLayoutEffect } from 'react';
import * as d3 from 'd3';
import './HorizontalProgressBarChartForTable.css';

const HorizontalProgressBarChartForTable = (props) => {

    const { value = 50, maxValue = 500, fillColor = '#A47CD0' } = props;

    console.log('value', value);
    // const { value=50, maxValue=60, toggleValue, percent, fillColor } = props;
    const svgRef = useRef();

    // console.log('value, maxValue, toggleValue, percent, fillColor', value, maxValue, toggleValue, percent, fillColor);
    // console.log(toggleValue);
    const width = maxValue;

    const margin = {
        top: 45,
        right: 0,
        bottom: 70,
        left: 0,
    };

    const barHeight = 20;
    const svgHeight = 140;

    const xScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([0, 140])

    useLayoutEffect(() => {
        // const svg = svgRef.current;


        console.log('xScale(value)', xScale(value) + 50)

        const svg = d3.select(svgRef.current)
            .append('rect')
            .attr('class', 'bar')
            // .attr('x', 0)
            // .attr('y', 0)
            // .attr('rx', 4)
            // .attr('ry', 4)
            .attr('width', xScale(value))
            .attr('fill', fillColor)
            .attr('height', 25);


        // #C996EB
        // d3.select(svg)
        //     .append('text')
        //     .attr('class', 'amount')
        //     .attr('y', 14)
        //     .attr('x', 10)
        //     .text((value));

        svg
            .selectAll(".viewership-number").remove()

        // d3.select("g")
        //     .append('text')
        //     .attr('class', 'viewership-number')
        //     .attr('y', 14)
        //     .attr('x', xScale(value) + 20)
        //     .text(value);

        // d3.selectAll('.remaining-amount').remove();

        d3.selectAll('.remaining-amount')
            .attr('x', xScale(value) + 50)

        d3.selectAll('.remaining-portion')
            .attr('width', xScale(value) + 100)
        // svg
        //     .append('text')
        //     .attr('class', 'viewership-number')
        //     .attr('y', 14)
        //     .attr('x', xScale(value) + 10)
        //     .text(value);

        // // .attr('y', barHeight)
        // .attr('dx', -10)
        // .attr('dy', 2)
        //   const { value, xScale } = props;
        const t = d3.transition().duration(100);

        // d3.select('.bar')
        //     .transition(t).attr('width', xScale(value));

        d3.select('.amount')
            .transition(t)
        // .attr('x', xScale(30))

        // d3.selectAll('.remaining-portion').attr('fill', '#5d6dff')

    }, [])
    // ↓↓
    return (
        <>
            <svg
                id={value}
                width={140}
                height={25}
                className="prograss-svg"
            >
                <g className="budget-bar-group">
                    <rect className="remaining-portion" x="0" y="0" height={25} rx="0" ry="0" opacity="0.2" fill='none' />
                    <text className="remaining-amount" x={xScale(value)} y="32" dy="-18" dx="-30">
                        {/* { toggleValue ===true ? (total + '%') : (total) } */}
                        {/* {value} */}
                    </text>
                </g>
                <g
                    ref={svgRef}
                    className="expenditure-bar-group"
                // fill='none'
                />
            </svg>
        </>
    )
}

export default HorizontalProgressBarChartForTable;