import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AssignmentUpload from "./Assignment Upload/AssignmentUpload";
import ReviewSubmissions from "./Review Submissions/ReviewSubmission";
import CategoryPapers from "./Category Papers/CategoryPapers";
import ViewAllPapers from "./View All Papers/ViewAllPapers";
import SpaceCanvas from "../Canvas/AdminCanvas"; 
import DaylightCanvas from "../Canvas/DayLightCanvas"; 
import { ThemeContext, ThemeProvider } from "./Theme Context/ThemeContext";
import "./Student.css";
import PendingAssignmentCard from "./Pending Assignment/PendingAssignment";
const StudentPortal: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { isDarkMode, toggleTheme } = themeContext;
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <ThemeProvider>
      <Router>
        {isDarkMode ? <SpaceCanvas /> : <DaylightCanvas />}
        <div
          className={`student-portal ${
            isDarkMode ? "dark-mode" : "light-mode"
          }`}
        >
          <header className="portal-header">
            <h1>Alien's Portal 👽</h1>
            <button className="hamburger" onClick={toggleMenu}>
              &#9776;
            </button>
            <nav className={menuOpen ? "nav-open" : "nav-closed"}>
              <Link to="/upload" onClick={() => setMenuOpen(false)}>
                Upload Comets
              </Link>
              <Link to="/review" onClick={() => setMenuOpen(false)}>
                Review Submissions
              </Link>
              <Link to="/category" onClick={() => setMenuOpen(false)}>
                Category-wise Papers
              </Link>
              <Link to="/view-all" onClick={() => setMenuOpen(false)}>
                View All Papers
              </Link>
            </nav>
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? "🌞" : "🌝"}
            </button>
          </header>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search the galaxy of academics"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="button">🔍</button>
          </div>
          <h2 className="pending-heading">
            Pending comets assigned by the Guardians 🧑‍🚀
          </h2>
          <div className="pending-assignments">
            <PendingAssignmentCard
              title="Fork() examples"
              dueDate="2024-9-15"
              subject="Operating Systems"
              darkMode={isDarkMode}
            />
            <PendingAssignmentCard
              title="Class inheritance"
              dueDate="2024-9-15"
              subject="OOPS"
              darkMode={isDarkMode}
            />
            <PendingAssignmentCard
              title="Presentation"
              dueDate="2024-9-15"
              subject="FinTech"
              darkMode={isDarkMode}
            />
            <PendingAssignmentCard
              title="Mid sems"
              dueDate="2024-9-15"
              subject="All sbujects"
              darkMode={isDarkMode}
            />
          </div>
          <main>
            <Routes>
              <Route path="/upload" element={<AssignmentUpload />} />
              <Route path="/review" element={<ReviewSubmissions />} />
              <Route path="/category" element={<CategoryPapers />} />
              <Route path="/view-all" element={<ViewAllPapers />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default StudentPortal;
