import { Truck, Users, MapPin, Clock, CheckCircle, AlertCircle, Radio } from "lucide-react";

const rescueVehicles = [
  { id: "RT-001", name: "Rescue Team Alpha", type: "Boat", status: "active", location: "Zone A-12", personnel: 8, eta: "5 min" },
  { id: "RT-002", name: "Rescue Team Beta", type: "Helicopter", status: "active", location: "Zone B-08", personnel: 4, eta: "12 min" },
  { id: "RT-003", name: "Rescue Team Gamma", type: "Truck", status: "standby", location: "Base Station", personnel: 6, eta: "20 min" },
  { id: "RT-004", name: "Rescue Team Delta", type: "Boat", status: "active", location: "Zone C-15", personnel: 8, eta: "8 min" },
];

const emergencyRequests = [
  { id: "#ER-4521", location: "Coastal Road, Sector 12", priority: "critical", time: "2 min ago", status: "assigned", assignedTo: "RT-001" },
  { id: "#ER-4520", location: "Beach View Apartments", priority: "high", time: "5 min ago", status: "assigned", assignedTo: "RT-002" },
  { id: "#ER-4519", location: "Marina District", priority: "medium", time: "12 min ago", status: "completed", assignedTo: "RT-004" },
  { id: "#ER-4518", location: "Harbor Area", priority: "high", time: "15 min ago", status: "pending", assignedTo: "-" },
  { id: "#ER-4517", location: "Old Town Street", priority: "medium", time: "18 min ago", status: "completed", assignedTo: "RT-001" },
];

export function RescueCoordination() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-800">Rescue Coordination Panel</h2>
          <p className="text-xl text-slate-600">Real-time tracking and emergency response management</p>
        </div>

        {/* Rescue Vehicle Cards */}
        <div className="mb-12">
          <h3 className="text-2xl mb-6 text-slate-800 flex items-center gap-2">
            <Truck className="w-6 h-6 text-blue-600" />
            Active Rescue Vehicles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rescueVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-xl shadow-lg p-6 border-2 border-slate-200 hover:border-blue-400 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-slate-500 mb-1">{vehicle.id}</div>
                    <h4 className="text-lg text-slate-900">{vehicle.name}</h4>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${
                    vehicle.status === "active" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    <Radio className="w-3 h-3" />
                    {vehicle.status === "active" ? "Active" : "Standby"}
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{vehicle.type}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span>{vehicle.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="w-4 h-4" />
                    <span>{vehicle.personnel} Personnel</span>
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 font-medium pt-2 border-t border-slate-200">
                    <Clock className="w-4 h-4" />
                    <span>ETA: {vehicle.eta}</span>
                  </div>
                </div>

                {/* Route visualization */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Optimized Route
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ width: vehicle.status === "active" ? "70%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Request Queue */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-2xl text-slate-800 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-600" />
              Emergency Request Queue
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Request ID</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Assigned To</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {emergencyRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-slate-900">{request.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-700">{request.location}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        request.priority === "critical" 
                          ? "bg-red-100 text-red-700" 
                          : request.priority === "high"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {request.priority.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock className="w-4 h-4" />
                        {request.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`flex items-center gap-2 text-sm ${
                        request.status === "completed" 
                          ? "text-green-600" 
                          : request.status === "assigned"
                          ? "text-blue-600"
                          : "text-slate-600"
                      }`}>
                        {request.status === "completed" && <CheckCircle className="w-4 h-4" />}
                        {request.status === "assigned" && <Radio className="w-4 h-4" />}
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-slate-700 font-medium">{request.assignedTo}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All Requests ({emergencyRequests.length + 12} total)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
