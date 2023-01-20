import React, { useEffect } from "react";
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";
import * as d3 from "d3";
import ExecutiveSummaryContentOTTContents from "./ExecutiveSummaryContentOTTContents";
import ExecutiveSummaryContentLinearButtonsTabs from "./ExecutiveSummaryContentLinearButtonsTabs";
import { useState } from "react";

const ExecutiveSummaryContentOtt = () => {
  const [activeTab, setActiveTab] = useState("all-content");
    
  //   useEffect(() => {
  //     const defs = d3.select("bubble-img-svg").append("g");
  //   }, []);

    let top10files = [];
    let count = 0;
    let bottom10files = [];

    var json = [
        { Name: "Accounting Services", Count: 7 },
        { Name: "Architectural Consulting Services", Count: 1 },
        { Name: "Commercial/Industrial Real Estate Brokerage Services", Count: 2 },
        { Name: "Commercial/Industrial Real Estate Brokerage Services", Count: 2 },
        { Name: "Construction/Engineering Consulting Services", Count: 2 },
        { Name: "Coworking Space", Count: 1 },
        { Name: "Customs Brokerage Services", Count: 3 },
        { Name: "Customs Brokerage Services", Count: 3 },
        { Name: "Energy Audit or Consulting Services", Count: 4 },
        { Name: "E", Count: 4 },
        {
          Name: "Human Resources and/or Executive Talent Search Services",
          Count: 4,
        },
        { Name: "Insurance Brokerage Services", Count: 4 },
        { Name: "Legal Services", Count: 11 },
        { Name: "Legal Services", Count: 10 },
        { Name: "Legal Services", Count: 9 },
        { Name: "Managed IT Services", Count: 4 },
        { Name: "Managed IT Services", Count: 4 },
        { Name: "Marketing and Communications Services", Count: 6 },
        { Name: "Marketing and Communications Services", Count: 6 },
        { Name: "Relocation Specialists", Count: 1 },
      ];

    let sortedFiles = json.sort((r1, r2) =>
      r1.value > r2.value ? 1 : r1.value < r2.value ? -1 : 0
    );

    for (let i = 0; i < sortedFiles.length; i++) {
      if (i < 10) {
        bottom10files.push(sortedFiles[i]);
      }
    }
    for (let i = sortedFiles.length - 1; i > 0; i--) {
      count += 1;
      if (count <= 10) {
        top10files.push(sortedFiles[i]);
      }
    }

  const getData = (value) => {
    setActiveTab(value);
  };

  return (
    <div>
      <div className="executive-summary-content-linear-tabs">
        <ExecutiveSummaryContentLinearButtonsTabs TabValue={getData} />
      </div>
      <div>
        {activeTab === "all-content" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={json} />
            <ExecutiveSummaryContentOTTContents />
          </div>
        )}
        {activeTab === "top-10" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={top10files} />
            <ExecutiveSummaryContentOTTContents />
          </div>
        )}
        {activeTab === "bottom-10" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={bottom10files} />
            <ExecutiveSummaryContentOTTContents />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExecutiveSummaryContentOtt;
