import React from "react";
import "./Button.css";
const Button = ({ label, style }) => {
  return <div className="btn" style={style}>{label}
  </div>;
};

export default Button;
