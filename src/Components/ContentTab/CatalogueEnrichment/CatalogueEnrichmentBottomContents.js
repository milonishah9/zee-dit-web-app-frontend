import { height } from "@mui/system";
import React, { useState } from "react";
import CatalogueEnrichmentStackBarChart from "../../AllDaysStackedBarChartPopUpModal/StackedBarChartForAllDays/CatalogueEnrichmentStackBarChart";
import './CatalogueEnrichment.css';
import CatalogueEnrichmentBottomCard from "./CatalogueEnrichmentBottomCard";

const CatalogueEnrichmentBottomContents = (props) => {
    const {data} = props;
    const [fullscreen, setFullScreenChart] = useState(false);

    const handleFullScreenClick = () => {
        setFullScreenChart(true);
    }
    return(
        <div className="catalogue-enrichment-contents-div">
            {fullscreen && <div className="catalogue-enrichment-full-screen-chart">
                    <CatalogueEnrichmentStackBarChart width = {1500} height = {500} />
                </div>
            } 
            <div className="trailers-svg-div">
                <h6 className="title">{data[0]}</h6>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={handleFullScreenClick} width="14" height="14" fill="currentColor" className="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                </svg>
            </div>
            <p className="descrption">{data[1]}</p>
            <div className="kpi-card-value">
                <h5 className="Number-title">{data[2]}</h5>
                <p className="green-color">{data[3]}</p>
            </div>

            <div>
                <CatalogueEnrichmentStackBarChart width = {510} height = {100} />
            </div>

            <div className="catalogue-enrichment-bottom-cards-scroll">
                <CatalogueEnrichmentBottomCard data = {['Blur', 1234, 5678, 12.30, 38.24]} />
                <CatalogueEnrichmentBottomCard data = {['Chup', 1234, 5678, 12.30, 38.24]} />
                <CatalogueEnrichmentBottomCard data = {['Dil Dhak Dhak Karta Hai', 1234, 5678, 12.30, 38.24]} />
                <CatalogueEnrichmentBottomCard data = {['Vikram', 1234, 5678, 12.30, 38.24]} />
                <CatalogueEnrichmentBottomCard data = {['Surya', 1234, 5678, 12.30, 38.24]} />
            </div>
        </div>
    )
}

export default CatalogueEnrichmentBottomContents;