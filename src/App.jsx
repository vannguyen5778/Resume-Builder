import "./assets/styles/App.scss";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Resumes = lazy(() => import("./pages/resumes"));
const Resume = lazy(() => import("./pages/resume"));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resumes" element={<Resumes />} />
          <Route path="/resume/:id" element={<Resume />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
