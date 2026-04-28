import React from "react";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Background Decorative Elements (AI "Glow") */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          NexusAI CRM
        </div>
        <div className="space-x-4">
          <Link
            to={"/sign-in"}
            className="text-slate-300 hover:text-white transition"
          >
            Sign In
          </Link>
          <button className="bg-white text-slate-950 px-5 py-2 rounded-full font-medium hover:bg-slate-200 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
            AI Engine Live v2.0
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Close more deals with <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Predictive Intelligence
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed">
          The first CRM that doesn't just track contacts—it analyzes sentiment,
          predicts churn, and automates your follow-ups using advanced neural
          networks.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-500 transition-all">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-slate-900 text-white border border-slate-800 rounded-xl font-semibold hover:bg-slate-800 transition-all">
            Watch Demo
          </button>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="relative w-full max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/50 p-4 shadow-2xl backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20 rounded-2xl" />
          {/* Inner Placeholder Content */}
          <div className="w-full h-[400px] bg-slate-950 rounded-lg flex items-center justify-center border border-slate-800/50">
            <div className="flex flex-col items-center gap-4">
              <div className="grid grid-cols-3 gap-4 w-64">
                <div className="h-24 bg-slate-900 rounded-md animate-pulse"></div>
                <div className="h-24 bg-slate-900 rounded-md animate-pulse"></div>
                <div className="h-24 bg-slate-900 rounded-md animate-pulse"></div>
              </div>
              <div className="w-80 h-32 bg-slate-900 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
