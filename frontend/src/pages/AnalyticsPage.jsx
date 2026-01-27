import { useState } from "react";

const stats = [
  { id: 1, label: "Total Issues", value: 128 },
  { id: 2, label: "Resolved", value: 92 },
  { id: 3, label: "Pending", value: 36 },
  { id: 4, label: "Avg. Resolution Time", value: "3.4 hrs" },
];

const categories = [
  { name: "Plumbing", count: 34 },
  { name: "Electrical", count: 29 },
  { name: "Cleaning", count: 41 },
  { name: "Internet", count: 18 },
  { name: "Furniture", count: 6 },
];

const hostels = [
  { name: "Hostel A", count: 46 },
  { name: "Hostel B", count: 31 },
  { name: "Hostel C", count: 51 },
];

const Analytics = () => {
  const [filter, setFilter] = useState("All Time");

  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
            <p className="text-gray-400 mt-1">
              Overview of hostel issue trends and performance
            </p>
          </div>

          {/* Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-48 px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.6)] transition"
          >
            <option>All Time</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((s) => (
            <div
              key={s.id}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 shadow-lg hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition"
            >
              <div className="text-sm text-gray-400">{s.label}</div>
              <div className="text-3xl font-bold text-white mt-2">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Category Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-5">
              Issues by Category
            </h2>
            <div className="space-y-4">
              {categories.map((c) => (
                <div key={c.name}>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>{c.name}</span>
                    <span>{c.count}</span>
                  </div>
                  <div className="w-full bg-[#111111] rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${(c.count / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hostel Distribution */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-5">
              Issues by Hostel
            </h2>
            <div className="space-y-4">
              {hostels.map((h) => (
                <div key={h.name}>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>{h.name}</span>
                    <span>{h.count}</span>
                  </div>
                  <div className="w-full bg-[#111111] rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${(h.count / 60) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 mt-12">
          Showing public issue data only
        </div>
      </div>
    </div>
  );
};

export default Analytics;