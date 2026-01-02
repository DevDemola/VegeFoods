import React from "react";
import "./Hero.css";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero">
      {/* Farm to Table Ribbon */}
      <div className="farm-ribbon">🧺 Farm to Table</div>

      {/* Organic Badge */}
      <div className="organic-badge">🌿 100% Organic</div>

      {/* Content */}
      <h1>100% FRESH & ORGANIC FOODS</h1>
      <p>We deliver farm-fresh vegetables straight to your kitchen.</p>

      <Button label="View Details" />
    </div>
  );
};

export default Hero;
