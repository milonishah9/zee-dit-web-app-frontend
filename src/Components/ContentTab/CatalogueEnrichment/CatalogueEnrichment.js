import React, { useState } from "react";
import './CatalogueEnrichment.css'
import CatalogueEnrichmentBottomContents from "./CatalogueEnrichmentBottomContents";
import CatalogueEnrichmentKpiCard from "./CatalogueEnrichmentKpiCard";
import ContentCatalogueEnrichmentThreeChart from "./ContentCatalogueEnrichmentThreeChart";

const CatalogueEnrichment = () => {

    const data = {
        trailers : {
            topData : ['Trailers', [200, '8% ↑'], [120, '2% ↑'], [200, '3% ↑']],
            bottomData : [
                ['Blur', '2/10/23', 600, 200, 120, 200],
                ['Chup', '2/10/23', 600, 200, 120, 200],
                ['Dil Dhak Dhak Karta Hai', '2/10/23', 600, 200, 120, 200],
                ['Vikram', '2/10/23', 600, 200, 120, 200],
                ['Surya', '2/10/23', 600, 200, 120, 200]
            ]
        },

        Originals: {
            topData: ['Originals', [200, '8% ↑'], [120, '2% ↑'], [200, '3% ↑']],
            bottomData: [
                ['ATM', '2/10/23', 600, 200, 120, 200],
                ['Mithya', '2/10/23', 600, 200, 120, 200],
                ['Love Hostel', '2/10/23', 600, 200, 120, 200],
                ['Abhay', '2/10/23', 600, 200, 120, 200],
                ['Surya', '2/10/23', 600, 200, 120, 200]
            ]
        },

        Movies: {
            topData: ['Movies', [200, '8% ↑'], [120, '2% ↑'], [200, '3% ↑']],
            bottomData: [
                ['Uunchai', '2/10/23', 600, 200, 120, 200],
                ['The Kashmir File', '2/10/23', 600, 200, 120, 200],
                ['Kartikey', '2/10/23', 600, 200, 120, 200],
                ['Jhund', '2/10/23', 600, 200, 120, 200],
                ['Attack Part -1 ', '2/10/23', 600, 200, 120, 200]
            ]
        },

        tvShows: {
            topData: ['TV Shows', [200, '8% ↑'], [120, '2% ↑'], [200, '3% ↑']],
            bottomData: [
                ['Meet', '2/10/23', 600, 200, 120, 200],
                ['Kundli Bhagya', '2/10/23', 600, 200, 120, 200],
                ['Kum Kum Bhagya', '2/10/23', 600, 200, 120, 200],
                ['Bhagya Lakshmi', '2/10/23', 600, 200, 120, 200],
                ['Rab Se He Dua', '2/10/23', 600, 200, 120, 200]
            ]
        }
        
    }

    const [fullscreen, setFullScreenChart] = useState(false);

    const getData = (value) => {
        setFullScreenChart(value)
    }
   
    return (
        <div>
            {fullscreen && <div className="catalogue-enrichment-full-screen-chart">
                    <ContentCatalogueEnrichmentThreeChart onClick = {getData}/>
                </div>
            } 
            <div className="catalogue-enrichment-kpi-cards">
                <CatalogueEnrichmentKpiCard data = {['Total Hours of Content Published', '49', 8]}/>
                <CatalogueEnrichmentKpiCard data = {['DAU', '79', 2]}/>
                <CatalogueEnrichmentKpiCard data = {['Viewers', '90', 8]}/>
                <CatalogueEnrichmentKpiCard data = {['Watch Time', '34', 8]}/>
            </div>

            <div className="catalogue-enrichment-indicators">
                <label className="catalogue-last-90day">Last 90 Days</label>
                <div className="all-indicators-with-icons">
                    <label><img src='/static/images/logos/new-launch-icon.png' height={10} alt='new-launch-icon' className="img" />New Launch</label>
                    <label><img src='/static/images/logos/date-icon.png' height={15} alt='date-icon' className="img"/>Launch Date</label>
                    <label>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00535 12.318C4.06772 12.318 1.68683 9.93638 1.68683 6.99944C1.68683 4.06181 4.06772 1.67999 7.00535 1.67999C9.94322 1.67999 12.3239 4.06181 12.3239 6.99944C12.3239 9.93638 9.94299 12.318 7.00535 12.318ZM7.00535 0.598633C10.5397 0.598633 13.4055 3.46439 13.4055 6.99944C13.4055 10.5338 10.5397 13.3986 7.00535 13.3986C3.471 13.3986 0.605469 10.5338 0.605469 6.99944C0.605469 3.46439 3.47123 0.598633 7.00535 0.598633ZM7.00535 2.76186C6.70618 2.76186 6.46467 3.00425 6.46467 3.30345V6.9908V6.99351C6.46377 7.13416 6.51514 7.27472 6.62239 7.38198L9.23577 9.99444C9.34122 10.1007 9.47906 10.153 9.61782 10.153C9.75567 10.153 9.89453 10.1007 9.99996 9.99444C10.2108 9.78355 10.2108 9.44114 9.99996 9.23025L7.54604 6.77633V3.30322C7.54604 3.00405 7.30446 2.76164 7.00529 2.76164L7.00535 2.76186Z" fill="#808080"/>
                        </svg>
                        Hours of content published</label>
                    <label><img src='/static/images/logos/Watch-time-icon.png' height={15} alt='Watch-time-icon' className="img"/>Watch time till date</label>
                    <label><img src='/static/images/logos/till-time-icon.png' height={15} alt='till-time-icon'className="img" />Viewers till date</label>
                    <label><svg width="20" height="20" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5 23.8568C23.5 24.2119 23.1957 24.5 22.8194 24.5H9.18058C8.80429 24.5 8.5 24.2119 8.5 23.8568C8.5 19.9488 11.8642 16.7696 16 16.7696C20.1358 16.7696 23.5 19.949 23.5 23.8568ZM16 15.5046C18.6263 15.5046 20.7641 13.485 20.7641 11.0023C20.7641 8.51957 18.6263 6.5 16 6.5C13.3737 6.5 11.2359 8.51957 11.2359 11.0023C11.2359 13.485 13.3737 15.5046 16 15.5046Z" fill="#CE5CCA"/>
                        <circle cx="21.5" cy="21.5" r="6" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4999 26.4869C18.7459 26.4869 16.5138 24.2541 16.5138 21.5008C16.5138 18.7467 18.7459 16.5138 21.4999 16.5138C24.2541 16.5138 26.486 18.7467 26.486 21.5008C26.486 24.2541 24.2539 26.4869 21.4999 26.4869ZM21.4999 15.5C24.8134 15.5 27.5 18.1866 27.5 21.5008C27.5 24.8142 24.8134 27.5 21.4999 27.5C18.1864 27.5 15.5 24.8142 15.5 21.5008C15.5 18.1866 18.1866 15.5 21.4999 15.5ZM21.4999 17.528C21.2194 17.528 20.993 17.7553 20.993 18.0358V21.4927V21.4952C20.9922 21.6271 21.0403 21.7588 21.1409 21.8594L23.5909 24.3086C23.6898 24.4082 23.819 24.4572 23.9491 24.4572C24.0783 24.4572 24.2085 24.4082 24.3073 24.3086C24.505 24.1109 24.505 23.7899 24.3073 23.5921L22.0068 21.2916V18.0356C22.0068 17.7551 21.7803 17.5278 21.4998 17.5278L21.4999 17.528Z" fill="#CE5CCA"/>
                    </svg>Watch time per viewer</label>
                </div>
            </div>
            {/* ↑ ↓ */}
            <div className="catalogue-enrichment-contents">
                <CatalogueEnrichmentBottomContents onClick={getData} data = {data.trailers}/>
                <CatalogueEnrichmentBottomContents onClick={getData} data = {data.Originals}/>
                <CatalogueEnrichmentBottomContents onClick={getData} data = {data.Movies}/>
                <CatalogueEnrichmentBottomContents onClick={getData} data = {data.tvShows}/>
            </div>
            
        </div>
    )
}

export default CatalogueEnrichment;