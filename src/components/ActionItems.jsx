function ActionItems({ currentDev }) {
  const getActionItems = (dev) => {
    if (dev.name === "Marcus Rodriguez") {
      return [
        { priority: "high", text: `Add comprehensive unit tests to reduce critical bug rate from ${(dev.bugRate * 100).toFixed(1)}% to <10%` },
        { priority: "high", text: `Break down large tasks to reduce cycle time from ${dev.cycleTime} to <3.0 days` },
        { priority: "medium", text: `Optimize code review process to reduce lead time from ${dev.leadTime} to <3.0 days` },
        { priority: "medium", text: `Increase deployment frequency from ${dev.deployments}/month to ≥15/month` }
      ];
    }
    if (dev.name === "Aisha Khan") {
      return [
        { priority: "low", text: `Maintain outstanding bug rate of ${(dev.bugRate * 100).toFixed(1)}% - share testing practices with team` },
        { priority: "low", text: `Keep up the amazing deployment frequency of ${dev.deployments}/month` },
        { priority: "medium", text: `Consider mentoring others on your efficient workflow (${dev.cycleTime} days cycle time)` },
        { priority: "medium", text: `Document DevOps best practices for team knowledge base` }
      ];
    }
    if (dev.name === "Sarah Chen") {
      return [
        { priority: "medium", text: `Break down features into <2-day tasks to reduce cycle time from ${dev.cycleTime} to <3.5 days` },
        { priority: "medium", text: `Add pre-commit hooks to lower bug rate from ${(dev.bugRate * 100).toFixed(1)}% to below 10%` },
        { priority: "low", text: `Review smaller PRs to increase throughput from ${dev.prThroughput} to 12+/month` },
        { priority: "low", text: `Automate deployment pipeline to increase frequency from ${dev.deployments} to 18+/month` }
      ];
    }
    if (dev.name === "James Wilson") {
      return [
        { priority: "low", text: `Good work maintaining lead time at ${dev.leadTime} days` },
        { priority: "medium", text: `Address bug rate of ${(dev.bugRate * 100).toFixed(1)}% with additional testing to get <10%` },
        { priority: "low", text: `Consider increasing deployment frequency from ${dev.deployments}/month to ≥20/month` },
        { priority: "low", text: `Great PR throughput of ${dev.prThroughput}/month - maintain this level` }
      ];
    }
    return [];
  };

  const actions = getActionItems(currentDev);

  return (
    <div className="action-items">
      <ul>
        {actions.map((action, i) => (
          <li key={i}>
            <span className="action-priority">
              {action.priority === "high" ? "🔴" : action.priority === "medium" ? "🟡" : "🟢"}
            </span>
            {action.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActionItems;
