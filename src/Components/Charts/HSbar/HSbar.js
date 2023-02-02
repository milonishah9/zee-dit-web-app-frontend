import React from "react";
import HSBar from "react-horizontal-stacked-bar-chart";
import "./HSbar.css";

const HSbar = (props) => {
  var {data,totalValueArr} = props;
  console.log(data);
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
        />
        <span className="ttlval">{totalValueArr}</span>
      </div>
    );
  }

export default HSbar;

