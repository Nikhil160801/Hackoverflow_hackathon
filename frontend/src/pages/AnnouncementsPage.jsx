import { useState } from "react";

const mockAnnouncements = [
  {
    id: 1,
    title: "Water Supply Interruption",
    description: "Water supply will be unavailable from 10 AM to 2 PM due to pipeline maintenance.",
    date: "2026-01-25",
    target: "All Hostels",
  },
  {
    id: 2,
    title: "Pest Control Drive",
    description: "Pest control will be conducted in Block B on Jan 28. Please keep your rooms closed.",
    date: "2026-01-28",
    target: "Block B",
  },
  {
    id: 3,
    title: "Electricity Downtime",
    description: "Electricity will be down from 1 PM to 3 PM for transformer maintenance.",
    date: "2026-01-30",
    target: "Hostel A",
  },
];

const Announcements = () => {
  const [search, setSearch] = useState("");

  const filtered = mockAnnouncements.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase()) ||
    a.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Announcements</h1>
            <p className="text-gray-400 mt-1">
              Stay updated with hostel and campus notices
            </p>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search announcements..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-72 px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.6)] transition"
          />
        </div>

        {/* Announcement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((a) => (
            <div
              key={a.id}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 shadow-lg hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-white">
                  {a.title}
                </h2>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 border border-purple-500/30">
                  {a.target}
                </span>
              </div>

              <p className="text-gray-400 mt-3">
                {a.description}
              </p>

              <div className="flex items-center justify-between mt-5 text-sm text-gray-500">
                <span>Posted on {a.date}</span>
                <span className="text-purple-400">View Details</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center text-gray-500 mt-16">
            No announcements found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcements;