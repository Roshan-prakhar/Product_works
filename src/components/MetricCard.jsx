import React from 'react';
import StatusBadge from './StatusBadge';

function MetricCard({ title, value, unit, status, interpretation, trend }) {
  return (
    <div className="metric-card">
      <div className="metric-header">
        <span className="metric-title">{title}</span>
        <StatusBadge status={status} />
      </div>
      <div className="metric-value">
        {value}
        {unit && <span className="metric-unit">{unit}</span>}
      </div>
      {trend && <div className="metric-trend">{trend}</div>}
      {interpretation && <div className="metric-interpretation">{interpretation}</div>}
    </div>
  );
}

export default MetricCard;
