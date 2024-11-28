import { Line } from 'react-chartjs-2';
import { useDevices } from '../hooks/useDevices';
import { motion } from 'framer-motion';
import { 
  Thermometer, 
  Droplets, 
  LightbulbOff,
  Lock,
  Cloud,
  Sun
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface WeatherData {
  temp: number;
  condition: string;
  icon: string;
}

export function Dashboard() {
  const { devices, metrics } = useDevices();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate weather API call
    setTimeout(() => {
      setWeather({
        temp: 24,
        condition: 'Partly Cloudy',
        icon: 'cloud'
      });
      setLoading(false);
    }, 1000);
  }, []);

  const energyData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [{
      label: 'Energy Usage (kWh)',
      data: [3.2, 2.8, 3.5, 4.2, 3.8, 3.1],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true
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
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Weather Card */}
      <motion.div
        variants={item}
        className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white"
      >
        {loading ? (
          <div className="animate-pulse h-20 bg-blue-400/50 rounded" />
        ) : weather && (
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Weather</h2>
              <p className="text-blue-100">{weather.condition}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">{weather.temp}°C</p>
              {weather.icon === 'cloud' ? (
                <Cloud className="h-10 w-10 mx-auto mt-2" />
              ) : (
                <Sun className="h-10 w-10 mx-auto mt-2" />
              )}
            </div>
          </div>
        )}
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Temperature Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
              <Thermometer className="h-8 w-8 text-red-500 dark:text-red-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Temperature</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.temperature}°C</h3>
            </div>
          </div>
        </motion.div>

        {/* Humidity Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
              <Droplets className="h-8 w-8 text-blue-500 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Humidity</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.humidity}%</h3>
            </div>
          </div>
        </motion.div>

        {/* Active Devices Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
              <LightbulbOff className="h-8 w-8 text-green-500 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Devices</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {devices.filter(d => d.isActive).length} / {devices.length}
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Security Status Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
              <Lock className="h-8 w-8 text-purple-500 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Security Status</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Secured</h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Energy Usage Chart */}
      <motion.div
        variants={item}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <Line data={energyData} options={options} />
      </motion.div>
    </motion.div>
  );
}
