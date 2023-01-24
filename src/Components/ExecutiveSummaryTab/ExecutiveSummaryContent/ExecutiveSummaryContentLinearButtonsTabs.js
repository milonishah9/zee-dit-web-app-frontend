import React from "react";
import { useState } from "react";

const ExecutiveSummaryContentLinearButtonsTabs = (props) => {
    const [activeTab, setActiveTab] = useState('all-content')
    let {tab} = props;
    console.log(tab);
    return (
        <div className={tab === 'ott' ? ("executive-summary-content-linear-tabs"):('nonee')}>
            <span>
                <button className={activeTab === 'all-content' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                    setActiveTab('all-content')
                    props.TabValue('all-content')
                }}>All Content</button>
                {tab === 'ott' && <span>
                    <button className={activeTab === 'Originals' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                        setActiveTab('Originals')
                        props.TabValue('Originals')
                    }}>Originals</button>
                    <button className={activeTab === 'Movies' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                        setActiveTab('Movies')
                        props.TabValue('Movies')
                    }}>Movies</button>
                    <button className={activeTab === 'TV shows' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                        setActiveTab('TV shows')
                        props.TabValue('TV shows')
                    }}>TV shows</button>
                </span>}
            </span>
            <span>
                <button className={activeTab === 'top-10' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                    setActiveTab('top-10')
                    props.TabValue('top-10')
                }}>Top 10</button>
                <button className={activeTab === 'bottom-10' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear bdr-none")} onClick={() => {
                    setActiveTab('bottom-10')
                    props.TabValue('bottom-10')
                }}>Bottom 10</button>
            </span>
        </div>
    )
}

export default ExecutiveSummaryContentLinearButtonsTabs;