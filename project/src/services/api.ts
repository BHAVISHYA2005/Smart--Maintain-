import { Machine, SensorData } from '../types/machine';

// Simulate API calls to Kestra endpoints
export async function fetchMachineData(): Promise<Machine> {
  // In a real implementation, this would fetch from Kestra's API
  const mockData: Machine = {
    id: "m1",
    name: "Industrial Pump A1",
    type: "Centrifugal Pump",
    location: "Factory Floor 1",
    status: "operational",
    lastMaintenance: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    nextMaintenance: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    healthScore: 87,
    sensorData: Array.from({ length: 24 }, (_, i) => ({
      id: i.toString(),
      timestamp: new Date(Date.now() - (24 - i) * 60 * 60 * 1000).toISOString(),
      temperature: 65 + Math.random() * 15,
      vibration: 2.0 + Math.random(),
      pressure: 48 + Math.random() * 12,
      status: Math.random() > 0.8 ? 'warning' : 'normal'
    }))
  };
  
  return mockData;
}

export async function fetchLatestSensorData(): Promise<SensorData> {
  // This would fetch the latest data from Kestra's sensor-data-collection flow
  const mockLatestData: SensorData = {
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    temperature: 65 + Math.random() * 15,
    vibration: 2.0 + Math.random(),
    pressure: 48 + Math.random() * 12,
    status: Math.random() > 0.8 ? 'warning' : 'normal'
  };

  return mockLatestData;
}