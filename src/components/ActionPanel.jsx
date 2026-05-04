import React, { useState } from 'react';
import './ActionPanel.css';

const ActionPanel = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const actionItems = [
    'Add unit tests to critical paths to reduce bug rate',
    'Implement pair programming for complex features',
    'Set up WIP limits to reduce cycle time',
    'Add pre-commit hooks for code quality',
    'Schedule regular code reviews'
  ];

  const handleCheckboxChange = (index) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="action-panel">
      <h3>🎯 Action Items</h3>
      <div className="action-items">
        {actionItems.map((item, index) => (
          <div key={index} className="action-item">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={checkedItems[index] || false}
                onChange={() => handleCheckboxChange(index)}
                className="action-checkbox"
              />
              <span className="checkmark"></span>
              <span className="action-text">{item}</span>
            </label>
          </div>
        ))}
      </div>
      <div className="action-footer">
        <button className="complete-btn">
          Complete Selected ({Object.values(checkedItems).filter(Boolean).length})
        </button>
      </div>
    </div>
  );
};

export default ActionPanel;
