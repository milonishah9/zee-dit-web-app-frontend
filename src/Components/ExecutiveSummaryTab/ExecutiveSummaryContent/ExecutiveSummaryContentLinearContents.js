import React, { useEffect } from "react";
import './ExecutiveSummaryContentLinearContents.css'
import FrontBar from "../../Charts/BubbleChart/LinearBarchart/FrontBar";
import { useSelector } from "react-redux";
import { selectCount } from "../../../features/HoverValues";

const ExecutiveSummaryContentLinearContents = (props) => {
    const {chartData, buttonTab} = props;
    const hoverValue = useSelector(selectCount);
    let myHoverClass = 'executive-summary-content-linear-contents-t-body-rows'

    // console.log(hoverValue);

    const total = 500;
    return (
        <div className="executive-summary-content-linear-contents">
            {buttonTab !== 'linear' &&<div className="executive-summ-content-ott-indicators">
                <p><label className="executive-summ-content-ott-blue-indicator"/>SAWF Viewers</p>
                <p><label className="executive-summ-content-ott-yellow-indicator"/>Returning Viewers</p>
                <p><label className="executive-summ-content-ott-darkblue-indicator"/>Remaining Viewers</p>
            </div>}
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
                                    return <td key={index}><FrontBar data={data} total={total} /></td>
                                })}
                                {/* <td><FrontBar data={100} total={total} /></td>
                                <td><FrontBar data={300} total={total} /></td>
                                <td><FrontBar data={200} total={total} /></td>
                                <td><FrontBar data={300} total={total} /></td>
                                <td><FrontBar data={420} total={total} /></td> */}
                            </tr>
                        )
                        
                    })}
                    {/* <tr className="executive-summary-content-linear-contents-t-body-rows">
                        <td>Bhagya Lakshmi</td>
                        <td><FrontBar data={220} total={total} /></td>
                        <td><FrontBar data={340} total={total} /></td>
                        <td><FrontBar data={290} total={total} /></td>
                        <td><FrontBar data={320} total={total} /></td>
                        <td><FrontBar data={320} total={total} /></td>
                    </tr>
                    <tr className="executive-summary-content-linear-contents-t-body-rows">
                        <td>Kumkum Bhagya</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                    <tr className="executive-summary-content-linear-contents-t-body-rows">
                        <td>Meet</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                    <tr className="executive-summary-content-linear-contents-t-body-rows">
                        <td>Radha Mohan</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                    <tr className="executive-summary-content-linear-contents-t-body-rows">
                        <td>Mithai</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                    <tr className="executive-summary-content-linear-contents-t-body-rows">
                        <td>Brokerage Services</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default ExecutiveSummaryContentLinearContents;