import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { DeviceList } from './components/DeviceList';
import { Navigation } from './components/Navigation';
import { Home, Settings, Activity, Calendar } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'devices', label: 'Devices', icon: Settings },
    { id: 'automation', label: 'Automation', icon: Activity },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="flex min-h-screen">
          <Navigation items={navItems} activeTab={activeTab} onTabChange={setActiveTab} />
          <main className="flex-1 p-4 md:p-8 pt-20 md:pt-8 overflow-auto">
            <div className="max-w-7xl mx-auto space-y-8">
              {activeTab === 'dashboard' && <Dashboard />}
              {activeTab === 'devices' && <DeviceList />}
              {activeTab === 'automation' && <div className="text-center text-gray-500 dark:text-gray-400">Automation features coming soon...</div>}
              {activeTab === 'schedule' && <div className="text-center text-gray-500 dark:text-gray-400">Scheduling features coming soon...</div>}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
