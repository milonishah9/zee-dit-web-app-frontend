import React from "react";
import ScatterplotConnected from "../../Charts/ScatterplotConnected/ScatterplotConnected";

const ContentCatalogueEnrichmentThreeChart = () => {
  return (
    <div className="content-catalogue-enrichment-threeChart">
      <ScatterplotConnected color = {'#FF9355'} yLabel= {"Watch time till date (Mn)"}/>
      <ScatterplotConnected color = {'#768CFF'} yLabel= {"Viewers till date (Mn)"}/>
      <ScatterplotConnected color = {'#CE5CCA'} yLabel= {"Watch time per viewer (Mn)"}/>
    </div>
  );
};

export default ContentCatalogueEnrichmentThreeChart;
