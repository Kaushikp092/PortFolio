import { useState } from "react";
import "./Navbar.css"; // we'll add styles here
import Menu from "./Menu";

const Navbar = ({logo}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">{logo}</div>

      {/* Hamburger toggle */}
    <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />  

      {/* Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
