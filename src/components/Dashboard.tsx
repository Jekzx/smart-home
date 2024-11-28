import { Line } from 'react-chartjs-2';
import { useDevices } from '../hooks/useDevices';
import { motion } from 'framer-motion';
import { 
  Thermometer, 
  Droplets, 
  LightbulbOff,
  Lock,
  Sun,
  Cloud
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface WeatherData {
  temp: number;
  condition: string;
  icon: string;
}

export function Dashboard() {
  const { devices, metrics } = useDevices();
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(true);
  const [weather] = useState<WeatherData>({
    temp: 22,
    condition: 'Sunny',
    icon: 'sun'
  });

  useEffect(() => {
    // Simulate loading weather data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const energyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Energy Usage (kWh)',
        data: [5, 7, 4, 6, 3, 8, 5],
        borderColor: isDark ? '#60A5FA' : '#2563EB',
        backgroundColor: isDark ? 'rgba(96, 165, 250, 0.1)' : 'rgba(37, 99, 235, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const deviceUsageData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Device Usage',
        data: [8, 6, 7, 8, 6, 9, 7],
        borderColor: isDark ? '#60A5FA' : '#2563EB',
        backgroundColor: isDark ? 'rgba(96, 165, 250, 0.1)' : 'rgba(37, 99, 235, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
        },
      },
      x: {
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
        },
      },
      title: {
        display: true,
        text: 'Energy Consumption',
        color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
      },
    },
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
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {loading ? (
          <div className="animate-pulse h-20 bg-blue-400/50 rounded" />
        ) : weather && (
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Weather</p>
              <h3 className="text-2xl font-semibold mt-1">{weather.temp}°C</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {weather.condition}
              </p>
            </div>
            {weather.icon === 'sun' ? (
              <Sun className="w-10 h-10 text-yellow-500" />
            ) : (
              <Cloud className="w-10 h-10 text-gray-500 dark:text-gray-400" />
            )}
          </div>
        )}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Temperature Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
              <Thermometer className="h-8 w-8 text-red-500 dark:text-red-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Temperature</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.temperature}°C</h3>
            </div>
          </div>
        </motion.div>

        {/* Humidity Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
              <Droplets className="h-8 w-8 text-blue-500 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.humidity}%</h3>
            </div>
          </div>
        </motion.div>

        {/* Active Devices Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
              <LightbulbOff className="h-8 w-8 text-green-500 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Devices</p>
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
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
              <Lock className="h-8 w-8 text-purple-500 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Security Status</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Secured</h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4">Energy Consumption</h3>
          <div className="h-[300px]">
            <Line
              data={energyData}
              options={chartOptions}
            />
          </div>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-lg font-semibold mb-4">Device Usage</h3>
          <div className="h-[300px]">
            <Line
              data={deviceUsageData}
              options={chartOptions}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
