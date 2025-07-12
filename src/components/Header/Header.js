import { useEffect, useState } from 'react';
import './Header.css';
import { FaBars } from "react-icons/fa6";

const header_components = [
  { id: 1, name: "Products", tag: "#products" },
  { id: 2, name: "Why Choose Us", tag: "#about" },
  { id: 3, name: "Testimonials", tag: "#testimonials" },
  { id: 4, name: "Contact", tag: "#contactus" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(true);  // scrolling up
    } else {
      setShowNavbar(false); // scrolling down
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const scrolltoTop=()=>{
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <>
      <div className={`header-cont ${showNavbar ? 'visible' : 'hidden'}`}>
        <img
        onClick={scrolltoTop}
          className="logo"
          src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752138234/Evergrowlogo_drbghr.png"
          alt="logo"
        />

        <ul className="h-ul">
          {header_components.map((each) => (
            <li className="h-li" key={each.id}>
              <a href={each.tag}>{each.name}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for mobile */}
        <FaBars className="bars" onClick={toggleSidebar} />
      </div>

      {/* Side Tab */}
      <div className={`side-tab ${isOpen ? 'open' : ''}`}>
        <ul>
          {header_components.map((each) => (
            <li key={each.id} onClick={toggleSidebar}>
              <a href={each.tag}>{each.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Header;
