import { useState } from "react";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", form);
  };

  return (
    <div className="min-h-screen bg-ash flex items-center justify-center px-4 my-4">
      <div className="w-full max-w-md bg-ashLight border border-white/10 rounded-2xl p-8 shadow-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white">
            Welcome back to <span className="text-neon">SmartHostel</span>
          </h1>
          <p className="text-sm text-white/60 mt-2">Sign in to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
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

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-white/70">
              <input type="checkbox" className="accent-neon" />
              Remember me
            </label>
            <button
              type="button"
              className="text-neon hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 rounded-full bg-neon text-black py-2.5 text-sm font-medium shadow-neon hover:scale-105 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-white/50">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Social Login (Optional UI) */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 rounded-full border border-white/20 py-2.5 text-sm text-white/80 hover:border-neon hover:shadow-neon transition">
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 rounded-full border border-white/20 py-2.5 text-sm text-white/80 hover:border-neon hover:shadow-neon transition">
            Continue with GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-white/60 mt-6">
          Don’t have an account?{" "}
          <span className="text-neon hover:underline cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
