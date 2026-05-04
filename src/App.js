import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import SettingsView from './components/SettingsView';
import './styles/professional.css';

const developers = [
  { id: 1, name: "Sarah Chen", role: "Frontend Engineer", experience: 4, email: "sarah.c@company.com", empId: "EMP-1023", location: "San Francisco, CA", codeCoverage: 92, commits: 47, leadTime: 2.4, cycleTime: 3.7, bugRate: 0.143, deployments: 14, prThroughput: 8 },
  { id: 2, name: "Marcus Rodriguez", role: "Backend Engineer", experience: 6, email: "marcus.r@company.com", empId: "EMP-1024", location: "Austin, TX", codeCoverage: 85, commits: 32, leadTime: 3.8, cycleTime: 5.2, bugRate: 0.21, deployments: 9, prThroughput: 6 },
  { id: 3, name: "Aisha Khan", role: "DevOps Engineer", experience: 3, email: "aisha.k@company.com", empId: "EMP-1025", location: "Seattle, WA", codeCoverage: 98, commits: 58, leadTime: 0.9, cycleTime: 1.5, bugRate: 0.05, deployments: 31, prThroughput: 12 },
  { id: 4, name: "James Wilson", role: "Full-stack Engineer", experience: 5, email: "james.w@company.com", empId: "EMP-1026", location: "New York, NY", codeCoverage: 88, commits: 41, leadTime: 2.1, cycleTime: 3.3, bugRate: 0.12, deployments: 17, prThroughput: 10 }
];

function App() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [currentTheme, setCurrentTheme] = useState("light");
  const [currentDevIndex, setCurrentDevIndex] = useState(0);
  const currentDev = developers[currentDevIndex];

  // Load theme and default developer from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedDeveloperIndex = localStorage.getItem('defaultDeveloper');
    
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (savedDeveloperIndex !== null) {
      const index = parseInt(savedDeveloperIndex);
      if (index >= 0 && index < developers.length) {
        setCurrentDevIndex(index);
      }
    }
  }, []);

  const handlePrev = () => {
    setCurrentDevIndex(prev => prev === 0 ? developers.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentDevIndex(prev => prev === developers.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="app">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} currentDev={currentDev} />
      {currentView === "dashboard" && (
        <DashboardView 
          currentDev={currentDev} 
          onPrev={handlePrev} 
          onNext={handleNext} 
        />
      )}
      {currentView === "settings" && (
        <SettingsView 
          currentTheme={currentTheme}
          setTheme={setCurrentTheme}
          currentDevIndex={currentDevIndex}
          setCurrentDevIndex={setCurrentDevIndex}
          developers={developers}
        />
      )}
    </div>
  );
}

export default App;
