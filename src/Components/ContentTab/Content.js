import React, { useState } from "react";
import ContentHeader from "./ContentHeader";
import './Content.css'
import CatalogueEnrichment from "./CatalogueEnrichment/CatalogueEnrichment";
import ContentSchedulingWithHeatMapAndDropdowns from "../ContentSchedulingWithHeatMapAndDropdowns/ContentSchedulingWithHeatMapAndDropdowns";
import ContentMarketing from "./ContentMarketing/ContentMarketing";

const Content = () => {
    const [buttonTab, setButtonTab] = useState('')
    const handleButtonClick = (tabsName) => {
        setButtonTab(tabsName)
    }

    return (
        <div className="">
            <div>
                <ContentHeader header="Content" />
            </div>

            <div className="contents">
                <div className="content-buttons-tabs">
                    <button className={buttonTab === 'Enrichment' ? ("content-active-button-tab") : ("content-button-tab")} onClick={() => handleButtonClick('Enrichment')}>Catalogue Enrichment</button>
                    <button className={buttonTab === 'Scheduling' ? ("content-active-button-tab") : ("content-button-tab")} onClick={() => handleButtonClick('Scheduling')}>Content Scheduling</button>
                    <button className={buttonTab === 'Marketing' ? ("content-active-button-tab") : ("content-button-tab")} onClick={() => handleButtonClick('Marketing')}>Content Marketing</button>
                    <button className={buttonTab === 'Performance' ? ("content-active-button-tab") : ("content-button-tab")} onClick={() => handleButtonClick('Performance')}>Content Performance</button>
                </div>

                <div>
                    {buttonTab === 'Enrichment' && <CatalogueEnrichment />}
                    {buttonTab === 'Scheduling' && <ContentSchedulingWithHeatMapAndDropdowns />}
                    {buttonTab === 'Marketing' && <ContentMarketing />}
                </div>
            </div>
        </div>
    )
}

export default Content;