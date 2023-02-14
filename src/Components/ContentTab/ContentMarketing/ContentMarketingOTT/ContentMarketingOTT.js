import { progressBarChartSampleData } from './data';

import './ContentMarketingOTT.css';
import { useState } from 'react';
import HorizontalProgressBarChartForTable from '../../../Charts/HorizontalProgressBarChartForTable/HorizontalProgressBarChartForTable';

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
                        <th className="content-marketing-ott-charts-progresschart-table-th">
                            <span>Viewers</span>
                        </th>
                    </thead>
                    <tbody className='content-marketing-ott-charts-progresschart-table-header' ></tbody>
                </table>
            </div>
        </div>
    )
}

const ContentMarketingOTTSankeyAndBarChart = (props) => {
    return (
        <div className='content-marketing-ott-sankey-barchart-container'>
            <div className='content-marketing-ott-charts-title'>
                <p>Mukhbir</p>
            </div>
        </div>
    )
}

export default ContentMarketingOTT;