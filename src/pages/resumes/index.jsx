import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareFromSquare,
  faPenToSquare,
  faPlus,
  faDownload,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

const Resumes = () => {
  return (
    <div className="resumes">
      <header>
        <h2>Resumes</h2>
        <button>
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
          Create New
        </button>
      </header>
      <main>
        <div className="resume-wrapper">
          <div className="preview-img"></div>
          <div className="text-block">
            <div>
              <h3 className="title">Untitled</h3>
              <div className="last-update">
                <p className="sm-text">Updated 18 November 12:51</p>
              </div>
            </div>

            <ul className="functionalities">
              <li>
                <FontAwesomeIcon className="func-i" icon={faPenToSquare} />
                Edit
              </li>
              <li>
                <FontAwesomeIcon className="func-i" icon={faShareFromSquare} />
                Share a link
              </li>
              <li>
                <FontAwesomeIcon className="func-i" icon={faDownload} />
                Download{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-wrapper">
          <div className="preview-img"></div>
          <div className="text-block">
            <div>
              <h3 className="title">Untitled</h3>
              <div className="last-update">
                <p className="sm-text">Updated 18 November 12:51</p>
              </div>
            </div>

            <ul className="functionalities">
              <li>
                <FontAwesomeIcon className="func-i" icon={faPenToSquare} />
                Edit
              </li>
              <li>
                <FontAwesomeIcon className="func-i" icon={faShareFromSquare} />
                Share a link
              </li>
              <li>
                <FontAwesomeIcon className="func-i" icon={faDownload} />
                Download{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-wrapper">
          <div className="preview-img"></div>
          <div className="text-block">
            <div>
              <h3 className="title">Untitled</h3>
              <div className="last-update">
                <p className="sm-text">Updated 18 November 12:51</p>
              </div>
            </div>

            <ul className="functionalities">
              <li>
                <FontAwesomeIcon className="func-i" icon={faPenToSquare} />
                Edit
              </li>
              <li>
                <FontAwesomeIcon className="func-i" icon={faShareFromSquare} />
                Share a link
              </li>
              <li>
                <FontAwesomeIcon className="func-i" icon={faDownload} />
                Download{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-wrapper">
          <div className="preview-img"></div>
          <div className="text-block">
            <div>
              <h3 className="title">Untitled</h3>
              <div className="last-update">
                <p className="sm-text">Updated 18 November 12:51</p>
              </div>
            </div>

            <ul className="functionalities">
              <li>
                <FontAwesomeIcon className="func-i" icon={faPenToSquare} />
                Edit
              </li>
              <li>
                <FontAwesomeIcon className="func-i" icon={faShareFromSquare} />
                Share a link
              </li>
              <li>
                <FontAwesomeIcon className="func-i" icon={faDownload} />
                Download{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-wrapper">
          <div className="preview-img"></div>
          <div className="text-block">
            <div>
              <h3 className="title">Untitled</h3>
              <div className="last-update">
                <p className="sm-text">Updated 18 November 12:51</p>
              </div>
            </div>

            <ul className="functionalities">
              <li>
                <FontAwesomeIcon className="func-i" icon={faPenToSquare} />
                Edit
              </li>
              <li>
                <FontAwesomeIcon className="func-i" icon={faShareFromSquare} />
                Share a link
              </li>
              <li>
                <FontAwesomeIcon className="func-i" icon={faDownload} />
                Download{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-wrapper new-resume">
          <div className="preview-img">
            <FontAwesomeIcon className="preview-i" icon={faCirclePlus} />
          </div>
          <div className="text-block">
            <div className="new top">
              <h3 className="title">New Resume</h3>
              <div className="last-update">
                <p className="sm-text">
                  Create a tailored resume for each job application. Double your
                  chances of getting hired!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resumes;
