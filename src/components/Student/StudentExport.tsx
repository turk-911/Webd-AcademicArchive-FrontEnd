import React from "react";
import StudentPortal from "./StudentPortal";
import { ThemeProvider } from "./Theme Context/ThemeContext";
const StudentExport: React.FC = () => {
    return (
        <ThemeProvider>
            <StudentPortal />
        </ThemeProvider>
    )
}
export default StudentExport;