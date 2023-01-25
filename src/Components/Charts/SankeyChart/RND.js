import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3-sankey";
import * as d33 from "d3";
import RNDIMAGE from "./RNDimage.png";
import "./RND.css"

const RND = props => {
  
  const [data, setData] = useState(null);
  const baseURL = 'http://20.219.91.228:5000/';

  
  useEffect(() => {

    fetch(baseURL + 'organic-data-api')
      .then(res => res.json())
      .then(data => setData(data));
      
      console.log('Clickss', data);
      
    }, []);


    const imageClick1 = () => {
      console.log('Click');

      } 

    const imageClick2 = () => {
        console.log('Click');
    } 

    return (
        <div className="App">
          <div className="sankeys">
            <img className="image" src={RNDIMAGE} useMap="#planetmap" />
            {/* <map id="planetmap" name="planetmap">
                <area className="button" onClick={() => imageClick1()} alt="ORGANIC" title= {data && data[0].ORGANIC}  coords="26,220,7" shape="circle" /> 
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
            </map> */}

            {data && <div className="org text">
              <label> {data[0].ORGANIC} </label>
            </div>}

            {data && <div className="new text">
              <label> {data[0].NEW} </label>
            </div>}

            {data && <div className="paid text">
              <label> {data[0].PAID} </label>
            </div>}

            {data && <div className="ret text">
              <label> {data[0].RETURNING} </label>
            </div>}

            {data && <div className="ano text">
              <label> {data[0].ANONYMOUS} </label>
            </div>}


            {data && <div className="sin text">
              <label> {data[0].SIGNUP} </label>
            </div>}

            
            {data && <div className="exp text">
              <label> {data[0].EXPLORE} </label>
            </div>}

            
            {data && <div className="search text">
              <label> {data[0].SEARCH} </label>
            </div>}

            
            {data && <div className="sub text">
              <label> {data[0].SUBSCRIBED} </label>
            </div>}

            
            {data && <div className="wa text">
              <label> {data[0].WATCHADS} </label>
            </div>}

            
            {data && <div className="wpc text">
              <label> {data[0].WATCHPREMIUMCONTENT} </label>
            </div>}

            {data && <div className="wfc text">
              <label> {data[0].WATCHFREECONTENT} </label>
            </div>}





          </div>



        <div className="footer ">
         

        {/* {data && data.map((key, value, index) =>
             (<div className="box1" key={index}>
              <div className="title">
                {value.key.map((element)=>{
                  return(
                    <label>{element}</label> 
                  )
                })}
              </div>
              <div className="num">
                <label >{value}</label>
              </div>
            </div>)
        )}
             */}

        </div>


        </div>

      );
}

export default RND;
