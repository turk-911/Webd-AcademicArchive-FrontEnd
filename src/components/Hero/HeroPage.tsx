import React from "react";
import SpaceCanvas from "../Canvas/SpaceCanvas";
import Header from "../Header/Header";
const HomePage: React.FC = () => {
  return (
    <div className="auth-wrapper">
      <SpaceCanvas />
      <Header />
      <div className="content">
        
      </div>
    </div>
  );
};
export default HomePage;