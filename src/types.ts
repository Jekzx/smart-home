export interface Device {
  id: string;
  name: string;
  type: 'light' | 'thermostat' | 'fan' | 'camera' | 'lock';
  location: string;
  isActive: boolean;
  temperature?: number;
  brightness?: number;
  speed?: number;
  batteryLevel?: number;
  lastUpdated?: string;
}

export interface DeviceMetrics {
  temperature: number;
  humidity: number;
  energy: number;
  securityStatus: 'secured' | 'breached' | 'warning';
  lastUpdate: string;
}

export interface AutomationRule {
  id: string;
  name: string;
  condition: string;
  action: string;
  isActive: boolean;
}

export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  forecast: {
    date: string;
    temperature: {
      min: number;
      max: number;
    };
    condition: string;
  }[];
}

export interface Room {
  id: string;
  name: string;
  devices: string[];
  temperature?: number;
  humidity?: number;
  motion?: boolean;
  lastActivity?: string;
}
