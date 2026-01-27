import { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Sign Up Data:", form);
  };

  return (
    <div className="min-h-screen bg-ash flex items-center justify-center px-4 mx-4">
      <div className="w-full max-w-md bg-ashLight border border-white/10 rounded-2xl p-8 shadow-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white">
            Create your <span className="text-neon">SmartHostel</span> account
          </h1>
          <p className="text-sm text-white/60 mt-2">Sign up to get started</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm text-white/70 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full rounded-lg bg-ash border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-neon focus:shadow-neon transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-white/70 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full rounded-lg bg-ash border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-neon focus:shadow-neon transition"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm text-white/70 mb-1">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full rounded-lg bg-ash border border-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-neon focus:shadow-neon transition"
            >
              <option value="student">Student</option>
              <option value="management">Management</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-white/70 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full rounded-lg bg-ash border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-neon focus:shadow-neon transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-white/70 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full rounded-lg bg-ash border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-neon focus:shadow-neon transition"
            />
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-white/70">
            <input type="checkbox" required className="accent-neon mt-1" />
            I agree to the Terms & Conditions
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 rounded-full bg-neon text-black py-2.5 text-sm font-medium shadow-neon hover:scale-105 transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-white/50">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Social Sign Up (UI Only) */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 rounded-full border border-white/20 py-2.5 text-sm text-white/80 hover:border-neon hover:shadow-neon transition">
            Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 rounded-full border border-white/20 py-2.5 text-sm text-white/80 hover:border-neon hover:shadow-neon transition">
            Sign up with GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-white/60 mt-6">
          Already have an account?{" "}
          <span className="text-neon hover:underline cursor-pointer">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
