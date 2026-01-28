import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/DashboardPage";
import ReportIssue from "./pages/ReportIssuePage";
import Announcements from "./pages/AnnouncementsPage";
import LostAndFound from "./pages/LostAndFoundPage";
import Analytics from "./pages/AnalyticsPage";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Navbar stays on all pages */}
      <Navbar />

      {/* Page routing */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/lost-found" element={<LostAndFound />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
