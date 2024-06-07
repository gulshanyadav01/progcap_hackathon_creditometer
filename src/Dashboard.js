// src/Dashboard.js
import React from 'react';
import { BarChart, Gauge } from './Charts';
import Indicator from './Indicators';

const data = {
  labels: ['GENERIC', 'BUREAU', 'BSA', 'LEDGER', 'PORTFOLIO', 'GSTIN', 'FINANCIALS'],
  datasets: [
    {
      label: 'Scores',
      data: [75, 90, 80, 60, 70, 50, 65],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(99, 255, 132, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(99, 255, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <div>
      <h1>Credit Assessment Report</h1>
      <Gauge value={536} />
      <BarChart data={data} />
      <div>
        <h2>Indicators</h2>
        <Indicator label="Business Vintage" value="Orange" color="orange" />
        <Indicator label="Anchor Vintage" value="Malachite" color="green" />
        <Indicator label="Shop Owned" value="Blue" color="blue" />
        {/* Add more indicators as needed */}
      </div>
    </div>
  );
};

export default Dashboard;
