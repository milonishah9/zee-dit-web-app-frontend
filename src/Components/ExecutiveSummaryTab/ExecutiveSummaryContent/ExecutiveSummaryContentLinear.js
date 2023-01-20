import React, { useState } from "react";
import "./ExecutiveSummaryContentLinear.css";
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";
import FrontBar from "../../Charts/BubbleChart/LinearBarchart/FrontBar";
import ExecutiveSummaryContentLinearContents from "./ExecutiveSummaryContentLinearContents";
import ExecutiveSummaryContentLinearButtonsTabs from "./ExecutiveSummaryContentLinearButtonsTabs";
import { useEffect } from "react";
import { useCallback } from "react";
import { memo } from "react";

const ExecutiveSummaryContentLinear = () => {
  const [activeTab, setActiveTab] = useState("all-content");

  const [selectedBubbleIndex, setSelectedBubbleIndex] = useState(null);

  const handleOnBubbleClick = useCallback((index) => {
    setSelectedBubbleIndex(index);
    console.log('selectedBubbleIndex', selectedBubbleIndex);
  }, [selectedBubbleIndex])

  var hoverData = '';
  const [myData, setMyData] = useState('')
  useEffect(() => {

  }, [hoverData])

  let top10files = [];
  let count = 0;
  let bottom10files = [];

  var json = [
    { Name: "Kundli Bhagya", Count: 7 },
    { Name: "Bhagya Lakshmi", Count: 1 },
    { Name: "Kumkum Bhagya", Count: 2 },
    { Name: "Meet", Count: 2 },
    { Name: "Radha Mohan", Count: 2 },
    { Name: "Mithai", Count: 1 },
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

  const onClickFunction = (res) => {
    hoverData = (res);
  }

  return (
    <div>
      {console.log('contnet')}
      <div className="executive-summary-content-linear-tabs">
        <ExecutiveSummaryContentLinearButtonsTabs TabValue={getData} />
      </div>
      <div>
        {activeTab === "all-content" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={json} onClick={onClickFunction}
              // handleOnBubbleClick={(event, index) => { setSelectedBubbleIndex(index); console.log(index); }} 
              bubbleClickHandler={handleOnBubbleClick}
            />
            <ExecutiveSummaryContentLinearContents hoverData={hoverData} />
          </div>
        )}
        {activeTab === "top-10" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={top10files} />
            <ExecutiveSummaryContentLinearContents />
          </div>
        )}
        {activeTab === "bottom-10" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={bottom10files} />
            <ExecutiveSummaryContentLinearContents />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ExecutiveSummaryContentLinear);
