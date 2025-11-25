'use client';
import { useState, useEffect } from 'react';
import { Activity, TrendingUp, Users, Clock, AlertCircle } from 'lucide-react';

export default function DemoPage() {
  const [revenue, setRevenue] = useState(7250);
  const [jobs, setJobs] = useState(12);
  const [showAIInsight, setShowAIInsight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 200));
      if (Math.random() > 0.7) setJobs(prev => prev + 1);
    }, 3000);
    
    setTimeout(() => setShowAIInsight(true), 1500);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "TODAY'S JOBS", value: jobs, change: "+3 from yesterday", icon: Activity, color: "text-blue-600" },
    { label: "REVENUE (TODAY)", value: `$${revenue.toLocaleString()}`, change: "+15% vs last Monday", icon: TrendingUp, color: "text-green-600" },
    { label: "TECHS ACTIVE", value: "5 / 5", change: "All crews dispatched ✓", icon: Users, color: "text-purple-600" },
    { label: "AVG JOB TIME", value: "47m", change: "-8 min faster ↑", icon: Clock, color: "text-orange-600" }
  ];

  const jobsList = [
    { tech: "Joe Martinez", location: "456 Oak Ave", issue: "AC not cooling", status: "progress", eta: "8 min", color: "bg-yellow-100 text-yellow-800" },
    { tech: "Sarah Chen", location: "789 Maple St", issue: "Annual maintenance", status: "progress", eta: "On-site", color: "bg-yellow-100 text-yellow-800" },
    { tech: "Mike Johnson", location: "123 Pine Rd", issue: "Furnace inspection", status: "scheduled", eta: "2:30pm", color: "bg-blue-100 text-blue-800" },
    { tech: "Rob Taylor", location: "321 Elm Dr", issue: "Heat pump repair", status: "completed", eta: "$625", color: "bg-green-100 text-green-800" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-black">⚡ FLOW</div>
          <div className="flex items-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">
              👑 FOUNDING MEMBER #7
            </span>
            <span className="text-sm">Smith HVAC</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-black mb-2">Good Morning, Mike 👋</h1>
        <p className="text-gray-600 mb-8">Here's what's happening with your business today</p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                <stat.icon className="w-4 h-4" />
                {stat.label}
              </div>
              <div className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-green-600 font-semibold">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* AI Insight */}
        {showAIInsight && (
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl p-6 mb-8 animate-in fade-in">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-2">🤖 AI Insight - Opportunity Detected</h3>
                <p className="opacity-95">
                  <strong>8 customers due for maintenance this week.</strong> I've sent renewal reminders automatically. 
                  Expected revenue: <strong>$2,850</strong>. 3 already scheduling.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Chart */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h3 className="text-xl font-bold mb-6">Weekly Revenue Trend</h3>
          <div className="flex items-end gap-4 h-48">
            {[65, 78, 82, 91, 100, 45, 25].map((height, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div 
                  className={`w-full bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-lg transition-all hover:opacity-80 cursor-pointer ${idx > 4 ? 'opacity-50' : ''}`}
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-gray-600 mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Jobs */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Active Jobs (Live GPS)</h3>
            <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
              LIVE
            </div>
          </div>
          
          <div className="space-y-4">
            {jobsList.map((job, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50 transition-all cursor-pointer">
                <div>
                  <h4 className="font-bold">🚗 {job.tech} → {job.location}</h4>
                  <p className="text-sm text-gray-600 mt-1">{job.issue} • {job.eta}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-xs font-bold ${job.color}`}>
                  {job.status === 'progress' ? 'IN PROGRESS' : job.status === 'scheduled' ? 'SCHEDULED' : 'COMPLETED'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Badge */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-purple-100 text-purple-800 px-6 py-3 rounded-full text-sm font-bold">
            🎯 INTERACTIVE DEMO - Numbers update in real-time
          </div>
        </div>
      </div>
    </div>
  );
}
