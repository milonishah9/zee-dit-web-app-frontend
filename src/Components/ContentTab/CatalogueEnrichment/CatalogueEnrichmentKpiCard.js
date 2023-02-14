import React from "react";

const CatalogueEnrichmentKpiCard = (props) => {
    const {data} = props
    return (
        <div className="catalogue-enrichment-kpi-card">
            <div className="trailers-svg-div">
                <p className="kpi-card-heading">{data[0]}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
            </div>
            
            <div className="catalogue-kpi-card-value">
                <p>{data[1]}</p>
                {data[2] === 2 ? (<p className="red-color">{data[2]}% ↑ from last period</p>) : (<p className="green-color">{data[2]}% ↓ from last period</p>)}
            </div>
        </div>
    )
}

export default CatalogueEnrichmentKpiCard;