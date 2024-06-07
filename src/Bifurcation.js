import React from "react";
import "./Bifurcation.css"
import BSAScorecard from "./BSAScorecard";

function Bifurcation() {
     const bsaData = [
    { label: 'Score', value: 750, percentage: 75, color: 'limegreen' },
    { label: '90+/SUB/LSS/DBT', period: 'last 12 Months', value: 0, percentage: 0, color: 'red' },
    { label: '30+ DPD', period: 'last 3 Months', value: 3, percentage: 30, color: 'limegreen' },
    { label: 'PL/BL Enquiries', period: 'last 3 Months', value: 0, percentage: 0, color: 'limegreen' },
    { label: 'Current OD with DPD<=30 days', value: 'No', percentage: 10, color: 'orange' },
    { label: 'DPD<=30 days', period: 'last 12 Months', value: 4, percentage: 40, color: 'red' },
  ];
  return (
    <div className="Bifurcation">
        <BSAScorecard title="Generic" data={bsaData} />
        <BSAScorecard title="Bureau" data={bsaData} />
        <BSAScorecard title="Ledger" data={bsaData} />
        <BSAScorecard title="Portfolio" data={bsaData} />
        <BSAScorecard title="Gstin" data={bsaData} />
        <BSAScorecard title="Financial" data={bsaData} />
    </div>
  );
}

export default Bifurcation;