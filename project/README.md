# Digital Twin Implementation for Predictive Maintenance

This project implements a digital twin system for predictive maintenance using Kestra as the workflow orchestration platform. The system collects data from IoT sensors, analyzes it in real-time, and predicts maintenance needs for industrial machinery.

## Features

- Real-time sensor data collection and monitoring
- Predictive maintenance analytics
- Interactive dashboard with real-time visualizations
- Automated maintenance scheduling
- Alert system for critical conditions

## Architecture

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- Recharts for data visualization
- Real-time updates using polling

### Backend (Kestra Workflows)
- Sensor data collection flow (runs every 5 minutes)
- Maintenance prediction flow (triggered by sensor data)
- Python scripts for data analysis and prediction

## Kestra Workflow Structure

### sensor-data-collection.yml
- Collects sensor data (temperature, vibration, pressure)
- Analyzes metrics for anomalies
- Triggers alerts for critical conditions

### maintenance-prediction.yml
- Predicts next maintenance date
- Calculates machine health score
- Triggered by sensor data collection

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure Kestra:
   - Place workflow files in Kestra's flow directory
   - Update Python dependencies if needed

3. Start the development server:
   ```bash
   npm run dev
   ```

## Monitoring

The dashboard provides real-time monitoring of:
- Temperature
- Vibration
- Pressure
- Machine health score
- Maintenance predictions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

MIT