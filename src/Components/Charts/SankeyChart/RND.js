import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3-sankey";
import * as d33 from "d3";
import RNDIMAGE from "./RNDimage.png";
import "./RND.css"

const RND = props => {

    const imageClick1 = () => {
        console.log('Click');
      } 

    const imageClick2 = () => {
        console.log('Click');
    } 

    return (
        <div className="App">
          <div className="sankeys">
            <img className="image" src={RNDIMAGE} usemap="#planetmap" />
            <map id="planetmap" name="planetmap">
                <area className="button" onClick={() => imageClick1()} alt="ORGANIC" title="ORGANIC" coords="26,220,7" shape="circle" />
                <area className="button" onClick={() => imageClick2()} target="" alt="PAID" title="PAID" coords="26,516,8" shape="circle" />
                <area target="" alt="RETURNING" title="RETURNING" coords="185,272,6" shape="circle" />
                <area target="" alt="NEW" title="NEW" coords="183,480,6" shape="circle" />
                <area target="" alt="ANONYMOUS" title="ANONYMOUS" coords="311,222,7" shape="circle" />
                <area target="" alt="SIGN UP" title="SIGN UP" coords="311,516,7" shape="circle" />
                <area target="" alt="EXPLORE" title="EXPLORE" coords="511,273,7" shape="circle" />
                <area target="" alt="SEARCH" title="SEARCH" coords="511,480,7" shape="circle" />
                <area target="" alt="SUBSCRIBED" title="SUBSCRIBED" coords="699,317,7" shape="circle" />
                <area target="" alt="WATCH ADS" title="WATCH ADS" coords="699,447,7" shape="circle" />
                <area target="" alt="WATCH PREMIUM CONTENT" title="WATCH PREMIUM CONTENT"  coords="898,339,8" shape="circle" />
                <area target="" alt="WATCH FREE CONTENT" title="WATCH FREE CONTENT"  coords="898,398,5" shape="circle" />
            </map>
          </div>

        <div>
            Note: Numbers are for representitive purpose only
            <hr />

        </div>

        </div>

      );
}

export default RND;
