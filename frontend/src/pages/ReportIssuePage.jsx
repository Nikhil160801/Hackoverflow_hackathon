import { useState } from "react";

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "Medium",
    room: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Issue Submitted:", formData);
    alert("Issue reported successfully!");
    setFormData({ title: "", description: "", category: "", priority: "Medium", room: "" });
  };

  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6">Report an Issue</h1>
        <p className="text-gray-400 mb-8">
          Fill in the details below to report a hostel-related issue.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Issue Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="e.g., Water leakage in Room 204"
              className="w-full px-4 py-3 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.6)] transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Describe the issue in detail..."
              className="w-full px-4 py-3 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.6)] transition"
            ></textarea>
          </div>

          {/* Category & Priority */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#111111] border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.6)] transition"
              >
                <option value="">Select category</option>
                <option value="Electrical">Electrical</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Internet">Internet</option>
                <option value="Furniture">Furniture</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#111111] border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.6)] transition"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
          </div>

          {/* Room Number */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Room Number</label>
            <input
              type="text"
              name="room"
              value={formData.room}
              onChange={handleChange}
              required
              placeholder="e.g., 204"
              className="w-full px-4 py-3 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.6)] transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition"
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;