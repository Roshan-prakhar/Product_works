function StatCard({ title, value, trend }) {
  const trendClass = trend.startsWith('+') ? 'trend-up' : 'trend-down';
  
  return (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      <div className={`stat-trend ${trendClass}`}>{trend}</div>
    </div>
  );
}

export default StatCard;
