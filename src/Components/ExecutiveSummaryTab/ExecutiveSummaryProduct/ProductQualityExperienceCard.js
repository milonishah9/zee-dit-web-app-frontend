import React from "react";
import './ProductQualityExperienceCard.css';
import GuageChart from "../../Charts/GuageChart/GuageChart";
import ProductQualityExperienceToggle from "./ProductQualityExperienceToggle";

const ProductQualityExperienceCard = (props) => {
    const {mydata} = props

    console.log(mydata[3])
    return(
        <div className='product-qual-experience-subdiv-tile-left-grp'>
        <div className='product-qual-experience-subdiv-tile'>
                            <div className="product-data">
                            <p className='product-qual-experience-subdiv-tile-title'>{mydata[0] }
                            <div className='product-qual-experience-subdiv-tile-chart-value-valdiv'>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-date'>{mydata[1] }</p>
                                        <p className='product-qual-experience-subdiv-tile-chart-value-status-neg'>


                                            {mydata[3] === 'up' ?(
                                                <p className="up-line">{mydata[2]} ↑ from last month</p> 
                                            ):(
                                                <p className="down-line">{mydata[2]} ↓ from last month </p> 
                                            )}


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