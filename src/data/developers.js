const developers = [
  { 
    id: 1, 
    name: "Sarah Chen", 
    role: "Frontend Engineer",
    email: "sarah.c@company.com",
    empId: "EMP-1023",
    location: "San Francisco, CA",
    experience: 4,
    coverage: 92,
    commits: 47,
    leadTime: 2.4, 
    leadTimeTrend: "↓ 15%",
    cycleTime: 3.7, 
    cycleTimeTrend: "↑ 8%",
    bugRate: 0.143, 
    bugRateTrend: "↑ 5%",
    deployments: 14, 
    deploymentsTrend: "↑ 12%",
    prThroughput: 8,
    prThroughputTrend: "0%"
  },
  { 
    id: 2, 
    name: "Marcus Rodriguez", 
    role: "Backend Engineer",
    email: "marcus.r@company.com",
    empId: "EMP-1024", 
    location: "Austin, TX",
    experience: 6,
    coverage: 85,
    commits: 32,
    leadTime: 3.8, 
    leadTimeTrend: "↑ 22%",
    cycleTime: 5.2, 
    cycleTimeTrend: "↑ 18%",
    bugRate: 0.210, 
    bugRateTrend: "↑ 12%",
    deployments: 9, 
    deploymentsTrend: "↓ 5%",
    prThroughput: 6,
    prThroughputTrend: "↓ 10%"
  },
  { 
    id: 3, 
    name: "Aisha Khan", 
    role: "DevOps Engineer",
    email: "aisha.k@company.com", 
    empId: "EMP-1025",
    location: "Seattle, WA",
    experience: 3,
    coverage: 96,
    commits: 58,
    leadTime: 0.9, 
    leadTimeTrend: "↓ 30%",
    cycleTime: 1.5, 
    cycleTimeTrend: "↓ 20%",
    bugRate: 0.050, 
    bugRateTrend: "↓ 40%",
    deployments: 31, 
    deploymentsTrend: "↑ 25%",
    prThroughput: 12,
    prThroughputTrend: "↑ 15%"
  },
  { 
    id: 4, 
    name: "James Wilson", 
    role: "Full-stack Engineer",
    email: "james.w@company.com",
    empId: "EMP-1026", 
    location: "New York, NY",
    experience: 5,
    coverage: 88,
    commits: 41,
    leadTime: 2.1, 
    leadTimeTrend: "↓ 8%",
    cycleTime: 3.3, 
    cycleTimeTrend: "↑ 3%",
    bugRate: 0.120, 
    bugRateTrend: "↑ 2%",
    deployments: 17, 
    deploymentsTrend: "↑ 5%",
    prThroughput: 10,
    prThroughputTrend: "↑ 8%"
  }
];

// Calculate team KPIs
const teamKPIs = {
  avgLeadTime: (developers.reduce((sum, dev) => sum + dev.leadTime, 0) / developers.length),
  avgCycleTime: (developers.reduce((sum, dev) => sum + dev.cycleTime, 0) / developers.length),
  totalDeployments: developers.reduce((sum, dev) => sum + dev.deployments, 0),
  avgBugRate: (developers.reduce((sum, dev) => sum + dev.bugRate, 0) / developers.length)
};

export { developers, teamKPIs };
export default developers;
