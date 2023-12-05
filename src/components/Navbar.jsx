import { useState } from "react";
import logo from "../assets/images/logo.png";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

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

  return (
    <motion.nav
      className={` background logo`}
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
     <Link to="/"> <img className="logo" src={logo} alt="" /></Link>
      <ul>
        <HashLink to="#about-us"><li>About us</li></HashLink>
        <HashLink to="#getting-started"><li>getting started</li></HashLink>
        <HashLink to="#templates"><li>Templates</li></HashLink>
        <HashLink to="#reviews"><li>Resumes</li></HashLink>
        <HashLink to="#contact"><li>Contact</li></HashLink>
      </ul>
      <div className="registration">
        <button className="login">Log In</button>
        <button className="signup">Sign Up</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
