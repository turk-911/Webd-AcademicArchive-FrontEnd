import React from "react";
import { Link } from "react-router-dom";
import SpaceCanvas from "../Canvas/SpaceCanvas";
import "./Auth.css";

const LoginPage: React.FC = () => {
  return (
    <div className="auth-wrapper">
      <SpaceCanvas />
      <div className="auth-container">
        <div className="auth-box">
          <h1 className="auth-title">Login</h1>
          <form>
            <div className="input-container">
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="auth-button">
              Login 🚀
            </button>
          </form>
          <div className="signup-link">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
