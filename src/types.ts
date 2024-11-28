export interface Device {
  id: string;
  name: string;
  type: 'light' | 'thermostat' | 'fan';
  location: string;
  isActive: boolean;
  temperature?: number;
}

export interface DeviceMetrics {
  temperature: number;
  humidity: number;
  energy: number;
}

export interface AutomationRule {
  id: string;
  name: string;
  condition: string;
  action: string;
  isActive: boolean;
}
