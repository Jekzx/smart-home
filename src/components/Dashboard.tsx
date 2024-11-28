import React from 'react';
import { Line } from 'react-chartjs-2';
import { useDevices } from '../hooks/useDevices';
import { 
  Thermometer, 
  Droplets, 
  LightbulbOff,
  Lock
} from 'lucide-react';

export function Dashboard() {
  const { devices, metrics } = useDevices();

  const energyData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [{
      label: 'Energy Usage (kWh)',
      data: [3.2, 2.8, 3.5, 4.2, 3.8, 3.1],
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.4
    }]
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Smart Home Dashboard</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          icon={<Thermometer className="w-6 h-6" />}
          title="Temperature"
          value="22°C"
          trend="+1°C"
        />
        <MetricCard
          icon={<Droplets className="w-6 h-6" />}
          title="Humidity"
          value="45%"
          trend="-2%"
        />
        <MetricCard
          icon={<LightbulbOff className="w-6 h-6" />}
          title="Active Devices"
          value={`${devices.filter(d => d.isActive).length}/${devices.length}`}
        />
        <MetricCard
          icon={<Lock className="w-6 h-6" />}
          title="Security"
          value="Secured"
          status="success"
        />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Energy Consumption</h3>
        <Line data={energyData} options={{ responsive: true }} />
      </div>
    </div>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend?: string;
  status?: 'success' | 'warning' | 'error';
}

function MetricCard({ icon, title, value, trend, status }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <span className="text-sm text-gray-600">{title}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold">{value}</span>
        {trend && (
          <span className="text-sm text-green-600">{trend}</span>
        )}
        {status && (
          <span className={`text-sm ${
            status === 'success' ? 'text-green-600' :
            status === 'warning' ? 'text-yellow-600' :
            'text-red-600'
          }`}>●</span>
        )}
      </div>
    </div>
  );
}
