import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManagerView.css';

const ManagerView = () => {
  const [teamMetrics, setTeamMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTeamMetrics();
  }, []);

  const fetchTeamMetrics = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get('http://localhost:3002/api/metrics');
      const data = response.data;
      
      setTeamMetrics(data.metrics);
    } catch (err) {
      console.error('Error fetching team metrics:', err);
      setError('Failed to load team metrics. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getMetricColor = (metric, value) => {
    switch (metric) {
      case 'leadTimeForChanges':
        return value > 7 ? 'red' : value > 4 ? 'yellow' : 'green';
      case 'cycleTime':
        return value > 5 ? 'red' : value > 3 ? 'yellow' : 'green';
      case 'bugRate':
        return value > 0.1 ? 'red' : value > 0.05 ? 'yellow' : 'green';
      case 'deploymentFrequency':
        return value < 2 ? 'red' : value < 5 ? 'yellow' : 'green';
      case 'prThroughput':
        return value < 5 ? 'red' : value < 10 ? 'yellow' : 'green';
      default:
        return 'blue';
    }
  };

  const getMetricLabel = (metric) => {
    switch (metric) {
      case 'leadTimeForChanges':
        return 'Lead Time';
      case 'cycleTime':
        return 'Cycle Time';
      case 'bugRate':
        return 'Bug Rate';
      case 'deploymentFrequency':
        return 'Deploy Freq';
      case 'prThroughput':
        return 'PR Throughput';
      default:
        return metric;
    }
  };

  const getDeveloperName = (devId) => {
    switch (devId) {
      case 'dev1': return 'Developer 1';
      case 'dev2': return 'Developer 2';
      case 'dev3': return 'Developer 3';
      case 'dev4': return 'Developer 4';
      default: return devId;
    }
  };

  const calculateTeamAverages = () => {
    if (!teamMetrics) return null;
    
    const metrics = ['leadTimeForChanges', 'cycleTime', 'bugRate', 'deploymentFrequency', 'prThroughput'];
    const averages = {};
    
    metrics.forEach(metric => {
      const values = Object.values(teamMetrics).map(dev => dev[metric]);
      const sum = values.reduce((acc, val) => acc + val, 0);
      averages[metric] = (sum / values.length).toFixed(2);
    });
    
    return averages;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading team productivity metrics...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button onClick={fetchTeamMetrics} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  const teamAverages = calculateTeamAverages();

  return (
    <div className="manager-view">
      <section className="team-overview">
        <h2>Team Productivity Overview</h2>
        <div className="team-summary-cards">
          {teamAverages && Object.entries(teamAverages).map(([key, value]) => (
            <div key={key} className={`summary-card ${getMetricColor(key, parseFloat(value))}`}>
              <h3>{getMetricLabel(key)}</h3>
              <div className="summary-value">{value}</div>
              <div className="summary-label">Team Average</div>
            </div>
          ))}
        </div>
      </section>

      <section className="individual-comparison">
        <h2>Individual Developer Comparison</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Developer</th>
                <th>Lead Time</th>
                <th>Cycle Time</th>
                <th>Bug Rate</th>
                <th>Deploy Freq</th>
                <th>PR Throughput</th>
                <th>Overall Score</th>
              </tr>
            </thead>
            <tbody>
              {teamMetrics && Object.entries(teamMetrics).map(([devId, metrics]) => {
                // Calculate a simple overall score
                const score = Object.entries(metrics).reduce((acc, [key, value]) => {
                  let normalizedValue = value;
                  if (key === 'bugRate') {
                    normalizedValue = 1 - value; // Lower bug rate is better
                  }
                  return acc + normalizedValue;
                }, 0) / Object.keys(metrics).length;
                
                return (
                  <tr key={devId}>
                    <td>{getDeveloperName(devId)}</td>
                    <td>
                      <span className={`metric-value ${getMetricColor('leadTimeForChanges', metrics.leadTimeForChanges)}`}>
                        {metrics.leadTimeForChanges}d
                      </span>
                    </td>
                    <td>
                      <span className={`metric-value ${getMetricColor('cycleTime', metrics.cycleTime)}`}>
                        {metrics.cycleTime}d
                      </span>
                    </td>
                    <td>
                      <span className={`metric-value ${getMetricColor('bugRate', metrics.bugRate)}`}>
                        {metrics.bugRate}
                      </span>
                    </td>
                    <td>
                      <span className={`metric-value ${getMetricColor('deploymentFrequency', metrics.deploymentFrequency)}`}>
                        {metrics.deploymentFrequency}
                      </span>
                    </td>
                    <td>
                      <span className={`metric-value ${getMetricColor('prThroughput', metrics.prThroughput)}`}>
                        {metrics.prThroughput}
                      </span>
                    </td>
                    <td>
                      <div className="score-bar">
                        <div 
                          className="score-fill" 
                          style={{ width: `${(score / 10) * 100}%` }}
                        ></div>
                        <span className="score-text">{score.toFixed(1)}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="team-insights">
        <h2>Team Insights & Recommendations</h2>
        <div className="insights-grid">
          <div className="insight-card">
            <h3>🚀 High Performers</h3>
            {teamMetrics && Object.entries(teamMetrics)
              .filter(([_, metrics]) => metrics.prThroughput > 10 && metrics.bugRate < 0.05)
              .map(([devId]) => (
                <p key={devId}>{getDeveloperName(devId)} - Strong throughput with low bug rate</p>
              ))}
            {!teamMetrics || Object.entries(teamMetrics).filter(([_, metrics]) => metrics.prThroughput > 10 && metrics.bugRate < 0.05).length === 0 && (
              <p>No developers currently meeting high performer criteria</p>
            )}
          </div>

          <div className="insight-card">
            <h3>⚠️ Areas for Improvement</h3>
            {teamMetrics && Object.entries(teamMetrics)
              .filter(([_, metrics]) => metrics.leadTimeForChanges > 7 || metrics.cycleTime > 5)
              .map(([devId, metrics]) => (
                <p key={devId}>
                  {getDeveloperName(devId)} - 
                  {metrics.leadTimeForChanges > 7 && ' Long lead time'}
                  {metrics.leadTimeForChanges > 7 && metrics.cycleTime > 5 && ' &'}
                  {metrics.cycleTime > 5 && ' Long cycle time'}
                </p>
              ))}
            </div>

          <div className="insight-card">
            <h3>🎯 Team Actions</h3>
            <ul>
              <li>Consider implementing code review automation to reduce lead times</li>
              <li>Set up pair programming for developers with high bug rates</li>
              <li>Standardize deployment process to increase deployment frequency</li>
              <li>Focus on breaking down large tasks to improve cycle time</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagerView;
