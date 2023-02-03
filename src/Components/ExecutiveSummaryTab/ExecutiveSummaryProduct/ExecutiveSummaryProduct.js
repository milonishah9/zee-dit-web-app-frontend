import React from "react";
import "./ExecutiveSummaryProduct.css";
import { useState } from "react";
import ProductUserJourney from "./ProductUserJourney";
import ProductQualityOfExperience from "./ProductQualityOfExperience";
import Links from "../../Charts/Links/Links";

const ExecutiveSummaryContent = () => {
  const [activeTab, setActiveTab] = useState("linear");
  const [bubbleClickValue, setBubbleClickValue] = useState([]);

  const getData = (value) => {
    console.log(value);
    setBubbleClickValue([...bubbleClickValue, value])
    
    // if(value === 'Acquisitions'){
    //   // if(bubbleClickValue.Acquisitions === false){
    //     bubbleClickValue.Acquisitions = true;
    //     console.log(bubbleClickValue);
    //   // }
    //   // if(bubbleClickValue.Acquisitions === true){
    //   //   bubbleClickValue.Acquisitions = false
    //   // }
    // }
    // if(value === 'Discovery'){
    //   bubbleClickValue.Discovery = true;
    // }
    // if(value === "Advertisement"){
    //   bubbleClickValue.Advertisement = true;
    // }
    // // setBubbleClickValue(value)
  }
  console.log(bubbleClickValue);
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
          <div>
            {/* <CenteredTree /> */}
            {/* <div>
              <Links />
            </div> */}
            <Links onClick={getData}/>
            <div className="data-product">
              {bubbleClickValue.map((data) => (data === 'Acquisitions')) && <div><div className="data-product1"><ProductUserJourney data={['Total Sessions', 2000, 40]} /></div>
              <div className="data-product1"><ProductUserJourney data={['VTUR', 2000, -40]} /></div></div>}

              {bubbleClickValue.Discovery === true && <div><div className="data-product1"><ProductUserJourney data={['Total Ad Viewers', 1000, 70]} /></div>
              <div className="data-product1"><ProductUserJourney data={['No. of Subscribers', 1000, 90]} /></div></div>}

              {bubbleClickValue === 'Advertisement' && <><div className="data-product1"><ProductUserJourney data={['DAV', 1000, -50]} /></div>
              <div className="data-product1"><ProductUserJourney data={['% of Returning Users', 1000, 50]} /></div></>}

              {bubbleClickValue === 'Subscriptions' && <><div className="data-product1"><ProductUserJourney data={['DAU', 1000, 50]} /></div>
              <div className="data-product1"><ProductUserJourney data={['Search Engagement', 1000, -50]} /></div></>}

              {bubbleClickValue === 'Engagement' && <><div className="data-product1"><ProductUserJourney data={['Total Ad Impressions', 1000, -50]} /></div>
              <div className="data-product1"><ProductUserJourney data={['No. of Subscribers', 1000, 50]} /></div></>}
              
              {bubbleClickValue ==='Loyalty' && <><div className="data-product1"><ProductUserJourney data={['MAV', 1000, 50]} /></div>
              <div className="data-product1"><ProductUserJourney data={['% of Sessions from Returning Users', 1000, -50]} /></div></>}

            </div>
          </div>
        )}

         

      </div>
      {activeTab === "ott" && <ProductQualityOfExperience />}
    </div>
  );
};

export default ExecutiveSummaryContent;
