import { Smartphone, Bell, MessageSquare, AlertOctagon } from "lucide-react";

export function CitizenAlert() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Citizen Alert System</h2>
          <p className="text-xl text-slate-300">Stay informed and connected during emergencies</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Preview */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-slate-950 rounded-[3rem] shadow-2xl border-8 border-slate-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-950 rounded-b-3xl"></div>
                
                {/* Screen Content */}
                <div className="absolute inset-4 bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 flex items-center justify-between text-white text-xs">
                    <span>9:41</span>
                    <span className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-white/30"></div>
                      <div className="w-4 h-4 rounded-full bg-white/30"></div>
                      <div className="w-4 h-4 rounded-full bg-white/30"></div>
                    </span>
                  </div>

                  {/* App Header */}
                  <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 pb-6 text-white">
                    <h3 className="text-2xl mb-2">Coastal Alert</h3>
                    <p className="text-sm text-red-100">Emergency Notification System</p>
                  </div>

                  {/* Alert Cards */}
                  <div className="p-4 space-y-3 bg-slate-50 h-full overflow-hidden">
                    {/* Critical Alert */}
                    <div className="bg-white rounded-xl shadow-md border-l-4 border-red-500 p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <AlertOctagon className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-red-600">CRITICAL ALERT</span>
                            <span className="text-xs text-slate-400">2 min ago</span>
                          </div>
                          <h4 className="text-sm font-medium text-slate-900 mb-1">High Flood Risk Detected</h4>
                          <p className="text-xs text-slate-600">Coastal Area B - Immediate evacuation recommended</p>
                        </div>
                      </div>
                    </div>

                    {/* Warning Alert */}
                    <div className="bg-white rounded-xl shadow-md border-l-4 border-orange-500 p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Bell className="w-5 h-5 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-orange-600">WARNING</span>
                            <span className="text-xs text-slate-400">15 min ago</span>
                          </div>
                          <h4 className="text-sm font-medium text-slate-900 mb-1">Heavy Rainfall Expected</h4>
                          <p className="text-xs text-slate-600">Next 6 hours - Stay alert and avoid low-lying areas</p>
                        </div>
                      </div>
                    </div>

                    {/* Info Alert */}
                    <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-500 p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <MessageSquare className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-blue-600">UPDATE</span>
                            <span className="text-xs text-slate-400">1 hour ago</span>
                          </div>
                          <h4 className="text-sm font-medium text-slate-900 mb-1">Rescue Teams Deployed</h4>
                          <p className="text-xs text-slate-600">6 teams active in affected zones</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SOS Button */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl shadow-lg font-medium text-lg flex items-center justify-center gap-2">
                      <AlertOctagon className="w-6 h-6" />
                      EMERGENCY SOS
                    </button>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-[3rem] blur-2xl -z-10"></div>
            </div>
          </div>

          {/* Features and SMS Preview */}
          <div className="space-y-8">
            {/* Features */}
            <div>
              <h3 className="text-3xl mb-6">Multi-Channel Alerts</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Smartphone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Mobile App Notifications</h4>
                    <p className="text-slate-300">Real-time push notifications with location-based alerts and emergency guidance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                    <MessageSquare className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">SMS Alerts</h4>
                    <p className="text-slate-300">Instant text messages to ensure critical information reaches everyone</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                    <AlertOctagon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">One-Touch SOS</h4>
                    <p className="text-slate-300">Emergency button connects directly to rescue coordination center</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SMS Preview */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h4 className="text-xl mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-green-400" />
                SMS Notification Preview
              </h4>
              <div className="space-y-3">
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <div className="text-xs text-slate-400 mb-2">From: COASTAL-ALERT</div>
                  <p className="text-sm text-white">
                    🚨 CRITICAL ALERT: High flood risk detected in your area (Zone B-08). 
                    Immediate evacuation recommended. Proceed to nearest shelter at Marine Drive Community Center. 
                    Emergency helpline: 1800-XXX-XXXX
                  </p>
                  <div className="text-xs text-slate-500 mt-2">Mar 3, 2026 • 9:42 AM</div>
                </div>

                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <div className="text-xs text-slate-400 mb-2">From: COASTAL-ALERT</div>
                  <p className="text-sm text-white">
                    ⚠️ WARNING: Heavy rainfall expected in next 6 hours. Water level rising. 
                    Stay indoors and avoid coastal areas. Track live updates: coastalalert.gov.in
                  </p>
                  <div className="text-xs text-slate-500 mt-2">Mar 3, 2026 • 9:27 AM</div>
                </div>
              </div>
            </div>

            {/* Download CTA */}
            <div className="flex gap-4">
              <button className="flex-1 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium flex items-center justify-center gap-2">
                <Smartphone className="w-5 h-5" />
                Download App
              </button>
              <button className="flex-1 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium">
                Subscribe SMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
