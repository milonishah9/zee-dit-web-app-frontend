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

  let moviesData = [];
  let tvShowsData = [];

  var json = [
    {
      Name: "TVF Pictures",
      type: "movie",
      Count: 589.17,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        240,
      ],
    },
    {
      Name: "Mukhbir",
      type: "tv show",
      Count: 491.58,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        120,
        430,
        209,
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        300,
      ],
    },
    {
      Name: "Aha Naa Pellanta",
      type: "movie",
      Count: 469.6,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        223,
        140,
        170,
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        400,
      ],
    },
    {
      Name: "Abhay",
      type: "tv show",
      Count: 439.94,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        120,
        430,
        209,
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        300,
      ],
    },
    {
      Name: "Rangbaaz",
      type: "movie",
      Count: 437.68,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        120,
        140,
        170,
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        400,
      ],
    },
    {
      Name: "Duranga",
      type: "tv show",
      Count: 427.3,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        320,
        230,
        100,
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        400,
      ],
    },
    {
      Name: "Triplling",
      type: "tv show",
      Count: 400.64,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        120,
        230,
        100,
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        300,
      ],
    },
    {
      Name: "Lalbazaar",
      type: "movie",
      Count: 391.6,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        120,
        230,
        100,
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        410,
      ],
    },
    {
      Name: "Country Mafia",
      type: "tv show",
      Count: 351.28,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        120,
        230,
        100,
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        400,
      ],
    },
    {
      Name: "Hello Word",
      type: "movie",
      Count: 350.7,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        120,
        230,
        100,
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        400,
      ],
    },
    {
      Name: "Broken",
      type: "tv show",
      Count: 349.8,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        130,
        230,
        209,
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        410,
      ],
    },
    {
      Name: "Love Bites",
      type: "movie",
      Count: 349.7,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        130,
        140,
        170,
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        300,
      ],
    },
    {
      Name: "Qubool Hai ",
      type: "tv show",
      Count: 348.15,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        120,
        230,
        209,
        [
          { value: 10, description: "10", color: "#43bcff" },
          { value: 5, description: "5", color: "#ffcf5c" },
          { value: 3, description: "3", color: "#768cff" },
          { value: 3, description: "3", color: "rgb(215 209 255)" },
        ],
        410,
      ],
    },
  ];

  let sortedFiles = json.sort((r1, r2) =>
    r1.value > r2.value ? 1 : r1.value < r2.value ? -1 : 0
  );

  for (let i = 0; i < sortedFiles.length; i++) {
    if (i < 10) {
      top10files.push(sortedFiles[i]);
    }
    if (sortedFiles[i].type === "movie") {
      moviesData.push(sortedFiles[i]);
    }
    if (sortedFiles[i].type === "tv show") {
      tvShowsData.push(sortedFiles[i]);
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
      <div className="">
        <ExecutiveSummaryContentLinearButtonsTabs
          TabValue={getData}
          tab={"ott"}
        />
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
            <ExecutiveSummaryContentLinearContents chartData={top10files} />
          </div>
        )}
        {activeTab === "bottom-10" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={bottom10files} />
            <ExecutiveSummaryContentLinearContents chartData={bottom10files} />
          </div>
        )}
        {activeTab === "movies" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={moviesData} />
            <ExecutiveSummaryContentLinearContents chartData={moviesData} />
          </div>
        )}
        {activeTab === "tv-shows" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={tvShowsData} />
            <ExecutiveSummaryContentLinearContents chartData={tvShowsData} />
          </div>
        )}
        {activeTab === "originals" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={tvShowsData} />
            <ExecutiveSummaryContentLinearContents chartData={tvShowsData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExecutiveSummaryContentOtt;
