import Analytics from "./AnalyticsPage";
import Announcements from "./AnnouncementsPage";
import Dashboard from "./DashboardPage";
import LostAndFound from "./LostAndFoundPage";
import ReportIssue from "./ReportIssuePage";

const HomePage = () => {
  return (
    <div>
       <Dashboard/>
       <ReportIssue/>
       <Announcements/>
       <LostAndFound/>
       <Analytics/>
    </div>
  )
}

export default HomePage;