import AnalyticsDashboard from './screens/AnalyticsDashboard.jsx';
import OnboardingFlow from './screens/OnboardingFlow.jsx';
import SettingsPanel from './screens/SettingsPanel.jsx';

const routes = {
  'analytics-dashboard': {
    label: 'Analytics Dashboard',
    component: AnalyticsDashboard,
  },
  'onboarding-flow': {
    label: 'Onboarding Flow',
    component: OnboardingFlow,
  },
  'settings-panel': {
    label: 'Settings Panel',
    component: SettingsPanel,
  },
};

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  return routes[hash] ? hash : 'analytics-dashboard';
}

export default function App() {
  const activeRoute = getRoute();
  const Screen = routes[activeRoute].component;

  return (
    <div className="app-shell">
      <nav className="app-nav" aria-label="Experiment screens">
        <strong>DESIGN.md run</strong>
        <div>
          {Object.entries(routes).map(([route, item]) => (
            <a key={route} href={`#/${route}`} data-active={route === activeRoute}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      <main>
        <Screen />
      </main>
    </div>
  );
}

