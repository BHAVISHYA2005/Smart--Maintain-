import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AlertTriangle, CheckCircle, Activity, Thermometer, Waves, Gauge } from 'lucide-react';
import { format } from 'date-fns';
import { Machine } from '../types/machine';

const mockMachine: Machine = {
  id: "m1",
  name: "Industrial Pump A1",
  type: "Centrifugal Pump",
  location: "Factory Floor 1",
  status: "operational",
  lastMaintenance: "2024-02-15",
  nextMaintenance: "2024-03-15",
  healthScore: 87,
  sensorData: [
    { id: "1", timestamp: "2024-03-01", temperature: 65, vibration: 2.1, pressure: 50, status: "normal" },
    { id: "2", timestamp: "2024-03-02", temperature: 68, vibration: 2.3, pressure: 52, status: "normal" },
    { id: "3", timestamp: "2024-03-03", temperature: 72, vibration: 2.8, pressure: 55, status: "warning" },
  ]
};

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Machine Health Dashboard</h1>
          <p className="mt-2 text-gray-600">Real-time monitoring and predictive maintenance</p>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{mockMachine.name}</h2>
              <p className="text-gray-600">{mockMachine.type}</p>
            </div>
            <div className="flex items-center space-x-2">
              {mockMachine.status === 'operational' ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
              )}
              <span className="capitalize text-lg">{mockMachine.status}</span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Temperature</p>
                <h3 className="text-2xl font-bold">{mockMachine.sensorData[mockMachine.sensorData.length - 1].temperature}°C</h3>
              </div>
              <Thermometer className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Vibration</p>
                <h3 className="text-2xl font-bold">{mockMachine.sensorData[mockMachine.sensorData.length - 1].vibration} Hz</h3>
              </div>
              <Waves className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Pressure</p>
                <h3 className="text-2xl font-bold">{mockMachine.sensorData[mockMachine.sensorData.length - 1].pressure} PSI</h3>
              </div>
              <Gauge className="w-8 h-8 text-red-500" />
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Sensor Readings Over Time</h3>
          <LineChart width={800} height={400} data={mockMachine.sensorData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#3B82F6" />
            <Line type="monotone" dataKey="vibration" stroke="#8B5CF6" />
            <Line type="monotone" dataKey="pressure" stroke="#EF4444" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}