export interface SensorData {
  id: string;
  timestamp: string;
  temperature: number;
  vibration: number;
  pressure: number;
  status: 'normal' | 'warning' | 'critical';
}

export interface Machine {
  id: string;
  name: string;
  type: string;
  location: string;
  status: 'operational' | 'maintenance' | 'offline';
  lastMaintenance: string;
  nextMaintenance: string;
  healthScore: number;
  sensorData: SensorData[];
}