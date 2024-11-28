import { useState, useEffect } from 'react';
import { Device, DeviceMetrics } from '../types';

export function useDevices() {
  const [devices, setDevices] = useState<Device[]>([
    {
      id: '1',
      name: 'Living Room Light',
      type: 'light',
      location: 'Living Room',
      isActive: true,
    },
    {
      id: '2',
      name: 'Bedroom AC',
      type: 'thermostat',
      location: 'Bedroom',
      isActive: false,
      temperature: 22,
    },
    {
      id: '3',
      name: 'Kitchen Fan',
      type: 'fan',
      location: 'Kitchen',
      isActive: true,
    },
  ]);

  const [metrics, setMetrics] = useState<DeviceMetrics>({
    temperature: 22,
    humidity: 45,
    energy: 3.2,
  });

  const toggleDevice = (deviceId: string) => {
    setDevices(devices.map(device =>
      device.id === deviceId
        ? { ...device, isActive: !device.isActive }
        : device
    ));
  };

  const updateDevice = (deviceId: string, updates: Partial<Device>) => {
    setDevices(devices.map(device =>
      device.id === deviceId
        ? { ...device, ...updates }
        : device
    ));
  };

  return {
    devices,
    metrics,
    toggleDevice,
    updateDevice,
  };
}
