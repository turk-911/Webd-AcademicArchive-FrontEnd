import React from "react";
import './Features.css';

const Features: React.FC = () => {
    return (
      <div className="features-section">
        {featuresData.map((feature, index) => (
          <div
            key={feature.id}
            className={`feature-item ${index % 2 == 0 ? "left" : "right"}`}
          >
            <div className="feature-description">
              <h3>{feature.heading} ☄️</h3>
              <p>{feature.text}</p>
            </div>
            <img
              src={feature.image}
              alt={feature.heading}
              className="feature-image"
            />
          </div>
        ))}
      </div>
    );
}
export default Features;