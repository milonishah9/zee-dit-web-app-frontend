import React, { useEffect } from "react";
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";
import * as d3 from "d3";
import ExecutiveSummaryContentOTTContents from "./ExecutiveSummaryContentOTTContents";
import ExecutiveSummaryContentLinearButtonsTabs from "./ExecutiveSummaryContentLinearButtonsTabs";
import { useState } from "react";
import ExecutiveSummaryContentLinearContents from "./ExecutiveSummaryContentLinearContents";

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
        Name: "TVF Pictures",
        Count: 589.17,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [[
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 240],
      },
      {
        Name: "Mukhbir",
        Count: 491.58,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 430, 209, [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'#768cff' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 300],
      },
      {
        Name: "Aha Naa Pellanta",
        Count: 469.60,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [223, 140, 170, [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'#768cff' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 400],
      },
      {
        Name: "Abhay",
        Count: 439.94,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 430, 209, [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'#768cff' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 300],
      },
      {
        Name: "Rangbaaz",
        Count: 437.68,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 140, 170, [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'#768cff' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 400],
      },
      {
        Name: "Duranga",
        Count: 427.30,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [320, 230, 100, [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'#768cff' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 400],
      },
      {
        Name: "Triplling",
        Count: 400.64,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 230, 100, [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'#768cff' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 300],
      },
      {
        Name: "Lalbazaar",
        Count: 391.60,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 230, 100, [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'#768cff' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 410],
      },
      {
        Name: "Country Mafia",
        Count: 351.28,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 230, 100, [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'#768cff' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 400],
      },
      {
        Name: "Hello Word",
        Count: 350.70,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 230, 100, [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'#768cff' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 400],
      },
      {
        Name: "Broken",
        Count: 349.80,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [130, 230, 209, [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'#768cff' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 410],
      },
      {
        Name: "Love Bites",
        Count: 349.70,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [130, 140, 170, [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'#768cff' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 300],
      },
      {
        Name: "Qubool Hai ",
        Count: 348.15,
        img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
        arr: [120, 230, 209, [
          { value: 10, description: "10", color:'#43bcff' },
          { value: 5, description: "5", color:'#ffcf5c' },
          { value: 3, description: "3", color:'#768cff' },
          { value: 3, description: "3", color:'rgb(215 209 255)' },
        ], 410],
      },
      // {
      //   Name: "Ghar Ek Mandir",
      //   Count: 338.18,
      //   img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      //   arr: [120, 140, 170, 330, 400],
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
        <ExecutiveSummaryContentLinearButtonsTabs TabValue={getData} tab={'ott'}/>
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
