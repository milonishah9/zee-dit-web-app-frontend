import React from "react";
import './CatalogueEnrichment.css'
import CatalogueEnrichmentKpiCard from "./CatalogueEnrichmentKpiCard";

const CatalogueEnrichment = () => {
    return (
        <div>
            <div className="catalogue-enrichment-kpi-cards">
                <CatalogueEnrichmentKpiCard />
                <CatalogueEnrichmentKpiCard />
                <CatalogueEnrichmentKpiCard />
                <CatalogueEnrichmentKpiCard />
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
        </div>
    )
}

export default CatalogueEnrichment;