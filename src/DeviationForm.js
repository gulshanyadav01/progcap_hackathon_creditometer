// src/DeviationForm.js
import React, { useState } from 'react';
import './DeviationForm.css';

const DeviationForm = () => {
  const [categories, setCategories] = useState([{ category: '', subCategory: '' }]);

  const handleCategoryChange = (index, event) => {
    const newCategories = [...categories];

    newCategories[index].category = event.target.value;
    setCategories(newCategories);
  };


  const handleSubCategoryChange = (index, event) => {
    const newCategories = [...categories];
    newCategories[index].subCategory = event.target.value;
    setCategories(newCategories);
  };

  const addCategory = () => {
    setCategories([...categories, { category: '', subCategory: '' }]);
  };

  return (
    <div className="deviation-form">
      <h3>Deviation Reason*</h3>
      {categories.map((item, index) => (
        <div key={index} className="category-block">
          <label>Select Category</label>
          <select value={item.category} onChange={(e) => handleCategoryChange(index, e)}>
            <option value="">--Select Category--</option>
            <option value="Category 1">Generic</option>
            <option value="Category 2">Bureau</option>
            <option value="Category 2">BSA</option>
            <option value="Category 2">Ledger</option>
            <option value="Category 2">Portfolio</option>
            <option value="Category 2">Financials</option>
            {/* Add more categories as needed */}
          </select>

          <label>Select Sub-Category</label>
          <select value={item.subCategory} onChange={(e) => handleSubCategoryChange(index, e)}>
            <option value="">--Select Sub-Category--</option>
            <option value="Sub-Category 1">Average Repayment Period</option>
            <option value="Sub-Category 2">Dependence</option>
            <option value="Sub-Category 2">Business Growth Trend (YoY)</option>
            <option value="Sub-Category 2">Avg Monthly Repayments</option>
            <option value="Sub-Category 2">Avg Monthly Repayments</option>
            <option value="Sub-Category 2">Avg Monthly Sales</option>
            <option value="Sub-Category 2">%OD>0</option>
            {/* Add more sub-categories as needed */}
          </select>

          <textarea placeholder="Enter details"></textarea>
        </div>
      ))}
      <button className="add-category" onClick={addCategory}>+ Add Another Category</button>
    </div>
  );
};

export default DeviationForm;
