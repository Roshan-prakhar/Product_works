import React, { useState } from 'react';
import './TeamTable.css';

const TeamTable = ({ teamMetrics }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  if (!teamMetrics) return null;

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortedDevelopers = () => {
    const developers = Object.entries(teamMetrics).map(([id, metrics]) => ({
      id,
      ...metrics.developerInfo,
      ...metrics
    }));

    if (!sortConfig.key) return developers;

    return developers.sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const getStatusBadge = (leadTime, cycleTime, bugRate) => {
    if (bugRate > 0.15 || leadTime > 3.5 || cycleTime > 4.5) {
      return <span className="status-badge-critical">🔴 Critical</span>;
    } else if (bugRate > 0.1 || leadTime > 2.5 || cycleTime > 3) {
      return <span className="status-badge-attention">🟡 Needs Attention</span>;
    } else {
      return <span className="status-badge-good">🟢 Good</span>;
    }
  };

  const sortedDevelopers = getSortedDevelopers();

  return (
    <div className="team-table-container">
      <h2>👥 Team Performance</h2>
      <table className="team-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>
              Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('leadTimeForChanges')}>
              Lead {sortConfig.key === 'leadTimeForChanges' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('cycleTime')}>
              Cycle {sortConfig.key === 'cycleTime' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('bugRate')}>
              Bug {sortConfig.key === 'bugRate' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('deploymentFrequency')}>
              Deploy {sortConfig.key === 'deploymentFrequency' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('prThroughput')}>
              PR {sortConfig.key === 'prThroughput' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedDevelopers.map((dev) => (
            <tr key={dev.id}>
              <td className="name-cell">
                <div className="developer-info">
                  <div className="avatar">{dev.initials}</div>
                  <div>
                    <div className="name">{dev.name}</div>
                    <div className="role">{dev.role}</div>
                  </div>
                </div>
              </td>
              <td>{dev.leadTimeForChanges}d</td>
              <td>{dev.cycleTime}d</td>
              <td>{dev.bugRate.toFixed(3)}</td>
              <td>{dev.deploymentFrequency}/m</td>
              <td>{dev.prThroughput}/m</td>
              <td>{getStatusBadge(dev.leadTimeForChanges, dev.cycleTime, dev.bugRate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
