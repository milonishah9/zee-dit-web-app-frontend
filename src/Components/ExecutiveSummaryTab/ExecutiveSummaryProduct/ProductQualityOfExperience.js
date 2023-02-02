
// import ReactSpeedometer from 'react-d3-speedometer';
import { useState } from 'react';
import BarChart from '../../Charts/BarChart/BarChart';
import GuageChart from '../../Charts/GuageChart/GuageChart';
import ProductUserJourney from "./ProductUserJourney";
import './ProductQualityOfExperience.css';
import ProductQualityExperienceToggle from './ProductQualityExperienceToggle';

const ProductQualityOfExperience = () => {
    // let { width, height } = wrapperRef.current.getBoundingClientRect();


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
                         <ProductQualityExperienceToggle/>
                         </div>
                        <div className='product-qual-experience-subdiv-tile'>
                        <div className="product-data">
                            <p className='product-qual-experience-subdiv-tile-title'>Exit before Video Start %
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
                       
                        </p>
                            <div className='product-qual-experience-subdiv-tile-chart-value-rhs'>
                                    <GuageChart />
                            </div>
                        </div>
                       
                        <ProductQualityExperienceToggle />
                    </div>
                    </div>
                    <div className='product-qual-experience-subdiv-tile-right-grp'>
                        <div className='product-qual-experience-subdiv-tile'>
                            <div className='product-data'>
                            <p className='product-qual-experience-subdiv-tile-title'>Video Start Failure – Tech %
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
                            <ProductQualityExperienceToggle />
                        </div>
                        <div className='product-qual-experience-subdiv-tile'>
                            <div className='product-data'>
                            <p className='product-qual-experience-subdiv-tile-title'>Video Start Time
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
                            </p>
                            <div className='product-qual-experience-subdiv-tile-chart-value-rhs'>
                            <GuageChart />
                            </div>
                            </div>
                            <ProductQualityExperienceToggle />
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