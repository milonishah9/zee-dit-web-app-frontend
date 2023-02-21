import React from "react";
import PiChart from "../../Charts/PiChart/PiChart";

const ProductAcquisitionsFunnelMetrics = () => {
  return (
    <div>
      <label className="funnel-metrics-product-syn">Funnel Metrics</label>
      <div className="product-acquisitions-funnel-metrics-card-syn">
        
        <div className="product-acquisitions-funnel-metrics-first-child-syn">
          <div>
            <h6>% Paid Traffic</h6>
            <p className="product-acqisitions-card-value-syn">2000</p>
            <div className="product-acqui-colorspara-syn">
              <p className="pluse-value-product-syn">
                2% ↑ <br /> From D1
              </p>
              <p className="orange-value-product-syn">
                2% ↑ <br /> From D7
              </p>
              <p className="minuse-value-product-syn">
                2% ↓ <br /> From L30
              </p>
            </div>
          </div>
          <div>
            <PiChart propsWidth= {100} population = {[{name: "5-9", value: 30},{name: "<5", value: 70},]}/>
          </div>
        </div>

        <div className="product-acquisitions-funnel-metrics-second-child-syn border-left-product-acqui">
          <div>
            <h6>% Paid Traffic</h6>
            <p className="product-acqisitions-card-value-syn">1000</p>
            <div className="product-acqui-colorspara-syn">
              <p className="pluse-value-product-syn">
                2% ↑ <br /> From D1
              </p>
              <p className="orange-value-product-syn">
                2% ↑ <br /> From D7
              </p>
              <p className="minuse-value-product-syn">
                2% ↓ <br /> From L30
              </p>
            </div>
          </div>
          <div>
            <PiChart propsWidth= {100} population = {[{name: "5-9", value: 80},{name: "<5", value: 20},]}/>
          </div>
        </div>

        <div style={{paddingLeft: '10px'}} className="product-acquisitions-funnel-metrics-third-child-syn border-left-product-acqui">
          <div>
            <h6>% Paid Traffic</h6>
            <p className="product-acqisitions-card-value-syn">5000</p>
            <div className="product-acqui-colorspara-syn">
              <p className="pluse-value-product-syn">
                2% ↑ <br /> From D1
              </p>
              <p className="orange-value-product-syn">
                2% ↑ <br /> From D7
              </p>
              <p className="minuse-value-product-syn">
                2% ↓ <br /> From L30
              </p>
            </div>
          </div>
          <div>
            <PiChart propsWidth= {100} population = {[{name: "5-9", value: 50},{name: "<5", value: 50},]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAcquisitionsFunnelMetrics;
