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
            <p className="product-acqisitions-card-value-syn">XXXX</p>
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
            <PiChart />
          </div>
        </div>

        <div className="product-acquisitions-funnel-metrics-second-child-syn border-left-product-acqui">
          <div>
            <h6>% Paid Traffic</h6>
            <p className="product-acqisitions-card-value-syn">XXXX</p>
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
            <PiChart />
          </div>
        </div>

        <div style={{paddingLeft: '10px'}} className="product-acquisitions-funnel-metrics-third-child-syn border-left-product-acqui">
          <div>
            <h6>% Paid Traffic</h6>
            <p className="product-acqisitions-card-value-syn">XXXX</p>
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
            <PiChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAcquisitionsFunnelMetrics;
