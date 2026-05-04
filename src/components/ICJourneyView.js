import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Clock, Bug, Rocket, GitPullRequest, CheckCircle, AlertCircle, XCircle, TrendingUp, TrendingDown } from 'lucide-react';
import './ICJourneyView.css';

const ICJourneyView = ({ developerId }) => {
  const [metrics, setMetrics] = useState(null);
  const [developerInfo, setDeveloperInfo] = useState(null);
  const [interpretation, setInterpretation] = useState([]);
  const [nextSteps, setNextSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMetrics();
  }, [developerId]);

  const fetchMetrics = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(`http://localhost:3002/api/metrics/${developerId}`);
      const data = response.data;
      
      setMetrics(data.metrics);
      setDeveloperInfo(data.developerInfo);
      
      // Set custom interpretations based on realistic metrics and developer
      const devInterpretations = {
        'dev1': [ // Sarah Chen
          "Your lead time of 2.4 days shows efficient code review and deployment process",
          "Work sits in progress too long before completion - needs attention",
          "14% of work creates production bugs - needs immediate attention",
          "Consistent delivery cadence is working well",
          "Contribution is consistent but could be higher"
        ],
        'dev2': [ // Marcus Rodriguez
          "Lead time of 3.8 days indicates review process could be faster",
          "Tasks take too long to complete - workflow needs optimization",
          "21% bug rate is critical - immediate action required",
          "Deployment frequency needs improvement",
          "Low PR throughput suggests bottlenecks in workflow"
        ],
        'dev3': [ // Aisha Khan
          "Excellent lead time shows efficient deployment process",
          "Quick cycle time demonstrates great task management",
          "Low bug rate indicates high code quality",
          "Outstanding deployment frequency shows mature CI/CD",
          "High PR throughput shows excellent productivity"
        ]
      };
      
      const devNextSteps = {
        'dev1': [ // Sarah Chen
          "Add unit tests to critical paths to reduce bug rate from 0.143 to below 0.1",
          "Break down large features into smaller PRs to increase throughput"
        ],
        'dev2': [ // Marcus Rodriguez
          "Implement comprehensive testing to reduce critical bug rate from 0.21",
          "Optimize workflow to reduce cycle time from 5.2 to below 3 days"
        ],
        'dev3': [ // Aisha Khan
          "Maintain current excellent performance and mentor team members",
          "Document deployment processes to help team improve"
        ]
      };
      
      setInterpretation(devInterpretations[developerId] || devInterpretations['dev1']);
      setNextSteps(devNextSteps[developerId] || devNextSteps['dev1']);
    } catch (err) {
      console.error('Error fetching metrics:', err);
      setError('Failed to load metrics. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getMetricIcon = (metric) => {
    switch (metric) {
      case 'leadTimeForChanges':
        return <Clock size={24} />;
      case 'cycleTime':
        return <Clock size={24} />;
      case 'bugRate':
        return <Bug size={24} />;
      case 'deploymentFrequency':
        return <Rocket size={24} />;
      case 'prThroughput':
        return <GitPullRequest size={24} />;
      default:
        return <Clock size={24} />;
    }
  };

  const getTrendIndicator = (metric, value) => {
    // Simple trend logic based on metric thresholds
    switch (metric) {
      case 'leadTimeForChanges':
        return value > 3 ? <TrendingDown size={16} className="trend-down" /> : <TrendingUp size={16} className="trend-up" />;
      case 'cycleTime':
        return value > 4 ? <TrendingDown size={16} className="trend-down" /> : <TrendingUp size={16} className="trend-up" />;
      case 'bugRate':
        return value > 0.1 ? <TrendingDown size={16} className="trend-down" /> : <TrendingUp size={16} className="trend-up" />;
      case 'deploymentFrequency':
        return value > 10 ? <TrendingUp size={16} className="trend-up" /> : <TrendingDown size={16} className="trend-down" />;
      case 'prThroughput':
        return value > 8 ? <TrendingUp size={16} className="trend-up" /> : <TrendingDown size={16} className="trend-down" />;
      default:
        return null;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'green':
        return <CheckCircle size={20} className="status-good" />;
      case 'yellow':
        return <AlertCircle size={20} className="status-warning" />;
      case 'red':
        return <XCircle size={20} className="status-critical" />;
      default:
        return null;
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
        return 'Lead Time for Changes';
      case 'cycleTime':
        return 'Cycle Time';
      case 'bugRate':
        return 'Bug Rate';
      case 'deploymentFrequency':
        return 'Deployment Frequency';
      case 'prThroughput':
        return 'PR Throughput';
      default:
        return metric;
    }
  };

  const getMetricUnit = (metric) => {
    switch (metric) {
      case 'leadTimeForChanges':
      case 'cycleTime':
        return ' days';
      case 'bugRate':
        return '';
      case 'deploymentFrequency':
      case 'prThroughput':
        return ' per month';
      default:
        return '';
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading your productivity metrics...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button onClick={fetchMetrics} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="ic-journey-view">
      {/* Developer Profile Header */}
      <section className="developer-profile">
        <div className="profile-header">
          <div className="avatar">
            {developerInfo?.initials || '?'}
          </div>
          <div className="profile-info">
            <h2>{developerInfo?.name || 'Developer'}</h2>
            <p className="role">{developerInfo?.role} • 4 years exp</p>
            <div className="profile-stats">
              <span className="stat">⭐ 92% code coverage</span>
              <span className="stat">🚀 47 commits this month</span>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-overview">
        <h2>Productivity Metrics</h2>
        <div className="metrics-grid">
          {metrics && Object.entries(metrics).map(([key, value], index) => (
            <div key={key} className={`metric-card ${getMetricColor(key, value)}`}>
              <div className="metric-header">
                <div className="metric-icon">
                  {getMetricIcon(key)}
                </div>
                <h3>{getMetricLabel(key)}</h3>
                <div className="metric-status">
                  {getStatusIcon(getMetricColor(key, value))}
                </div>
              </div>
              <div className="metric-value-container">
                <span className="metric-value">
                  {value}{getMetricUnit(key)}
                </span>
                <div className="trend-indicator">
                  {getTrendIndicator(key, value)}
                </div>
              </div>
              <div className="metric-interpretation">
                {interpretation[index]}
              </div>
              <div className="metric-indicator">
                <span className={`status-badge ${getMetricColor(key, value)}`}>
                  {getMetricColor(key, value) === 'green' ? 'Good' : 
                   getMetricColor(key, value) === 'yellow' ? 'Needs Attention' : 'Critical'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trend Analysis Section */}
      <section className="trend-analysis">
        <h2>📈 Trend Analysis (Last 6 weeks)</h2>
        <div className="trend-content">
          <div className="trend-summary">
            <div className="trend-item">
              <span className="trend-label">• Lead Time:</span>
              <span className="trend-value down">↓ 15%</span>
            </div>
            <div className="trend-item">
              <span className="trend-label">• Bug Rate:</span>
              <span className="trend-value up">↑ 8%</span>
            </div>
            <div className="trend-item">
              <span className="trend-label">• Deployment Frequency:</span>
              <span className="trend-value up">↑ 12%</span>
            </div>
            <div className="trend-item">
              <span className="trend-label">• PR Throughput:</span>
              <span className="trend-value down">↓ 5%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interpretation Section */}
      <section className="interpretation-section">
        <h2>📖 What These Metrics Tell You</h2>
        <div className="interpretation-content">
          <div className="interpretation-item good">
            <span className="checkmark">✓</span>
            <span>Lead time is healthy - your review process works well</span>
          </div>
          <div className="interpretation-item warning">
            <span className="warning">⚠️</span>
            <span>Cycle time needs work - tasks linger in progress</span>
          </div>
          <div className="interpretation-item critical">
            <span className="critical">🔴</span>
            <span>Bug rate is critical - quality gates need attention</span>
          </div>
        </div>
      </section>

      <section className="next-steps-section">
        <h2>Recommended Next Steps</h2>
        <div className="next-steps-cards">
          {nextSteps.map((step, index) => (
            <div key={index} className="next-step-card">
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <p>{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ICJourneyView;
