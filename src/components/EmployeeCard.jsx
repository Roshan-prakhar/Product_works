function EmployeeCard({ employee }) {
  return (
    <div className="employee-card-professional">
      <div className="employee-avatar-large">
        {employee.name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="employee-info-grid">
        <div className="info-row">
          <h2>{employee.name}</h2>
          <span className="role-badge">{employee.role}</span>
        </div>
        <div className="info-details">
          <div><span>📧</span> {employee.email}</div>
          <div><span>🆔</span> {employee.empId}</div>
          <div><span>📍</span> {employee.location}</div>
          <div><span>📅</span> {employee.experience} years</div>
        </div>
        <div className="info-stats">
          <div><span>⭐</span> {employee.coverage}% coverage</div>
          <div><span>💬</span> {employee.commits} commits</div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
