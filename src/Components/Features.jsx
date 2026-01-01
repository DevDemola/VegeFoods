import React from "react";
import {
  FaTruck,
  FaAppleAlt,
  FaAward,
  FaHeadset,
} from "react-icons/fa";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <div className="icon pink">
          <FaTruck />
        </div>
        <h4>FREE SHIPPING</h4>
        <p>ON ORDER OVER $100</p>
      </div>

      <div className="feature">
        <div className="icon gold">
          <FaAppleAlt />
        </div>
        <h4>ALWAYS FRESH</h4>
        <p>PRODUCT WELL PACKAGE</p>
      </div>

      <div className="feature">
        <div className="icon blue">
          <FaAward />
        </div>
        <h4>SUPERIOR QUALITY</h4>
        <p>QUALITY PRODUCTS</p>
      </div>

      <div className="feature">
        <div className="icon green">
          <FaHeadset />
        </div>
        <h4>SUPPORT</h4>
        <p>24/7 SUPPORT</p>
      </div>
    </section>
  );
};

export default Features;
