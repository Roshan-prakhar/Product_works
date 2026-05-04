function MiddlePanel({ currentDev, handlePrev, handleNext }) {
  const metrics = [
    { 
      title: "Lead Time", 
      value: currentDev.leadTime, 
      unit: "days", 
      trend: -15, 
      status: "good", 
      interpretation: "PRs merge quickly. Efficient process." 
    },
    { 
      title: "Cycle Time", 
      value: currentDev.cycleTime, 
      unit: "days", 
      trend: 8, 
      status: "attention", 
      interpretation: "Work sits too long in progress." 
    },
    { 
      title: "Bug Rate", 
      value: currentDev.bugRate, 
      unit: "", 
      trend: 5, 
      status: "attention", 
      interpretation: `${(currentDev.bugRate * 100).toFixed(1)}% create bugs. Add tests.` 
    },
    { 
      title: "Deployments", 
      value: currentDev.deployments, 
      unit: "/mo", 
      trend: 12, 
      status: "good", 
      interpretation: "~3x per week. Healthy." 
    },
    { 
      title: "PR Throughput", 
      value: currentDev.prThroughput, 
      unit: "/mo", 
      trend: 0, 
      status: "attention", 
      interpretation: "Merge smaller PRs for higher velocity." 
    }
  ];

  const getStatus = (value, metric) => {
    switch(metric) {
      case 'leadTime':
        if (value <= 2) return 'good';
        if (value <= 5) return 'attention';
        return 'critical';
      case 'cycleTime':
        if (value <= 3) return 'good';
        if (value <= 6) return 'attention';
        return 'critical';
      case 'bugRate':
        if (value <= 0.1) return 'good';
        if (value <= 0.2) return 'attention';
        return 'critical';
      case 'deployments':
        if (value >= 20) return 'good';
        if (value >= 10) return 'attention';
        return 'critical';
      case 'prThroughput':
        if (value >= 12) return 'good';
        if (value >= 6) return 'attention';
        return 'critical';
      default:
        return 'attention';
    }
  };

  const getInterpretation = (metric, value) => {
    switch(metric) {
      case 'leadTime':
        return value <= 2.5 ? "Your PRs merge quickly. Review process is efficient." : "PRs take too long to merge. Review process needs optimization.";
      case 'cycleTime':
        return value <= 3.5 ? "Great workflow efficiency. Work moves quickly." : "Work sits 'in progress' too long before completing.";
      case 'bugRate':
        return `${(value * 100).toFixed(1)}% of work creates production bugs. ${value <= 0.12 ? "This is good." : "This is high."}`;
      case 'deployments':
        return value >= 15 ? "Great! You deploy frequently." : "You could deploy more frequently for faster feedback.";
      case 'prThroughput':
        return value >= 10 ? "Great! You maintain good PR throughput." : "PR throughput could be higher for better velocity.";
      default:
        return "";
    }
  };

  const getActionItems = (dev) => {
    if (dev.name === "Marcus Rodriguez") {
      return [
        "Add comprehensive unit tests to reduce critical bug rate below 10%",
        "Break down large tasks to reduce cycle time to under 3 days",
        "Review and optimize code review process to reduce lead time",
        "Increase deployment frequency to at least 15/month"
      ];
    }
    if (dev.name === "Aisha Khan") {
      return [
        "Maintain outstanding bug rate - share testing practices with team",
        "Keep up amazing deployment frequency - you're a role model",
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
        "Good work maintaining lead time - keep it up",
        "Address bug rate with additional testing to get below 10%",
        "Consider increasing deployment frequency to ≥20/month",
        "Great PR throughput - maintain this excellent level"
      ];
    }
    return [];
  };

  const actionItems = getActionItems(currentDev);

  return (
    <div className="middle-panel">
      {/* Employee Selector with Arrows */}
      <div className="employee-nav">
        <button className="nav-arrow" onClick={handlePrev}>←</button>
        <div className="employee-name-large">{currentDev.name}</div>
        <button className="nav-arrow" onClick={handleNext}>→</button>
      </div>

      {/* Employee Header - Horizontal Layout */}
      <div className="employee-header">
        <div className="employee-avatar">
          {currentDev.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="employee-info-row">
          <h3>{currentDev.name}</h3>
          <p>{currentDev.role} • {currentDev.experience} years</p>
          <div className="employee-contact-row">
            <span>📧 {currentDev.email}</span>
            <span>🆔 {currentDev.empId}</span>
            <span>📍 {currentDev.location}</span>
            <span>⭐ {currentDev.codeCoverage || 92}% coverage</span>
            <span>💬 {currentDev.commits || 47} commits</span>
          </div>
        </div>
      </div>

      {/* KPI Row - Single Row */}
      <div className="kpi-row">
        <div className="kpi-card">
          <div className="kpi-label">LEAD TIME</div>
          <div className="kpi-value">{currentDev.leadTime} days</div>
          <div className={`kpi-trend ${currentDev.leadTimeTrend?.includes('-') ? 'down' : 'up'}`}>
            {currentDev.leadTimeTrend}
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">CYCLE TIME</div>
          <div className="kpi-value">{currentDev.cycleTime} days</div>
          <div className={`kpi-trend ${currentDev.cycleTimeTrend?.includes('-') ? 'down' : 'up'}`}>
            {currentDev.cycleTimeTrend}
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">BUG RATE</div>
          <div className="kpi-value">{(currentDev.bugRate * 100).toFixed(1)}%</div>
          <div className={`kpi-trend ${currentDev.bugRateTrend?.includes('-') ? 'down' : 'up'}`}>
            {currentDev.bugRateTrend}
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">DEPLOYMENTS</div>
          <div className="kpi-value">{currentDev.deployments}/mo</div>
          <div className={`kpi-trend ${currentDev.deploymentsTrend?.includes('-') ? 'down' : 'up'}`}>
            {currentDev.deploymentsTrend}
          </div>
        </div>
      </div>

      {/* Metrics Grid - 2 Columns */}
      <div className="metrics-grid">
        {metrics.map((metric, i) => (
          <div key={i} className={`metric-card status-${getStatus(metric.value, metric.title.toLowerCase())}`}>
            <div className="metric-header">
              <span className="metric-title">{metric.title}</span>
              <span className={`badge status-${getStatus(metric.value, metric.title.toLowerCase())}`}>
                {getStatus(metric.value, metric.title.toLowerCase()) === "good" ? "🟢 Good" : "🟡 Needs Attention"}
              </span>
            </div>
            <div className="metric-value">
              {metric.value} <span className="metric-unit">{metric.unit}</span>
              <span className={`metric-trend ${metric.trend < 0 ? 'down' : 'up'}`}>
                {metric.trend < 0 ? `↓ ${Math.abs(metric.trend)}%` : `↑ ${metric.trend}%`}
              </span>
            </div>
            <div className="metric-interpretation">{getInterpretation(metric.title.toLowerCase(), metric.value)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiddlePanel;
