import React, { useState, useEffect } from 'react';

function SettingsView({ currentTheme, setTheme, currentDevIndex, setCurrentDevIndex, developers }) {
  const [notifications, setNotifications] = useState(true);
  const [dateRange, setDateRange] = useState('30days');

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedNotifications = localStorage.getItem('notifications');
    const savedDateRange = localStorage.getItem('dateRange');
    
    if (savedNotifications !== null) {
      setNotifications(JSON.parse(savedNotifications));
    }
    if (savedDateRange) {
      setDateRange(savedDateRange);
    }
  }, []);

  // Save settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('dateRange', dateRange);
  }, [dateRange]);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleDefaultDeveloperChange = (e) => {
    const index = parseInt(e.target.value);
    setCurrentDevIndex(index);
    localStorage.setItem('defaultDeveloper', index);
  };

  return (
    <div className="main-content">
      <div className="top-bar">
        <h1 className="page-title">Settings</h1>
      </div>

      <div className="settings-grid">
        {/* Appearance Settings */}
        <div className="settings-card">
          <div className="settings-header">
            <h2>🎨 Appearance</h2>
          </div>
          <div className="settings-content">
            <div className="setting-item">
              <div className="setting-info">
                <label className="setting-label">Dark Mode</label>
                <p className="setting-description">Switch between light and dark themes</p>
              </div>
              <button 
                className={`theme-toggle ${currentTheme === 'dark' ? 'dark' : 'light'}`}
                onClick={toggleTheme}
              >
                <span className="toggle-icon">
                  {currentTheme === 'dark' ? '🌙' : '☀️'}
                </span>
                <span className="toggle-text">
                  {currentTheme === 'dark' ? 'Dark' : 'Light'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Settings */}
        <div className="settings-card">
          <div className="settings-header">
            <h2>📊 Dashboard</h2>
          </div>
          <div className="settings-content">
            <div className="setting-item">
              <div className="setting-info">
                <label className="setting-label">Default Developer</label>
                <p className="setting-description">Select which developer to show by default</p>
              </div>
              <select 
                className="setting-select"
                value={currentDevIndex}
                onChange={handleDefaultDeveloperChange}
              >
                {developers.map((dev, index) => (
                  <option key={dev.id} value={index}>
                    {dev.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <label className="setting-label">Date Range</label>
                <p className="setting-description">Default time period for metrics</p>
              </div>
              <select 
                className="setting-select"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
                <option value="1year">Last year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="settings-card">
          <div className="settings-header">
            <h2>🔔 Notifications</h2>
          </div>
          <div className="settings-content">
            <div className="setting-item">
              <div className="setting-info">
                <label className="setting-label">Enable Notifications</label>
                <p className="setting-description">Show alerts for important metric changes</p>
              </div>
              <button 
                className={`toggle-switch ${notifications ? 'on' : 'off'}`}
                onClick={() => setNotifications(!notifications)}
              >
                <div className="toggle-slider"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsView;
