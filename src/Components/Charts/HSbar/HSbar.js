import React from "react";
import ReactDOM from "react-dom";
import HSBar from "react-horizontal-stacked-bar-chart";
import "./HSbar.css";


const HSbar = (props) => {
  const {data} = props;
  
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

