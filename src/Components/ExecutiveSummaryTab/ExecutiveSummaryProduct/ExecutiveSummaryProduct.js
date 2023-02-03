import React from "react";
import "./ExecutiveSummaryProduct.css";
import { useState } from "react";
import ProductUserJourney from "./ProductUserJourney";
import ProductQualityOfExperience from "./ProductQualityOfExperience";
import Links from "../../Charts/Links/Links";
// import ProductQualityExperienceToggle from "./ProductQualityExperienceToggle";

const ExecutiveSummaryContent = () => {
  const [activeTab, setActiveTab] = useState("linear");

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
            <div className="data-product">
            <div className="data-product1"><ProductUserJourney data={['Total Sessions', 2000, 40]} /></div>
             <div className="data-product1"><ProductUserJourney data={['VTUR', 2000, -40]} /></div>
            <div className="data-product1"><ProductUserJourney data={['Total Ad Viewers', 1000, 70]} /></div>
            <div className="data-product1"><ProductUserJourney data={['No. of Subscribers', 1000, 90]} /></div>
            <div className="data-product1"><ProductUserJourney data={['DAV', 1000, -50]} /></div>
            <div className="data-product1"><ProductUserJourney data={['% of Returning Users', 1000, 50]} /></div>

            <div className="data-product1"><ProductUserJourney data={['DAU', 1000, 50]} /></div>
            <div className="data-product1"><ProductUserJourney data={['Search Engagement', 1000, -50]} /></div>
            <div className="data-product1"><ProductUserJourney data={['Total Ad Impressions', 1000, -50]} /></div>
            <div className="data-product1"><ProductUserJourney data={['No. of Subscribers', 1000, 50]} /></div>
            <div className="data-product1"><ProductUserJourney data={['MAV', 1000, 50]} /></div>
            <div className="data-product1"><ProductUserJourney data={['% of Sessions from Returning Users', 1000, -50]} /></div>

            </div>
          </div>
        )}

         

      </div>
      {activeTab === "ott" && <ProductQualityOfExperience />}
    </div>
  );
};

export default ExecutiveSummaryContent;
