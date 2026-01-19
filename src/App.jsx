import React from "react";
import {
  ShieldCheck,
  Network,
  UserCog,
  FileCheck,
  CalendarCheck,
} from "lucide-react";
import logo from "./logo.png";

const App = () => {
  return (
    /* FULL PAGE THEME */
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-pink-400 flex justify-center py-12 px-4">

      {/* MAIN CARD */}
      <div className="bg-white/95 backdrop-blur max-w-5xl w-full shadow-2xl rounded-2xl overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Kevlar Defense Logo"
              className="h-10 object-contain"
            />
          </div>
          <p className="text-sm text-pink-500 font-medium">
            www.kevlardefense.com
          </p>
        </div>

        {/* Hero */}
        <div className="grid md:grid-cols-2 bg-gradient-to-r from-purple-950 to-pink-400 text-white">
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-3">
              Managed SIEM Services
            </h2>
            <p className="text-sm leading-relaxed text-white/90">
              We recognize there are many excellent SIEM technologies.
              However, most organizations don’t realize full value without
              proper staffing, configuration, and operational processes.
            </p>
          </div>

          <div
            className="min-h-[260px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600267165477-6d4cc741b379')",
            }}
          />
        </div>

        {/* Intro */}
        <div className="px-6 py-6 text-sm text-gray-700">
          Kevlar Defense provides a cost-effective SIEM-as-a-service solution.
          You receive a fully deployed, cloud-based, remotely managed SIEM
          that delivers real security value without internal overhead.
        </div>

        {/* What We Give You */}
        <div className="px-6">
          <h3 className="text-lg font-semibold mb-4 text-purple-950">
            What We Give You
          </h3>

          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <FeatureCard
              icon={<Network />}
              title="24×7 Monitoring"
              desc="Continuous SIEM monitoring to ensure accurate log collection and alerting."
            />
            <FeatureCard
              icon={<UserCog />}
              title="SIEM Engineers"
              desc="Certified experts managing, tuning, and optimizing your SIEM platform."
            />
            <FeatureCard
              icon={<FileCheck />}
              title="Compliance Ready"
              desc="Ensures your SIEM meets regulatory and compliance requirements."
            />
            <FeatureCard
              icon={<CalendarCheck />}
              title="Monthly Healthchecks"
              desc="Routine reviews to maximize SIEM efficiency and threat detection."
            />
          </div>
        </div>

        {/* Service Covers */}
        <div className="px-6 py-6">
          <h3 className="text-lg font-semibold mb-3 text-purple-950">
            What Our Service Covers
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Our service includes 24×7 real-time threat alerts, centralized
            event logging, automated correlation, actionable incident
            reporting, remediation workflows, and compliance reporting.
            We tailor recommendations to ensure full coverage with zero
            blind spots.
          </p>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-purple-950 to-pink-400 text-white px-6 py-6 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-semibold">
            Sleep easy knowing Kevlar Defense has your back!
          </p>
          <div className="text-sm space-y-1">
            <p>📧 support@kevlardefense.com</p>
            <p>📞 +44 734 544 3339</p>
          </div>
        </div>

      </div>
    </div>
  );
};

/* ---------- Reusable Component ---------- */

const FeatureCard = ({ icon, title, desc }) => (
  <div className="border rounded-xl p-4 text-center shadow-sm">
    <div className="flex justify-center mb-2 text-pink-500">
      {icon}
    </div>
    <h4 className="font-semibold mb-1 text-purple-950">
      {title}
    </h4>
    <p className="text-xs text-gray-600">
      {desc}
    </p>
  </div>
);

export default App;