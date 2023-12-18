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
import {
  addResume,
  clearResumes,
  removeResume,
  setForms,
  updateResumeTitle,
} from "../../redux/resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { Tooltip } from "react-tooltip";
import { useEffect, useRef, useState } from "react";
import { generatePdf } from "../../utils/downloadPDF";
import useWindowDimensions from "../../hooks/useWindowDimensions";



 


const Resumes = () => {
  const [img, setImg] = useState(-1);
  const [idEdit, setIdEdit] = useState(null);

  const { width } = useWindowDimensions();
  const resumeTitleRef = useRef(null);

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

  const handleAddNewResume = async () => {
    getCurrentTime().then((res) => {
      dispatch(addResume(res));
      navigate(`/resume/${res}`);
    });
  };
  
  const inputRef = useRef();
  useEffect(() => {
    
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setImg(-1);
      } 
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setImg(-1);
        setIdEdit(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="resumes">
        <header>
          <h2>
            Resumes
            <FontAwesomeIcon
              icon={faTrashCan}
              className="clear-resumes-i"
              onClick={() => dispatch(clearResumes())}
            />
          </h2>
          {width > 650 && (
            <button onClick={() => handleAddNewResume()}>
              <FontAwesomeIcon icon={faPlus} className="plus-icon" />
              Create New
            </button>
          )}
        </header>
        <main>
          {width <= 650 && (
            <button id="createNew" onClick={() => handleAddNewResume()}>
              <FontAwesomeIcon icon={faPlus} className="plus-icon" />
              Create New
            </button>
          )}
          {[...new Set(resumes)].map((resume, index) => {
            return (
              <div key={resume.id} className="resume-wrapper">
                <div className="preview-img" key={resume.id}>
                  {resume.imgUrl && <img src={resume.imgUrl} alt="" />}
                </div>
                <div className="text-block" key={resume.id}>
                  <div className="top">
                    <div className="title-wrapper" ref={inputRef}>
                      {img == index ? (
                        <div className="input-wrapper">
                          <input
                            className="resumeTitle title"
                            ref={resumeTitleRef}
                            onInput={(e) => {
                              dispatch(
                                updateResumeTitle([resume.id, e.target.value])
                              );
                            }}
                            onFocus={(e) => e.target.select()}
                            value={resume.title}
                            placeholder={resume.title}
                            style={{                              
                              width: `${resume.title.length - 2}ch`,
                            }}
                          />
                        </div>
                      ) : (
                        <span
                          className="title"
                          onClick={() => handleEditResume(resume.id)}
                        >
                          {resume.title}{" "}
                        </span>
                      )}

                      <FontAwesomeIcon
                        className="pen-i"
                        data-tooltip-id="rename-tooltip"
                        data-tooltip-content="Rename"
                        icon={faPenToSquare}
                        onClick={() => {
                          setImg(index);
                          resumeTitleRef.current.focus();
                          resumeTitleRef.current.select();
                          setIdEdit(resume.id);
                        }}
                        style={{
                          display: img !== index ? "block" : "none",
                          paddingLeft: "10px"
                        }}
                      />

                      <Tooltip id="rename-tooltip" />
                    </div>

                    <div className="last-update">
                      <p className="sm-text">Updated {resume.lastUpdate}</p>
                    </div>
                  </div>

                  <ul className="functionalities">
                    <li onClick={() => handleEditResume(resume.id)}>
                      <FontAwesomeIcon
                        className="func-i"
                        icon={faPenToSquare}
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
                    <li
                      onClick={() => {
                        generatePdf(
                          resume.imgUrl,
                          `hiredResume_${resume.title}`
                        );
                      }}
                    >
                      <FontAwesomeIcon className="func-i" icon={faDownload} />
                      Download{" "}
                    </li>
                    <li onClick={() => dispatch(removeResume(resume))}>
                      <FontAwesomeIcon className="func-i" icon={faTrashCan} />
                      Delete{" "}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}

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
