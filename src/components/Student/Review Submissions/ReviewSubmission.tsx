import React, { useState } from "react";
import './ReviewSubmission.css'
import ReviewSubmissionCard from "./ReviewSubmissionCard";
const ReviewsSubmission: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
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