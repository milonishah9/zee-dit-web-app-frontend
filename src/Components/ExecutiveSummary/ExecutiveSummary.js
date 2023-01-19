import ExecutiveSummaryVizContainerWithChartsAndNumbers from './ExecutiveSummaryVizContainerWithChartsAndNumbers/ExecutiveSummaryVizContainerWithChartsAndNumbers';
import ExecutiveSummaryVizContainerWithChartsAndNumbersLinear from './ExecutiveSummaryVizContainerWithChartsAndNumbers/ExecutiveSummaryVizContainerWithChartsAndNumbersLinear';
import ExecutiveSummaryVizContainerWithChartsAndNumbersCombined from './ExecutiveSummaryVizContainerWithChartsAndNumbers/ExecutiveSummaryVizContainerWithChartsAndNumbersCombined';
import './ExecutiveSummary.css';
import { useEffect, useState } from 'react';
import ExecutiveSummaryServices from '../../Services/ILTTwentySummaryServices/ExecutiveSummaryServices';
import { useMediaQuery } from '@material-ui/core';

const ExecutiveSummary = (props) => {

  const [digitalData, setDigitalData] = useState();
  const [linearData, setLinearData] = useState();

  const getData = async () => {
    setDigitalData(await ExecutiveSummaryServices.getDigitalSummary());
    // setDigitalData(data);
    setLinearData(await ExecutiveSummaryServices.getLinearSummary());

  }
  
  useEffect(() => {
    getData();
  }, [])
  // console.log('linearDatalinearDatalinearData', linearData);
  return (
    <div className='executive-summary-container'>

      {digitalData &&
      <>
      <div className='executive-summary-main-container'>
        <div className='exect-summary-main-1'>
          <h2 className='Digital'>Digital</h2>
        </div>
        <div className='exect-summary-main-2'>
          <ExecutiveSummaryVizContainerWithChartsAndNumbers digitalData = {digitalData}/>
        </div>
      </div>
      
      {/* <div className='executive-summary-main-container'>
        <div className='exect-summary-main-1'>
          <h2 className='Digital'>Linear</h2>
        </div>
        <div className='exect-summary-main-2'>
          <ExecutiveSummaryVizContainerWithChartsAndNumbersLinear digitalData = {digitalData}/>
        </div>
      </div>

      <div className='executive-summary-main-container'>
        <div className='exect-summary-main-1'>
          <h2 className='Digital'>Combined</h2>
        </div>
        <div className='exect-summary-main-2'>
          <ExecutiveSummaryVizContainerWithChartsAndNumbersCombined digitalData = {digitalData}/>
        </div>
      </div> */}
      </>
}

    </div>
  )

}

export default ExecutiveSummary;