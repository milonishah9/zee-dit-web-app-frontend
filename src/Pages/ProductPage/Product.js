import React, { useState } from "react";
import "./Product.css";

const Product = () => {
  const [classed, setClassed] = useState("my-minuse-button");
  const handlePluseButtonClick = () => {
    setClassed('')
  };
  const handleMinuseButtonClick = () => {
    setClassed('my-pluse-button')
  };
  return (
    <div>
      <div className="product-engagement">
        <div>
          <h4>Charters</h4>
          <div></div>
        </div>
        <div className="product-engagement-tabs">
          <a href="#" className="product-engagement-anchor">
            <div className="product-engagement-div">Video</div>
          </a>
          <a href="#" className="product-engagement-anchor">
            <div className="product-engagement-div">Music</div>
          </a>
          <a href="#" className="product-engagement-anchor">
            <div className="product-engagement-div">Games</div>
          </a>
        </div>
        <div className="product-engagement-indicators-and-experiance d-flex flex-row">
          <div className="">
            <p className="">Key Performance Indicators</p>
            <div className="d-flex flex-row">
              <div className="product-engagement-card">
                <p>Watch Time</p>
                <div className={classed}>
                  <h2>322.6 Minutes</h2>
                  <p>6 % from last period</p>
                </div>
                {classed !== 'my-minuse-button' && <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                  onClick={handlePluseButtonClick}
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>}
                {classed === 'my-minuse-button' && <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-dash-circle"
                  viewBox="0 0 16 16"
                  onClick={handleMinuseButtonClick}
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>}
              </div>
              <div className="product-engagement-card">
                <p>Watch Time per Unique Viewer</p>
                <h2>42.8 Minutes</h2>
                <p>40% from last period</p>
              </div>
            </div>
          </div>
          <div className="">
            <p>Start-up Experience</p>
            <div className="d-flex flex-row">
              <div className="product-engagement-card">
                <p>Attempts (Mn)</p>
                <h2>58.48 Mn</h2>
                <p>31% from last period</p>
              </div>
              <div className="product-engagement-card">
                <p>Plays %</p>
                <h2>76.95%</h2>
                <p>16% from last period</p>
              </div>
              <div className="product-engagement-card">
                <p>Plays (Mn)</p>
                <h2>Plays (Mn)</h2>
                <p>11% from last period</p>
              </div>
            </div>
          </div>
          <div>
            <p>Playback Experience</p>
            <div className="d-flex flex-row">
              <div className="product-engagement-card">
                <p>Watch Time</p>
                <h2>322.6 Minutes</h2>
                <p>6 % from last period</p>
              </div>
              <div className="product-engagement-card">
                <p>Watch Time per Unique Viewer</p>
                <h2>42.8 Minutes</h2>
                <p>40% from last period</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
