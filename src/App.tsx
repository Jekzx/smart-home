import { Dashboard } from './components/Dashboard';
import { DeviceList } from './components/DeviceList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Smart Home Control</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <Dashboard />
          <DeviceList />
        </div>
      </main>
    </div>
  );
}

export default App;
