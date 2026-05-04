import { developers } from '../data/developers';
import EmployeeCard from './EmployeeCard';
import DashboardView from './DashboardView';

function Dashboard({ currentDevIndex, setCurrentDevIndex }) {
  const currentDev = developers[currentDevIndex];

  const handlePrev = () => {
    setCurrentDevIndex((prev) => (prev === 0 ? developers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentDevIndex((prev) => (prev === developers.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="main-content">
      {/* Top Bar with title and employee selector */}
      <div className="top-bar">
        <h1>Dashboard</h1>
        <div className="employee-selector">
          <button className="arrow-btn" onClick={handlePrev}>◀</button>
          <span className="current-employee">{currentDev.name}</span>
          <button className="arrow-btn" onClick={handleNext}>▶</button>
        </div>
      </div>

      {/* Professional Employee Card */}
      <EmployeeCard employee={currentDev} />

      {/* Dashboard View */}
      <DashboardView currentDev={currentDev} setCurrentDev={(dev) => {
        const index = developers.findIndex(d => d.id === dev.id);
        setCurrentDevIndex(index);
      }} />
    </main>
  );
}

export default Dashboard;
