import React from "react";
import ReactDOM from "react-dom";
import HSBar from "react-horizontal-stacked-bar-chart";

import "./styles.css";


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <div className="App">

        <HSBar
          showTextIn
          data={[
            { value: 10000, description: "10.000" },
            { value: 5000, description: "5.000" },
            { value: 3000, description: "3.000" }
          ]}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

