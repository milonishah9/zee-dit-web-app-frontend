import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SankeyChartForConsumer from "../../Charts/SankeyChart/SankeyChartForConsumer/SankeyChartForConsumer";
// import Sankey from "../../Charts/SankeyChart/RND";
// import Sankey from "../../Charts/SankeyChart/NewSankey/NewSankey";
import "./ExecutiveSummaryConsumer.css"


const ExecutiveSummaryConsumer = (props) => {

  const [data, setData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const [activeKPICharter, setActiveKPICharter] = useState('acquisitionAndOnboarding');
  const [activeConsumerJourneyFilter, setActiveConsumerJourneyFilter] = useState('overall');

  const kpiCharters = [
    {
      id: "acquisitionAndOnboarding",
      kpiCards: [
        {
          title: "DAU",
          mainValue: 22,
          difference: 4
        },
        {
          title: "MAU",
          mainValue: 65,
          difference: 8
        },
      ]
    },
    {
      id: "discoveryAndEngagement",
      kpiCards: [
        {
          title: "DAV",
          mainValue: 89,
          difference: -4,
        },
        {
          title: "MAV",
          mainValue: 65,
          difference: 8,
        },
        {
          title: "Total Watch Time (min.)",
          mainValue: 222,
          difference: 14,
        },
        {
          title: "Watch time/Viewer (min.)",
          mainValue: 215,
          difference: -18,
        },
      ]
    },
    {
      id: "monetizatoin",
      kpiCards: [
        {
          title: "Ad Impressions",
          mainValue: 89,
          difference: -4,
        },
        {
          title: "AVOD Revenue",
          mainValue: 222,
          difference: 14,
        },
        {
          title: "SVOD Revenue",
          mainValue: 65,
          difference: 8,
        },
        {
          title: "Subs Split",
          mainValue: 215,
          difference: -18,
        },
        {
          title: "New & Win back Subscriptions",
          mainValue: 215,
          difference: -18,
        },
        {
          title: "Manual Subscriptions",
          mainValue: 215,
          difference: -18,
        },
        {
          title: "Auto & Advance Subscriptions",
          mainValue: 215,
          difference: -18,
        },
      ]
    },
    {
      id: "loyaltyAndRetention",
      kpiCards: [
        {
          title: "% Returning Users- Overall",
          mainValue: 89,
          difference: -4,
        },
        // {
        //   title: "% Renewals- AVOD",
        //   mainValue: 65,
        //   difference: 8,
        // },
        {
          title: "% Returning Users- AVOD",
          mainValue: 65,
          difference: 8,
        },
        {
          title: "% Renewals- SVOD",
          mainValue: 222,
          difference: 14,
        }
      ]
    },
  ]

  const handleOnKPICharterButtonClick = (event, id) => {
    setActiveKPICharter(id);
  }

  const handleOnConsumerJourneyButtonClick = (event, id) => {
    setActiveConsumerJourneyFilter(id);
  }


  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ozlongblack/d3/master/energy.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="executive-summary-consumer-journey-container">
      <div className="consumer-journey-filters">
        <button
          className={activeConsumerJourneyFilter === "overall" ? "consumer-journey-button-active" : "consumer-journey-button"}
          onClick={event => handleOnConsumerJourneyButtonClick(event, "overall")}
        >
          Overall
        </button>
        <button
          className={activeConsumerJourneyFilter === "avod" ? "consumer-journey-button-active" : "consumer-journey-button"}
          onClick={event => handleOnConsumerJourneyButtonClick(event, "avod")}
        >
          AVOD
        </button>
        <button
          className={activeConsumerJourneyFilter === "svod" ? "consumer-journey-button-active" : "consumer-journey-button"}
          onClick={event => handleOnConsumerJourneyButtonClick(event, "svod")}
        >
          SVOD
        </button>
      </div>
      <p className="executive-journey-note-item">All numbers in Millions</p>
      <div className="sankey-chart-parent-container">
        <div className="sankey">
          <SankeyChartForConsumer />
        </div>
      </div>
      <div className="kpi-cards-container">
        <div className="kpi-cards-buttons">
          <button
            className={activeKPICharter === "acquisitionAndOnboarding" ? "kpi-card-button-active" : "kpi-card-button"}
            onClick={event => handleOnKPICharterButtonClick(event, "acquisitionAndOnboarding")}
          >
            Acquisition & Onboarding
          </button>
          <button
            className={activeKPICharter === "discoveryAndEngagement" ? "kpi-card-button-active" : "kpi-card-button"}
            onClick={event => handleOnKPICharterButtonClick(event, "discoveryAndEngagement")}
          >
            Discovery & Engagement
          </button>
          <button
            className={activeKPICharter === "monetizatoin" ? "kpi-card-button-active" : "kpi-card-button"}
            onClick={event => handleOnKPICharterButtonClick(event, "monetizatoin")}
          >
            Monetization
          </button>
          <button
            className={activeKPICharter === "loyaltyAndRetention" ? "kpi-card-button-active" : "kpi-card-button"}
            onClick={event => handleOnKPICharterButtonClick(event, "loyaltyAndRetention")}
          >
            Loyalty & Retention
          </button>
        </div>
        <div className="kpi-cards-values">
          {/* {
            console.log(kpiCharters.filter((item, index) => item.id === activeKPICharter)[0].kpiCards

              .filter((d, i) => {
                if (activeConsumerJourneyFilter === "avod" && (d.title === "Ad Impressions" || d.title === "AVOD Revenue" || d.title === "% Renewals- AVOD")) {
                  return d;
                } else if (activeConsumerJourneyFilter === "svod" && (d.title === "SVOD Revenue" || d.title === "Subs Split" || d.title === "% Renewals- SVOD")) {
                  return d;
                }
              })
            )} */}
          {
            kpiCharters.filter((item, index) => item.id === activeKPICharter)[0].kpiCards
              .filter((d, i) => {
                if (
                  activeConsumerJourneyFilter === "avod" &&
                  (activeKPICharter === "monetizatoin" || activeKPICharter === "loyaltyAndRetention") &&
                  (d.title === "Ad Impressions" || d.title === "% Returning Users- AVOD")) {
                  return d;
                } else if (
                  activeConsumerJourneyFilter === "svod" &&
                  (activeKPICharter === "monetizatoin" || activeKPICharter === "loyaltyAndRetention") &&
                  (d.title === "SVOD Revenue" || d.title === "New & Win back Subscriptions" || d.title === "Manual" || d.title === "Auto & Advance Renewal" || d.title === "% Renewals- SVOD" ||
                    d.title === "Manual Subscriptions" || d.title === "Auto & Advance Subscriptions")
                ) {
                  return d;
                } else if (
                  activeConsumerJourneyFilter === "avod" &&
                  !(activeKPICharter === "monetizatoin" || activeKPICharter === "loyaltyAndRetention")) {
                  return d;
                } else if (
                  activeConsumerJourneyFilter === "svod" &&
                  !(activeKPICharter === "monetizatoin" || activeKPICharter === "loyaltyAndRetention")) {
                  return d;
                } else if (
                  activeConsumerJourneyFilter === "overall" &&
                  activeKPICharter === "monetizatoin" &&
                  !(d.title === "AVOD Revenue" || d.title === "Subs Split")
                ) {
                  return d;
                } else if (
                  activeConsumerJourneyFilter === "overall" &&
                  activeKPICharter !== "monetizatoin"
                ) {
                  return d;
                }
              })
              .map((item, index) => <KPICard
                title={item.title}
                mainValue={item.mainValue}
                difference={item.difference}
              />)


            // kpiCharters.filter((item, index) => item.id === activeKPICharter)[0]
            //   .kpiCards
            //   .map((mapItem, index) => {
            //     return <KPICard 
            //     mapItem
            //   })
            // .kpiCards.map((item, index) => console.log(item, item))
          }
          {/* <div className="kpi-card">
            <p className="kpi-card-title">Total Ads Requested</p>
            <div className="kpi-card-value">
              <p className="kpi-card-value-main">7500</p>
              <p className="kpi-card-perdiff-pos">
                8%
                <svg width="10" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.35355 0.646407C4.15829 0.451145 3.84171 0.451145 3.64645 0.646407L0.464467 3.82839C0.269204 4.02365 0.269204 4.34023 0.464466 4.53549C0.659729 4.73076 0.976311 4.73076 1.17157 4.53549L4 1.70707L6.82843 4.53549C7.02369 4.73076 7.34027 4.73076 7.53553 4.53549C7.7308 4.34023 7.7308 4.02365 7.53553 3.82839L4.35355 0.646407ZM4.5 7.69043L4.5 0.99996L3.5 0.99996L3.5 7.69043L4.5 7.69043Z" fill="#00C48C" />
                </svg>
              </p>
            </div>
          </div>

          <div className="kpi-card">
            <p className="kpi-card-title">Total Ads Requested</p>
            <div className="kpi-card-value">
              <p className="kpi-card-value-main">7500</p>
              <p className="kpi-card-perdiff-pos">
                8%
                <svg width="10" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.35355 0.646407C4.15829 0.451145 3.84171 0.451145 3.64645 0.646407L0.464467 3.82839C0.269204 4.02365 0.269204 4.34023 0.464466 4.53549C0.659729 4.73076 0.976311 4.73076 1.17157 4.53549L4 1.70707L6.82843 4.53549C7.02369 4.73076 7.34027 4.73076 7.53553 4.53549C7.7308 4.34023 7.7308 4.02365 7.53553 3.82839L4.35355 0.646407ZM4.5 7.69043L4.5 0.99996L3.5 0.99996L3.5 7.69043L4.5 7.69043Z" fill="#00C48C" />
                </svg>
              </p>
            </div>
          </div>

          <div className="kpi-card">
            <p className="kpi-card-title">Total Ads Requested</p>
            <div className="kpi-card-value">
              <p className="kpi-card-value-main">7500</p>
              <p className="kpi-card-perdiff-pos">
                8%
                <svg width="10" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.35355 0.646407C4.15829 0.451145 3.84171 0.451145 3.64645 0.646407L0.464467 3.82839C0.269204 4.02365 0.269204 4.34023 0.464466 4.53549C0.659729 4.73076 0.976311 4.73076 1.17157 4.53549L4 1.70707L6.82843 4.53549C7.02369 4.73076 7.34027 4.73076 7.53553 4.53549C7.7308 4.34023 7.7308 4.02365 7.53553 3.82839L4.35355 0.646407ZM4.5 7.69043L4.5 0.99996L3.5 0.99996L3.5 7.69043L4.5 7.69043Z" fill="#00C48C" />
                </svg>
              </p>
            </div>
          </div>

          <div className="kpi-card">
            <p className="kpi-card-title">Total Ads Requested</p>
            <div className="kpi-card-value">
              <p className="kpi-card-value-main">7500</p>
              <p className="kpi-card-perdiff-pos">
                8%
                <svg width="10" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.35355 0.646407C4.15829 0.451145 3.84171 0.451145 3.64645 0.646407L0.464467 3.82839C0.269204 4.02365 0.269204 4.34023 0.464466 4.53549C0.659729 4.73076 0.976311 4.73076 1.17157 4.53549L4 1.70707L6.82843 4.53549C7.02369 4.73076 7.34027 4.73076 7.53553 4.53549C7.7308 4.34023 7.7308 4.02365 7.53553 3.82839L4.35355 0.646407ZM4.5 7.69043L4.5 0.99996L3.5 0.99996L3.5 7.69043L4.5 7.69043Z" fill="#00C48C" />
                </svg>
              </p>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default ExecutiveSummaryConsumer;

const KPICard = (props) => {

  const { title, mainValue, difference } = props

  return (
    <div className="kpi-card">
      <p className="kpi-card-title">{title}</p>
      <div className="kpi-card-value">
        <p className="kpi-card-value-main">{mainValue}</p>
        <p className={difference >= 0 ? "kpi-card-perdiff-pos" : "kpi-card-perdiff-neg"}>
          {difference}
          {
            difference >= 0 ?
              <svg width="10" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.35355 0.646407C4.15829 0.451145 3.84171 0.451145 3.64645 0.646407L0.464467 3.82839C0.269204 4.02365 0.269204 4.34023 0.464466 4.53549C0.659729 4.73076 0.976311 4.73076 1.17157 4.53549L4 1.70707L6.82843 4.53549C7.02369 4.73076 7.34027 4.73076 7.53553 4.53549C7.7308 4.34023 7.7308 4.02365 7.53553 3.82839L4.35355 0.646407ZM4.5 7.69043L4.5 0.99996L3.5 0.99996L3.5 7.69043L4.5 7.69043Z" fill="#00C48C" />
              </svg> :
              <svg width="10" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.20699 7.38777C4.40226 7.58303 4.71884 7.58303 4.9141 7.38777L8.09608 4.20579C8.29134 4.01053 8.29134 3.69395 8.09608 3.49869C7.90082 3.30342 7.58424 3.30342 7.38897 3.49869L4.56055 6.32711L1.73212 3.49869C1.53686 3.30342 1.22028 3.30342 1.02501 3.49869C0.829751 3.69395 0.829751 4.01053 1.02501 4.20579L4.20699 7.38777ZM4.06055 0.34375L4.06055 7.03422L5.06055 7.03422L5.06055 0.34375L4.06055 0.34375Z" fill="#FF647C" />
              </svg>
          }
        </p>
      </div>
    </div>
  )
}


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);