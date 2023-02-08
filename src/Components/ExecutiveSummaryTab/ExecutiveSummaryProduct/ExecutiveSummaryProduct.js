import React from "react";
import "./ExecutiveSummaryProduct.css";
import { useState } from "react";
import img01 from '../../../Components/Images/06.svg'
import img02 from '../../../Components/Images/09.svg'
import img03 from '../../../Components/Images/08.svg'
import ProductUserJourney from "./ProductUserJourney";
import ProductQualityOfExperience from "./ProductQualityOfExperience";
import Links from "../../Charts/Links/Links";

const ExecutiveSummaryContent = () => {
  const [activeTab, setActiveTab] = useState("linear");
  const [discovery, setDiscovery] = useState();
  const [acquisitions, setAcquisitions] = useState();
  const [advertisement, setAdvertisement] = useState();
  const [subscriptions, setSubscriptions] = useState();
  const [engagement, setEngagement] = useState();
  const [loyalty, setLoyalty] = useState();
  // const [iconIndicators, setIconIndicators] = useState(false);

  const getData = (value, toggle) => {
    console.log(toggle, value);
    if(value === 'Acquisitions'){
      if(toggle === 'show'){
        setAcquisitions('Acquisitions')
        // setIconIndicators(true)
      }else {
        setAcquisitions('')
        // setIconIndicators(false)
      }
    }

    if(value === 'Discovery'){
      if(toggle === 'show'){
        setDiscovery('Discovery')
        // setIconIndicators(true)
      }else {
        setDiscovery('');
        // setIconIndicators(false)
      }
    }

    if(value === "Advertisement"){
      toggle === 'show' ? (setAdvertisement('Advertisement')) : (setAdvertisement(''));
    }

    if(value === "Subscriptions"){
      toggle === 'show' ? (setSubscriptions('Subscriptions')) : (setSubscriptions(''));
    }

    if(value === "Engagement"){
      toggle === 'show' ? (setEngagement('Engagement')) : (setEngagement(''));
    }

    if(value === "Loyalty"){
      toggle === 'show' ? (setLoyalty('Loyalty')) : (setLoyalty(''));
    }

  }

  // const getClass = (value) => {
  //   setIconIndicators(value)
  //   // console.log(value);
  // }
  
  return (
    <div className="executive-summary-product">
      <div className="executive-summary-content-tabs">
        <div    
          onClick={() => setActiveTab("linear")}
          className={
            activeTab === "linear" 
              ? "executive-summary-content-active-tab"
              : "executive-summary-content-tab"
          }
        >
          Product Journey
        </div>
        <div
          onClick={() => setActiveTab("ott")}
          className={
            activeTab === "ott"
              ? "executive-summary-content-active-tab"
              : "executive-summary-content-tab"
          }
        >
          Quality of Experience
        </div>
      </div>

      <div className="executive-summary-product-container">
        {activeTab === "linear" && (
          <div className="product-journey-container">

            <h4>Charters</h4>
            <Links onClick={getData}/>

            <div className="prod-jou-icons-indicators">
              <label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#37b363"
                  className="bi bi-android2"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z" />
                </svg>
                &nbsp; Android
              </label>
              
              <label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="gray"
                  className="bi bi-apple "
                  viewBox="0 0 16 16"
                >
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                </svg>
                &nbsp;ios
              </label>
              
              <label>
                <img src={img02}/>
                &nbsp;web
              </label>

              <label>
                <img src={img03}/>
                &nbsp;connected device
              </label>

              <label>
                <img src={img01}/>
                &nbsp;others
              </label>

            </div>
            
            <div className="data-product">
              
              {acquisitions === 'Acquisitions' && <div className={'product-journey-acquisitions'}>
                <div><ProductUserJourney  data={['Total Sessions', 2000, 40]} /></div>
                <div className="data-product1"><ProductUserJourney data={['DAU', 2000, -40]} /></div>
              </div>}

              {discovery === 'Discovery' && <div className={'product-journey-discovery'}>
                <div><ProductUserJourney  data={['VTUR', 1000, 70]} /></div>
                <div className="data-product1"><ProductUserJourney data={['Search CTR', 1000, 90]} /></div>
              </div>}

              {advertisement === 'Advertisement' && <div className="product-journey-advertisement">
                <div className="data-product1"><ProductUserJourney  data={['Total Ad Viewers', 1000, -50]} /></div>
                <div className="data-product1"><ProductUserJourney  data={['Total Ad Impressions', 1000, 50]} /></div>
              </div>}

              {subscriptions === 'Subscriptions' && <div className="product-journey-subscriptions">
                <div className="data-product1"><ProductUserJourney data={['No. of subscriptions', 1000, 50]} /></div>
                <div className="data-product1"><ProductUserJourney data={['Active Platform Subscribers', 1000, -50]} /></div>
              </div>}

              {engagement === 'Engagement' && <div className="product-journey-engagement">
                <div className="data-product1"><ProductUserJourney data={['Watch time', 1000, -50]} /></div>
                <div className="data-product1"><ProductUserJourney data={['MAV', 1000, 50]} /></div>
              </div>}
              
              {loyalty ==='Loyalty' && <div className="product-journey-loyalty">
                <div className="data-product1"><ProductUserJourney data={['% of Returning Users', 1000, 50]} /></div>
                <div className="data-product1"><ProductUserJourney data={['Avg. Active Days', 1000, -50]} /></div>
              </div>}

            </div>
          </div>
        )}

         

      </div>
      {activeTab === "ott" && <ProductQualityOfExperience />}
    </div>
  );
};

export default ExecutiveSummaryContent;
