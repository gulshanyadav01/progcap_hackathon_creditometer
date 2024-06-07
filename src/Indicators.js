// src/Indicators.js
import React from 'react';

const Indicator = ({ label, value, color }) => (
  <div style={{ borderLeft: `4px solid ${color}`, paddingLeft: '10px', marginBottom: '10px' }}>
    <div>{label}</div>
    <div style={{ fontWeight: 'bold' }}>{value}</div>
  </div>
);

export default Indicator;
