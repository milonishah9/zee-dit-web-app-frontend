import React, { useEffect } from "react";
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";
import * as d3 from "d3";
import ExecutiveSummaryContentOTTContents from "./ExecutiveSummaryContentOTTContents";
import ExecutiveSummaryContentLinearButtonsTabs from "./ExecutiveSummaryContentLinearButtonsTabs";
import { useState } from "react";
import ExecutiveSummaryContentLinearContents from "./ExecutiveSummaryContentLinearContents";

const ExecutiveSummaryContentOtt = (props) => {
  const [activeTab, setActiveTab] = useState("all-content");
  const [filterActiveTab, setFilterActiveTab] = useState();
  //   useEffect(() => {
  //     const defs = d3.select("bubble-img-svg").append("g");
  //   }, []);

  var json = [
    {
      Name: "TVF Pictures",
      type: "movie",
      category: "original",
      Count: 589.17,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        [
          { value: 10, color: "#43bcff" },
          { value: 10, color: "#ffcf5c" },
          // { value: 5,color: "rgb(215 209 255)" },
        ],

        [
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "rgb(215 209 255)" },
        ],
        [
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "rgb(215 209 255)" },
        ],
        [
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3, color: "rgb(215 209 255)" },
        ],
        240,
      ],
    },
    {
      Name: "Mukhbir",
      type: "tv show",
      category: "original",
      Count: 491.58,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        120,
        430,
        209,
        [
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3, color: "rgb(215 209 255)" },
        ],
        300,
      ],
    },
    {
      Name: "Aha Naa Pellanta",
      type: "movie",
      category: "original",
      Count: 469.6,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        223,
        140,
        170,
        [
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3, color: "rgb(215 209 255)" },
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
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3, color: "rgb(215 209 255)" },
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
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3, color: "rgb(215 209 255)" },
        ],
        400,
      ],
    },
    {
      Name: "Duranga",
      type: "tv show",
      category: "original",
      Count: 427.3,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        320,
        230,
        100,
        [
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3, color: "rgb(215 209 255)" },
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
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3, color: "rgb(215 209 255)" },
        ],
        300,
      ],
    },
    {
      Name: "Lalbazaar",
      type: "movie",
      category: "original",
      Count: 391.6,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        120,
        230,
        100,
        [
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3, color: "rgb(215 209 255)" },
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
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3, color: "rgb(215 209 255)" },
        ],
        400,
      ],
    },
    {
      Name: "Hello Word",
      type: "movie",
      category: "original",
      Count: 350.7,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        120,
        230,
        100,
        [
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3, color: "rgb(215 209 255)" },
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
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3, color: "rgb(215 209 255)" },
        ],
        410,
      ],
    },
    {
      Name: "Love Bites",
      type: "movie",
      category: "original",
      Count: 349.7,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        130,
        140,
        170,
        [
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3,  description:' ', color: "rgb(215 209 255)" },
        ],
        300,
      ],
    },
    {
      Name: "Qubool Hai ",
      type: "tv show",
      category: "original",
      Count: 348.15,
      img: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2526/portrait/1920x77049703fab8b734b45943d96ac300f0699.jpg",
      arr: [
        120,
        230,
        209,
        [
          { value: 10, color: "#43bcff" },
          { value: 5, color: "#ffcf5c" },
          { value: 3, color: "#768cff" },
          { value: 3, color: "rgb(215 209 255)" },
        ],
        410,
      ],
    },
  ];

  const getTabValue = (value) => {
    setActiveTab(value);
    // console.log(value);
  };

  const getFilterTabValue = (value) => {
    setFilterActiveTab(value);
    // console.log(value);
  };

  const [chartData, setChartData] = useState(json);
  var myTvShowData;
  useEffect(() => {
    if (activeTab === "all-content") {
      myTvShowData = json
      setChartData(myTvShowData);
      if (filterActiveTab === "top-10" || filterActiveTab === "bottom-10") {
        getShortData(myTvShowData);
      }
    }

    if (activeTab === "original") {
      myTvShowData = json.filter((data) => data.category === "original");
      setChartData(myTvShowData);

      if (filterActiveTab === "top-10" || filterActiveTab === "bottom-10") {
        getShortData(myTvShowData);
      }
    }

    if (activeTab === "movies") {
      myTvShowData = json.filter((data) => data.type === "movie");
      setChartData(myTvShowData);

      if (filterActiveTab === "top-10" || filterActiveTab === "bottom-10") {
        getShortData(myTvShowData);
      }

    }

    if (activeTab === "tv-shows") {
      myTvShowData = json.filter((data) => data.type === "tv show");
      setChartData(myTvShowData);

      if (filterActiveTab === "top-10" || filterActiveTab === "bottom-10") {
        getShortData(myTvShowData);
      }

    }

  }, [activeTab, filterActiveTab]);

  const getShortData = (myTvShowData) => {
    let sortedFiles = myTvShowData.sort((r1, r2) =>
      r1.value > r2.value ? 1 : r1.value < r2.value ? -1 : 0
    );

    if (filterActiveTab === "top-10") {
      let top10Data = [];
      for (let i = 0; i < sortedFiles.length; i++) {
        if (i < 10) {
          top10Data.push(sortedFiles[i]);
        }
      }
      setChartData(top10Data);
    }

    if (filterActiveTab === "bottom-10") {
      console.log(filterActiveTab);
      let bottom10Data = [];
      let count = 0;
      for (let i = sortedFiles.length - 1; i > 0; i--) {
        count += 1;
        if (count <= 10) {
          bottom10Data.push(sortedFiles[i]);
        }
      }
      console.log("bottom10Data", bottom10Data);
      setChartData(bottom10Data);
    }
  };
  // useEffect(() => {
  //   if (filterActiveTab === "top-10" || filterActiveTab === "bottom-10") {
  //     let sortedFiles = chartData.sort((r1, r2) =>
  //       r1.value > r2.value ? 1 : r1.value < r2.value ? -1 : 0
  //     );

  //     if (filterActiveTab === "top-10") {

  //       let top10Data = [];
  //       for (let i = 0; i < sortedFiles.length; i++) {
  //         if (i < 10) {
  //           top10Data.push(sortedFiles[i]);
  //         }
  //       }
  //       console.log('top10Data',top10Data);
  //       setChartData(top10Data);
  //     }

  //     if (filterActiveTab === "bottom-10") {
  //       console.log(filterActiveTab);
  //       let bottom10Data = [];
  //       let count = 0;
  //       for (let i = sortedFiles.length - 1; i > 0; i--) {
  //         count += 1;
  //         if (count <= 10) {
  //           bottom10Data.push(sortedFiles[i]);
  //         }
  //       }
  //       console.log('bottom10Data',bottom10Data);
  //       setChartData(bottom10Data);
  //     }
  //   }
  // }, [filterActiveTab]);

  // let sortedFiles = json.sort((r1, r2) =>
  //   r1.value > r2.value ? 1 : r1.value < r2.value ? -1 : 0
  // );

  // for (let i = 0; i < sortedFiles.length; i++) {
  //   if (i < 10) {
  //     top10files.push(sortedFiles[i]);
  //   }
  // if (sortedFiles[i].type === "movie") {
  //   moviesData.push(sortedFiles[i]);
  // }
  // if (sortedFiles[i].type === "tv show") {
  //   tvShowsData.push(sortedFiles[i]);
  // }
  // if (sortedFiles[i].category === "original") {
  //   originalData.push(sortedFiles[i]);
  // }
  // }

  // for (let i = sortedFiles.length - 1; i > 0; i--) {
  //   count += 1;
  //   if (count <= 10) {
  //     bottom10files.push(sortedFiles[i]);
  //   }
  // }

  return (
    <div>
      <div className="">
        <ExecutiveSummaryContentLinearButtonsTabs
          TabValue={getTabValue}
          FilterTabValue={getFilterTabValue}
          tab={"ott"}
        />
      </div>
      <div>
        <div className="executive-summary-content-linear-filter">
          <BubbleChart files={chartData} />
          <ExecutiveSummaryContentLinearContents chartData={chartData} />
        </div>
        {/* {activeTab === "top-10" && (
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
        )} */}
        {/* {activeTab === "originals" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={chartData} />
            <ExecutiveSummaryContentLinearContents chartData={chartData} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ExecutiveSummaryContentOtt;
