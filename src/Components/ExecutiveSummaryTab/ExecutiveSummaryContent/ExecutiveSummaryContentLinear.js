import React, { useState } from "react";
import "./ExecutiveSummaryContentLinear.css";
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";
import FrontBar from "../../Charts/BubbleChart/LinearBarchart/FrontBar";
import ExecutiveSummaryContentLinearContents from "./ExecutiveSummaryContentLinearContents";
import ExecutiveSummaryContentLinearButtonsTabs from "./ExecutiveSummaryContentLinearButtonsTabs";
import { useEffect } from "react";

const ExecutiveSummaryContentLinear = (props) => {
  const [activeTab, setActiveTab] = useState("all-content");

  var hoverData = "";
  const [myData, setMyData] = useState("");
  useEffect(() => {}, [hoverData]);

  let top10files = [];
  let count = 0;
  let bottom10files = [];

  var json = [
    {
      Name: "Kundli Bhagya",
      Count: 589.17,
      img: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250012/portrait/1920x7708f95558f449a41ef82318d936b08b5e26b866c6556ab4b5e9f07ccc1580fce43.jpg",
      arr: [320, 230, 100, 330, 410],
    },
    {
      Name: "Bhagya Lakshmi",
      Count: 491.58,
      img: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5254708/portrait/1920x7704470a56223084074bfa9cb800d435b5d.jpg",
      arr: [120, 430, 209, 330, 300],
    },
    {
      Name: "Kumkum Bhagya",
      Count: 469.60,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [223, 140, 170, 330, 400],
    },
    {
      Name: "Meet",
      Count: 439.94,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [120, 430, 209, 330, 300],
    },
    {
      Name: "Radha Mohan",
      Count: 437.68,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [120, 140, 170, 330, 400],
    },
    {
      Name: "Mithai",
      Count: 427.30,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [320, 230, 100, 330, 400],
    },
    {
      Name: "Tere Bin Jiya Jaye Na",
      Count: 400.64,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [120, 230, 100, 330, 300],
    },
    {
      Name: "Kashibia Bajirao Balal ",
      Count: 391.60,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [120, 230, 100, 330, 410],
    },
    {
      Name: "Rab Se Hai Dua",
      Count: 351.28,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [120, 230, 100, 330, 400],
    },
    {
      Name: "Main Hoon Aparajita",
      Count: 350.70,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [120, 230, 100, 330, 400],
    },
    {
      Name: "Zodha Akbar",
      Count: 348.22,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [130, 230, 209, 330, 410],
    },
    {
      Name: "Bhabhiji Ghar Par Hai",
      Count: 346.12,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [130, 140, 170, 330, 300],
    },
    {
      Name: "Nagiin",
      Count: 344.20,
      img: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5259649/portrait/1920x770f426ce27b91e474083e9131fe0128994.jpg",
      arr: [120, 230, 209, 330, 410],
    },
    {
      Name: "Ghar Ek Mandir",
      Count: 338.18,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [120, 140, 170, 330, 400],
    },
    // {
    //   Name: "IT Services",
    //   Count: 4,
    //   img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
    //   arr: [130, 230, 100, 330, 400],
    // },
    // {
    //   Name: "Managed Services",
    //   Count: 4,
    //   img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
    //   arr: [120, 230, 209, 330, 400],
    // },
  ];

  let sortedFiles = json.sort((r1, r2) =>
    r1.value > r2.value ? 1 : r1.value < r2.value ? -1 : 0
  );

  for (let i = 0; i < sortedFiles.length; i++) {
    if (i < 10) {
      top10files.push(sortedFiles[i]);
    }
  }
  for (let i = sortedFiles.length - 1; i > 0; i--) {
    count += 1;
    if (count <= 10) {
      bottom10files.push(sortedFiles[i]);
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
            {/* <ExecutiveSummaryContentLinearContents
              chartData={json}
              buttonTab={"linear"}
            /> */}
          </div>
        )}
        {activeTab === "top-10" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={top10files} />
            <ExecutiveSummaryContentLinearContents
              chartData={top10files}
              buttonTab={"linear"}
            />
          </div>
        )}
        {activeTab === "bottom-10" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={bottom10files} />
            <ExecutiveSummaryContentLinearContents
              chartData={bottom10files}
              buttonTab={"linear"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExecutiveSummaryContentLinear;
