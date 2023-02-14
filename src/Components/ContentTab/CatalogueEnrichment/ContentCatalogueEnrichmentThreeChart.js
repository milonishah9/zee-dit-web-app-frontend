import React from "react";
import ScatterplotConnected from "../../Charts/ScatterplotConnected/ScatterplotConnected";

const ContentCatalogueEnrichmentThreeChart = () => {
  return (
    <div>
        <div className="three-chart-container">
            <h4>Trailers</h4>
            <div>
            <div className="all-indicators-with-icons">
                    <label><img src='/static/images/logos/new-launch-icon.png' height={10} alt='new-launch-icon' className="img" />New Launch</label>
                    <label><img src='/static/images/logos/Watch-time-icon.png' height={15} alt='Watch-time-icon' className="img"/>Watch time till date</label>
                    <label><img src='/static/images/logos/till-time-icon.png' height={15} alt='till-time-icon'className="img" />Viewers till date</label>
                    <label><svg width="20" height="20" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5 23.8568C23.5 24.2119 23.1957 24.5 22.8194 24.5H9.18058C8.80429 24.5 8.5 24.2119 8.5 23.8568C8.5 19.9488 11.8642 16.7696 16 16.7696C20.1358 16.7696 23.5 19.949 23.5 23.8568ZM16 15.5046C18.6263 15.5046 20.7641 13.485 20.7641 11.0023C20.7641 8.51957 18.6263 6.5 16 6.5C13.3737 6.5 11.2359 8.51957 11.2359 11.0023C11.2359 13.485 13.3737 15.5046 16 15.5046Z" fill="#CE5CCA"/>
                        <circle cx="21.5" cy="21.5" r="6" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4999 26.4869C18.7459 26.4869 16.5138 24.2541 16.5138 21.5008C16.5138 18.7467 18.7459 16.5138 21.4999 16.5138C24.2541 16.5138 26.486 18.7467 26.486 21.5008C26.486 24.2541 24.2539 26.4869 21.4999 26.4869ZM21.4999 15.5C24.8134 15.5 27.5 18.1866 27.5 21.5008C27.5 24.8142 24.8134 27.5 21.4999 27.5C18.1864 27.5 15.5 24.8142 15.5 21.5008C15.5 18.1866 18.1866 15.5 21.4999 15.5ZM21.4999 17.528C21.2194 17.528 20.993 17.7553 20.993 18.0358V21.4927V21.4952C20.9922 21.6271 21.0403 21.7588 21.1409 21.8594L23.5909 24.3086C23.6898 24.4082 23.819 24.4572 23.9491 24.4572C24.0783 24.4572 24.2085 24.4082 24.3073 24.3086C24.505 24.1109 24.505 23.7899 24.3073 23.5921L22.0068 21.2916V18.0356C22.0068 17.7551 21.7803 17.5278 21.4998 17.5278L21.4999 17.528Z" fill="#CE5CCA"/>
                    </svg>Viewers till date</label>
                </div>
            </div>
        </div>
      <div className="content-catalogue-enrichment-threeChart">
        <ScatterplotConnected
          color={"#FF9355"}
          yLabel={"Watch time till date (Mn)"}
        />
        <ScatterplotConnected
          color={"#768CFF"}
          yLabel={"Viewers till date (Mn)"}
        />
        <ScatterplotConnected
          color={"#CE5CCA"}
          yLabel={"Watch time per viewer (Mn)"}
        />
      </div>
    </div>
  );
};

export default ContentCatalogueEnrichmentThreeChart;
