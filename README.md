# DevMetrics Dashboard

A professional developer productivity dashboard that tracks key performance metrics, provides team comparisons, and offers actionable insights for engineering teams.

## 🚀 Features

- **Real-time Metrics**: Track lead time, cycle time, bug rate, deployments, and PR throughput
- **Team Comparisons**: Compare individual performance against team averages
- **Professional UI**: Modern, responsive design with dark/light theme support
- **Actionable Insights**: Personalized next steps for each developer
- **Persistent Settings**: Theme and preferences saved across sessions

## 🎨 UI/UX Features

- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Professional Styling**: Clean, modern interface with consistent design system
- **Interactive Elements**: Hover effects, smooth animations, and micro-interactions
- **Settings Panel**: Customizable preferences and default selections

## 📊 Metrics Tracked

- **Lead Time**: Time from PR creation to merge
- **Cycle Time**: Time from work start to completion
- **Bug Rate**: Percentage of work that creates production bugs
- **Deployment Frequency**: Number of deployments per month
- **PR Throughput**: Number of pull requests merged per month

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks and functional components
- **CSS3**: Professional design system with CSS variables
- **LocalStorage**: Client-side persistence for settings
- **JavaScript ES6+**: Modern JavaScript features

## 📁 Project Structure

```
dev-productivity/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── DashboardView.jsx
│   │   ├── SettingsView.jsx
│   │   └── Sidebar.jsx
│   ├── data/
│   │   └── developers.js
│   ├── styles/
│   │   └── professional.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dev-productivity
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## 🎯 Usage

### Navigation

- **Sidebar**: Switch between Dashboard and Settings views
- **Employee Navigation**: Use arrow buttons to browse between developers
- **Theme Toggle**: Switch between light and dark modes in Settings

### Dashboard Features

- **Employee Cards**: View detailed information for each developer
- **KPI Row**: Quick overview of key performance indicators
- **Metric Cards**: Detailed analysis with trends and interpretations
- **Team Comparisons**: See how each developer compares to team averages

### Settings Features

- **Appearance**: Toggle dark/light theme
- **Dashboard**: Set default developer and date range
- **Notifications**: Configure metric change alerts

## 🎨 Customization

### Theme Customization

The design system uses CSS variables that can be customized:

```css
:root {
  --primary: #2563EB;
  --success: #10B981;
  --warning: #F59E0B;
  --danger: #EF4444;
  /* ... more variables */
}
```

### Adding New Developers

Update `src/data/developers.js` to add new team members:

```javascript
{
  id: 5,
  name: "New Developer",
  role: "Engineer",
  experience: 4,
  email: "dev@company.com",
  empId: "EMP-1027",
  location: "City, State",
  codeCoverage: 90,
  commits: 50,
  leadTime: 2.0,
  cycleTime: 3.0,
  bugRate: 0.1,
  deployments: 20,
  prThroughput: 10
}
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_TEAM_SIZE=4
```

### Default Settings

Default preferences are stored in localStorage:
- `theme`: "light" | "dark"
- `defaultDeveloper`: number (index)
- `dateRange`: "7days" | "30days" | "90days" | "1year"
- `notifications`: boolean

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and patterns
- Use functional components with hooks
- Maintain responsive design principles
- Test in both light and dark themes
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with React and modern web technologies
- Inspired by modern dashboard design patterns
- Icons and emojis for enhanced UX

## 📞 Support

For questions, issues, or feature requests:

- Create an issue in the repository
- Contact the development team
- Check existing documentation first

---

**DevMetrics Dashboard** - Empowering engineering teams with data-driven insights 🚀
