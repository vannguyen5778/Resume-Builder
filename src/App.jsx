import "./assets/styles/App.scss";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Resumes from "./pages/resumes";
import Resume from "./pages/resume";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resumes" element={<Resumes />} />
        <Route path="/resume/:id" element={<Resume />} />
        
        
      </Routes>
    </div>
  );
}

export default App;

// cool animations: Framer motion, GPSD
// redux
// context api
// scss modules
// drag and drop - hello-pangea/dnd
// authentication
// validation: react form hooks
// data from backend
// react router
// CSS in JS

// pagination
// fetch data
// cart logic

// framer motion for cv to appear
// swiper progress bar multiple items single slider
// card falling animation
// cv carousel
// time bar auto shifting
// responsive design

// authentication
// resume feature
// download feature
// drag and drop
// reform styling


// 2 days left 
// implement styling and everything for dnd
// manage other states in context api 
//  manage storage in redux toolkit
// local storage redux persist
// responsive home page !!!
// login lgout validation react hook form


// 12/12/23 localStorage, resumesPage, responsive, loginsignup