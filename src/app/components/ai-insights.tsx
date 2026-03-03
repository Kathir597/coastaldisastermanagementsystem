import { Brain, TrendingUp, Database, CheckCircle } from "lucide-react";

const modelMetrics = [
  { name: "LSTM Model", accuracy: 94.2, type: "Time Series" },
  { name: "Random Forest", accuracy: 91.8, type: "Classification" },
  { name: "Ensemble Model", accuracy: 96.5, type: "Combined" },
];

const dataSources = [
  { name: "Indian Meteorological Department", status: "active", lastUpdate: "2 min ago", dataPoints: "1.2M" },
  { name: "National Disaster Management Authority", status: "active", lastUpdate: "5 min ago", dataPoints: "850K" },
  { name: "Coastal Sensor Network", status: "active", lastUpdate: "1 min ago", dataPoints: "2.4M" },
  { name: "Satellite Imagery (ISRO)", status: "active", lastUpdate: "15 min ago", dataPoints: "450K" },
];

export function AIInsights() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-4">
            <Brain className="w-5 h-5" />
            <span className="text-sm font-medium">AI-Powered Analytics</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-800">AI Prediction Insights</h2>
          <p className="text-xl text-slate-600">Machine learning models for accurate flood forecasting</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Model Accuracy Cards */}
          {modelMetrics.map((model, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-all relative overflow-hidden group"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl text-slate-800 mb-1">{model.name}</h3>
                    <p className="text-sm text-slate-500">{model.type}</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Accuracy Display */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl text-slate-900">{model.accuracy}</span>
                    <span className="text-2xl text-slate-500">%</span>
                  </div>
                  <p className="text-sm text-slate-600">Prediction Accuracy</p>
                </div>

                {/* Progress Bar */}
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000"
                    style={{ width: `${model.accuracy}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Sources Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <h3 className="text-2xl flex items-center gap-2">
              <Database className="w-6 h-6" />
              Real-Time Data Sources
            </h3>
            <p className="text-indigo-100 mt-2">Connected to national and regional monitoring systems</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataSources.map((source, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg p-5 hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg text-slate-800 mb-1">{source.name}</h4>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600 font-medium">{source.status.toUpperCase()}</span>
                      </div>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 mb-1">Last Update</p>
                      <p className="text-slate-900 font-medium">{source.lastUpdate}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 mb-1">Data Points</p>
                      <p className="text-slate-900 font-medium">{source.dataPoints}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Stats */}
          <div className="px-6 pb-6">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl text-indigo-600 mb-1">5.9M+</div>
                  <div className="text-sm text-slate-600">Total Data Points</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-purple-600 mb-1">99.8%</div>
                  <div className="text-sm text-slate-600">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-indigo-600 mb-1">24/7</div>
                  <div className="text-sm text-slate-600">Real-Time Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-purple-600 mb-1">&lt;30s</div>
                  <div className="text-sm text-slate-600">Prediction Latency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Model Performance Insights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
            <div className="text-4xl mb-2">72hrs</div>
            <div className="text-blue-100">Forecast Window</div>
            <p className="text-sm text-blue-200 mt-3">Advanced prediction up to 3 days ahead</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
            <div className="text-4xl mb-2">15min</div>
            <div className="text-emerald-100">Update Frequency</div>
            <p className="text-sm text-emerald-200 mt-3">Continuous model retraining and updates</p>
          </div>

          <div className="bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl p-6 text-white shadow-lg">
            <div className="text-4xl mb-2">3.2K+</div>
            <div className="text-violet-100">Successful Predictions</div>
            <p className="text-sm text-violet-200 mt-3">Validated forecasts in 2025-2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
