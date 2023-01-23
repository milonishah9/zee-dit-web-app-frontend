import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Sankey from "../../Charts/SankeyChart/CallSankey";
import "./ExecutiveSummaryConsumer.css"


const ExecutiveSummaryConsumer = (props) => {

  const [data, setData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ozlongblack/d3/master/energy.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <div>
        {/* <button onClick={() => setEditMode(!editMode)}>Edit Mode</button> */}
      </div>
      <div className="sankey">
        <Sankey data={data} edit={editMode} />
      </div>
    </div>
  );
}

export default ExecutiveSummaryConsumer;


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
