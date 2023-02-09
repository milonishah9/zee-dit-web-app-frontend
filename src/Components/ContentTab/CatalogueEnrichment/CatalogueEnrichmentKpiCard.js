import React from "react";

const CatalogueEnrichmentKpiCard = (props) => {
    const {data} = props
    return (
        <div className="catalogue-enrichment-kpi-card">
            <p className="kpi-card-heading">{data[0]}</p>
            <div className="kpi-card-value">
                <p>{data[1]}</p>
                <p>{data[2]}</p>
            </div>
        </div>
    )
}

export default CatalogueEnrichmentKpiCard;