import React from "react";
import ReactDOM from "react-dom";
import HSBar from "react-horizontal-stacked-bar-chart";
import "./HSbar.css";


const HSbar = (props) => {
  var {data,totalValueArr} = props;
  // let total = 0;
  // let totalValue = []
  // console.log(totalValueArr);
  // totalValue.push(data.map(element => {
    
  //   return total += element.value;
  //   // totalValue.push(total)
  // }));
  // let total = 0;
  // data.map((element, index) => {
  //   total += element.value
  // })
  // console.log(totalValue);
  // console.log(data);
    return (
      <div className="hs-bar">
        <HSBar
          showTextIn
          data={data}
          // className="hs-bar"
        />
        <span className="ttlval">{totalValueArr}</span>
      </div>
    );
  }

export default HSbar;

