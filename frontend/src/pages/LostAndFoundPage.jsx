import { useState } from "react";

const mockItems = [
  {
    id: 1,
    title: "Black Wallet",
    description: "Lost a black leather wallet near the mess hall.",
    location: "Mess Hall",
    date: "2026-01-20",
    status: "Lost",
  },
  {
    id: 2,
    title: "Room Key",
    description: "Found a room key outside Block C entrance.",
    location: "Block C",
    date: "2026-01-22",
    status: "Found",
  },
  {
    id: 3,
    title: "Blue Backpack",
    description: "Lost a blue backpack with books inside.",
    location: "Library",
    date: "2026-01-24",
    status: "Lost",
  },
];

const LostAndFound = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredItems = mockItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || item.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Lost & Found</h1>
            <p className="text-gray-400 mt-1">
              Report or find lost items within the hostel premises
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.6)] transition"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full sm:w-40 px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.6)] transition"
            >
              <option value="All">All</option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 shadow-lg hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <span
                  className={`text-xs px-3 py-1 rounded-full border $${
                    item.status === "Lost"
                      ? "bg-red-600/20 text-red-400 border-red-500/30"
                      : "bg-green-600/20 text-green-400 border-green-500/30"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-gray-400 mt-3">{item.description}</p>

              <div className="mt-4 text-sm text-gray-500 space-y-1">
                <div>📍 Location: {item.location}</div>
                <div>📅 Date: {item.date}</div>
              </div>

              <button className="mt-5 w-full py-2 rounded-full bg-purple-600/20 text-purple-400 border border-purple-500/30 hover:bg-purple-600/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition">
                {item.status === "Lost" ? "I Found This" : "Claim Item"}
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center text-gray-500 mt-16">
            No items found.
          </div>
        )}
      </div>
    </div>
  );
};

export default LostAndFound;
