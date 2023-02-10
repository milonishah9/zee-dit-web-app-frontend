import React from "react";

const CatalogueEnrichmentKpiCard = (props) => {
    const {data} = props
    return (
        <div className="catalogue-enrichment-kpi-card">
            <p className="kpi-card-heading">{data[0]}</p>
            <div className="kpi-card-value">
                <p>{data[1]}</p>
                {data[2] === 2 ? (<p className="red-color">{data[2]}% ↑ from last period</p>) : (<p className="green-color">{data[2]}% ↓ from last period</p>)}
            </div>
        </div>
    )
}

export default CatalogueEnrichmentKpiCard;