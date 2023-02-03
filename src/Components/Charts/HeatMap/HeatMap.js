import { useRef, useLayoutEffect } from 'react';

import * as d3 from 'd3';

import './HeatMap.css';

const HeatMap = (props) => {

    const svgRef = useRef(null);

    const data = [
        { time: "00:00", show: "A", watchTime: 68 },
        { time: "00:00", show: "B", watchTime: 40 },
        { time: "00:00", show: "C", watchTime: 80 },
        { time: "00:00", show: "D", watchTime: 20 },
        { time: "00:00", show: "E", watchTime: 90 },

        { time: "01:00", show: "A", watchTime: 40 },
        { time: "01:00", show: "B", watchTime: 30 },
        { time: "01:00", show: "C", watchTime: 70 },
        { time: "01:00", show: "D", watchTime: 40 },
        { time: "01:00", show: "E", watchTime: 85 },

        { time: "02:00", show: "A", watchTime: 50 },
        { time: "02:00", show: "B", watchTime: 60 },
        { time: "02:00", show: "C", watchTime: 80 },
        { time: "02:00", show: "D", watchTime: 10 },
        { time: "02:00", show: "E", watchTime: 65 },

        { time: "03:00", show: "A", watchTime: 50 },
        { time: "03:00", show: "B", watchTime: 10 },
        { time: "03:00", show: "C", watchTime: 30 },
        { time: "03:00", show: "D", watchTime: 60 },
        { time: "03:00", show: "E", watchTime: 45 },

        { time: "04:00", show: "A", watchTime: 10 },
        { time: "04:00", show: "B", watchTime: 20 },
        { time: "04:00", show: "C", watchTime: 50 },
        { time: "04:00", show: "D", watchTime: 10 },
        { time: "04:00", show: "E", watchTime: 25 },

        { time: "05:00", show: "A", watchTime: 60 },
        { time: "05:00", show: "B", watchTime: 70 },
        { time: "05:00", show: "C", watchTime: 90 },
        { time: "05:00", show: "D", watchTime: 40 },
        { time: "05:00", show: "E", watchTime: 25 },

        { time: "06:00", show: "A", watchTime: 40 },
        { time: "06:00", show: "B", watchTime: 30 },
        { time: "06:00", show: "C", watchTime: 70 },
        { time: "06:00", show: "D", watchTime: 40 },
        { time: "06:00", show: "E", watchTime: 85 },

        { time: "07:00", show: "A", watchTime: 50 },
        { time: "07:00", show: "B", watchTime: 60 },
        { time: "07:00", show: "C", watchTime: 80 },
        { time: "07:00", show: "D", watchTime: 10 },
        { time: "07:00", show: "E", watchTime: 65 },

        { time: "08:00", show: "A", watchTime: 60 },
        { time: "08:00", show: "B", watchTime: 70 },
        { time: "08:00", show: "C", watchTime: 90 },
        { time: "08:00", show: "D", watchTime: 40 },
        { time: "08:00", show: "E", watchTime: 25 },

        { time: "09:00", show: "A", watchTime: 60 },
        { time: "09:00", show: "B", watchTime: 70 },
        { time: "09:00", show: "C", watchTime: 90 },
        { time: "09:00", show: "D", watchTime: 40 },
        { time: "09:00", show: "E", watchTime: 25 },

        { time: "10:00", show: "A", watchTime: 50 },
        { time: "10:00", show: "B", watchTime: 10 },
        { time: "10:00", show: "C", watchTime: 30 },
        { time: "10:00", show: "D", watchTime: 60 },
        { time: "10:00", show: "E", watchTime: 45 },

        { time: "11:00", show: "A", watchTime: 40 },
        { time: "11:00", show: "B", watchTime: 30 },
        { time: "11:00", show: "C", watchTime: 70 },
        { time: "11:00", show: "D", watchTime: 40 },
        { time: "11:00", show: "E", watchTime: 85 },

        { time: "12:00", show: "A", watchTime: 65 },
        { time: "12:00", show: "B", watchTime: 43 },
        { time: "12:00", show: "C", watchTime: 45 },
        { time: "12:00", show: "D", watchTime: 26 },
        { time: "12:00", show: "E", watchTime: 19 },

        { time: "13:00", show: "A", watchTime: 63 },
        { time: "13:00", show: "B", watchTime: 120 },
        { time: "13:00", show: "C", watchTime: 110 },
        { time: "13:00", show: "D", watchTime: 100 },
        { time: "13:00", show: "E", watchTime: 79 },

        { time: "14:00", show: "A", watchTime: 95 },
        { time: "14:00", show: "B", watchTime: 120 },
        { time: "14:00", show: "C", watchTime: 110 },
        { time: "14:00", show: "D", watchTime: 70 },
        { time: "14:00", show: "E", watchTime: 80 },

        { time: "15:00", show: "A", watchTime: 35 },
        { time: "15:00", show: "B", watchTime: 75 },
        { time: "15:00", show: "C", watchTime: 55 },
        { time: "15:00", show: "D", watchTime: 100 },
        { time: "15:00", show: "E", watchTime: 80 },

        { time: "16:00", show: "A", watchTime: 75 },
        { time: "16:00", show: "B", watchTime: 20 },
        { time: "16:00", show: "C", watchTime: 10 },
        { time: "16:00", show: "D", watchTime: 70 },
        { time: "16:00", show: "E", watchTime: 20 },

        { time: "17:00", show: "A", watchTime: 68 },
        { time: "17:00", show: "B", watchTime: 40 },
        { time: "17:00", show: "C", watchTime: 80 },
        { time: "17:00", show: "D", watchTime: 20 },
        { time: "17:00", show: "E", watchTime: 90 },

        { time: "18:00", show: "A", watchTime: 35 },
        { time: "18:00", show: "B", watchTime: 75 },
        { time: "18:00", show: "C", watchTime: 55 },
        { time: "18:00", show: "D", watchTime: 100 },
        { time: "18:00", show: "E", watchTime: 80 },

        { time: "19:00", show: "A", watchTime: 65 },
        { time: "19:00", show: "B", watchTime: 43 },
        { time: "19:00", show: "C", watchTime: 45 },
        { time: "19:00", show: "D", watchTime: 26 },
        { time: "19:00", show: "E", watchTime: 19 },

        { time: "20:00", show: "A", watchTime: 63 },
        { time: "20:00", show: "B", watchTime: 120 },
        { time: "20:00", show: "C", watchTime: 110 },
        { time: "20:00", show: "D", watchTime: 100 },
        { time: "20:00", show: "E", watchTime: 79 },

        { time: "21:00", show: "A", watchTime: 95 },
        { time: "21:00", show: "B", watchTime: 120 },
        { time: "21:00", show: "C", watchTime: 110 },
        { time: "21:00", show: "D", watchTime: 70 },
        { time: "21:00", show: "E", watchTime: 80 },

        { time: "22:00", show: "A", watchTime: 80 },
        { time: "22:00", show: "B", watchTime: 79 },
        { time: "22:00", show: "C", watchTime: 95 },
        { time: "22:00", show: "D", watchTime: 105 },
        { time: "22:00", show: "E", watchTime: 115 },

        { time: "23:00", show: "A", watchTime: 50 },
        { time: "23:00", show: "B", watchTime: 60 },
        { time: "23:00", show: "C", watchTime: 80 },
        { time: "23:00", show: "D", watchTime: 10 },
        { time: "23:00", show: "E", watchTime: 65 },
    ];

    useLayoutEffect(() => {

        let timeZone = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
            "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
        let shows = ["A", "B", "C", "D", "E"];

        const svg = d3
            .select(svgRef.current)
            .attr("viewBox", "0 0 650 405")
            .classed("heat-map-svg", true)
            .append("g")
            .attr("transform", "translate(30,30)");


        let xScale = d3
            .scaleBand()
            .range([0, 400])
            .domain(timeZone)
            .padding(0.1);

        let yScale = d3
            .scaleBand()
            .range([100, 0])
            .domain(shows)
            .padding(0.1);

        let myColor = d3
            .scaleLinear()
            .range(["white", "#3E1F76"])
            .domain([1, 120]);

        svg
            .selectAll()
            .data(data, d => d.time + ':' + d.show)
            .enter()
            .append("rect")
            .attr("x", d => xScale(d.time))
            .attr("y", d => yScale(d.show))
            .attr("rx", 2)
            .attr("ry", 2)
            .attr("width", xScale.bandwidth())
            .attr("height", yScale.bandwidth())
            .style("fill", d => myColor(d.watchTime));

    }, []);

    return (
        <div className='heat-map-container'>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default HeatMap;