import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-ash text-white">
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<div className="p-10">Home Page</div>} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <HomePage/>
    </div>
  );
}

export default App;
