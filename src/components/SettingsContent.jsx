function SettingsContent() {
  return (
    <div className="settings-view">
      <h2>⚙️ Preferences</h2>
      <div className="setting-group">
        <label>👤 Developer Selection</label>
        <select>
          <option>Sarah Chen</option>
          <option>Marcus Rodriguez</option>
          <option>Aisha Khan</option>
          <option>James Wilson</option>
        </select>
      </div>
      <div className="setting-group">
        <label>🎨 Theme</label>
        <select>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <div className="setting-group">
        <label>📅 Default Date Range</label>
        <select>
          <option>Last 30 days</option>
          <option>Last Quarter</option>
          <option>Last Year</option>
        </select>
      </div>
    </div>
  );
}

export default SettingsContent;
