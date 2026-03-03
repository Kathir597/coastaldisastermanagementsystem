import { Mail, Phone, Shield, FileText, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Project */}
          <div>
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
              Coastal Alert
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Smart AI-powered coastal disaster prediction and rescue coordination system for real-time emergency response and flood forecasting.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  Live Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  Risk Map
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  Rescue Coordination
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  Download Mobile App
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Emergency Control */}
          <div>
            <h4 className="text-lg mb-4">Emergency Control Room</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">24/7 Helpline</p>
                  <p className="text-slate-400">1800-XXX-XXXX</p>
                  <p className="text-slate-400">+91-XXX-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Email Support</p>
                  <p className="text-slate-400">emergency@coastalalert.gov.in</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium text-sm">
                  Report Emergency Now
                </button>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg mb-4">Legal & Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" />
                  Data Protection Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-400" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4 text-yellow-400" />
                  Cookie Policy
                </a>
              </li>
            </ul>

            <div className="mt-6 p-3 bg-slate-900 rounded-lg border border-slate-800">
              <div className="flex items-start gap-2 text-xs">
                <Shield className="w-4 h-4 text-green-400 mt-0.5" />
                <div>
                  <p className="text-green-400 font-medium mb-1">Data Security</p>
                  <p className="text-slate-400">All personal data is encrypted and securely stored. We do not share your information with third parties.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners & Credits */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h4 className="text-sm text-slate-400 mb-4 text-center">Data Partners & Sources</h4>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span>Indian Meteorological Department</span>
            <span className="text-slate-700">•</span>
            <span>National Disaster Management Authority</span>
            <span className="text-slate-700">•</span>
            <span>ISRO</span>
            <span className="text-slate-700">•</span>
            <span>Coastal Sensor Network</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2026 Smart Coastal Disaster Prediction System. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with
              <span className="text-red-500">♥</span>
              for coastal safety and emergency response
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
