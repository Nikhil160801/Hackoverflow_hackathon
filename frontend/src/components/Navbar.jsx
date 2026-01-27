import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Dashboard",
    "Report Issue",
    "Announcements",
    "Lost & Found",
    "Analytics",
  ];

  return (
    <nav className="w-full bg-neutral-800 border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl sm:text-2xl font-semibold tracking-wide text-white">
          Smart<span className="text-neon">Hostel</span>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-ashLight rounded-full px-4 py-2 border border-white/10 focus-within:border-neon focus-within:shadow-neon transition">
          <Search size={16} className="text-white/50 mr-2" />
          <input
            type="text"
            placeholder="Search issues, announcements..."
            className="bg-transparent outline-none text-sm text-white placeholder-white/50 w-full"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-7 text-sm text-white/70">
          {navItems.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer transition hover:text-white hover:drop-shadow-[0_0_8px_#b026ff]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/signin"
            className="text-sm text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_#b026ff] transition"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="text-sm text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_#b026ff] transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/80 hover:text-white transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-ashLight border-t border-white/10 px-6 py-4 space-y-4">

          {/* Search (Mobile) */}
          <div className="flex items-center bg-ash rounded-full px-4 py-2 border border-white/10 focus-within:border-neon focus-within:shadow-neon transition">
            <Search size={16} className="text-white/50 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white placeholder-white/50 w-full"
            />
          </div>

          {/* Links */}
          <ul className="space-y-3 text-sm text-white/80">
            {navItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-white hover:drop-shadow-[0_0_8px_#b026ff] transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Auth Buttons (Mobile) */}
          <div className="flex gap-3 pt-2">
            <Link
              to="/signin"
              onClick={() => setOpen(false)}
              className="flex-1 text-center py-2 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-neon hover:shadow-neon transition"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="flex-1 text-center py-2 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-neon hover:shadow-neon transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
