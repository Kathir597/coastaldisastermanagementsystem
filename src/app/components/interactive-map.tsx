import { useState } from "react";
import { MapPin, Navigation, AlertTriangle, Ban, Users } from "lucide-react";

const mapMarkers = [
  { id: 1, type: "flood", lat: 35, lng: 40, severity: "high", label: "Coastal Area A" },
  { id: 2, type: "flood", lat: 65, lng: 25, severity: "critical", label: "Coastal Area B" },
  { id: 3, type: "cyclone", lat: 45, lng: 70, severity: "moderate", label: "Cyclone Alert Zone" },
  { id: 4, type: "blockage", lat: 55, lng: 45, label: "Road Block - NH47" },
  { id: 5, type: "rescue", lat: 40, lng: 60, label: "Rescue Team Alpha" },
  { id: 6, type: "rescue", lat: 70, lng: 35, label: "Rescue Team Beta" },
];

export function InteractiveMap() {
  const [activeFilters, setActiveFilters] = useState({
    cyclone: true,
    blockage: true,
    rescue: true,
  });

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filter]: !prev[filter as keyof typeof prev],
    }));
  };

  const getMarkerColor = (type: string, severity?: string) => {
    if (type === "flood") {
      if (severity === "critical") return "bg-red-600";
      if (severity === "high") return "bg-orange-500";
      return "bg-yellow-500";
    }
    if (type === "cyclone") return "bg-purple-600";
    if (type === "blockage") return "bg-gray-700";
    if (type === "rescue") return "bg-blue-600";
    return "bg-gray-500";
  };

  const filteredMarkers = mapMarkers.filter(marker => {
    if (marker.type === "flood") return true; // Always show flood zones
    return activeFilters[marker.type as keyof typeof activeFilters];
  });

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Interactive Risk Map</h2>
          <p className="text-xl text-slate-300">Real-time flood zones and emergency resources</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter Controls */}
          <div className="space-y-4">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-blue-400" />
                Map Filters
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={activeFilters.cyclone}
                    onChange={() => toggleFilter("cyclone")}
                    className="w-5 h-5 rounded border-slate-600 text-purple-600 focus:ring-purple-500"
                  />
                  <AlertTriangle className="w-5 h-5 text-purple-400" />
                  <span className="group-hover:text-purple-400 transition-colors">Cyclone Alerts</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={activeFilters.blockage}
                    onChange={() => toggleFilter("blockage")}
                    className="w-5 h-5 rounded border-slate-600 text-gray-600 focus:ring-gray-500"
                  />
                  <Ban className="w-5 h-5 text-gray-400" />
                  <span className="group-hover:text-gray-400 transition-colors">Road Blockages</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={activeFilters.rescue}
                    onChange={() => toggleFilter("rescue")}
                    className="w-5 h-5 rounded border-slate-600 text-blue-600 focus:ring-blue-500"
                  />
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="group-hover:text-blue-400 transition-colors">Rescue Teams</span>
                </label>
              </div>
            </div>

            {/* Legend */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg mb-4">Flood Risk Legend</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <span>Critical</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span>High</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Moderate</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg mb-4">Active Zones</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Flood Zones</span>
                  <span className="text-red-400">2 Critical</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Rescue Teams</span>
                  <span className="text-blue-400">6 Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Evacuated</span>
                  <span className="text-green-400">1,247 People</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-3 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden relative h-[600px]">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Heatmap overlay for flood zones */}
              <div className="absolute top-[20%] left-[25%] w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
              <div className="absolute top-[50%] left-[60%] w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>

              {/* Map Markers */}
              {filteredMarkers.map((marker) => (
                <div
                  key={marker.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: `${marker.lng}%`, top: `${marker.lat}%` }}
                >
                  <div className={`${getMarkerColor(marker.type, marker.severity)} w-4 h-4 rounded-full animate-pulse shadow-lg`}></div>
                  <div className={`${getMarkerColor(marker.type, marker.severity)} w-8 h-8 rounded-full opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping`}></div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700">
                    <div className="font-medium">{marker.label}</div>
                    {marker.severity && (
                      <div className="text-xs text-slate-300 capitalize">{marker.severity} Risk</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Coastal line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path
                  d="M 0 300 Q 200 250, 400 300 T 800 300 L 800 600 L 0 600 Z"
                  fill="rgba(59, 130, 246, 0.1)"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 space-y-2">
              <button className="bg-slate-900/80 p-3 rounded-lg hover:bg-slate-900 transition-colors border border-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="bg-slate-900/80 p-3 rounded-lg hover:bg-slate-900 transition-colors border border-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
            </div>

            {/* Location info */}
            <div className="absolute bottom-4 left-4 bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-600 text-sm">
              <MapPin className="w-4 h-4 inline mr-2 text-blue-400" />
              Kerala Coastal Region
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
