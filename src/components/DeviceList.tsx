import { useDevices } from '../hooks/useDevices';
import { 
  Power,
  Lightbulb,
  Fan,
  ThermometerSun
} from 'lucide-react';

export function DeviceList() {
  const { devices, toggleDevice, updateDevice } = useDevices();

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

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Connected Devices</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage and control your smart home devices</p>
      </div>
      <div className="border-t border-gray-200">
        <ul role="list" className="divide-y divide-gray-200">
          {devices.map((device) => (
            <li key={device.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${
                    device.isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {getDeviceIcon(device.type)}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{device.name}</h4>
                    <p className="text-sm text-gray-500">{device.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {device.type === 'thermostat' && (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateDevice(device.id, { temperature: (device.temperature || 20) - 1 })}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium">{device.temperature}°C</span>
                      <button
                        onClick={() => updateDevice(device.id, { temperature: (device.temperature || 20) + 1 })}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => toggleDevice(device.id)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      device.isActive ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        device.isActive ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
