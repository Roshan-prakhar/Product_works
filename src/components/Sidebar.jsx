import React from 'react';

function Sidebar({ currentView, setCurrentView, currentDev }) {
  const nextStepsMap = {
    "Sarah Chen": [
      "Break down features into <2-day tasks to reduce cycle time",
      "Add pre-commit hooks to lower bug rate below 10%",
      "Review smaller PRs to increase throughput to 12+/month",
      "Automate deployment pipeline to reach 18+/month"
    ],
    "Marcus Rodriguez": [
      "Add pre-commit hooks to reduce bug rate from 21% to <10%",
      "Set daily WIP limit of 2 tasks to reduce cycle time",
      "Break PRs into <200 lines for faster reviews",
      "Automate deployment pipeline to reach 15+/month"
    ],
    "Aisha Khan": [
      "Maintain outstanding bug rate - share testing practices",
      "Keep up amazing deployment frequency (31/month)",
      "Consider mentoring others on your efficient workflow",
      "Document DevOps best practices for team knowledge base"
    ],
    "James Wilson": [
      "Maintain good lead time performance",
      "Address bug rate with additional testing to get <10%",
      "Increase deployment frequency to ≥20/month",
      "Great PR throughput - maintain this level"
    ]
  };

  const steps = nextStepsMap[currentDev.name] || nextStepsMap["Sarah Chen"];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span>🔷</span> DevMetrics
        </div>
      </div>

      <div className="nav-menu">
        <button 
          className={`nav-item ${currentView === "dashboard" ? "active" : ""}`}
          onClick={() => setCurrentView("dashboard")}
        >
          <span>📊</span> Dashboard
        </button>
        <button 
          className={`nav-item ${currentView === "settings" ? "active" : ""}`}
          onClick={() => setCurrentView("settings")}
        >
          <span>⚙️</span> Settings
        </button>
      </div>

      <div className="next-steps-section">
        <div className="next-steps-title">✅ NEXT STEPS</div>
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <div className="step-bullet">{index + 1}</div>
            <div>{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
