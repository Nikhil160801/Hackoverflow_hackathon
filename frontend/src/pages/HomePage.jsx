import { Link } from "react-router-dom";
import { Bell, ClipboardList, Search, BarChart3 } from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Report Issues Easily",
    desc: "Raise hostel-related issues like plumbing, electricity, or cleanliness in just a few clicks.",
  },
  {
    icon: Bell,
    title: "Instant Announcements",
    desc: "Stay updated with important hostel and campus announcements in real-time.",
  },
  {
    icon: Search,
    title: "Lost & Found",
    desc: "Report or search for lost items and help others recover their belongings.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Transparency",
    desc: "Track issue resolution time and hostel performance with clear analytics.",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-ash text-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Smart Solution for <br />
          <span className="text-neon drop-shadow-[0_0_20px_#b026ff]">
            Hostel Management
          </span>
        </h1>

        <p className="mt-6 text-white/70 max-w-2xl mx-auto text-lg">
          Report issues, track resolutions, stay informed, and improve hostel
          life — all from one powerful platform.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            to="/dashboard"
             className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-neon hover:shadow-neon transition"
          >
            Go to Dashboard
          </Link>

          <Link
            to="/report"
            className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-neon hover:shadow-neon transition"
          >
            Report an Issue
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-15 bg-ashLight border-t-2 border-white/10">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Why SmartHostel?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-ashLight border border-white/10 rounded-2xl p-6 text-center hover:border-neon hover:shadow-neon transition"
              >
                <Icon
                  size={32}
                  className="mx-auto mb-4 text-neon drop-shadow-[0_0_10px_#b026ff]"
                />
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-ashLight border-t-2 border-white/10 py-12 text-center">
        <h2 className="text-3xl font-semibold">
          Ready to improve hostel life?
        </h2>
        <p className="mt-4 text-white/70">
          Join SmartHostel and experience a smarter, faster, and transparent system.
        </p>

        <div className="mt-8">
          <Link
            to="/signup"
            className="px-8 py-3 rounded-full bg-neon text-black font-semibold hover:shadow-neon transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;