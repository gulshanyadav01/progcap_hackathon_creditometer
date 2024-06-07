// src/VerticalIndicatorsDashboard.js
import React from 'react';
import VerticalIndicator from './VerticalIndicator';
import './VerticalIndicatorsDashboard.css';

const VerticalIndicatorsDashboard = ({ indicators, focusedIndicator }) => {
  return (
    <div className="indicators-dashboard">
      {indicators.map((indicator, index) => (
        <VerticalIndicator
          key={index}
          label={indicator.label}
          value={indicator.value}
          color={indicator.color}
          isVisible={focusedIndicator === indicator.label}
        />
      ))}
    </div>
  );
};

export default VerticalIndicatorsDashboard;
