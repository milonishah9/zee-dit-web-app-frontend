import React from "react";
import "./ExecutiveSummaryProduct.css";
import { useState } from "react";
import ProductUserJourney from "./ProductUserJourney";
import ProductQualityOfExperience from "./ProductQualityOfExperience";

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
            <ProductUserJourney data={['Total Sessions', 2000, 40]} />
            <ProductUserJourney data={['DAU', 1000, -50]} />
          </div>
        )}

         

      </div>
      {activeTab === "ott" && <ProductQualityOfExperience />}
    </div>
  );
};

export default ExecutiveSummaryContent;
