
// import ReactSpeedometer from 'react-d3-speedometer';
import { useState } from 'react';
import BarChart from '../../Charts/BarChart/BarChart';
import GuageChart from '../../Charts/GuageChart/GuageChart';

import './ProductQualityOfExperience.css';

const ProductQualityOfExperience = () => {
    // let { width, height } = wrapperRef.current.getBoundingClientRect();
    const [classed, setClassed] = useState("my-minuse-button");

  const handlePluseButtonClick = () => {
    setClassed("my-pluse-button");
  };
  const handleMinuseButtonClick = () => {
    setClassed("my-minuse-button");
  };
  
    return (
        <div className='product-qual-experience-cont'>
            <div className='product-qual-experience-subdiv'>
                <h5 className='product-qual-experience-subdiv-h5'>Start -up Experience</h5>
                <div className='product-qual-experience-subdiv-tile-cont'>
                    <div className='product-qual-experience-subdiv-tile-left-grp'>
                        <div className='product-qual-experience-subdiv-tile'>
                            <div className="product-data">
                            <p className='product-qual-experience-subdiv-tile-title'>Play %
                            <div className='product-qual-experience-subdiv-tile-chart-value-valdiv'>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-date'>Month - 1 to 30, Jun</p>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-status-neg'>
                                            12%
                                            <svg
                                                width="8"
                                                height="8"
                                                viewBox="0 0 8 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.64645 7.60617C3.84171 7.80143 4.15829 7.80144 4.35355 7.60617L7.53553 4.42419C7.7308 4.22893 7.7308 3.91235 7.53553 3.71709C7.34027 3.52182 7.02369 3.52182 6.82843 3.71709L4 6.54551L1.17157 3.71709C0.976311 3.52182 0.659728 3.52182 0.464466 3.71709C0.269204 3.91235 0.269204 4.22893 0.464466 4.42419L3.64645 7.60617ZM3.5 0.0488281L3.5 7.25262L4.5 7.25262L4.5 0.0488281L3.5 0.0488281Z"
                                                    fill="#FF647C" />
                                            </svg>
                                            from last month
                                        </p>
                                    </div>
                            </p>
                            <div className='product-qual-experience-subdiv-tile-chart-value-rhs'>
                                    <GuageChart />
                            </div>
                            
                            </div>

                            <div className={classed}>
        <div className="product-icons">
          <div className="product-icons-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#37b363"
            class="bi bi-android2"
            viewBox="0 0 16 16"
          >
            <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z" />
          </svg>
          <p>10%</p>
          </div>
          <div className="product-icons-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="gray"
            class="bi bi-apple "
            viewBox="0 0 16 16"
          >
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
          </svg>
          <p>20%</p>
          </div>
          <div className="product-icons-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#328ee9"
            class="bi bi-calendar-event"
            viewBox="0 0 16 16"
          >
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          <p>30%</p>
          </div>
          <div className="product-icons-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#328ee9"
            class="bi bi-calendar-event"
            viewBox="0 0 16 16"
          >
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          <p>30%</p>
          </div>
          <div className="product-icons-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#328ee9"
            class="bi bi-calendar-event"
            viewBox="0 0 16 16"
          >
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          <p>30%</p>
          </div>
        </div>
      </div>

                            {/* <p className='product-qual-experience-subdiv-tile-value'>80%</p> */}
                                <div>
                                {classed === "my-minuse-button" ? (
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-dash-circle  my-button2"
                                    viewBox="0 0 16 16"
                                    onClick={handlePluseButtonClick}
                                  >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                  </svg>
                                ):(
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-plus-circle  my-button2"
                                    viewBox="0 0 16 16"
                                    onClick={handleMinuseButtonClick}
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                                )}
                            </div>


                        </div>
                        <div className='product-qual-experience-subdiv-tile'>
                            <p className='product-qual-experience-subdiv-tile-title'>Exit before Video Start %</p>
                            <p className='product-qual-experience-subdiv-tile-value'>12%</p>
                            <div className='product-qual-experience-subdiv-tile-chart-value'>
                                <div className='product-qual-experience-subdiv-tile-chart-value-lhs'>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-valdiv'>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-date'>Month - 1 to 30, Jun</p>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-status-pos'>
                                            23%
                                            {/* <svg
                                            width="8"
                                            height="8"
                                            viewBox="0 0 8 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.64645 7.60617C3.84171 7.80143 4.15829 7.80144 4.35355 7.60617L7.53553 4.42419C7.7308 4.22893 7.7308 3.91235 7.53553 3.71709C7.34027 3.52182 7.02369 3.52182 6.82843 3.71709L4 6.54551L1.17157 3.71709C0.976311 3.52182 0.659728 3.52182 0.464466 3.71709C0.269204 3.91235 0.269204 4.22893 0.464466 4.42419L3.64645 7.60617ZM3.5 0.0488281L3.5 7.25262L4.5 7.25262L4.5 0.0488281L3.5 0.0488281Z"
                                                fill="#FF647C" />
                                        </svg> */}
                                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.35355 0.695585C4.15829 0.500323 3.84171 0.500323 3.64645 0.695585L0.464466 3.87757C0.269204 4.07283 0.269204 4.38941 0.464466 4.58467C0.659728 4.77993 0.976311 4.77993 1.17157 4.58467L4 1.75625L6.82843 4.58467C7.02369 4.77993 7.34027 4.77993 7.53553 4.58467C7.7308 4.38941 7.7308 4.07283 7.53553 3.87757L4.35355 0.695585ZM4.5 8.25293L4.5 1.04914L3.5 1.04914L3.5 8.25293L4.5 8.25293Z" fill="#00C48C" />
                                            </svg>

                                            from last month
                                        </p>
                                    </div>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-barchart'>
                                        {/* Bar Chart */}
                                        <BarChart />
                                    </div>
                                </div>
                                <div className='product-qual-experience-subdiv-tile-chart-value-rhs'>
                                    <GuageChart />
                                    {/* <ReactSpeedometer
                                    maxValue={100}
                                    value={12}
                                    needleColor="black"
                                    // startColor="#FF647C"
                                    segments={3}
                                    // endColor="blue"
                                    segmentColors={[
                                        "#FF647C",
                                        "#FFC656",
                                        "#00C48C"
                                    ]}
                                    // fluidWidth={true}
                                    width={240}
                                    height={125}
                                    ringWidth={15}
                                    // valueTextFontSize={0}
                                    labelFontSize={0}

                                /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product-qual-experience-subdiv-tile-right-grp'>
                        <div className='product-qual-experience-subdiv-tile'>
                            <p className='product-qual-experience-subdiv-tile-title'>Video Start Failure – Tech %</p>
                            <p className='product-qual-experience-subdiv-tile-value'>08%</p>
                            <div className='product-qual-experience-subdiv-tile-chart-value'>
                                <div className='product-qual-experience-subdiv-tile-chart-value-lhs'>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-valdiv'>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-date'>Month - 1 to 30, Jun</p>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-status-neg'>
                                            12%
                                            <svg
                                                width="8"
                                                height="8"
                                                viewBox="0 0 8 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.64645 7.60617C3.84171 7.80143 4.15829 7.80144 4.35355 7.60617L7.53553 4.42419C7.7308 4.22893 7.7308 3.91235 7.53553 3.71709C7.34027 3.52182 7.02369 3.52182 6.82843 3.71709L4 6.54551L1.17157 3.71709C0.976311 3.52182 0.659728 3.52182 0.464466 3.71709C0.269204 3.91235 0.269204 4.22893 0.464466 4.42419L3.64645 7.60617ZM3.5 0.0488281L3.5 7.25262L4.5 7.25262L4.5 0.0488281L3.5 0.0488281Z"
                                                    fill="#FF647C" />
                                            </svg>
                                            from last month
                                        </p>
                                    </div>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-barchart'>
                                        {/* Bar Chart */}
                                        <BarChart />
                                    </div>
                                </div>
                                <div className='product-qual-experience-subdiv-tile-chart-value-rhs'>
                                    <GuageChart />
                                    {/* <ReactSpeedometer
                                    maxValue={100}
                                    value={12}
                                    needleColor="black"
                                    // startColor="#FF647C"
                                    segments={3}
                                    // endColor="blue"
                                    segmentColors={[
                                        "#FF647C",
                                        "#FFC656",
                                        "#00C48C"
                                    ]}
                                    // fluidWidth={true}
                                    width={240}
                                    height={125}
                                    ringWidth={15}
                                    // valueTextFontSize={0}
                                    labelFontSize={0}

                                /> */}
                                </div>
                            </div>
                        </div>
                        <div className='product-qual-experience-subdiv-tile'>
                            <p className='product-qual-experience-subdiv-tile-title'>Video Start Time</p>
                            <p className='product-qual-experience-subdiv-tile-value'>2.34</p>
                            <div className='product-qual-experience-subdiv-tile-chart-value'>
                                <div className='product-qual-experience-subdiv-tile-chart-value-lhs'>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-valdiv'>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-date'>Month - 1 to 30, Jun</p>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-status-pos'>
                                            34%
                                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.35355 0.695585C4.15829 0.500323 3.84171 0.500323 3.64645 0.695585L0.464466 3.87757C0.269204 4.07283 0.269204 4.38941 0.464466 4.58467C0.659728 4.77993 0.976311 4.77993 1.17157 4.58467L4 1.75625L6.82843 4.58467C7.02369 4.77993 7.34027 4.77993 7.53553 4.58467C7.7308 4.38941 7.7308 4.07283 7.53553 3.87757L4.35355 0.695585ZM4.5 8.25293L4.5 1.04914L3.5 1.04914L3.5 8.25293L4.5 8.25293Z" fill="#00C48C" />
                                            </svg>
                                            from last month
                                        </p>
                                    </div>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-barchart'>
                                        {/* Bar Chart */}
                                        <BarChart />
                                    </div>
                                </div>
                                <div className='product-qual-experience-subdiv-tile-chart-value-rhs'>
                                    <GuageChart />
                                    {/* <ReactSpeedometer
                                    maxValue={100}
                                    value={12}
                                    needleColor="black"
                                    // startColor="#FF647C"
                                    segments={3}
                                    // endColor="blue"
                                    segmentColors={[
                                        "#FF647C",
                                        "#FFC656",
                                        "#00C48C"
                                    ]}
                                    // fluidWidth={true}
                                    width={240}
                                    height={125}
                                    ringWidth={15}
                                    // valueTextFontSize={0}
                                    labelFontSize={0}

                                /> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className='product-qual-experience-subdiv'>
                <h5 className='product-qual-experience-subdiv-h5'>Player Experience</h5>
                <div className='product-qual-experience-subdiv-tile-cont'>
                    <div className='product-qual-experience-subdiv-tile-left-grp'>
                        <div className='product-qual-experience-subdiv-tile'>
                            <p className='product-qual-experience-subdiv-tile-title'>Rebuffering Ratio %</p>
                            <p className='product-qual-experience-subdiv-tile-value'>14%</p>
                            <div className='product-qual-experience-subdiv-tile-chart-value'>
                                <div className='product-qual-experience-subdiv-tile-chart-value-lhs'>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-valdiv'>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-date'>Month - 1 to 30, Jun</p>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-status-neg'>
                                            12%
                                            <svg
                                                width="8"
                                                height="8"
                                                viewBox="0 0 8 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.64645 7.60617C3.84171 7.80143 4.15829 7.80144 4.35355 7.60617L7.53553 4.42419C7.7308 4.22893 7.7308 3.91235 7.53553 3.71709C7.34027 3.52182 7.02369 3.52182 6.82843 3.71709L4 6.54551L1.17157 3.71709C0.976311 3.52182 0.659728 3.52182 0.464466 3.71709C0.269204 3.91235 0.269204 4.22893 0.464466 4.42419L3.64645 7.60617ZM3.5 0.0488281L3.5 7.25262L4.5 7.25262L4.5 0.0488281L3.5 0.0488281Z"
                                                    fill="#FF647C" />
                                            </svg>
                                            from last month
                                        </p>
                                    </div>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-barchart'>
                                        {/* Bar Chart */}
                                        <BarChart />
                                    </div>
                                </div>
                                <div className='product-qual-experience-subdiv-tile-chart-value-rhs'    >
                                    <GuageChart />
                                    {/* <ReactSpeedometer
                                    maxValue={100}
                                    value={12}
                                    needleColor="black"
                                    // startColor="#FF647C"
                                    segments={3}
                                    // endColor="blue"
                                    segmentColors={[
                                        "#FF647C",
                                        "#FFC656",
                                        "#00C48C"
                                    ]}
                                    // fluidWidth={true}
                                    width={240}
                                    height={125}
                                    ringWidth={15}
                                    // valueTextFontSize={0}
                                    labelFontSize={0}
                                /> */}
                                </div>
                            </div>
                        </div>
                        <div className='product-qual-experience-subdiv-tile'>
                            <p className='product-qual-experience-subdiv-tile-title'>Connection Induced Rebuffering Ratio %</p>
                            <p className='product-qual-experience-subdiv-tile-value'>07%</p>
                            <div className='product-qual-experience-subdiv-tile-chart-value'>
                                <div className='product-qual-experience-subdiv-tile-chart-value-lhs'>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-valdiv'>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-date'>Month - 1 to 30, Jun</p>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-status-pos'>
                                            23%
                                            {/* <svg
                                            width="8"
                                            height="8"
                                            viewBox="0 0 8 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.64645 7.60617C3.84171 7.80143 4.15829 7.80144 4.35355 7.60617L7.53553 4.42419C7.7308 4.22893 7.7308 3.91235 7.53553 3.71709C7.34027 3.52182 7.02369 3.52182 6.82843 3.71709L4 6.54551L1.17157 3.71709C0.976311 3.52182 0.659728 3.52182 0.464466 3.71709C0.269204 3.91235 0.269204 4.22893 0.464466 4.42419L3.64645 7.60617ZM3.5 0.0488281L3.5 7.25262L4.5 7.25262L4.5 0.0488281L3.5 0.0488281Z"
                                                fill="#FF647C" />
                                        </svg> */}
                                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.35355 0.695585C4.15829 0.500323 3.84171 0.500323 3.64645 0.695585L0.464466 3.87757C0.269204 4.07283 0.269204 4.38941 0.464466 4.58467C0.659728 4.77993 0.976311 4.77993 1.17157 4.58467L4 1.75625L6.82843 4.58467C7.02369 4.77993 7.34027 4.77993 7.53553 4.58467C7.7308 4.38941 7.7308 4.07283 7.53553 3.87757L4.35355 0.695585ZM4.5 8.25293L4.5 1.04914L3.5 1.04914L3.5 8.25293L4.5 8.25293Z" fill="#00C48C" />
                                            </svg>

                                            from last month
                                        </p>
                                    </div>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-barchart'>
                                        {/* Bar Chart */}
                                        <BarChart />
                                    </div>
                                </div>
                                <div className='product-qual-experience-subdiv-tile-chart-value-rhs'>
                                    <GuageChart />
                                    {/* <ReactSpeedometer
                                    maxValue={100}
                                    value={12}
                                    needleColor="black"
                                    // startColor="#FF647C"
                                    segments={3}
                                    // endColor="blue"
                                    segmentColors={[
                                        "#FF647C",
                                        "#FFC656",
                                        "#00C48C"
                                    ]}
                                    // fluidWidth={true}
                                    width={240}
                                    height={125}
                                    ringWidth={15}
                                    // valueTextFontSize={0}
                                    labelFontSize={0}

                                /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product-qual-experience-subdiv-tile-right-grp'>
                        <div className='product-qual-experience-subdiv-tile'>
                            <p className='product-qual-experience-subdiv-tile-title'>SPI</p>
                            <p className='product-qual-experience-subdiv-tile-value'>0.8%</p>
                            <div className='product-qual-experience-subdiv-tile-chart-value'>
                                <div className='product-qual-experience-subdiv-tile-chart-value-lhs'>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-valdiv'>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-date'>Month - 1 to 30, Jun</p>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-status-neg'>
                                            12%
                                            <svg
                                                width="8"
                                                height="8"
                                                viewBox="0 0 8 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.64645 7.60617C3.84171 7.80143 4.15829 7.80144 4.35355 7.60617L7.53553 4.42419C7.7308 4.22893 7.7308 3.91235 7.53553 3.71709C7.34027 3.52182 7.02369 3.52182 6.82843 3.71709L4 6.54551L1.17157 3.71709C0.976311 3.52182 0.659728 3.52182 0.464466 3.71709C0.269204 3.91235 0.269204 4.22893 0.464466 4.42419L3.64645 7.60617ZM3.5 0.0488281L3.5 7.25262L4.5 7.25262L4.5 0.0488281L3.5 0.0488281Z"
                                                    fill="#FF647C" />
                                            </svg>
                                            from last month
                                        </p>
                                    </div>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-barchart'>
                                        {/* Bar Chart */}
                                        <BarChart />
                                    </div>
                                </div>
                                <div className='product-qual-experience-subdiv-tile-chart-value-rhs'>
                                    <GuageChart />
                                    {/* <ReactSpeedometer
                                    maxValue={100}
                                    value={12}
                                    needleColor="black"
                                    // startColor="#FF647C"
                                    segments={3}
                                    // endColor="blue"
                                    segmentColors={[
                                        "#FF647C",
                                        "#FFC656",
                                        "#00C48C"
                                    ]}
                                    // fluidWidth={true}
                                    width={240}
                                    height={125}
                                    ringWidth={15}
                                    // valueTextFontSize={0}
                                    labelFontSize={0}

                                /> */}
                                </div>
                            </div>
                        </div>
                        <div className='product-qual-experience-subdiv-tile'>
                            <p className='product-qual-experience-subdiv-tile-title'>Video Playback Failure- Tech %</p>
                            <p className='product-qual-experience-subdiv-tile-value'>18%</p>
                            <div className='product-qual-experience-subdiv-tile-chart-value'>
                                <div className='product-qual-experience-subdiv-tile-chart-value-lhs'>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-valdiv'>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-date'>Month - 1 to 30, Jun</p>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-status-pos'>
                                            34%
                                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.35355 0.695585C4.15829 0.500323 3.84171 0.500323 3.64645 0.695585L0.464466 3.87757C0.269204 4.07283 0.269204 4.38941 0.464466 4.58467C0.659728 4.77993 0.976311 4.77993 1.17157 4.58467L4 1.75625L6.82843 4.58467C7.02369 4.77993 7.34027 4.77993 7.53553 4.58467C7.7308 4.38941 7.7308 4.07283 7.53553 3.87757L4.35355 0.695585ZM4.5 8.25293L4.5 1.04914L3.5 1.04914L3.5 8.25293L4.5 8.25293Z" fill="#00C48C" />
                                            </svg>
                                            from last month
                                        </p>
                                    </div>
                                    <div className='product-qual-experience-subdiv-tile-chart-value-barchart'>
                                        {/* Bar Chart */}
                                        <BarChart />
                                    </div>
                                </div>
                                <div className='product-qual-experience-subdiv-tile-chart-value-rhs'>
                                    <GuageChart />
                                    {/* <ReactSpeedometer
                                    maxValue={100}
                                    value={12}
                                    needleColor="black"
                                    // startColor="#FF647C"
                                    segments={3}
                                    // endColor="blue"
                                    segmentColors={[
                                        "#FF647C",
                                        "#FFC656",
                                        "#00C48C"
                                    ]}
                                    // fluidWidth={true}
                                    width={240}
                                    height={125}
                                    ringWidth={15}
                                    // valueTextFontSize={0}
                                    labelFontSize={0}

                                /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductQualityOfExperience;