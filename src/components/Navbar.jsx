import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  
} from "framer-motion";

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
  })

  return (
    <motion.nav
      className={` background logo`}
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: .35, ease:"easeInOut"}}
    >
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>resume</li>
        <li>cover letter</li>
        <li>resume writing</li>
        <li>blog</li>
        <li>FAQ</li>
      </ul>
      <div className="registration">
        <button className="login">Log In</button>
        <button className="signup">Sign Up</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
