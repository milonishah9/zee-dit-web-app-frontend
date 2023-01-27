import React, { useEffect, useState } from "react";
import './ExecutiveSummaryContentLinearContents.css'
import FrontBar from "../../Charts/BubbleChart/LinearBarchart/FrontBar";
import { useSelector } from "react-redux";
import { selectCount } from "../../../features/HoverValues";
import HSbar from "../../Charts/HSbar/HSbar";

const ExecutiveSummaryContentLinearContents = (props) => {
    const {chartData, buttonTab} = props;
    const hoverValue = useSelector(selectCount);
    const [toggleValue, setToggleValue] = useState();

    let myHoverClass = 'executive-summary-content-linear-contents-t-body-rows'
    // console.log(hoverValue);

    const handleToggleButton = (e) => {
        // console.log(e.target.checked);
        setToggleValue(e.target.checked)
    }

    var total = 500;
    let myTotal = total 
    return (
        <div className="executive-summary-content-linear-contents">
            {buttonTab !== 'linear' &&<div> 
                <div className="executive-summ-content-ott-indicators">
                    <p><label className="executive-summ-content-ott-blue-indicator"/>SAWF Viewers</p>
                    <p><label className="executive-summ-content-ott-yellow-indicator"/>Returning Viewers</p>
                    <p><label className="executive-summ-content-ott-darkblue-indicator"/>Remaining Viewers</p>
                </div>
                <div className="ott-toggle">
                    <p>Sort by</p>
                    <label>Absolute Value</label>
                    <input type="checkbox" onClick={handleToggleButton}></input>
                    <label>% Change</label>
                </div>
            </div>
            }
            <div className="executive-summary-content-linear-contents-headers">
            {buttonTab === 'linear' ? (<h6 className="executive-summary-content-linear-contents-header">Reach & Ratings</h6>):(<h6 className="executive-summary-content-linear-contents-header">Viewers & %Completion</h6>)}
                <h6 className="executive-summary-content-linear-contents-header">Impact on Consumer Journey</h6>
                <h6 className="executive-summary-content-linear-contents-header">Impact on Monetization</h6>
            </div>
            <table className="executive-summary-content-linear-contents-table">
                <thead className="executive-summary-content-linear-contents-t-headers">
                    
                    {buttonTab === 'linear' ?(
                        <tr>
                        <th className="executive-summary-content-linear-contents-t-shows-header">Shows</th>
                        <th className="executive-summary-content-linear-contents-t-header">Reach ‘000</th>
                        <th className="executive-summary-content-linear-contents-t-header">GRP</th>
                        <th className="executive-summary-content-linear-contents-t-header">Reach %<span className="exe-sum-lin-con-h-lbr">(Acquisition)</span></th>
                        <th className="executive-summary-content-linear-contents-t-header">TSV<span className="exe-sum-lin-con-h-lbr">(M min.) (Engagement)</span></th>
                        <th className="executive-summary-content-linear-contents-t-header">GRP Adbreak</th>
                    </tr>
                    ):(
                        <tr>
                        <th className="executive-summary-content-linear-contents-t-shows-header">Web Series</th>
                        <th className="executive-summary-content-linear-contents-t-header">Viewers</th>
                        <th className="executive-summary-content-linear-contents-t-header">Viewers(>1 min watched)</th>
                        <th className="executive-summary-content-linear-contents-t-header">Viewers(>75% min watched)</th>
                        <th className="executive-summary-content-linear-contents-t-header">Watch Duration(M min.)</th>
                        <th className="executive-summary-content-linear-contents-t-header">#SAWF Subscriptions</th>
                    </tr>
                    )}
                </thead>
                <tbody className="executive-summary-content-linear-contents-t-body">
                    {chartData.map((element, index) => {
                        if(hoverValue === element.Name){
                            myHoverClass = 'my-row-bubble-hover'
                        }else{
                            myHoverClass = 'executive-summary-content-linear-contents-t-body-rows'
                        }
                        return(
                            <tr key={index} className={myHoverClass}>
                                <td>{element.Name}</td>
                                {element.arr.map((data, index) => {
                                    if(typeof(data) === 'number'){
                                        if(toggleValue === true){
                                            data = ((data/myTotal)*100).toFixed(0)
                                            total = 100 
                                            return <td key={index}><FrontBar data={data} total={total} toggleValue={toggleValue}/></td>
                                        }else{
                                            return <td key={index}><FrontBar data={data} total={total} toggleValue={toggleValue}/></td>
                                        }
                                        
                                    }else{
                                        // let total = 0 
                                        // let totalValueArr = [];
                                        // for(let i=0; i<data.length; i++){
                                        //     total += data[i].value
                                        // }
                                        // totalValueArr.push(total)
                                        // console.log(totalValueArr)
                                        return <td key={index}><HSbar data={data}  toggleValue={toggleValue}/></td>
                                    }
                                    
                                })}
                            </tr>
                        )
                        
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default ExecutiveSummaryContentLinearContents;