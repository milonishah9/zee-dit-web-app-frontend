import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import StackedBarChart from './Components/Charts/StackedBarChart/StackedBarChart';
import ILTTwentySummary from './Pages/ILTTwentySummary/ILTTwentySummary';
import ILTTdataTowers from './Pages/ILTTdataTowers/ILTTdataTowers';
import ILTTloginPage from './Pages/ILTTloginPage/ILTTloginPage';
import Product from './Pages/ProductPage/Product';
import ExecutiveSummaryContent from './Components/ExecutiveSummaryTab/ExecutiveSummaryContent/ExecutiveSummaryContent';
import ExecutiveSummaryTab from './Components/ExecutiveSummaryTab/ExecutiveSummaryTab';
import AreaChartWithToolTips from './Components/Charts/AreaChartWithToolTips/AreaChartWithToolTips';
import HSbar from './Components/Charts/HSbar/HSbar';
import DivergingSB from './Components/Charts/DivergingSB/DivergingSB';
import Links from './Components/Charts/Links/Links';
import Monochrome from './Components/Charts/Monochrome/Monochrome';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<ILTTloginPage />} />
          <Route path='/home' element={<ILTTdataTowers />} />
          <Route path='/ilt20-summary' element={<ILTTwentySummary />} />
          <Route path='/product' element={<Product />} />
          <Route path='/executive-summary' element={<ExecutiveSummaryTab />} />
          <Route path='/executive-summary-content' element={<ExecutiveSummaryContent />} />
          <Route path='/area-chart-with-tooltips' element={<AreaChartWithToolTips />} />
          <Route path='/hs-bar' element={<HSbar />} />
          <Route path='/new' element={<DivergingSB />} />
          <Route path='/links' element={<Links />} />
          <Route path='/mono' element={<Monochrome />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;