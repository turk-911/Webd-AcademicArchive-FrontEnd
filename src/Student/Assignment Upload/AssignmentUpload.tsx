import React, { useState } from "react";
import "./AssignmentUpload.css";
interface Assignment {
  id: number;
  title: string;
  subject: string;
  fileName: string;
}
const AssignmentUpload: React.FC = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [recentUploads, setRecentUploads] = useState<Assignment[]>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && subject && file) {
      const newAssignment: Assignment = {
        id: recentUploads.length + 1,
        title,
        subject,
        fileName: file.name,
      };
      setRecentUploads([newAssignment, ...recentUploads]);
      setTitle("");
      setSubject("");
      setFile(null);
    }
  };

  return (
    <div className="assignment-upload-card">
      <h2>Upload Assignment</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="text"
          placeholder="Assignment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Subject Name"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
      <h3>Recent Uploads</h3>
      <ul className="recent-uploads">
        {recentUploads.map((upload) => (
          <li key={upload.id} className="upload-item">
            <strong>{upload.title}</strong> - {upload.subject} -{" "}
            {upload.fileName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AssignmentUpload;