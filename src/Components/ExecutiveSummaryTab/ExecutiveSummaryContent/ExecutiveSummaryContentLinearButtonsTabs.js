import React from "react";
import { useState } from "react";

const ExecutiveSummaryContentLinearButtonsTabs = (props) => {
    const [activeTab, setActiveTab] = useState('all-content');
    const [FiltersActiveTab, setFiltersActiveTab] = useState('');

    let {tab} = props;
    
    return (
        <div className={tab === 'ott' ? ("executive-summary-content-linear-tabs"):('executive-summary-content-linear-tabs')}>
            <span>
                <button className={activeTab === 'all-content' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                    setActiveTab('all-content')
                    props.TabValue('all-content')
                    props.FilterTabValue('');
                }}>All Content</button>
                {tab === 'ott' && <span>
                    <button className={activeTab === 'original' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                        setActiveTab('original')
                        props.TabValue('original')
                        props.FilterTabValue('');
                        setFiltersActiveTab('');
                    }}>Originals</button>
                    <button className={activeTab === 'movies' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                        setActiveTab('movies')
                        props.TabValue('movies')
                        props.FilterTabValue('');
                        setFiltersActiveTab('');
                    }}>Movies</button>
                    <button className={activeTab === 'tv-shows' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                        setActiveTab('tv-shows')
                        props.TabValue('tv-shows')
                        props.FilterTabValue('');
                        setFiltersActiveTab('');
                    }}>TV shows</button>
                </span>}
                
            </span>
            {tab !== 'ott' && <>
                    <span>
                        <button className={activeTab === 'South Cluster' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                            // setActiveTab('original')
                            // props.TabValue('original')
                            // props.FilterTabValue('');
                            // setFiltersActiveTab('');
                        }}>South Cluster</button>
                        <button className={activeTab === 'Regional HSM' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                            // setActiveTab('movies')
                            // props.TabValue('movies')
                            // props.FilterTabValue('');
                            // setFiltersActiveTab('');
                        }}>Regional HSM</button>
                        <button className={activeTab === 'HSM' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                            // setActiveTab('tv-shows')
                            // props.TabValue('tv-shows')
                            // props.FilterTabValue('');
                            // setFiltersActiveTab('');
                        }}>HSM</button>
                        <button className={activeTab === 'English' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                            // setActiveTab('tv-shows')
                            // props.TabValue('tv-shows')
                            // props.FilterTabValue('');
                            // setFiltersActiveTab('');
                        }}>English</button>
                    </span>
                    <span>
                        <button className={activeTab === 'GEC' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                            // setActiveTab('tv-shows')
                            // props.TabValue('tv-shows')
                            // props.FilterTabValue('');
                            // setFiltersActiveTab('');
                        }}>GEC</button>
                        <button className={activeTab === 'Movies' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                            // setActiveTab('tv-shows')
                            // props.TabValue('tv-shows')
                            // props.FilterTabValue('');
                            // setFiltersActiveTab('');
                        }}>Movies</button>
                    </span>
                    <span>
                        <button className={activeTab === 'Paid' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                            // setActiveTab('tv-shows')
                            // props.TabValue('tv-shows')
                            // props.FilterTabValue('');
                            // setFiltersActiveTab('');
                        }}>Paid</button>
                        <button className={activeTab === 'FTA' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                            // setActiveTab('tv-shows')
                            // props.TabValue('tv-shows')
                            // props.FilterTabValue('');
                            // setFiltersActiveTab('');
                        }}>FTA</button>
                    </span>
                    </>}
            <span>
                <button className={FiltersActiveTab === 'top-10' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                    setFiltersActiveTab('top-10')
                    props.FilterTabValue('top-10')
                }}>Top 10</button>
                {/* <button className={FiltersActiveTab === 'bottom-10' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear bdr-none")} onClick={() => {
                    setFiltersActiveTab('bottom-10')
                    props.FilterTabValue('bottom-10')
                }}>Bottom 10</button> */}
            </span>
        </div>
    )
}

export default ExecutiveSummaryContentLinearButtonsTabs;