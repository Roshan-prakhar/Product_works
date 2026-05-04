function RightPanel({ currentDev }) {
  const comparisons = [
    { 
      metric: "Lead Time", 
      dev: currentDev.leadTime, 
      team: 2.3, 
      unit: "days", 
      devWorse: currentDev.leadTime > 2.3 
    },
    { 
      metric: "Cycle Time", 
      dev: currentDev.cycleTime, 
      team: 3.4, 
      unit: "days", 
      devWorse: currentDev.cycleTime > 3.4 
    },
    { 
      metric: "Bug Rate", 
      dev: currentDev.bugRate * 100, 
      team: 13.1, 
      unit: "%", 
      devWorse: currentDev.bugRate * 100 > 13.1 
    },
    { 
      metric: "Deployments", 
      dev: currentDev.deployments, 
      team: 17.8, 
      unit: "/mo", 
      devWorse: currentDev.deployments < 17.8 
    }
  ];

  return (
    <div className="right-panel">
      <div className="right-header">
        <h3>📊 vs Team Average</h3>
        <p>{currentDev.name} vs team of 4</p>
      </div>

      {comparisons.map((item, i) => {
        const percent = item.devWorse ? (item.dev / item.team) * 100 : (item.dev / item.team) * 100;
        const diff = item.dev - item.team;
        
        return (
          <div key={i} className="comparison-card">
            <div className="comparison-title">{item.metric}</div>
            <div className="comparison-values">
              <span className="dev">{item.dev}{item.unit}</span>
              <span className="vs">vs</span>
              <span className="team">{item.team}{item.unit}</span>
            </div>
            <div className={`comparison-diff ${item.devWorse ? 'negative' : 'positive'}`}>
              {item.devWorse ? `⚠️ +${diff.toFixed(1)}` : `✅ ${diff.toFixed(1)}`}
            </div>
            <div className="comparison-bar">
              <div className="bar-fill" style={{ width: `${Math.min(100, percent)}%` }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RightPanel;
