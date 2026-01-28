import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Report Issue", path: "/report" },
    { label: "Announcements", path: "/announcements" },
    { label: "Lost & Found", path: "/lost-found" },
    { label: "Analytics", path: "/analytics" },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative transition ${
      isActive
        ? "text-white drop-shadow-[0_0_8px_#b026ff]"
        : "text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_#b026ff]"
    }`;

  return (
    <nav className="w-full bg-neutral-800 border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo → Home */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-semibold tracking-wide text-white hover:opacity-90 transition"
        >
          Smart<span className="text-neon">Hostel</span>
        </Link>

        {/* Search (Desktop) */}
        <div className="hidden lg:flex items-center bg-ashLight rounded-full px-4 py-2 border border-white/10 focus-within:border-neon focus-within:shadow-neon transition">
          <Search size={16} className="text-white/50 mr-2" />
          <input
            type="text"
            placeholder="Search issues, announcements..."
            className="bg-transparent outline-none text-sm text-white placeholder-white/50 w-full"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7 text-sm">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.label}
              <span className="absolute left-0 -bottom-1 w-full bg-neon scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
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

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-ashLight border-t border-white/10 px-6 py-4 space-y-4">

          {/* Search */}
          <div className="flex items-center bg-ash rounded-full px-4 py-2 border border-white/10 focus-within:border-neon focus-within:shadow-neon transition">
            <Search size={16} className="text-white/50 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white placeholder-white/50 w-full"
            />
          </div>

          {/* Links */}
          <ul className="space-y-3 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </ul>

          {/* Auth (Mobile) */}
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
