function RightSidebar({ currentDev }) {
  const teamAverages = {
    leadTime: 2.3,
    cycleTime: 3.4,
    bugRate: 13.1,
    deployments: 17.8
  };

  const comparisons = [
    { 
      metric: "Lead Time", 
      devValue: currentDev.leadTime, 
      teamAvg: teamAverages.leadTime,
      unit: "days",
      worse: currentDev.leadTime > teamAverages.leadTime
    },
    { 
      metric: "Cycle Time", 
      devValue: currentDev.cycleTime, 
      teamAvg: teamAverages.cycleTime,
      unit: "days",
      worse: currentDev.cycleTime > teamAverages.cycleTime
    },
    { 
      metric: "Bug Rate", 
      devValue: currentDev.bugRate * 100, 
      teamAvg: teamAverages.bugRate,
      unit: "%",
      worse: currentDev.bugRate * 100 > teamAverages.bugRate
    },
    { 
      metric: "Deployments", 
      devValue: currentDev.deployments, 
      teamAvg: teamAverages.deployments,
      unit: "/mo",
      worse: currentDev.deployments < teamAverages.deployments
    }
  ];

  return (
    <div className="right-sidebar">
      <div className="right-sidebar-header">
        <h3>📊 vs Team Average</h3>
        <p className="subtitle">{currentDev.name} compared to team</p>
      </div>
      
      <div className="comparison-list">
        {comparisons.map((item, i) => (
          <div key={i} className="comparison-item">
            <div className="comparison-metric">{item.metric}</div>
            <div className="comparison-values">
              <span className="dev-value">{item.devValue} {item.unit}</span>
              <span className="vs">vs</span>
              <span className="team-value">{item.teamAvg} {item.unit}</span>
            </div>
            <div className={`comparison-status ${item.worse ? 'worse' : 'better'}`}>
              {item.worse ? '⚠️ Below Average' : '✅ Above Average'}
            </div>
            <div className="comparison-bar">
              <div 
                className={`bar-fill ${item.worse ? 'worse' : 'better'}`}
                style={{ 
                  width: `${Math.min(100, (item.devValue / item.teamAvg) * 100)}%` 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
