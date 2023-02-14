import React from "react";
import './FrontBar.css'
import { useEffect } from "react";
import { useRef } from "react";
import * as d3 from 'd3';
import { transition } from 'd3-transition';
import { scaleLinear } from 'd3-scale';

const FrontBar = (props) => {

    const { data, total, toggleValue, percent, color } = props
    console.log('data, total, toggleValue, percent, color', data, total, toggleValue, percent, color);
    const ref = useRef();
    // console.log(toggleValue);
    const width = 215;

    const margin = {
        top: 45,
        right: 0,
        bottom: 70,
        left: 0,
    };

    const barHeight = 20;
    const svgHeight = 140;

    // const parentWidth = 500;

    // const height = svgHeight - margin.top - margin.bottom;

    // const { xScale, barHeight } = props;


    useEffect(() => {

        const xScale = scaleLinear()
            .domain([0, total])
            .range([0, width])

        const node = ref.current;
        d3.select(node)
            .append('rect')
            .attr('class', 'bar')
            // .attr('x', 0)
            // .attr('y', 0)
            // .attr('rx', 4)
            // .attr('ry', 4)
            .attr('width', xScale(data))
            .attr('fill', color)
            .attr('height', 20);
        // #C996EB
        d3.select(node)
            .append('text')
            .attr('class', 'amount')
            .attr('y', 14)
            .attr('x', 10)
            .text((data));

        d3.select(node)
            .selectAll(".remaining-amount").remove()

        d3.select(node)
            .append('text')
            .attr('class', 'remaining-amount')
            .attr('y', 14)
            .attr('x', 184)
            .text(percent ? (total - data) : (total - data + '%'));

        // // .attr('y', barHeight)
        // .attr('dx', -10)
        // .attr('dy', 2)
        //   const { data, xScale } = props;
        const t = transition().duration(100);

        // d3.select('.bar')
        //     .transition(t).attr('width', xScale(data));

        d3.select('.amount')
            .transition(t)
        // .attr('x', xScale(30))

        d3.selectAll('.remaining-portion').attr('fill', '#5d6dff')

    }, [toggleValue])
    // ↓↓
    return (
        <>
            <svg
                id={data}
                width={width}
                height='20'
                className="prograss-svg"
            >
                <g >
                    <g className="budget-bar-group">
                        <rect className="remaining-portion" x="0" y="0" width={width} height={barHeight} rx="0" ry="0" opacity="0.2" />
                        <text className="remaining-amount" x={width} y="32" dy="-18" dx="-30">
                            {/* { toggleValue ===true ? (total + '%') : (total) } */}
                        </text>
                    </g>
                    {/* <FrontBar
                                // {...{
                                //     xScale,
                                //     barHeight,
                                //     data,
                                // }}
                            /> */}
                    <g
                        ref={ref}
                        className="expenditure-bar-group"
                    />
                </g>
            </svg>
        </>
    )
}

export default FrontBar;