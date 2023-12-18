import { useState } from "react";
import logo from "../assets/images/logo.png";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Divide as Hamburger } from "hamburger-react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const location = useLocation();
  const { width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.nav
      className={`${location.pathname === "/resumes" ? "white" : ""} logo`}
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <Link to="/" onClick={() => {window.scrollTo(0, 0)}}>
        {" "}
        <img className="logo" src={logo} alt=""  />
      </Link>
      {location.pathname !== "/resumes" ? (
        <div className={`menu-wrapper ${isOpen ? "visible" : ""}`}>
          <ul>
            <HashLink to="#about-us" onClick={() => {setOpen(false)}}>
              <li>About us</li>
            </HashLink>
            <HashLink to="#getting-started" onClick={() => {setOpen(false)}}>
              <li>getting started</li>
            </HashLink>
            <HashLink to="#templates" onClick={() => {setOpen(false)}}>
              <li>Templates</li>
            </HashLink>
            <HashLink to="#reviews" onClick={() => {setOpen(false)}}>
              <li>Resumes</li>
            </HashLink>
            <HashLink to="#contact" onClick={() => {setOpen(false)}}>
              <li>Contact</li>
            </HashLink>
          </ul>
          <div className="registration">
            <button className="login">Log In</button>
            <button className="signup">Sign Up</button>
          </div>
         
        </div>
      ) : (
        <span className="user-circle">
          <FontAwesomeIcon icon={faUser} className="user-i" />
        </span>
      )}
       {width <= 1024 && location.pathname !== "/resumes" && (
            <Hamburger
            className="hamburder-icon"
              color="#338bff"
              easing="ease-in"
              size={24}
              duration={0.2}
              toggled={isOpen}
              toggle={setOpen}
            />
          )}
    </motion.nav>
  );
};

export default Navbar;
