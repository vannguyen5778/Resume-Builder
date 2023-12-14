import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareFromSquare,
  faPenToSquare,
  faPlus,
  faDownload,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { addResume, setForms } from "../../redux/resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { Tooltip } from "react-tooltip";
import { convertUnixtoDate } from "../../utils/convertUnixToDate";
const Resumes = () => {
  const dispatch = useDispatch();
  const { resumes } = useSelector((state) => state.resumes);

  const handleEditResume = (resumeId) => {
    const resume = resumes.find((resume) => resume.id == resumeId);
    navigate(`/resume/${resume.id}`);
    dispatch(setForms(resume.data));
  };
  const navigate = useNavigate();

  let newID;
  const getCurrentTime = () => {
    newID = Date.now();
  };

  const handleAddNewResume = () => {
    getCurrentTime();
    dispatch(
      addResume({
        id: newID,
        imgUrl: "",
        lastUpdate: convertUnixtoDate(Date.now()),
      })
    );
    navigate(`/resume/${newID}`);
  };

  return (
    <>
      <Navbar />

      <div className="resumes">
        <header>
          <h2>Resumes</h2>

          <button onClick={() => handleAddNewResume()}>
            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
            Create New
          </button>
        </header>
        <main>
          {resumes.map((resume) => (
            <div key={new Date().getTime()} className="resume-wrapper">
              <div className="preview-img">
                {resume.imgUrl && (<img src={resume.imgUrl} alt="" />)}
              </div>
              <div className="text-block">
                <div className="top">
                  <div className="title-wrapper">
                    <span
                      className="title"
                      onClick={() => handleEditResume(resume.id)}
                    >
                      {resume.title || "Untitled"}{" "}
                    </span>

                    <FontAwesomeIcon
                      className="pen-i"
                      data-tooltip-id="rename-tooltip"
                      data-tooltip-content="Rename"
                      icon={faPenToSquare}
                    />

                    <Tooltip id="rename-tooltip" />
                  </div>
                  <div className="last-update">
                    <p className="sm-text">Updated {resume.lastUpdate}</p>
                  </div>
                </div>

                <ul className="functionalities">
                  <li>
                    <FontAwesomeIcon
                      className="func-i"
                      icon={faPenToSquare}
                      onClick={() => handleEditResume(resume.id)}
                    />
                    Edit
                  </li>

                  <li>
                    <FontAwesomeIcon
                      className="func-i"
                      icon={faShareFromSquare}
                    />
                    Share a link
                  </li>
                  <li>
                    <FontAwesomeIcon className="func-i" icon={faDownload} />
                    Download{" "}
                  </li>
                </ul>
              </div>
            </div>
          ))}

          <div className="resume-wrapper new-resume">
            <div className="preview-img">
              <FontAwesomeIcon
                className="preview-i"
                onClick={() => handleAddNewResume()}
                icon={faCirclePlus}
              />
            </div>
            <div className="text-block">
              <div className="new top">
                <h3 className="title">New Resume</h3>
                <div className="last-update">
                  <p className="sm-text">
                    Create a tailored resume for each job application. Double
                    your chances of getting hired!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Resumes;
