import Navbar from "./components/Navbar";
import "./assets/styles/App.scss";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Resumes from "./pages/resumes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/resumes" element={<Resumes />}>
        </Route>
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
