import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP SECTION */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold">
              Smart<span className="text-neon">Hostel</span>
            </h2>
            <p className="mt-4 text-sm text-white/60">
              A smart hostel issue tracking and management system built to
              improve transparency, response time, and student satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-neon transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-neon transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/report" className="hover:text-neon transition">
                  Report Issue
                </Link>
              </li>
              <li>
                <Link to="/announcements" className="hover:text-neon transition">
                  Announcements
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/lost-found" className="hover:text-neon transition">
                  Lost & Found
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="hover:text-neon transition">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/signin" className="hover:text-neon transition">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-neon transition">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Mail size={16} /> support@smarthostel.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} /> +91 98765 43210
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} /> India
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-white/10"></div>

        {/* BOTTOM SECTION */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} SmartHostel. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-white/60 hover:text-neon hover:drop-shadow-[0_0_10px_#b026ff] transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
