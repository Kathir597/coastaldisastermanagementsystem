import { HeroSection } from "./components/hero-section";
import { LiveMonitoring } from "./components/live-monitoring";
import { InteractiveMap } from "./components/interactive-map";
import { RescueCoordination } from "./components/rescue-coordination";
import { AIInsights } from "./components/ai-insights";
import { CitizenAlert } from "./components/citizen-alert";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Live Monitoring Dashboard */}
      <LiveMonitoring />

      {/* Interactive Risk Map */}
      <InteractiveMap />

      {/* Rescue Coordination Panel */}
      <RescueCoordination />

      {/* AI Prediction Insights */}
      <AIInsights />

      {/* Citizen Alert Section */}
      <CitizenAlert />

      {/* Footer */}
      <Footer />
    </div>
  );
}
