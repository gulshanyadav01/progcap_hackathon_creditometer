// src/BSAScorecard.js
import React from 'react';
import './BSAScorecard.css';

const BSAScorecard = ({ title, data }) => {
  return (
    <div className="bsa-scorecard">
      <p>{title}</p>
      {data.map((item, index) => (
        <div key={index} className="bsa-item">
            <div className="base-item-label-value-block">
          <div className="bsa-label">
            {item.label} {item.period && <span>({item.period})</span>}
          </div>
          <div className="bsa-value">{item.value}</div>
            </div>
          <div className="bsa-bar-container">
            <div className="bsa-bar" style={{ width: `${item.percentage}%`, backgroundColor: item.color }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BSAScorecard;
