import React, { useEffect, useState } from "react";
import './ExecutiveSummaryContentLinearContents.css'
import FrontBar from "../../Charts/BubbleChart/LinearBarchart/FrontBar";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "../../../features/HoverValues";
import HSbar from "../../Charts/HSbar/HSbar";
import DivergingSB from "../../Charts/DivergingSB/DivergingSB";

const ExecutiveSummaryContentLinearContents = (props) => {
    const {chartData, buttonTab, tab} = props;
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

      let sortedFiles = chartData.sort((r1, r2) =>
            r1.value > r2.value ? 1 : r1.value < r2.value ? -1 : 0
        );

        console.log('sdf',sortedFiles)

    const handleOttToggleButton = (e) => {
        setToggleValue(e.target.checked)
    }

    var total = 500;
    let myTotal = total 
    return (
        <div className="executive-summary-content-linear-contents">
            
            {buttonTab !== 'linear' &&
            <div> 
                {/* <div className="executive-summ-content-ott-indicators">
                    <p><label className="executive-summ-content-ott-blue-indicator"/>SAWF Viewers</p>
                    <p><label className="executive-summ-content-ott-yellow-indicator"/>Returning Viewers</p>
                    <p><label className="executive-summ-content-ott-darkblue-indicator"/>Remaining Viewers</p>
                </div> */}
                <div className="ott-toggle">
                    <label> <b className="text"> Absolute Value</b></label>
                    <input type="checkbox" onClick={handleOttToggleButton}></input>
                    <label> <b className="text"> % Change</b></label>
                </div>
            </div>
            }

            {buttonTab === 'linear' &&
            <div> 
                {/* <div className="executive-summ-content-ott-indicators">
                    <p><label className="executive-summ-content-ott-blue-indicator"/>SAWF Viewers</p>
                    <p><label className="executive-summ-content-ott-yellow-indicator"/>Returning Viewers</p>
                    <p><label className="executive-summ-content-ott-darkblue-indicator"/>Remaining Viewers</p>
                </div> */}
                <div className="ott-toggle">
                    <label> <b className="text"> Absolute Value</b></label>
                    <input type="checkbox" ></input>
                    <label> <b className="text"> % Change</b></label>
                </div>
            </div>
            }

            {/* <div className="executive-summary-content-linear-contents-headers">
                {buttonTab === 'linear' ? (<h6 className="executive-summary-content-linear-contents-header">Reach & Ratings</h6>):(<h6 className="executive-summary-content-linear-contents-header">Viewers & %Completion</h6>)}
                <h6 className="executive-summary-content-linear-contents-header">Impact on Consumer Journey</h6>
                <h6 className="executive-summary-content-linear-contents-header">Impact on Monetization</h6>
            </div> */}

            {/* {
                buttonTab === 'linear' ? <div className="executive-summary-content-linear-contents-headers">
                {<h6 className="executive-summary-content-linear-contents-header">Reach & Ratings</h6>}
                <h6 className="executive-summary-content-linear-contents-header">Impact on Consumer Journey</h6>
                <h6 className="executive-summary-content-linear-contents-header">Impact on Monetization</h6>
                </div>:''
            } */}

            <table className="executive-summary-content-linear-contents-table">
                <thead className="executive-summary-content-linear-contents-t-headers">
                    
                    {buttonTab === 'linear' ?(
                        <tr>
                            <th className="executive-summary-content-linear-contents-t-shows-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>
                                <span>Shows</span>
                            </th>
                            <th className="executive-summary-content-linear-contents-t-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>
                                <span>Reach ‘000</span>
                            </th>
                            <th className="executive-summary-content-linear-contents-t-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>
                                <span>GRP</span>
                            </th>
                            <th className="executive-summary-content-linear-contents-t-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>
                                <span className="ex-sum-cont-engagement">Reach %<span className="exe-sum-lin-con-h-lbr">(Acquisition)</span></span>
                            </th>
                            <th className="executive-summary-content-linear-contents-t-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>
                                <span className="ex-sum-cont-engagement">TSV<span className="exe-sum-lin-con-h-lbr">(M min.) (Engagement)</span></span>
                            </th>
                            <th className="executive-summary-content-linear-contents-t-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel last-filter-svg" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>
                                <span>GRP Adbreak</span>
                            </th>
                        </tr>
                    ):(
                        <tr>
                            <th className="executive-summary-content-linear-contents-t-shows-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>
                                <span>Content name</span>
                            </th>
                            <th className="executive-summary-content-linear-contents-t-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>    
                                <span>Viewers{toggleValue === true && <span><span className="chart-scale-indicator-minuse">-</span><span className="chart-scale-indicator-number">0</span><span className="chart-scale-indicator-pluse">+</span></span>}</span>
                            </th>
                            <th className="executive-summary-content-linear-contents-t-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>    
                                <span>Viewers(>1 min watched){toggleValue === true && <span className="chart-scale-indicators-morethan1"><span className="chart-scale-indicator-minuse">-</span><span className="chart-scale-indicator-number">0</span><span className="chart-scale-indicator-pluse">+</span></span>}</span>
                            </th>
                            <th className="executive-summary-content-linear-contents-t-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>
                                <span>Viewers(>75% min watched){toggleValue === true && <span className="chart-scale-indicators-morethan75"><span className="chart-scale-indicator-minuse">-</span><span className="chart-scale-indicator-number">0</span><span className="chart-scale-indicator-pluse">+</span></span>}</span>
                            </th>
                            <th className="executive-summary-content-linear-contents-t-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>
                                <span>Watch Duration(M min.) {toggleValue === true && <span className="chart-scale-indicators-watch-dur"><span className="chart-scale-indicator-minuse">-</span><span className="chart-scale-indicator-number">0</span><span className="chart-scale-indicator-pluse">+</span></span>}</span>
                            </th>
                            <th className="executive-summary-content-linear-contents-t-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel last-filter-svg" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>
                                <span>#SAWF Subscriptions {toggleValue === true && <span className="chart-scale-indicators-sub"><span className="chart-scale-indicator-minuse">-</span><span className="chart-scale-indicator-number">0</span><span className="chart-scale-indicator-pluse">+</span></span>}</span>
                            </th>
                        </tr>
                    )}
                </thead>
                <tbody className="executive-summary-content-linear-contents-t-body">
                    
                    {sortedFiles.map((element, index) => {
                        var arrayLastIndexVal = (element.arr).length-1;
                        if(hoverValue === element.Name){
                            myHoverClass = 'my-row-bubble-hover'
                        }else{
                            myHoverClass = 'executive-summary-content-linear-contents-t-body-rows'
                        }
                        return(
                            <tr key={index} id={tab === 'ott'? ('exe-sum-cont-table-row') : ('')} className={myHoverClass}>
                                <td>{element.Name}</td>
                                
                                {toggleValue === true && 
                                    element.politifact.map((data, index) => <td key={index}><DivergingSB politifact={data}/></td>)
                                }

                                {toggleValue !== true && 
                                element.arr.map((data, index) => {
                                    
                                if(typeof(data) === 'number'){

                                        if(tab === 'ott'){
                                            var color = 'rgba(152, 148, 252, 0.98)';
                                         
                                            if(index === arrayLastIndexVal ){
                                                color = 'rgba(201, 150, 235, 0.99)';
                                            } 
                                            
                                            return <td key={index}><FrontBar color = {color} percent={'no'} data={data} total={total} toggleValue={toggleValue}/></td>
                                        }
                                        if(tab !== 'ott'){
                                            return <td key={index}><FrontBar color={'rgba(201, 150, 235, 0.99)'} percent={'no'} data={data} total={total} toggleValue={toggleValue}/></td>
                                        }
                                    
                                }else{
                                    let total = 0 
                                    let totalValueArr = [];
                                    for(let i=0; i<data.length-1; i++){
                                        total += data[i].value
                                    }
                                    totalValueArr.push(total)

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