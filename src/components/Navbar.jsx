import { Link } from "react-router-dom";
import logo from "../assets/Frame 11.png";
import "../sass/components/Navbar.scss";
import OrangeButton from "./OrangeButton";
import hamburger from "../assets/hamburger-2.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar">
      <div>
        <img src={logo} />
      </div>
      <ul className="links-container">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/">Services</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
        <li className="link">
          <Link to="/">Contact</Link>
        </li>
      </ul>
      <div className="buttons-container">
        <button className="login-btn">Login</button>
        <OrangeButton>Open Account</OrangeButton>
      </div>
      <div
        className="hamburger-icon"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <AiOutlineMenu
          color="#000"
          size={28}
          style={{ display: expanded ? "none" : "block" }}
        />
        <AiOutlineClose
          color="#000"
          size={28}
          style={{ display: expanded ? "block" : "none" }}
        />
      </div>

      {/* mobile menu */}
      <div className="mobile-menu" style={{ scale: expanded ? "100%" : 0 }}>
        <ul className="links-container">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/">Services</Link>
          </li>
          <li className="link">
            <Link to="/about">About</Link>
          </li>
          <li className="link">
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <div className="buttons-container">
          <button className="login-btn">Login</button>
          <OrangeButton>Open Account</OrangeButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
