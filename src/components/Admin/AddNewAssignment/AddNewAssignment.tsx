import React, { useState } from "react";
import "./AddNewAssignment.css";
const AddNewAssignment: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleSubmit = () => {
    console.log("Uploading:", { title, description, file });
  };
  return (
    <div className="upload-assignments">
      <div className="inner-div">
        <h2>Add new Comet ☄️</h2>
        <input
          type="text"
          placeholder="Assignment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Assignment Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleSubmit}>Launch Comet ☄️</button>
      </div>
    </div>
  );
};
export default AddNewAssignment;