import React, { useContext } from "react";
import './ReviewSubmission.css'
import { ThemeContext  } from "../Theme Context/ThemeContext";
import ReviewSubmissionCard from "./ReviewSubmissionCard";
const ReviewsSubmission: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { isDarkMode } = themeContext;
    return (
      <div className="top-div">
        <h2>Review submissions</h2>
        <div className="something">
          <ReviewSubmissionCard
            title="Assignment 1"
            subject="Operating Systems"
            submissionDate="2024-9-10"
            isChecked={true}
            darkMode={isDarkMode}
          />
          <ReviewSubmissionCard
            title="Assignment 2"
            subject="Operating Systems"
            submissionDate="2024-9-10"
            isChecked={true}
            darkMode={isDarkMode}
          />
          <ReviewSubmissionCard
            title="Assignment 3"
            subject="Operating Systems"
            submissionDate="2024-9-10"
            isChecked={false}
            darkMode={isDarkMode}
          />
        </div>
      </div>
    );
}
export default ReviewsSubmission;