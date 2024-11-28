import { useState, useCallback } from 'react';
import { Device, DeviceMetrics } from '../types';

export function useDevices() {
  const [devices, setDevices] = useState<Device[]>([
    {
      id: '1',
      name: 'Living Room Light',
      type: 'light',
      location: 'Living Room',
      isActive: true,
      brightness: 80,
      lastUpdated: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Bedroom AC',
      type: 'thermostat',
      location: 'Bedroom',
      isActive: false,
      temperature: 22,
      lastUpdated: new Date().toISOString(),
    },
    {
      id: '3',
      name: 'Kitchen Fan',
      type: 'fan',
      location: 'Kitchen',
      isActive: true,
      speed: 2,
      lastUpdated: new Date().toISOString(),
    },
    {
      id: '4',
      name: 'Front Door Camera',
      type: 'camera',
      location: 'Entrance',
      isActive: true,
      batteryLevel: 85,
      lastUpdated: new Date().toISOString(),
    },
    {
      id: '5',
      name: 'Back Door Lock',
      type: 'lock',
      location: 'Back Door',
      isActive: true,
      batteryLevel: 90,
      lastUpdated: new Date().toISOString(),
    },
  ]);

  const [metrics, setMetrics] = useState<DeviceMetrics>({
    temperature: 22,
    humidity: 45,
    energy: 3.2,
    securityStatus: 'secured',
    lastUpdate: new Date().toISOString(),
  });

  const toggleDevice = useCallback((deviceId: string) => {
    setDevices(prevDevices => 
      prevDevices.map(device =>
        device.id === deviceId
          ? { 
              ...device, 
              isActive: !device.isActive,
              lastUpdated: new Date().toISOString()
            }
          : device
      )
    );
  }, []);

  const updateDevice = useCallback((deviceId: string, updates: Partial<Device>) => {
    setDevices(prevDevices =>
      prevDevices.map(device =>
        device.id === deviceId
          ? { 
              ...device, 
              ...updates,
              lastUpdated: new Date().toISOString()
            }
          : device
      )
    );
  }, []);

  const addDevice = useCallback((device: Omit<Device, 'id' | 'lastUpdated'>) => {
    const newDevice: Device = {
      ...device,
      id: Math.random().toString(36).substr(2, 9),
      lastUpdated: new Date().toISOString(),
    };
    setDevices(prevDevices => [...prevDevices, newDevice]);
  }, []);

  const removeDevice = useCallback((deviceId: string) => {
    setDevices(prevDevices => prevDevices.filter(device => device.id !== deviceId));
  }, []);

  const updateMetrics = useCallback((updates: Partial<DeviceMetrics>) => {
    setMetrics(prev => ({
      ...prev,
      ...updates,
      lastUpdate: new Date().toISOString(),
    }));
  }, []);

  return {
    devices,
    metrics,
    toggleDevice,
    updateDevice,
    addDevice,
    removeDevice,
    updateMetrics,
  };
}
