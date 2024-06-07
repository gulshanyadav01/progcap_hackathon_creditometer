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
      <GaugeComponent
          value={587}
          type="radial"
          minValue={0}
          maxValue={900}
          labels={{
            tickLabels: {
              type: "inner",
              ticks: [

              ]
            }
          }}
          arc={{
            colorArray: ['#00FF15', '#FF2121',],
            subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
            padding: 0.02,
            width: 0.2
          }}
          pointer={{
            elastic: true,
            animationDelay: 1
          }}
      />
      <div className="indicators">
          <VerticalIndicatorsDashboard indicators={indicators} onClick={handleIndicatorClick}/>
      </div>
    </div>
  );
};

export default SuperScoreDashboard;
