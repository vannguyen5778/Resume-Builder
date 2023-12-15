import Forms from "./forms";
import Display from "./display";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { saveResume, setResumes } from "../../redux/resumeSlice";
import { useDispatch } from "react-redux";
import { captureImage } from "../../utils/downloadPDF";
import { useSelector } from "react-redux";

function Resume() {
  const { id } = useParams();
  const resumes = useSelector((state) => state.resumes.resumes);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleReturn = () => {
    dispatch(saveResume(Number(id)));
    captureImage("canva")
      .then((imageData) => {
        const index = resumes.findIndex((resume) => resume.id == id);
        if (index !== -1) {
          const updatedResume = {
            ...resumes[index],
            imgUrl: imageData,
          };

          const updatedResumes = [...resumes];
          updatedResumes[index] = updatedResume;
          dispatch(setResumes(updatedResumes));
          navigate("/resumes");
        }
      })
      .catch((err) => console.log(err));
    
  };
  return (
    <div className="resume">
      <button className="return-back" onClick={() => handleReturn()}>
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
// account - not local storage DONE
// scroll/motive div changing scroll bar based on the osition of the page

// drag and drop feature DONE
// landing page /auth/
// fix download DONE
// add clear and load example DONE
//
