// src/BSAScorecard.js
import React from 'react';
import './BSAScorecard.css';

const BSAScorecard = ({ title, data }) => {
  return (
    <div className="bsa-scorecard">
      <h3>{title}</h3>
      {data.map((item, index) => (
        <div key={index} className="bsa-item">
          <div className="bsa-label">
            {item.label} {item.period && <span>({item.period})</span>}
          </div>
          <div className="bsa-value">{item.value}</div>
          <div className="bsa-bar-container">
            <div className="bsa-bar" style={{ width: `${item.percentage}%`, backgroundColor: item.color }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BSAScorecard;
