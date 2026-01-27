import { FaUsers, FaTools, FaCheckCircle, FaClock } from "react-icons/fa";

const stats = [
  {
    title: "Total Issues",
    value: "128",
    icon: <FaTools />,
  },
  {
    title: "Open Issues",
    value: "42",
    icon: <FaClock />,
  },
  {
    title: "Resolved",
    value: "76",
    icon: <FaCheckCircle />,
  },
  {
    title: "Users",
    value: "320",
    icon: <FaUsers />,
  },
];

const recentIssues = [
  { id: 1, title: "Water leakage in Room 204", status: "Open" },
  { id: 2, title: "Wi-Fi not working", status: "In Progress" },
  { id: 3, title: "Fan not working", status: "Resolved" },
  { id: 4, title: "Light flickering", status: "Open" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 px-6 py-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-white mb-8">
        Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl p-6 flex items-center justify-between
                       border border-[#2a2a2a]
                       hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
                       transition duration-300"
          >
            <div>
              <p className="text-sm text-gray-400">{item.title}</p>
              <p className="text-2xl font-bold text-white mt-1">
                {item.value}
              </p>
            </div>
            <div className="text-3xl text-purple-400">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Issues Table */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
        <h2 className="text-xl font-semibold text-white mb-4">
          Recent Issues
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#2a2a2a]">
                <th className="py-3 text-gray-400 font-medium">ID</th>
                <th className="py-3 text-gray-400 font-medium">Title</th>
                <th className="py-3 text-gray-400 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentIssues.map((issue) => (
                <tr
                  key={issue.id}
                  className="border-b border-[#2a2a2a] hover:bg-[#222222] transition"
                >
                  <td className="py-3">{issue.id}</td>
                  <td className="py-3">{issue.title}</td>
                  <td
                    className={`py-3 font-medium ${
                      issue.status === "Resolved"
                        ? "text-green-400"
                        : issue.status === "In Progress"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {issue.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
