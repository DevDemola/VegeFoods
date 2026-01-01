import React, { useState } from "react";
import "./Header.css";
import { MdShoppingCart, MdMenu } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <h2 className="logo">VEGEFOODS</h2>

        <nav className={`navs ${open ? "open" : ""}`}>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="header-right">
          <div className="cart">
            <MdShoppingCart />
            <span>0</span>
          </div>

          <MdMenu
            className="menu-icon"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
