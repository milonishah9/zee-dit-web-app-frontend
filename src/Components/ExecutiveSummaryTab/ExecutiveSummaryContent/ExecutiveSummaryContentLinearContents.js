import React from "react";
import './ExecutiveSummaryContentLinearContents.css'
import FrontBar from "../../Charts/BubbleChart/LinearBarchart/FrontBar";

const ExecutiveSummaryContentLinearContents = (props) => {
    const {chartData, buttonTab} = props;
    // const data = 300;
    const total = 500;
    return (
        <div className="executive-summary-content-linear-contents">
            {buttonTab !== 'linear' &&<div className="executive-summ-content-ott-indicators">
                <p><label className="executive-summ-content-ott-blue-indicator"/>SAWF Viewers</p>
                <p><label className="executive-summ-content-ott-yellow-indicator"/>Returning Viewers</p>
                <p><label className="executive-summ-content-ott-darkblue-indicator"/>Remaining Viewers</p>
            </div>}
            <div className="executive-summary-content-linear-contents-headers">
            {buttonTab === 'linear' ? (<h6 className="executive-summary-content-linear-contents-header">Reach & Ratings</h6>):(<h6 className="executive-summary-content-linear-contents-header">Viewers and Completion</h6>)}
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
                        <th className="executive-summary-content-linear-contents-t-header"># Viewers</th>
                        <th className="executive-summary-content-linear-contents-t-header">% Completion</th>
                        <th className="executive-summary-content-linear-contents-t-header"># SAWF Subscriptions</th>
                        <th className="executive-summary-content-linear-contents-t-header">Watch Duration<span className="exe-sum-lin-con-h-lbr">(M min.)</span></th>
                        <th className="executive-summary-content-linear-contents-t-header">Ad Impressions</th>
                    </tr>
                    )}
                </thead>
                <tbody className="executive-summary-content-linear-contents-t-body">
                    {chartData.map((element, index) => {
                        return(
                            <tr key={index} className="executive-summary-content-linear-contents-t-body-rows">
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