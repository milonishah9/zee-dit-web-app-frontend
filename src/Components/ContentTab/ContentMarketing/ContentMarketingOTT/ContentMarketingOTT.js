import { progressBarChartSampleData, barChartSampleData } from './data';

import './ContentMarketingOTT.css';
import { useState } from 'react';
import HorizontalProgressBarChartForTable from '../../../Charts/HorizontalProgressBarChartForTable/HorizontalProgressBarChartForTable';
import BarChart from '../../../Charts/BarChart/BarChart';

const ContentMarketingOTT = (props) => {
    const [progressBarChartData, setProgressBarChartData] = useState(progressBarChartSampleData);
    const [selectedProgressBarchartValue, setSelectedProgressBarchartValue] = useState(progressBarChartData[0])

    return (
        <div className='content-marketing-ott-container'>
            <ContentMarketingOTTProgressChart
                progressBarChartData={progressBarChartData}
                handleSelectedBarChartValueChange={(selectedValue) => setSelectedProgressBarchartValue(selectedValue)}
            />
            <ContentMarketingOTTSankeyAndBarChart />
        </div>
    )
}

const ContentMarketingOTTProgressChart = (props) => {

    const { progressBarChartData, handleSelectedBarChartValueChange } = props;

    const { isSortAscending, setIsSortAscending } = useState(false);

    return (
        <div className='content-marketing-ott-progresschart-container'>
            <div className='content-marketing-ott-charts-title'>
                <p>No. of Viewers ‘000 (>1 min watched)</p>
            </div>
            <div className='content-marketing-ott-charts-progresschart-container'>
                {/* <HorizontalProgressBarChartForTable /> */}
                <table className='content-marketing-ott-charts-progresschart-table'>

                    <thead className='content-marketing-ott-charts-progresschart-table-header' >
                        <th className="content-marketing-ott-charts-progresschart-table-th">
                            <span>Trailer</span>
                        </th>
                        <th className="content-marketing-ott-charts-progresschart-table-th content-marketing-ott-charts-progresschart-table-th-right ">
                            <span>Viewers</span>
                            <div className='content-marketing-ott-charts-progresschart-table-th-sorting-div'>
                                <svg width="8" height="6" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsSortAscending(true)}>
                                    <path d="M3.90205 0L7.28133 4.05213L0.522776 4.05213L3.90205 0Z" fill={isSortAscending ? "#402177" : "#808080"} />
                                </svg>
                                <svg width="8" height="6" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsSortAscending(false)}>
                                    <path d="M3.90263 4.40332L0.523356 0.351188L7.28191 0.351188L3.90263 4.40332Z" fill={!isSortAscending ? "#402177" : "#808080"} />
                                </svg>

                            </div>
                        </th>
                    </thead>

                    <tbody className='content-marketing-ott-charts-progresschart-table-body'>
                        {progressBarChartData.map((element, index) => {
                            return (
                                <tr key={index} className='content-marketing-ott-charts-progresschart-table-tr-active'>
                                    <td className='content-marketing-ott-charts-progresschart-table-tr-trailer'>{element.trailer}</td>
                                    <td className='content-marketing-ott-charts-progresschart-table-tr-viewers'>
                                        <HorizontalProgressBarChartForTable
                                            value={element.viewers}
                                        />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const ContentMarketingOTTSankeyAndBarChart = (props) => {
    return (
        <div className='content-marketing-ott-sankey-barchart-container'>
            <div className='content-marketing-ott-sankey-chart-and-title-container'>
                <div className='content-marketing-ott-charts-title'>
                    <p>Mukhbir</p>
                </div>
                <div className='content-marketing-sakney-chart-container'>
                    <div className='content-marketing-ott-charts-subtitle'>
                        <p>Trailer Effectiveness</p>
                    </div>
                </div>
            </div>
            <div className='content-marketing-ott-bar-chart-and-legend-container'>
                <div className='content-marketing-ott-charts-barchart-legend'>
                    <p>
                        <svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="2" height="10" fill="#4F277C" />
                        </svg>
                        Launch Date
                    </p>
                </div>
                <div className='content-marketing-ott-bar-chart-container'>
                    <div className='content-marketing-ott-charts-barchart-container'>
                        <div className='content-marketing-ott-charts-subtitle'>
                            <p>No. of Viewers ‘000 (>1 min watched)</p>
                        </div>
                        <BarChart 
                        data={barChartSampleData}
                        />
                    </div>
                    <div className='content-marketing-ott-charts-barchart-container'>
                        <div className='content-marketing-ott-charts-subtitle'>
                            <p>Watch Time per Viewer ‘000 (>1 min watched)</p>
                        </div>
                        {/* <BarChart 
                        data={barChartSampleData}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentMarketingOTT;