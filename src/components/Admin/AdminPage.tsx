import React, { useState } from "react";
import UploadAssignments from "./AddNewAssignment/AddNewAssignment"; 
import AssignmentReview from "./ReviewSubmissions/ReviewSubmissions"; 
import "./Admin.css";
import DaylightCanvas from "../Canvas/DayLightCanvas";
import AdminCanvas from "../Canvas/AdminCanvas"
const AdminPortal: React.FC = () => {
  const [light, setLight] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<"upload" | "review">("upload");
  const handleNavClick = (view: "upload" | "review") => {
    setCurrentView(view);
  };
  return (
    <div className="auth-wrapper">
      {light && <DaylightCanvas />}
      {!light && <AdminCanvas />}
      <div className={`admin-portal ${light ? "light" : "dark"}`}>
        <header className={`admin-header ${light ? "light" : "dark"}`}>
          <h1>Palace of Cosmic Guardians 🧑‍🚀</h1>
          <nav>
            <button className="toggle-btn" onClick={() => setLight(!light)}>
              {light && "🌝"}
              {!light && "☀️"}
            </button>
            <button onClick={() => handleNavClick("upload")}>
              Upload Comets
            </button>
            <button onClick={() => handleNavClick("review")}>
              Review Aliens
            </button>
          </nav>
        </header>
        <main className={`admin-content ${light ? "light" : "dark"}`}>
          {currentView === "upload" && <UploadAssignments />}
          {currentView === "review" && <AssignmentReview />}
        </main>
      </div>
    </div>
  );
};

export default AdminPortal;
