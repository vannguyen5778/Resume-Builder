import Forms from "./forms";
import Display from "./display";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { saveResume } from "../../redux/resumeSlice";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

function Resume() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleReturn = () => {
    dispatch(saveResume(Number(id)));
    navigate("/resumes");
  };
  return (
    <div className="resume">
      <button className="return-back" onClick={() => handleReturn()}>
        {/* save capture img to img; update lastUpdate time to current time */}
        <FontAwesomeIcon icon={faArrowLeft} className="return-i" />
        back
      </button>

      <Forms />
      <Display />
    </div>
  );
}

export default Resume;

// manage validation -react-hook-form
// account - not local storage
// scroll/motive div changing scroll bar based on the osition of the page

// drag and drop feature DONE
// landing page /auth/
// fix download DONE
// add clear and load example DONE
//
