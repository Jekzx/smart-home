import { Line } from 'react-chartjs-2';
import { useDevices } from '../hooks/useDevices';
import { 
  Thermometer, 
  Droplets, 
  LightbulbOff,
  Lock
} from 'lucide-react';

export function Dashboard() {
  const { devices } = useDevices();

  const energyData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [{
      label: 'Energy Usage (kWh)',
      data: [3.2, 2.8, 3.5, 4.2, 3.8, 3.1],
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.4
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Daily Energy Consumption'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Temperature Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-3">
            <Thermometer className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-600">Temperature</p>
              <h3 className="text-2xl font-bold text-gray-900">22°C</h3>
            </div>
          </div>
        </div>

        {/* Humidity Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-3">
            <Droplets className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-600">Humidity</p>
              <h3 className="text-2xl font-bold text-gray-900">45%</h3>
            </div>
          </div>
        </div>

        {/* Active Devices Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-3">
            <LightbulbOff className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-600">Active Devices</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {devices.filter(d => d.isActive).length} / {devices.length}
              </h3>
            </div>
          </div>
        </div>

        {/* Security Status Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-3">
            <Lock className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm font-medium text-gray-600">Security Status</p>
              <h3 className="text-2xl font-bold text-gray-900">Secured</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Usage Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <Line data={energyData} options={options} />
      </div>
    </div>
  );
}
