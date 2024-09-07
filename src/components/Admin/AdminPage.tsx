import React, { useState } from "react";
import UploadAssignments from "./AddNewAssignment/AddNewAssignment"; // Component for uploading assignments
import AssignmentReview from "./ReviewSubmissions/ReviewSubmissions"; // Component for reviewing assignments
import "./Admin.css";

const AdminPortal: React.FC = () => {
  const [currentView, setCurrentView] = useState<"upload" | "review">("upload");

  const handleNavClick = (view: "upload" | "review") => {
    setCurrentView(view);
  };

  return (
    <div className="admin-portal">
      <header className="admin-header">
        <h1>Palace of Cosmic Guardians 🧑‍🚀</h1>
        <nav>
          <button onClick={() => handleNavClick("upload")}>
            Upload Assignments
          </button>
          <button onClick={() => handleNavClick("review")}>
            Review Assignments
          </button>
        </nav>
      </header>
      <main className="admin-content">
        {currentView === "upload" && <UploadAssignments />}
        {currentView === "review" && <AssignmentReview />}
      </main>
    </div>
  );
};

export default AdminPortal;
