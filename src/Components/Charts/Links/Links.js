import React from "react";
import * as d3 from 'd3v4';
import { useEffect } from "react";


const Links = () => {
    const data = [{
        source: {
          x: -2.9799212566117377,
          y: -221.97999925512298
        },
        target: {
          x: -57.966610375613655,
          y: -94.66188293902567
        },
      }, {
        source: {
          x: -20.132399189515613,
          y: -221.08524713981706
        },
        target: {
          x: -57.966610375613655,
          y: -94.66188293902567
        },
      }];
      
    useEffect(() => {
        d3.select("svg")
        .attr("width", 600)
        .attr("height", 600)
        .append("g")
        .attr("transform", "translate(300, 300)")
        .selectAll("path.horizontal")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "horizontal")
        .attr("d", d3.linkHorizontal().x(d => d.x).y(d => d.y));
      
      function toRadial(p) {
        const angle = Math.atan2(p.y, p.x) + Math.PI / 2;
      
        // The hypothenuse
        const radius = Math.sqrt(p.x ** 2 + p.y ** 2);
      
        return {
          angle: angle,
          radius: radius
        };
      }
      const radialData = data.map(d => ({
        source: toRadial(d.source),
        target: toRadial(d.target),
      }));
      
      d3.select("g")
        .selectAll("path.radial")
        .data(radialData)
        .enter()
        .append("path")
        .attr("class", "radial")
        .attr("d", d3.linkRadial().angle(d => d.angle).radius(d => d.radius));
    }, [])

    return (
        <>
        <div>helloo</div>
        <svg></svg>
</>
    )
}

export default Links;