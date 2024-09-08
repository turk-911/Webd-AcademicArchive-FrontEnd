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
import AdminPortal from "./components/Admin/AdminPage";
import StudentExport from "./components/Student/StudentExport";
import StudentPortal from "./components/Student/StudentPortal";
import { ThemeProvider } from "./components/Student/Theme Context/ThemeContext";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/student/*" element={
          <ThemeProvider>
            <StudentPortal />
          </ThemeProvider>
        } />
      </Routes>
    </Router>
  );
};

export default App;
