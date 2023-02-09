import React from "react";
import './CatalogueEnrichment.css'
import CatalogueEnrichmentBottomContents from "./CatalogueEnrichmentBottomContents";
import CatalogueEnrichmentKpiCard from "./CatalogueEnrichmentKpiCard";

const CatalogueEnrichment = () => {
    const data = {
        bottomContentsData: {
            TrailersData: {

            }
        }
    }
    return (
        <div>
            <div className="catalogue-enrichment-kpi-cards">
                <CatalogueEnrichmentKpiCard data = {['Total Hours of Content Published', '49', '8% from last period']}/>
                <CatalogueEnrichmentKpiCard data = {['DAU', '79', '2% from last period']}/>
                <CatalogueEnrichmentKpiCard data = {['Viewers', '90', '8% from last period']}/>
                <CatalogueEnrichmentKpiCard data = {['Total Hours of Content Published', '34', '8% from last period']}/>
            </div>

            <div className="catalogue-enrichment-indicators">
                <label className="catalogue-last-90day">Last 90 Days</label>
                <div className="all-indicators-with-icons">
                    <label>New Launch</label>
                    <label>Launch Date</label>
                    <label>Hours of content published</label>
                    <label>Watch time till date</label>
                    <label>Viewers till date</label>
                </div>
            </div>

            <div className="catalogue-enrichment-contents">
                <CatalogueEnrichmentBottomContents data = {['Trailers', 'No. of Viewers', '1.48M', '2% from previous']}/>
                <CatalogueEnrichmentBottomContents data = {['Originals', 'No. of Viewers', '1.48M', '2% from previous']}/>
                <CatalogueEnrichmentBottomContents data = {['Movies', 'No. of Viewers', '1.48M', '2% from previous']}/>
                <CatalogueEnrichmentBottomContents data = {['TV Shows', 'No. of Viewers', '1.48M', '2% from previous']}/>
            </div>
            
        </div>
    )
}

export default CatalogueEnrichment;