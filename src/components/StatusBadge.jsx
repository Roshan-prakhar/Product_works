const StatusBadge = ({ status }) => {
  const config = {
    good: { bg: "#D1FAE5", color: "#065F46", label: "Good" },
    attention: { bg: "#FFEDD5", color: "#EA580C", label: "Needs Attention" },
    critical: { bg: "#FEE2E2", color: "#DC2626", label: "Critical" }
  };
  const { bg, color, label } = config[status];
  return <span className="badge" style={{ background: bg, color }}>{label}</span>;
};

export default StatusBadge;
