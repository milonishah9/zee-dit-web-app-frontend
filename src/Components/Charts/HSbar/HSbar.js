import React from "react";
import ReactDOM from "react-dom";
import HSBar from "react-horizontal-stacked-bar-chart";
import "./HSbar.css";


const HSbar = (props) => {
<<<<<<< Updated upstream
  var {data,totalValueArr} = props;
  let total = 0;
  let totalValue = []
  console.log(totalValueArr);
  // totalValue.push(data.map(element => {
    
  //   return total += element.value;
  //   // totalValue.push(total)
  // }));
=======
  var {data} = props;
  
>>>>>>> Stashed changes
  // let total = 0;
  // data.map((element, index) => {
  //   total += element.value
  // })
<<<<<<< Updated upstream
  // console.log(totalValue);
  // console.log(data);
=======
  console.log(data);
  
>>>>>>> Stashed changes
    return (
      <div className="hs-bar">
        <HSBar
          showTextIn
          data={data}
          className="hs-bar"
        />
<<<<<<< Updated upstream
        <span className="ttlval">{totalValueArr}</span>
=======
>>>>>>> Stashed changes
      </div>
    );
  }

export default HSbar;

