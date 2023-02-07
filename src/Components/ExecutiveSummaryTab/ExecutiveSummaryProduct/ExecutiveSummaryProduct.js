import React from "react";
import "./ExecutiveSummaryProduct.css";
import { useState } from "react";
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

  const getData = (value, toggle) => {
    console.log(toggle, value);
    if(value === 'Acquisitions'){
      toggle === 'show' ? (setAcquisitions('Acquisitions')) : (setAcquisitions(''));
    }

    if(value === 'Discovery'){
      toggle === 'show' ? (setDiscovery('Discovery')) : (setDiscovery(''));
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
            <Links onClick={getData}/>
            <div className="data-product">
              
              {acquisitions === 'Acquisitions' && <div className={'product-journey-acquisitions'}>
                <div><ProductUserJourney data={['Total Sessions', 2000, 40]} /></div>
                <div className="data-product1"><ProductUserJourney data={['DAU', 2000, -40]} /></div>
              </div>}

              {discovery === 'Discovery' && <div className={'product-journey-discovery'}>
                <div><ProductUserJourney data={['VTUR', 1000, 70]} /></div>
                <div className="data-product1"><ProductUserJourney data={['Search Engagement', 1000, 90]} /></div>
              </div>}

              {advertisement === 'Advertisement' && <div className="product-journey-advertisement">
                <div className="data-product1"><ProductUserJourney data={['Total Ad Viewers', 1000, -50]} /></div>
                <div className="data-product1"><ProductUserJourney data={['Total Ad Impressions', 1000, 50]} /></div>
              </div>}

              {subscriptions === 'Subscriptions' && <div className="product-journey-subscriptions">
                <div className="data-product1"><ProductUserJourney data={['No. of Subscribers', 1000, 50]} /></div>
                <div className="data-product1"><ProductUserJourney data={['No. of Subscribers', 1000, -50]} /></div>
              </div>}

              {engagement === 'Engagement' && <div className="product-journey-engagement">
                <div className="data-product1"><ProductUserJourney data={['DAV', 1000, -50]} /></div>
                <div className="data-product1"><ProductUserJourney data={['MAV', 1000, 50]} /></div>
              </div>}
              
              {loyalty ==='Loyalty' && <div className="product-journey-loyalty">
                <div className="data-product1"><ProductUserJourney data={['% of Returning Users', 1000, 50]} /></div>
                <div className="data-product1"><ProductUserJourney data={['% of Sessions from Returning Users', 1000, -50]} /></div>
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
