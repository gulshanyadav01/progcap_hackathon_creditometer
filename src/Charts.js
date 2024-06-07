// src/Charts.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import GaugeChart from 'react-gauge-chart';

const BarChart = ({ data }) => (
  <Bar
    data={data}
    options={{
      scales: {
        y: { beginAtZero: true }
      }
    }}
  />
);

const Gauge = ({ value }) => (
  <GaugeChart id="gauge-chart" nrOfLevels={20} percent={value / 1000} />
);

export { BarChart, Gauge };
