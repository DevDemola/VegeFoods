import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-box">
          <h3>VEGEFOODS</h3>
          <p>
            Fresh, organic vegetables and fruits delivered straight from the
            farm to your doorstep. Eat healthy, live better.
          </p>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* Links */}
        <div className="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-box">
          <h4>Customer Care</h4>
          <ul>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h4>Contact Us</h4>
          <p>
            <MdLocationOn /> Farm Fresh Street, Green City
          </p>
          <p>
            <FaPhoneAlt /> +234 800 123 4567
          </p>
          <p>
            <MdEmail /> support@vegefoods.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} VEGEFOODS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
