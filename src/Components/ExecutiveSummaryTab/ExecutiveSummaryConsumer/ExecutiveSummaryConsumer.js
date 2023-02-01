import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SankeyChartForConsumer from "../../Charts/SankeyChart/SankeyChartForConsumer/SankeyChartForConsumer";
// import Sankey from "../../Charts/SankeyChart/RND";
// import Sankey from "../../Charts/SankeyChart/NewSankey/NewSankey";
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
        {/* <Sankey /> */}
        <SankeyChartForConsumer />
      </div>
      <div className="kpi-cards-container">
        <div className="kpi-cards-buttons">
          <button className="kpi-card-button-active">Aquisition</button>
          <button className="kpi-card-button">Onboarding</button>
          <button className="kpi-card-button">Discovery</button>
          <button className="kpi-card-button">Monetisation</button>
        </div>
        <div className="kpi-cards-values">
          <div className="kpi-card">
            <p className="kpi-card-title">Total Ads Requested</p>
            <div className="kpi-card-value">
              <p className="kpi-card-value-main">7500</p>
              <p className="kpi-card-perdiff-pos">
                8%
                <svg width="10" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.35355 0.646407C4.15829 0.451145 3.84171 0.451145 3.64645 0.646407L0.464467 3.82839C0.269204 4.02365 0.269204 4.34023 0.464466 4.53549C0.659729 4.73076 0.976311 4.73076 1.17157 4.53549L4 1.70707L6.82843 4.53549C7.02369 4.73076 7.34027 4.73076 7.53553 4.53549C7.7308 4.34023 7.7308 4.02365 7.53553 3.82839L4.35355 0.646407ZM4.5 7.69043L4.5 0.99996L3.5 0.99996L3.5 7.69043L4.5 7.69043Z" fill="#00C48C" />
                </svg>
              </p>
            </div>
          </div>

          <div className="kpi-card">
            <p className="kpi-card-title">Total Ads Requested</p>
            <div className="kpi-card-value">
              <p className="kpi-card-value-main">7500</p>
              <p className="kpi-card-perdiff-pos">
                8%
                <svg width="10" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.35355 0.646407C4.15829 0.451145 3.84171 0.451145 3.64645 0.646407L0.464467 3.82839C0.269204 4.02365 0.269204 4.34023 0.464466 4.53549C0.659729 4.73076 0.976311 4.73076 1.17157 4.53549L4 1.70707L6.82843 4.53549C7.02369 4.73076 7.34027 4.73076 7.53553 4.53549C7.7308 4.34023 7.7308 4.02365 7.53553 3.82839L4.35355 0.646407ZM4.5 7.69043L4.5 0.99996L3.5 0.99996L3.5 7.69043L4.5 7.69043Z" fill="#00C48C" />
                </svg>
              </p>
            </div>
          </div>

          <div className="kpi-card">
            <p className="kpi-card-title">Total Ads Requested</p>
            <div className="kpi-card-value">
              <p className="kpi-card-value-main">7500</p>
              <p className="kpi-card-perdiff-pos">
                8%
                <svg width="10" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.35355 0.646407C4.15829 0.451145 3.84171 0.451145 3.64645 0.646407L0.464467 3.82839C0.269204 4.02365 0.269204 4.34023 0.464466 4.53549C0.659729 4.73076 0.976311 4.73076 1.17157 4.53549L4 1.70707L6.82843 4.53549C7.02369 4.73076 7.34027 4.73076 7.53553 4.53549C7.7308 4.34023 7.7308 4.02365 7.53553 3.82839L4.35355 0.646407ZM4.5 7.69043L4.5 0.99996L3.5 0.99996L3.5 7.69043L4.5 7.69043Z" fill="#00C48C" />
                </svg>
              </p>
            </div>
          </div>

          <div className="kpi-card">
            <p className="kpi-card-title">Total Ads Requested</p>
            <div className="kpi-card-value">
              <p className="kpi-card-value-main">7500</p>
              <p className="kpi-card-perdiff-pos">
                8%
                <svg width="10" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.35355 0.646407C4.15829 0.451145 3.84171 0.451145 3.64645 0.646407L0.464467 3.82839C0.269204 4.02365 0.269204 4.34023 0.464466 4.53549C0.659729 4.73076 0.976311 4.73076 1.17157 4.53549L4 1.70707L6.82843 4.53549C7.02369 4.73076 7.34027 4.73076 7.53553 4.53549C7.7308 4.34023 7.7308 4.02365 7.53553 3.82839L4.35355 0.646407ZM4.5 7.69043L4.5 0.99996L3.5 0.99996L3.5 7.69043L4.5 7.69043Z" fill="#00C48C" />
                </svg>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ExecutiveSummaryConsumer;


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
