// src/SuperScoreDashboard.js
import React, {useState} from 'react';
import GaugeChart from 'react-gauge-chart';
import './SuperScoreDashboard.css';
import VerticalIndicatorsDashboard from "./VerticalIndicatorsDashboard";
import GaugeComponent from 'react-gauge-component'

//Component with default values

const SuperScoreDashboard = ({ score }) => {
    const [focusedIndicator, setFocusedIndicator] = useState(null);
    const handleIndicatorClick = (label) => {
        console.log("hello world from handle indicator click")
        setFocusedIndicator(label);
    };

  const indicators = [
    { label: 'GENERIC', value: 50, color: '#4ce0d2' },
    { label: 'BUREAU', value: 70, color: '#4c84e0' },
    { label: 'BSA', value: 60, color: '#4ce04c' },
    { label: 'LEDGER', value: 80, color: '#4ce04c' },
    { label: 'PORTFOLIO', value: 40, color: '#e07c4c' },
    { label: 'GSTIN', value: 20, color: '#e04c4c' },
    { label: 'FINANCIALS', value: 55, color: '#4ce0d2' },
  ];

  return (
    <div className="super-score-dashboard">
        <div className="gauge-container">
        <GaugeChart id="gauge-chart5"
                    nrOfLevels={500}
                    arcsLength={[0.3, 0.3, 0.4, 0.4]}
                    colors={['#EC5222', '#FF7612', '#91FF04', '#11F343']}
                    percent={587 / 800}
                    value={587}
                    arcPadding={0.02}
                    textColor="#000"
                    needleColor="#000"
                    formatTextValue={() => `${587}`}
        />
            <div className="gauge-labels">
        <span className="gauge-start">0</span>
        <span className="gauge-end">800</span>
      </div>
        </div>
      <div className="indicators">
          <VerticalIndicatorsDashboard indicators={indicators} onClick={handleIndicatorClick}/>
      </div>
    </div>
  );
};

export default SuperScoreDashboard;
