import React from 'react';
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
      case 'light': return <Lightbulb className="w-5 h-5" />;
      case 'fan': return <Fan className="w-5 h-5" />;
      case 'thermostat': return <ThermometerSun className="w-5 h-5" />;
      default: return <Power className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Connected Devices</h2>
      <div className="space-y-4">
        {devices.map(device => (
          <div 
            key={device.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center gap-3">
              {getDeviceIcon(device.type)}
              <div>
                <h3 className="font-medium">{device.name}</h3>
                <p className="text-sm text-gray-600">{device.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {device.type === 'thermostat' && (
                <input
                  type="number"
                  value={device.temperature}
                  onChange={(e) => updateDevice(device.id, { 
                    temperature: parseInt(e.target.value) 
                  })}
                  className="w-16 px-2 py-1 border rounded"
                />
              )}
              <button
                onClick={() => toggleDevice(device.id)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  device.isActive ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                  device.isActive ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
