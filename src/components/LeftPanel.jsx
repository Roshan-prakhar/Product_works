function LeftPanel({ currentView, setCurrentView, currentDev }) {
  const getActionItems = (dev) => {
    if (dev.name === "Marcus Rodriguez") {
      return [
        "Break down features into <2-day tasks to reduce cycle time",
        "Add pre-commit hooks to lower bug rate below 10%",
        "Review smaller PRs to increase throughput to 12+/month",
        "Automate deployment pipeline to reach 15+/month"
      ];
    }
    if (dev.name === "Aisha Khan") {
      return [
        "Maintain outstanding bug rate - share testing practices",
        "Keep up amazing deployment frequency",
        "Consider mentoring others on your efficient workflow",
        "Document DevOps best practices for team knowledge base"
      ];
    }
    if (dev.name === "Sarah Chen") {
      return [
        "Break down features into <2-day tasks to reduce cycle time",
        "Add pre-commit hooks to lower bug rate below 10%",
        "Review smaller PRs to increase throughput to 12+/month",
        "Automate deployment pipeline to increase frequency to 18+/month"
      ];
    }
    if (dev.name === "James Wilson") {
      return [
        "Good work maintaining lead time",
        "Address bug rate with additional testing to get <10%",
        "Consider increasing deployment frequency to ≥20/month",
        "Great PR throughput - maintain this level"
      ];
    }
    return [];
  };

  const actionItems = getActionItems(currentDev);

  return (
    <div className="left-panel">
      <div className="logo">
        <span className="logo-icon">🔷</span>
        <span className="logo-text">DevMetrics</span>
      </div>

      <nav className="nav-menu">
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
      </nav>

      {/* Next Steps Section */}
      <div className="next-steps">
        <div className="section-header">
          <span>✅</span> NEXT STEPS
        </div>
        <ul className="steps-list">
          {actionItems.map((action, i) => (
            <li key={i}>{action}</li>
          ))}
        </ul>
      </div>

      {/* Quick Profile */}
      <div className="quick-profile">
        <div className="quick-avatar">
          {currentDev.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="quick-info">
          <div className="quick-name">{currentDev.name}</div>
          <div className="quick-role">{currentDev.role}</div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
