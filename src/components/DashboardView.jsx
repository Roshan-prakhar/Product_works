import React from 'react';

const statusConfig = {
  good: { badge: "Good", class: "status-good" },
  attention: { badge: "Needs Attention", class: "status-attention" },
  critical: { badge: "Critical", class: "status-critical" }
};

function getStatus(metric, value) {
  const thresholds = {
    leadTime: { good: 2, attention: 5 },
    cycleTime: { good: 3, attention: 6 },
    bugRate: { good: 0.1, attention: 0.2 },
    deployments: { good: 20, attention: 10 },
    prThroughput: { good: 12, attention: 6 }
  };
  
  const t = thresholds[metric];
  if (value <= t.good) return "good";
  if (value <= t.attention) return "attention";
  return "critical";
}

function DashboardView({ currentDev, onPrev, onNext }) {
  const metrics = [
    { key: "leadTime", label: "Lead Time", value: currentDev.leadTime, unit: "days", interpretation: "Your PRs merge quickly. Review process is efficient." },
    { key: "cycleTime", label: "Cycle Time", value: currentDev.cycleTime, unit: "days", interpretation: "Work sits 'in progress' too long before completing." },
    { key: "bugRate", label: "Bug Rate", value: currentDev.bugRate, unit: "", interpretation: `${Math.round(currentDev.bugRate * 100)}% of work creates production bugs.` },
    { key: "deployments", label: "Deployments", value: currentDev.deployments, unit: "/mo", interpretation: `You deploy ~${Math.round(currentDev.deployments / 4)}x per week. ${currentDev.deployments >= 15 ? "Great cadence!" : "Could be more frequent."}` },
    { key: "prThroughput", label: "PR Throughput", value: currentDev.prThroughput, unit: "/mo", interpretation: `${currentDev.prThroughput} PRs per month. ${currentDev.prThroughput >= 10 ? "Good velocity!" : "Aim for 10+ per month."}` }
  ];

  const teamAverages = {
    leadTime: 2.3,
    cycleTime: 3.4,
    bugRate: 13.1,
    deployments: 17.8
  };

  return (
    <div className="main-content">
      {/* Top Bar */}
      <div className="top-bar">
        <h1 className="page-title">Dashboard</h1>
        <div className="employee-nav">
          <button className="nav-arrow" onClick={onPrev}>←</button>
          <span className="employee-name-current">{currentDev.name}</span>
          <button className="nav-arrow" onClick={onNext}>→</button>
        </div>
      </div>

      {/* Employee Card */}
      <div className="employee-card">
        <div className="employee-avatar">
          {currentDev.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="employee-info">
          <h2>{currentDev.name}</h2>
          <div className="employee-role">{currentDev.role} • {currentDev.experience} years</div>
          <div className="employee-details-row">
            <span>📧 {currentDev.email}</span>
            <span>🆔 {currentDev.empId}</span>
            <span>📍 {currentDev.location}</span>
            <span>⭐ {currentDev.codeCoverage || 92}% coverage</span>
            <span>💬 {currentDev.commits || 47} commits</span>
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">Lead Time</div>
          <div className="kpi-value">{currentDev.leadTime} days</div>
          <div className="kpi-trend negative">↓ 15%</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Cycle Time</div>
          <div className="kpi-value">{currentDev.cycleTime} days</div>
          <div className="kpi-trend positive">↑ 8%</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Bug Rate</div>
          <div className="kpi-value">{Math.round(currentDev.bugRate * 100)}%</div>
          <div className="kpi-trend positive">↑ 5%</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Deployments</div>
          <div className="kpi-value">{currentDev.deployments}/mo</div>
          <div className="kpi-trend positive">↑ 12%</div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        {metrics.map((metric) => {
          const status = getStatus(metric.key, metric.value);
          const config = statusConfig[status];
          const trendValue = metric.key === "leadTime" ? "-15" : metric.key === "cycleTime" ? "+8" : metric.key === "bugRate" ? "+5" : metric.key === "deployments" ? "+12" : "0";
          const isPositive = trendValue.startsWith("+");
          
          return (
            <div key={metric.key} className="metric-card">
              <div className="metric-header">
                <span className="metric-name">{metric.label}</span>
                <span className={`status-badge ${config.class}`}>{config.badge}</span>
              </div>
              <div className="metric-number">
                {metric.value}{metric.unit && <small>{metric.unit}</small>}
              </div>
              <div className={`metric-trend-line ${isPositive ? 'trend-up' : 'trend-down'}`}>
                {isPositive ? `↑ ${trendValue}%` : `↓ ${Math.abs(trendValue)}%`} from last month
              </div>
              <div className="metric-description">{metric.interpretation}</div>
            </div>
          );
        })}
      </div>

      {/* Team Comparison */}
      <div className="comparison-section">
        <div className="comparison-title">
          📊 {currentDev.name} vs Team Average
        </div>
        <div className="comparison-grid">
          <div className="comparison-item">
            <span className="comparison-label">Lead Time</span>
            <div className="comparison-values">
              <span className="comparison-dev">{currentDev.leadTime} days</span>
              <span className="comparison-team">vs {teamAverages.leadTime} days</span>
              <span className={`comparison-diff ${currentDev.leadTime > teamAverages.leadTime ? 'diff-worse' : 'diff-better'}`}>
                {currentDev.leadTime > teamAverages.leadTime ? '⚠️ +0.1' : '✅ -0.1'}
              </span>
            </div>
          </div>
          <div className="comparison-item">
            <span className="comparison-label">Cycle Time</span>
            <div className="comparison-values">
              <span className="comparison-dev">{currentDev.cycleTime} days</span>
              <span className="comparison-team">vs {teamAverages.cycleTime} days</span>
              <span className="diff-worse">⚠️ +0.3</span>
            </div>
          </div>
          <div className="comparison-item">
            <span className="comparison-label">Bug Rate</span>
            <div className="comparison-values">
              <span className="comparison-dev">{Math.round(currentDev.bugRate * 100)}%</span>
              <span className="comparison-team">vs {teamAverages.bugRate}%</span>
              <span className="diff-worse">⚠️ +1.2%</span>
            </div>
          </div>
          <div className="comparison-item">
            <span className="comparison-label">Deployments</span>
            <div className="comparison-values">
              <span className="comparison-dev">{currentDev.deployments}/mo</span>
              <span className="comparison-team">vs {teamAverages.deployments}/mo</span>
              <span className="diff-worse">🔴 -3.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardView;
