import { useDevices } from '../hooks/useDevices';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Power,
  Lightbulb,
  Fan,
  ThermometerSun,
  Home,
  Search,
  Plus
} from 'lucide-react';
import { useState } from 'react';

export function DeviceList() {
  const { devices, toggleDevice, updateDevice } = useDevices();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const rooms = Array.from(new Set(devices.map(device => device.location)));

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'light':
        return <Lightbulb className="h-6 w-6" />;
      case 'fan':
        return <Fan className="h-6 w-6" />;
      case 'thermostat':
        return <ThermometerSun className="h-6 w-6" />;
      default:
        return <Power className="h-6 w-6" />;
    }
  };

  const filteredDevices = devices.filter(device => {
    const matchesRoom = !selectedRoom || device.location === selectedRoom;
    const matchesSearch = device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         device.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRoom && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Connected Devices</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage and control your smart home devices
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Device
        </motion.button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search devices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedRoom(null)}
            className={`inline-flex items-center px-4 py-2 rounded-lg ${
              !selectedRoom
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <Home className="h-5 w-5 mr-2" />
            All Rooms
          </motion.button>
          {rooms.map(room => (
            <motion.button
              key={room}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedRoom(room)}
              className={`px-4 py-2 rounded-lg ${
                selectedRoom === room
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {room}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Device List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <AnimatePresence>
            {filteredDevices.map((device) => (
              <motion.li
                key={device.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="group hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <div className={`p-2 rounded-lg ${
                        device.isActive
                          ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}>
                        {getDeviceIcon(device.type)}
                      </div>
                      <div className="ml-4 min-w-0">
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white truncate">
                          {device.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {device.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {device.type === 'thermostat' && (
                        <div className="flex items-center space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateDevice(device.id, { temperature: (device.temperature || 20) - 1 })}
                            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <span className="text-xl font-medium text-gray-600 dark:text-gray-300">−</span>
                          </motion.button>
                          <span className="text-sm font-medium text-gray-900 dark:text-white min-w-[3ch] text-center">
                            {device.temperature}°C
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateDevice(device.id, { temperature: (device.temperature || 20) + 1 })}
                            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <span className="text-xl font-medium text-gray-600 dark:text-gray-300">+</span>
                          </motion.button>
                        </div>
                      )}
                      <div className="relative">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleDevice(device.id)}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            device.isActive ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              device.isActive ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}
