import React from "react";
import './ProductQualityExperienceCard.css';
import GuageChart from "../../Charts/GuageChart/GuageChart";
import ProductQualityExperienceToggle from "./ProductQualityExperienceToggle";

const ProductQualityExperienceCard = () => {
    return(
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
                         </div>
    )
}

export default ProductQualityExperienceCard;