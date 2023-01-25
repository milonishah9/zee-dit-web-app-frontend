import React from "react";
import ReactDOM from "react-dom";
import HSBar from "react-horizontal-stacked-bar-chart";
import "./HSbar.css";


const HSbar = (props) => {
  var {data} = props;
  let total = 0;
  data.map((element, index) => {
    total += element.value
  })
  console.log(data);
  
    return (
      // <div className="hs-bar">
        <HSBar
          showTextIn
          data={data}
          className="hs-bar"
        />
      // </div>
    );
  }

export default HSbar;

