import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareFromSquare,
  faPenToSquare,
  faPlus,
  faDownload,
  faCirclePlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { addResume, clearResumes, removeResume, setForms } from "../../redux/resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { Tooltip } from "react-tooltip";
import { convertUnixtoDate } from "../../utils/convertUnixToDate";
import { useState } from "react";
import { generatePdf } from "../../utils/downloadPDF";

const Resumes = () => {
  const [img, setImg] = useState(-1);
  const [idEdit, setIdEdit] = useState(null);

  const dispatch = useDispatch();
  const { resumes } = useSelector((state) => state.resumes);
  const navigate = useNavigate();

  const handleEditResume = (resumeId) => {
    const resume = resumes.find((resume) => resume.id == resumeId);
    dispatch(setForms(resume.data));
    navigate(`/resume/${resumeId}`);
  };

  const getCurrentTime = () => {
    return new Promise((resolve) => {
      resolve(Date.now());
    });
  };

  const handleAddNewResume = () => {
    getCurrentTime().then((res) => {
      dispatch(
        addResume({
          id: res,
          imgUrl: "",
          lastUpdate: convertUnixtoDate(Date.now()),
        })
      );
      navigate(`/resume/${res}`);
    });
  };

  return (
    <>
      <Navbar />

      <div className="resumes">
        <header>
          <h2>Resumes

          <FontAwesomeIcon icon={faTrashCan} className="clear-resumes-i" onClick={() => dispatch(clearResumes())} />
          </h2>

          <button onClick={() => handleAddNewResume()}>

            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
            Create New
          </button>
        </header>
        <main>
          {resumes.map((resume, index) => (
            <div key={resume.id} className="resume-wrapper">
              <div className="preview-img" key={resume.id}>
                {resume.imgUrl && <img src={resume.imgUrl} alt="" />}
              </div>
              <div className="text-block" key={resume.id}>
                <div className="top">
                  <div className="title-wrapper">
                    {img == index ? (
                      <input
                        placeholder={resume.title}
                        onInput={(e) => (resume.title = e.target.value)}
                        value={resume.title}
                        style={{
                          display: idEdit == resume.id ? "block" : "none",
                        }}
                      />
                    ) : (
                      <span
                        className="title"
                        onClick={() => handleEditResume(resume.id)}
                      >
                        {resume.title || "Untitled"}{" "}
                      </span>
                    )}

                    <FontAwesomeIcon
                      className="pen-i"
                      data-tooltip-id="rename-tooltip"
                      data-tooltip-content="Rename"
                      icon={faPenToSquare}
                      onClick={() => {
                        setImg(index);
                        setIdEdit(resume.id);
                      }}
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
                    <FontAwesomeIcon
                      className="func-i"
                      icon={faDownload}
                      onClick={() => {
                        generatePdf(
                          resume.imgUrl,
                          `hiredResume_${resume.title}`
                        );
                      }}
                    />
                    Download{" "}
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="func-i"
                      icon={faTrashCan}
                      onClick={() => dispatch(removeResume(resume))}
                    />
                    Delete{" "}
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
