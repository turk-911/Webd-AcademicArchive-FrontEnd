import React from "react";
import "./ReviewSubmission.css";
interface CheckedSubmissionCardProps {
  title: string;
  subject: string;
  submissionDate: string;
  isChecked: boolean;
  darkMode: boolean;
}
const ReviewSubmissionCard: React.FC<CheckedSubmissionCardProps> = ({
  title,
  subject,
  submissionDate,
  isChecked,
  darkMode,
}) => {
  return (
    <div>
      <div className={`checked-submission-card ${darkMode ? "dark": ""}`}>
      <h3 className={`${darkMode ? "dark-heading": "light-heading"}`}>{title}</h3>
      <p className={`${darkMode ? "dark-p": "light-p"}`}>
        <strong>Subject:</strong> {subject}
      </p>
      <p className={`${darkMode ? "dark-p": "light-p"}`}>
        <strong>Submission Date:</strong> {submissionDate}
      </p>
      <div className={`status ${isChecked ? "checked" : "unchecked"}`}>
        {isChecked ? "Checked ✔️" : "Unchecked ❌"}
      </div>
    </div>
    
    </div>
  );
};

export default ReviewSubmissionCard;
