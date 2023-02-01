import React, { useEffect, useState } from "react";
import './ExecutiveSummaryContentLinearContents.css'
import FrontBar from "../../Charts/BubbleChart/LinearBarchart/FrontBar";
import { useSelector } from "react-redux";
import { selectCount } from "../../../features/HoverValues";
import HSbar from "../../Charts/HSbar/HSbar";
import DivergingSB from "../../Charts/DivergingSB/DivergingSB";

const ExecutiveSummaryContentLinearContents = (props) => {
    const {chartData, buttonTab} = props;
    const hoverValue = useSelector(selectCount);
    const [toggleValue, setToggleValue] = useState();

    var data = [{
        category: " ",
        negative1: -13,
        negative2: -23,
        positive1: 49,
        positive2: 25
    }];

    let myHoverClass = 'executive-summary-content-linear-contents-t-body-rows'
    // console.log(hoverValue);

      let sortedFiles = chartData.sort((r1, r2) =>
            r1.value > r2.value ? 1 : r1.value < r2.value ? -1 : 0
        );

        console.log('sdf',sortedFiles)

    const handleToggleButton = (e) => {
        // console.log(e.target.checked);
        setToggleValue(e.target.checked)
    }

    var total = 500;
    let myTotal = total 
    return (
        <div className="executive-summary-content-linear-contents">
            
            {buttonTab !== 'linear' &&<div> 
                {/* <div className="executive-summ-content-ott-indicators">
                    <p><label className="executive-summ-content-ott-blue-indicator"/>SAWF Viewers</p>
                    <p><label className="executive-summ-content-ott-yellow-indicator"/>Returning Viewers</p>
                    <p><label className="executive-summ-content-ott-darkblue-indicator"/>Remaining Viewers</p>
                </div> */}
                <div className="ott-toggle">
                    <label> <b className="text"> Absolute Value</b></label>
                    <input type="checkbox" onClick={handleToggleButton}></input>
                    <label> <b className="text"> % Change</b></label>
                </div>
            </div>
            }

            {/* <div className="executive-summary-content-linear-contents-headers">
                {buttonTab === 'linear' ? (<h6 className="executive-summary-content-linear-contents-header">Reach & Ratings</h6>):(<h6 className="executive-summary-content-linear-contents-header">Viewers & %Completion</h6>)}
                <h6 className="executive-summary-content-linear-contents-header">Impact on Consumer Journey</h6>
                <h6 className="executive-summary-content-linear-contents-header">Impact on Monetization</h6>
            </div> */}

            {
                buttonTab === 'linear' ? <div className="executive-summary-content-linear-contents-headers">
                {<h6 className="executive-summary-content-linear-contents-header">Reach & Ratings</h6>}
                <h6 className="executive-summary-content-linear-contents-header">Impact on Consumer Journey</h6>
                <h6 className="executive-summary-content-linear-contents-header">Impact on Monetization</h6>
                </div>:''
            }


            
            
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
                        {/* <th className="executive-summary-content-linear-contents-t-shows-header">Web Series</th> */}
                        <th className="executive-summary-content-linear-contents-t-shows-header">Content name</th>
                        <th className="executive-summary-content-linear-contents-t-header">Viewers{toggleValue === true && <span><span className="chart-scale-indicator-minuse">-</span><span className="chart-scale-indicator-number">0%</span><span className="chart-scale-indicator-pluse">+</span></span>}</th>
                        <th className="executive-summary-content-linear-contents-t-header">Viewers(>1 min watched){toggleValue === true && <span className="chart-scale-indicators-morethan1"><span className="chart-scale-indicator-minuse">-</span><span className="chart-scale-indicator-number">0%</span><span className="chart-scale-indicator-pluse">+</span></span>}</th>
                        <th className="executive-summary-content-linear-contents-t-header">Viewers(>75% min watched){toggleValue === true && <span className="chart-scale-indicators-morethan75"><span className="chart-scale-indicator-minuse">-</span><span className="chart-scale-indicator-number">0%</span><span className="chart-scale-indicator-pluse">+</span></span>}</th>
                        <th className="executive-summary-content-linear-contents-t-header">Watch Duration(M min.) {toggleValue === true && <span className="chart-scale-indicators-watch-dur"><span className="chart-scale-indicator-minuse">-</span><span className="chart-scale-indicator-number">0%</span><span className="chart-scale-indicator-pluse">+</span></span>}</th>
                        <th className="executive-summary-content-linear-contents-t-header">#SAWF Subscriptions {toggleValue === true && <span className="chart-scale-indicators-sub"><span className="chart-scale-indicator-minuse">-</span><span className="chart-scale-indicator-number">05</span><span className="chart-scale-indicator-pluse">+</span></span>}</th>
                    </tr>
                    )}
                </thead>
                <tbody className="executive-summary-content-linear-contents-t-body">
                    {/* <tr>
                        <td>helllo</td>
                        <td><DivergingSB /></td>
                        <td><DivergingSB /></td>
                        <td><DivergingSB /></td>
                        <td><DivergingSB /></td>
                        <td><DivergingSB /></td>
                        <td><DivergingSB /></td>
                        <td><DivergingSB /></td>
                        <td><DivergingSB /></td>
                   
                        
                        
                    </tr> */}
                    {sortedFiles.map((element, index) => {
                        if(hoverValue === element.Name){
                            myHoverClass = 'my-row-bubble-hover'
                        }else{
                            myHoverClass = 'executive-summary-content-linear-contents-t-body-rows'
                        }
                        return(
                            <tr key={index} className={myHoverClass}>
                                <td>{element.Name}</td>
                                {toggleValue === true && 
                                
                                    element.politifact.map((data, index) => <td key={index}><DivergingSB politifact={data}/></td>)
                                }

                                {toggleValue !== true && 
                                element.arr.map((data, index) => {
                                    
                                if(typeof(data) === 'number'){
                                    if(toggleValue === true){
                                        data = ((data/myTotal)*100).toFixed(0)
                                        total = 100

                                        return <td key={index}><FrontBar data={data} total={total} toggleValue={toggleValue}/></td>
                                    }else{
                                        
                                        return <td key={index}><FrontBar percent={'no'} data={data} total={total} toggleValue={toggleValue}/></td>
                                    }
                                    
                                }else{
                                    let total = 0 
                                    let totalValueArr = [];
                                    for(let i=0; i<data.length-1; i++){
                                        total += data[i].value
                                    }
                                    totalValueArr.push(total)
                                    // return <td key={index}><DivergingSB /></td>

                                    return <td key={index}><HSbar data={data} totalValueArr={totalValueArr}  toggleValue={toggleValue}/></td>
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