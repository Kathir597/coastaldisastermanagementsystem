import { useState } from "react";
import { Droplets, CloudRain, Wind, TrendingUp, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const sensorData = [
  { icon: Droplets, label: "Water Level", value: "2.8", unit: "meters", status: "moderate", change: "+0.3m" },
  { icon: CloudRain, label: "Rainfall Intensity", value: "45", unit: "mm/hr", status: "high", change: "+12mm" },
  { icon: Wind, label: "Wind Speed", value: "65", unit: "km/h", status: "moderate", change: "+5km/h" },
  { icon: Activity, label: "Wave Height", value: "1.9", unit: "meters", status: "low", change: "+0.2m" },
];

const predictionData = [
  { time: "00:00", risk: 25, actual: 22 },
  { time: "03:00", risk: 30, actual: 28 },
  { time: "06:00", risk: 45, actual: 42 },
  { time: "09:00", risk: 55, actual: 53 },
  { time: "12:00", risk: 70, actual: 68 },
  { time: "15:00", risk: 85, actual: null },
  { time: "18:00", risk: 78, actual: null },
  { time: "21:00", risk: 65, actual: null },
];

const riskLevels = [
  { level: "Low", color: "bg-green-500", range: "0-25%" },
  { level: "Moderate", color: "bg-yellow-500", range: "26-50%" },
  { level: "High", color: "bg-orange-500", range: "51-75%" },
  { level: "Critical", color: "bg-red-500", range: "76-100%" },
];

export function LiveMonitoring() {
  const [currentRisk, setCurrentRisk] = useState(68);

  const getRiskLevel = (value: number) => {
    if (value <= 25) return { level: "Low", color: "text-green-500", bg: "bg-green-500" };
    if (value <= 50) return { level: "Moderate", color: "text-yellow-500", bg: "bg-yellow-500" };
    if (value <= 75) return { level: "High", color: "text-orange-500", bg: "bg-orange-500" };
    return { level: "Critical", color: "text-red-500", bg: "bg-red-500" };
  };

  const risk = getRiskLevel(currentRisk);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-800">Live Monitoring Dashboard</h2>
          <p className="text-xl text-slate-600">Real-time sensor data and flood predictions</p>
        </div>

        {/* Sensor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sensorData.map((sensor, index) => {
            const Icon = sensor.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    sensor.status === "high" ? "bg-red-100" :
                    sensor.status === "moderate" ? "bg-yellow-100" :
                    "bg-green-100"
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      sensor.status === "high" ? "text-red-600" :
                      sensor.status === "moderate" ? "text-yellow-600" :
                      "text-green-600"
                    }`} />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <TrendingUp className="w-4 h-4" />
                    <span>{sensor.change}</span>
                  </div>
                </div>
                <h3 className="text-sm text-slate-600 mb-2">{sensor.label}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-slate-900">{sensor.value}</span>
                  <span className="text-lg text-slate-500">{sensor.unit}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prediction Chart and Risk Indicator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Time-series Prediction Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-slate-200">
            <div className="mb-6">
              <h3 className="text-2xl text-slate-800 mb-2">24-Hour Flood Risk Prediction</h3>
              <p className="text-sm text-slate-600">AI-powered forecast using LSTM model</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={predictionData}>
                <defs>
                  <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="time" stroke="#64748b" />
                <YAxis stroke="#64748b" label={{ value: 'Risk Level (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  labelStyle={{ color: '#1e293b' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="risk" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fill="url(#colorRisk)" 
                  name="Predicted Risk"
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: '#10b981', r: 4 }}
                  name="Actual Risk"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Risk Level Indicator */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
            <h3 className="text-xl text-slate-800 mb-6">Current Risk Level</h3>
            
            {/* Circular Progress */}
            <div className="relative w-40 h-40 mx-auto mb-6">
              <svg className="transform -rotate-90 w-40 h-40">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#e2e8f0"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke={risk.bg.replace('bg-', '#').replace('green-500', '10b981').replace('yellow-500', 'eab308').replace('orange-500', 'f97316').replace('red-500', 'ef4444')}
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${currentRisk * 4.4} 440`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl text-slate-900">{currentRisk}%</span>
                <span className={`text-sm ${risk.color} mt-1`}>{risk.level}</span>
              </div>
            </div>

            {/* Risk Level Legend */}
            <div className="space-y-3">
              {riskLevels.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-slate-700">{item.level}</span>
                  </div>
                  <span className="text-slate-500">{item.range}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
