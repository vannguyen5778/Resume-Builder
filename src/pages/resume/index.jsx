import Forms from "./forms";
import Display from "./display";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronLeft,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { saveResume } from "../../redux/resumeSlice";
import { useDispatch } from "react-redux";
import { captureImage } from "../../utils/downloadPDF";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useState } from "react";

function Resume() {
  const { id } = useParams();
  const { width } = useWindowDimensions();
  const [isPreviewed, setIsPreviewed] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleReturn = async () => {
    await captureImage("canva")
      .then((imageData) => {
        dispatch(saveResume([Number(id), imageData]));
      })
      .catch((err) => console.log(err));
    navigate("/resumes");
  };
  return (
    <div className="resume">
      {!isPreviewed && (
        <button className="return-back" onClick={() => handleReturn()}>
          <FontAwesomeIcon icon={faArrowLeft} className="return-i" />
          back
        </button>
      )}
      <Forms isPreviewedState={isPreviewed} />
      {width <= 1080 && (
        <button
          className={`preview-resume ${width <= 500 ? "shrinked" : ""}`}
          onClick={() => setIsPreviewed(true)}
        >
          {width > 500 && <span>Preview & Download</span>}
          <FontAwesomeIcon icon={faFile} />
        </button>
      )}
      <div className="display-wrapper">
        {isPreviewed && (
          <button
            className="return-back preview"
            onClick={() => setIsPreviewed(false)}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="return-i" />
            back to editor
          </button>
        )}
        <Display isPreviewedState={isPreviewed} />
      </div>
    </div>
  );
}

export default Resume;

// manage validation -react-hook-form
// account - not local storage DONE
// scroll/motive div changing scroll bar based on the osition of the page

// drag and drop feature DONE
// landing page /auth/
// fix download DONE
// add clear and load example DONE
//
