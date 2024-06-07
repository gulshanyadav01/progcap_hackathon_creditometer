// src/VerticalIndicator.js
import React from 'react';
import './VerticalIndicator.css';

const VerticalIndicator = ({ label, value, color }) => {
  return (
    <div className="indicator" onClick={() => console.log(label)}>
      <div className="indicator-bar-container">
        <div className="indicator-bar" style={{ height: `${value}%`, backgroundColor: color }}></div>
      </div>
      <div className="indicator-label">{label}</div>
    </div>
  );
};

export default VerticalIndicator;
