// import React from "react";

// import { width } from '@mui/system';
import { useRef } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import BarChart from '../../Charts/BarChart/BarChart';
import GuageChart from '../../Charts/GuageChart/GuageChart';
import './ProductQualityOfExperience.css';
import * as d3 from 'd3';

const ProductQualityOfExperience = () => {
    const wrapperRef = useRef();

    // let { width, height } = wrapperRef.current.getBoundingClientRect();
    return (
        <div className='product-qual-experience-cont'>
            <div className='product-qual-experience-subdiv'>
                <h5 className='product-qual-experience-subdiv-h5'>Start -up Experience</h5>
                <div className='product-qual-experience-subdiv-tile-cont'>
                    <div className='product-qual-experience-subdiv-tile'>
                        <p className='product-qual-experience-subdiv-tile-title'>Play %</p>
                        <p className='product-qual-experience-subdiv-tile-value'>80%</p>
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
                            <div className='product-qual-experience-subdiv-tile-chart-value-rhs' ref={wrapperRef}>
                                {/* Guage Chart */}
                                {/* <GuageChart /> */}
                                <ReactSpeedometer
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
                                />
                                {/* <FaceEmoji/> */}
                            </div>
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
                                {/* Guage Chart */}
                                {/* <GuageChart /> */}
                                <ReactSpeedometer
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

                                />
                            </div>
                        </div>
                    </div>
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
                                {/* Guage Chart */}
                                {/* <GuageChart /> */}
                                <ReactSpeedometer
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

                                />
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
                                {/* Guage Chart */}
                                {/* <GuageChart /> */}
                                <ReactSpeedometer
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

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='product-qual-experience-subdiv'>
                <h5 className='product-qual-experience-subdiv-h5'>Player Experience</h5>
                <div className='product-qual-experience-subdiv-tile-cont'>
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
                            <div className='product-qual-experience-subdiv-tile-chart-value-rhs' ref={wrapperRef}>
                                {/* Guage Chart */}
                                {/* <GuageChart /> */}
                                <ReactSpeedometer
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
                                />
                                {/* <FaceEmoji/> */}
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
                                {/* Guage Chart */}
                                {/* <GuageChart /> */}
                                <ReactSpeedometer
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

                                />
                            </div>
                        </div>
                    </div>
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
                                {/* Guage Chart */}
                                {/* <GuageChart /> */}
                                <ReactSpeedometer
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

                                />
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
                                {/* Guage Chart */}
                                {/* <GuageChart /> */}
                                <ReactSpeedometer
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

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <BarChart/> */}
        </div>
    )
}

const FaceEmoji = (props) => {

    // useLayoutEffect(()=>{

    // }, [])

    const width = 250, height = 150;
    const centerX = width / 2, centerY = height / 2;
    const mouthRadious = 65;
    const mouthWidth = 10;
    const xOffset = 50;
    const yOffset = 35;
    // const eyeRadious = 40;
    // const eyeOffSet = 100;
    let angle = 80;

    const mouthArcLeft = d3.arc()
        .innerRadius(mouthRadious + 10)
        .outerRadius(mouthRadious + mouthWidth + 10)
        .startAngle(-Math.PI / 2)
        .endAngle(-Math.PI / 6);

    const mouthArcMiddle = d3.arc()
        .innerRadius(mouthRadious + 10)
        .outerRadius(mouthRadious + mouthWidth + 10)
        .startAngle(-Math.PI / 6)
        .endAngle(Math.PI / 6);

    const mouthArcRight = d3.arc()
        .innerRadius(mouthRadious + 10)
        .outerRadius(mouthRadious + mouthWidth + 10)
        .startAngle(Math.PI / 6)
        .endAngle(Math.PI / 2);

    const mouthArcInnerOne = d3.arc()
        .innerRadius(0)
        .outerRadius(mouthRadious + 10)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2);

    const mouthArcInnerTwo = d3.arc()
        .innerRadius(mouthRadious - 9)
        .outerRadius(mouthRadious - 10)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2);

    let scale = d3.scaleLinear()
        .range([-90, 90])
        // .domain([config.minValue, config.maxValue]);
        .domain([1, 100]);

    const needleAngle = scale(angle);

    var pointerLine = d3.line().curve(d3.curveLinear);

    let innerArc = d3.select('.innerArc');


    const needle = innerArc.append('path')
        .classed('gaugeChart-needle', true)
        .attr('stroke-width', 10)
        .attr('d', `M ${centerX - 10 / 2} ${centerX}
                L ${centerX} ${0}
                L ${centerX + 10 / 2} ${centerX} Z`)
        .attr('transform', `rotate(${needleAngle} ${centerX} ${centerX})`)

    let cssNamedColorsCSV = [];

    d3.csv('./Datasets/CSS Named Colors.csv')
        .then(data => console.log('data', data));

    const innerArcText = d3.select('.innerArc')
        .append("text")
        .text('ab')

    // var lineData = [[config.pointerWidth / 2, 0],
    // [0, -pointerHeadLength],
    // [-(config.pointerWidth / 2), 0],
    // [0, config.pointerTailLength],
    // [config.pointerWidth / 2, 0]];

    var lineData = [[1, 0],
    [0, -110],
    [-(10 / 2), 0],
    [0, -3],
    [2, 0]];
    var pointerLine = d3.line().curve(d3.curveLinear)
    var pg = d3.select('svg')

        .append('g').data([lineData])
        .attr('class', 'pointer')
        .attr('transform', `translate(${centerX}, ${centerY})`);

    let pointer = pg.append('path')
        .attr('d', pointerLine/*function(d) { return pointerLine(d) +'Z';}*/)
        .attr('transform', 'rotate(' + -40 + ')');
    // console.log(cssNamedColorsCSV);

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${centerX}, ${centerY})`} className="innerArc">
                {/* <circle
                    r={100}
                    // cx={width / 2}
                    // cy={height / 2}
                    fill={"yellow"}
                    stroke={"black"}
                    strokeWidth={5}
                />
                <circle
                    r={25}
                    cx={-xOffset}
                    cy={-yOffset}
                />
                <circle
                    r={25}
                    cx={xOffset}
                    cy={-yOffset}
                /> */}
                <path d={mouthArcLeft()} fill={"#FF647C"} />
                <path d={mouthArcMiddle()} fill={"#FFC656"} />
                <path d={mouthArcRight()} fill={"#00C48C"} />
                <path d={mouthArcInnerOne()} fill={"#F1F1F1"} style={{ "zIndex": "100" }} />
                <path d={mouthArcInnerTwo()} fill={"#D8D8D8"} style={{ "zIndex": "100" }} />
            </g>
        </svg>
    )
}

export default ProductQualityOfExperience;