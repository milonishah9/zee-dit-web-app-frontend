import React from "react";
import "./ExecutiveSummaryProduct.css";
import { useState } from "react";
import ProductUserJourney from "./ProductUserJourney";

const ExecutiveSummaryContent = () => {
  const [activeTab, setActiveTab] = useState("linear");

  return (
    <div className="executive-summary-product">
      <div className="executive-summary-content-tabs">
        <div    
          onClick={() => setActiveTab("linear")}
          className={
            activeTab === "linear" || "opt3" || "opt2"
              ? "executive-summary-content-active-tab"
              : "executive-summary-content-tab"
          }
        >
          User Journey
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
        {/* {activeTab === "linear" && (
          <div>
            <CenteredTree />
            <div className="product-user-journey-options">
              <div>opt2</div>
              <div onClick={handleOpt3Click}>opt3</div>
            </div>
          </div>
        )} */}

          <ProductUserJourney data={['Total Sessions', 2000, 40]} />
          <ProductUserJourney data={['DAU', 1000, -50]} />

      </div>
    </div>
  );
};

export default ExecutiveSummaryContent;
