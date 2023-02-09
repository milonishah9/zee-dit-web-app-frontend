import React from "react";
import ContentHeader from "./ContentHeader";
import './Content.css'

const Content = () => {
    return (
        <div className="">
            <div>
                <ContentHeader header= "Content"/>
            </div>
            
            <div className="content-tabs">
                <h4>Catalogue Enrichment</h4>
                <h4>Content Scheduling</h4>
                <h4>Content Marketing</h4>
                <h4>Content Performance</h4>
            </div>
            
        </div>
    )
}

export default Content;