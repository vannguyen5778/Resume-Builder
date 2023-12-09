import Forms from "./forms";
import Display from "./display";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div className="resume">
      <Link to="/resumes"><button className="return-back">
        <FontAwesomeIcon icon={faArrowLeft} className="return-i" />
        back
      </button>
      </Link>
      <Forms />
      <Display />
    </div>
  );
}

export default Resume;

// manage validation -react-hook-form
// account - not local storage
// scroll/motive div changing scroll bar based on the osition of the page

// drag and drop feature
// landing page /auth/
// fix download
// add clear and load example
//
