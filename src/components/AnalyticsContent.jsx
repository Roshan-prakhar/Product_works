function AnalyticsContent({ currentDev }) {
  // Generate weekly trend data
  const weeklyData = [
    { week: "W1", leadTime: 2.8, cycleTime: 3.9, bugRate: 0.15 },
    { week: "W2", leadTime: 2.7, cycleTime: 4.0, bugRate: 0.16 },
    { week: "W3", leadTime: 2.6, cycleTime: 4.1, bugRate: 0.17 },
    { week: "W4", leadTime: 2.5, cycleTime: 4.0, bugRate: 0.18 },
    { week: "W5", leadTime: 2.4, cycleTime: 3.8, bugRate: 0.15 },
    { week: "W6", leadTime: currentDev.leadTime, cycleTime: currentDev.cycleTime, bugRate: currentDev.bugRate }
  ];

  return (
    <div className="analytics-content">
      <h2>📈 Trend Analytics for {currentDev.name}</h2>
      
      {/* Trend Chart - Simple visual */}
      <div className="trend-chart">
        <h3>6-Week Trend</h3>
        <div className="chart-bars">
          {weeklyData.map((data, i) => (
            <div key={i} className="chart-column">
              <div className="chart-bar lead" style={{ height: `${data.leadTime * 20}px` }}>
                <span className="tooltip">{data.leadTime}d</span>
              </div>
              <div className="chart-bar cycle" style={{ height: `${data.cycleTime * 15}px` }}>
                <span className="tooltip">{data.cycleTime}d</span>
              </div>
              <div className="chart-label">{data.week}</div>
            </div>
          ))}
        </div>
        <div className="chart-legend">
          <span><span className="legend-lead"></span> Lead Time</span>
          <span><span className="legend-cycle"></span> Cycle Time</span>
        </div>
      </div>

      {/* Insights based on current developer */}
      <div className="insights">
        <h3>🔍 Key Insights for {currentDev.name}</h3>
        <ul>
          {currentDev.leadTime > 2.5 && <li>⚠️ Lead time is above average - review process needs optimization</li>}
          {currentDev.leadTime <= 2.5 && <li>✅ Lead time is healthy - great job!</li>}
          {currentDev.cycleTime > 3.5 && <li>⚠️ Cycle time is high - tasks linger too long in progress</li>}
          {currentDev.bugRate > 0.15 && <li>🔴 Bug rate is critical - add more testing</li>}
          {currentDev.deployments < 15 && <li>📉 Deployment frequency could be higher</li>}
          {currentDev.prThroughput < 10 && <li>📝 PR throughput is low - review smaller PRs more often</li>}
        </ul>
      </div>

      {/* Comparison to team average */}
      <div className="comparison">
        <h3>📊 vs Team Average</h3>
        <div className="comparison-item">
          <span>Lead Time</span>
          <div className="comparison-bar">
            <div className="fill" style={{ width: `${(currentDev.leadTime / 3.0) * 100}%` }}></div>
          </div>
          <span className={currentDev.leadTime < 2.5 ? "better" : "worse"}>
            {currentDev.leadTime < 2.5 ? "✅ Better" : "⚠️ Worse"}
          </span>
        </div>
        <div className="comparison-item">
          <span>Bug Rate</span>
          <div className="comparison-bar">
            <div className="fill" style={{ width: `${(currentDev.bugRate / 0.2) * 100}%` }}></div>
          </div>
          <span className={currentDev.bugRate < 0.12 ? "better" : "worse"}>
            {currentDev.bugRate < 0.12 ? "✅ Better" : "⚠️ Worse"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsContent;
