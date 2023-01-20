import React, { useEffect } from "react";
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";
import * as d3 from "d3";
import ExecutiveSummaryContentLinearContents from "./ExecutiveSummaryContentLinearContents";
import ExecutiveSummaryContentLinearButtonsTabs from "./ExecutiveSummaryContentLinearButtonsTabs";
import { useState } from "react";

const ExecutiveSummaryContentOtt = (props) => {

  const [activeTab, setActiveTab] = useState("all-content");
    
  //   useEffect(() => {
  //     const defs = d3.select("bubble-img-svg").append("g");
  //   }, []);

    let top10files = [];
    let count = 0;
    let bottom10files = [];

    var json = [
      {
        Name: "Kundli Bhagya",
        Count: 7,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [320, 230, 100, 330, 410],
      },
      {
        Name: "Bhagya Lakshmi",
        Count: 1,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 430, 209, 330, 300],
      },
      {
        Name: "Kumkum Bhagya",
        Count: 2,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [223, 140, 170, 330, 400],
      },
      {
        Name: "Meet",
        Count: 2,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 430, 209, 330, 300],
      },
      {
        Name: "Radha Mohan",
        Count: 2,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 140, 170, 330, 400],
      },
      {
        Name: "Mithai",
        Count: 1,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [320, 230, 100, 330, 400],
      },
      {
        Name: "Brokerage Services",
        Count: 3,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 230, 100, 330, 300],
      },
      {
        Name: "Customs Services",
        Count: 3,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 230, 100, 330, 410],
      },
      {
        Name: "Consulting Services",
        Count: 4,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 230, 100, 330, 400],
      },
      {
        Name: "Eas",
        Count: 4,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 230, 100, 330, 400],
      },
      {
        Name: "Human Resources",
        Count: 4,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [130, 230, 209, 330, 410],
      },
      {
        Name: "Insurance Services",
        Count: 4,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [130, 140, 170, 330, 300],
      },
      {
        Name: "Legal Services",
        Count: 11,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 230, 209, 330, 410],
      },
      {
        Name: "Services",
        Count: 9,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 140, 170, 330, 400],
      },
      {
        Name: "IT Services",
        Count: 4,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [130, 230, 100, 330, 400],
      },
      {
        Name: "Managed Services",
        Count: 4,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 230, 209, 330, 400],
      },
      {
        Name: "Marketing",
        Count: 6,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 230, 209, 330, 400],
      },
      {
        Name: "Market",
        Count: 6,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [130, 230, 100, 330, 410],
      },
      {
        Name: "Relocation Specialists",
        Count: 1,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [123, 430, 100, 330, 400],
      },
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
            <ExecutiveSummaryContentLinearContents chartData={json} />
          </div>
        )}
        {activeTab === "top-10" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={top10files} />
            <ExecutiveSummaryContentLinearContents chartData={top10files}/>
          </div>
        )}
        {activeTab === "bottom-10" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={bottom10files} />
            <ExecutiveSummaryContentLinearContents chartData={bottom10files}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExecutiveSummaryContentOtt;
