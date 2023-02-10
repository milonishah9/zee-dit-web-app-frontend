import React from "react";
import './CatalogueEnrichment.css'
import CatalogueEnrichmentBottomContents from "./CatalogueEnrichmentBottomContents";
import CatalogueEnrichmentKpiCard from "./CatalogueEnrichmentKpiCard";

const CatalogueEnrichment = () => {
   
    return (
        <div>
            <div className="catalogue-enrichment-kpi-cards">
                <CatalogueEnrichmentKpiCard data = {['Total Hours of Content Published', '49', 8]}/>
                <CatalogueEnrichmentKpiCard data = {['DAU', '79', 2]}/>
                <CatalogueEnrichmentKpiCard data = {['Viewers', '90', 8]}/>
                <CatalogueEnrichmentKpiCard data = {['Total Hours of Content Published', '34', 8]}/>
            </div>

            <div className="catalogue-enrichment-indicators">
                <label className="catalogue-last-90day">Last 90 Days</label>
                <div className="all-indicators-with-icons">
                    <label><img src='/static/images/logos/new-launch-icon.png' height={10} alt='new-launch-icon' className="img" />New Launch</label>
                    <label><img src='/static/images/logos/date-icon.png' height={15} alt='date-icon' className="img"/>Launch Date</label>
                    <label><img src='/static/images/logos/time-icon.png' height={15} alt='time-icon'className="img" />Hours of content published</label>
                    <label><img src='/static/images/logos/Watch-time-icon.png' height={15} alt='Watch-time-icon' className="img"/>Watch time till date</label>
                    <label><img src='/static/images/logos/till-time-icon.png' height={15} alt='till-time-icon'className="img" />Viewers till date</label>
                </div>
            </div>
            
            <div className="catalogue-enrichment-contents">
                <CatalogueEnrichmentBottomContents data = {['Trailers', 'No. of Viewers', '1.48M', '2% ↑ from previous']}/>
                <CatalogueEnrichmentBottomContents data = {['Originals', 'No. of Viewers', '1.48M', '2% ↑ from previous']}/>
                <CatalogueEnrichmentBottomContents data = {['Movies', 'No. of Viewers', '1.48M', '2% ↑ from previous']}/>
                <CatalogueEnrichmentBottomContents data = {['TV Shows', 'No. of Viewers', '1.48M', '2% ↑ from previous']}/>
            </div>
            
        </div>
    )
}

export default CatalogueEnrichment;