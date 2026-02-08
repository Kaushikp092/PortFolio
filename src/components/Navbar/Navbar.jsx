import { useEffect, useState } from "react";
import "./Navbar.css"; // we'll add styles here
import Menu from "./Menu";

const Navbar = ({logo}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll",handleScroll);
  }, []);
  
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if(el){
      el.scrollIntoView({behavior: 'smooth'});
      setIsOpen(false);
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ""}`}>
      <div className="logo">{logo}</div>
 
      {/* Hamburger toggle */}
    <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />  

      {/* Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li onClick={() => scrollToSection('home')} >Home</li>
          <li onClick={() => scrollToSection('about')} >About</li>
          <li onClick={() => scrollToSection('project')} >Project</li>
          <li onClick={() => scrollToSection('contact')} >Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
