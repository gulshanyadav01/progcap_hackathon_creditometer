// // src/App.js
// import React from 'react';
import BSAScorecard from './BSAScorecard';
// import './App.css';
//
// function App() {
//   const bsaData = [
//     { label: 'Score', value: 750, percentage: 75, color: 'orange' },
//     { label: '90+/SUB/LSS/DBT', period: 'last 12 Months', value: 0, percentage: 0, color: 'red' },
//     { label: '30+ DPD', period: 'last 3 Months', value: 3, percentage: 30, color: 'limegreen' },
//     { label: 'PL/BL Enquiries', period: 'last 3 Months', value: 0, percentage: 0, color: 'limegreen' },
//     { label: 'Current OD with DPD<=30 days', value: 'No', percentage: 10, color: 'orange' },
//     { label: 'DPD<=30 days', period: 'last 12 Months', value: 4, percentage: 40, color: 'red' },
//   ];
//
//   return (
//     <div className="App">
//       <BSAScorecard title="BSA" data={bsaData} />
//       <BSAScorecard title="BSA" data={bsaData} />
//       <BSAScorecard title="BSA" data={bsaData} />
//       <BSAScorecard title="BSA" data={bsaData} />
//       <BSAScorecard title="BSA" data={bsaData} />
//       <BSAScorecard title="BSA" data={bsaData} />
//     </div>
//   );
// }
//
// export default App;

// src/App.js
import React from 'react';
import SuperScoreDashboard from './SuperScoreDashboard';
import './App.css';
import Bifurcation from "./Bifurcation";

function App() {
  const score = 536;
  const indicators = [
    { label: 'GENERIC', value: 50, color: '#4ce0d2' },
    { label: 'BUREAU', value: 70, color: '#4c84e0' },
    { label: 'BSA', value: 60, color: '#4ce04c' },
    { label: 'LEDGER', value: 80, color: '#4ce04c' },
    { label: 'PORTFOLIO', value: 40, color: '#e07c4c' },
    { label: 'GSTIN', value: 20, color: '#e04c4c' },
    { label: 'FINANCIALS', value: 55, color: '#4ce0d2' },
  ];
    const bsaData = [
    { label: 'Score', value: 750, percentage: 75, color: 'orange' },
    { label: '90+/SUB/LSS/DBT', period: 'last 12 Months', value: 0, percentage: 0, color: 'red' },
    { label: '30+ DPD', period: 'last 3 Months', value: 3, percentage: 30, color: 'limegreen' },
    { label: 'PL/BL Enquiries', period: 'last 3 Months', value: 0, percentage: 0, color: 'limegreen' },
    { label: 'Current OD with DPD<=30 days', value: 'No', percentage: 10, color: 'orange' },
    { label: 'DPD<=30 days', period: 'last 12 Months', value: 4, percentage: 40, color: 'red' },
  ];
  const title = "Ask Customer:";
  const content = [
    "There are just 3 Sales transactions in the month of Apr'24 GSTIN, ask why?",
    "Top Suppliers from Bank and GSTIN are not matching, ask why?",
    "There was a delay of 55 days in GSTIN filing during Dec'23 ask why?",
    // Add more items as needed
  ];

  return (
    <div className="App">
      <div className="upper_score_card">
        <SuperScoreDashboard score={score} indicators={indicators} />
        <div className="quick_summary">
          <div className="scrollable-div">
            <h3>{title}</h3>
            <div className="scrollable-content">
              <ul>
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="scrollable-div">
            <h3>{title}</h3>
            <div className="scrollable-content">
              <ul>
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Bifurcation/>
    </div>
  );
}

export default App;



// src/App.js
// import React from 'react';
// import VerticalIndicatorsDashboard from './VerticalIndicatorsDashboard';
// import './App.css';
//
// function App() {
//   const indicators = [
//     { label: 'GENERIC', value: 50, color: '#4ce0d2' },
//     { label: 'BUREAU', value: 70, color: '#4c84e0' },
//     { label: 'BSA', value: 60, color: '#4ce04c' },
//     { label: 'LEDGER', value: 80, color: '#4ce04c' },
//     { label: 'PORTFOLIO', value: 40, color: '#e07c4c' },
//     { label: 'GSTIN', value: 20, color: '#e04c4c' },
//     { label: 'FINANCIALS', value: 55, color: '#4ce0d2' },
//   ];
//
//   return (
//     <div className="App">
//       <VerticalIndicatorsDashboard indicators={indicators} />
//     </div>
//   );
// }
//
// export default App;
