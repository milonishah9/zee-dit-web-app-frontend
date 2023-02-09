import React from "react";
import './CatalogueEnrichment.css'
import CatalogueEnrichmentKpiCard from "./CatalogueEnrichmentKpiCard";

const CatalogueEnrichment = () => {
    return (
        <div>
            <div className="catalogue-enrichment-kpi-cards">
                <CatalogueEnrichmentKpiCard data = {['Total Hours of Content Published', '49', '8% from last period']}/>
                <CatalogueEnrichmentKpiCard data = {['DAU', '79', '2% from last period']}/>
                <CatalogueEnrichmentKpiCard data = {['Viewers', '90', '8% from last period']}/>
                <CatalogueEnrichmentKpiCard data = {['Total Hours of Content Published', '34', '8% from last period']}/>
            </div>
            <div className="catalogue-enrichment-contents">
                <label className="catalogue-last-90day">Last 90 Days</label>
                <div className="all-indicators-with-icons">
                    <label>New Launch</label>
                    <label>Launch Date</label>
                    <label>Hours of content published</label>
                    <label>Watch time till date</label>
                    <label>Viewers till date</label>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default CatalogueEnrichment;