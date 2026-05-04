# 📊 DevMetrics - Developer Productivity Dashboard

A professional, full-stack dashboard that helps developers understand their productivity metrics, get meaningful interpretations, and receive actionable next steps.

---

## 🎯 Problem Statement

Developers and managers often see raw metrics like **Lead Time**, **Cycle Time**, **Bug Rate**, **Deployment Frequency**, and **PR Throughput**. However, **numbers alone don't tell a story**.

The real problem is:
> *"Metrics alone do not explain what is happening or what the user should do next."*

This dashboard solves that by:
- ✅ Showing **5 key metrics** with clear visual status (Good / Needs Attention / Critical)
- ✅ Providing **plain-English interpretations** of what each metric means
- ✅ Suggesting **specific, actionable next steps** based on individual developer data
- ✅ Enabling **team comparison** to see performance relative to peers
- ✅ Supporting **light/dark mode** for comfortable viewing

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js (Create React App) |
| **Styling** | Custom CSS with CSS Variables (no external UI libraries) |
| **Charts** | Recharts (for trend visualizations) |
| **Icons** | Lucide React + Emojis |
| **State Management** | React Hooks (useState, useEffect) |
| **Deployment** | Netlify |
| **Version Control** | Git + GitHub |

---

## 🧠 What I Did

### 1. Understood the Domain
- Learned the 5 key metrics (Lead Time, Cycle Time, Bug Rate, Deployment Frequency, PR Throughput)
- Understood what each metric means and how to interpret it

### 2. Designed for One User Journey (Individual Contributor)
- Focused on a **single developer view** first
- Added developer switcher with arrow buttons (Sarah, Marcus, Aisha, James)
- Created personalized employee cards with email, ID, location, code coverage, and commits

### 3. Built Interpretations, Not Just Numbers
- Each metric card shows: title, value, status badge, trend, and **plain-English interpretation**
- Example: *"14.3% of work creates production bugs. This is high."* not just "Bug Rate: 0.143"

### 4. Added Actionable Next Steps
- Next steps are **personalized for each developer** (Sarah needs cycle time reduction; Marcus needs bug fixes; Aisha is a high performer)
- Steps include specific targets (e.g., *"reduce cycle time from 3.7 to <3.5 days"*)

### 5. Created a Professional UI/UX
- 2-column layout with left sidebar for navigation + next steps
- KPI row + detailed metric cards + team comparison at bottom
- Status badges (🟢 Good / 🟡 Needs Attention / 🔴 Critical)
- Dark/light mode toggle with localStorage persistence
- Fully responsive design

### 6. Deployed Successfully
- Hosted on Netlify
- Live link included in submission

---

## 💡 What I Thought as a Solution

### Core Insight
> *"Raw data doesn't drive action - understanding does."*

Instead of building another generic dashboard, I focused on the **interpretation layer**:

| Traditional Dashboard | My Dashboard |
|----------------------|--------------|
| Shows "Lead Time: 2.4 days" | Shows "Lead Time: 2.4 days + interpretation + status + trend" |
| User has to interpret numbers | Dashboard does the interpretation |
| Generic recommendations | Personalized next steps per developer |
| Team-wide metrics | Individual + team comparison |

### Design Decisions

**1. Why 2-column layout?**
- Left sidebar houses navigation + next steps (always visible)
- Main content shows the metrics and comparisons
- Keeps the user focused on one task at a time

**2. Why status thresholds?**
| Metric | Good | Needs Attention | Critical |
|--------|------|-----------------|----------|
| Lead Time | <2 days | 2-5 days | >5 days |
| Cycle Time | <3 days | 3-6 days | >6 days |
| Bug Rate | <0.1 | 0.1-0.2 | >0.2 |
| Deployments | >20/mo | 10-20/mo | <10/mo |
| PR Throughput | >12/mo | 6-12/mo | <6/mo |

**3. Why personalized next steps?**
- Sarah Chen needs cycle time reduction → "Break features into <2-day tasks"
- Marcus Rodriguez needs bug fixes → "Add pre-commit hooks to reduce bug rate from 21% to <10%"
- Aisha Khan is a high performer → "Maintain outstanding bug rate - share testing practices"

**4. Why dark mode?**
- Developer preference for late-night work
- Reduces eye strain during long coding sessions

---

## 📁 Folder Structure
src/
├── components/
│ ├── Sidebar.jsx # Navigation + next steps
│ ├── DashboardView.jsx # Main metrics view
│ └── SettingsView.jsx # Dark mode + preferences
├── styles/
│ └── professional.css # Complete styling + dark mode
├── App.jsx # Main app with state
└── index.js # Entry point


---

## 🚀 Live Demo

**[productworks.in](https://productworks-assignment.netlify.app/)**

---

## 📦 How to Run Locally

bash
# Clone the repository
git clone https://github.com/Roshan-prakhar/Product_works.git

# Navigate to project
cd Product_works

# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
| Live prototype link | ✅ Deployed | 'https://aquamarine-entremet-8e9efe.netlify.app` |
| Code link | ✅ GitHub | `https://github.com/Roshan-prakhar/Product_works/tree/developer` |
