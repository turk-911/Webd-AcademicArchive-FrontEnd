import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SignupPage from "./components/Authentication/SignupPage";
import LoginPage from "./components/Authentication/LoginPage";
import "./App.css";
import HeroPage from "./components/Hero/HeroPage";
import AddNewAssignment from "./components/Admin/AddNewAssignment/AddNewAssignment";
import DaylightCanvas from "./components/Canvas/DayLightCanvas";
import ReviewSubmissions from "./components/Admin/ReviewSubmissions";
import AdminPortal from "./components/Admin/AdminPage";
import SpaceCanvas from "./components/Canvas/SpaceCanvas";
const App: React.FC = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HeroPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/signup" element={<SignupPage />} />
    //   </Routes>
    // </Router>

      // <SpaceCanvas />
      <AdminPortal />
    
    // <DaylightCanvas />
  );
};

export default App;
