import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Display = () => {
  const eduSnippet = (form) => {
    const { content, start, end, degree, description } = form;
    return (
      <>
        <div className="flexbox">
          <div className="bold school">{content}</div>
          <div className="time">
            <span className="start">{start}</span> -
            <span className="end">{end}</span>
          </div>
        </div>
        <div className="cursive degree">{degree}</div>
        <ul className="resume-ul">
          <li className="description">{description}</li>
        </ul>
      </>
    );
  };
  const experienceSnippet = (form) => {
    const { content, position, start, end, location, description } = form;

    return (
      <>
        <div className="flexbox">
          <div className="position">
            <span className="bold">{position}</span> at{" "}
            <span className="bold">{content}</span>
          </div>
          <div className="time">
            <span className="start">{start}</span> -
            <span className="end">{end}</span>
          </div>
        </div>
        <div className="cursive degree">{location}</div>
        <ul className="resume-ul">
          <li className="description">{description}</li>
        </ul>
      </>
    );
  };
  const projectsSnippet = (form) => {
    const { project, description, tech, start, end, link } = form;
    return (
      <>
        <div className="flexbox">
          <div className="bold project">{project}</div>
          <div className="time">
            <span className="start">{start}</span> -
            <span className="end">{end}</span>
          </div>
        </div>
        <div className="cursive technologies">
          <span>Techologies used: </span>
          {tech}
        </div>
        <ul className="resume-ul ">
          <li className="description">{description}</li>
          <li className="link">
            <span>Demo link: </span> {link}
          </li>
        </ul>
      </>
    );
  };

  const skillsSnippet = (form) => {
    const { content } = form;
    return (
      <div className="flexbox">
      <div className="bold skills description">{content}</div>
    </div>
    )
  }
  const certificatesSnippet = (form) => {
    const { certificate, level } = form;
    return (
      <div className="flexbox">
                  <div className="certificates section">
                    {certificate} - <span className="level">{level}</span>
                  </div>
                </div>
    )
  }


  return (
    <div className="display">
      <div className="top-section">
        <div className="toggle">
          <button className="clear-resume">
            <FontAwesomeIcon className="clear-i" icon={faTrashCan} />
            Clear Resume
          </button>
          <button className="load-resume">Load Example</button>
        </div>
        <button className="button">Download PDF</button>
      </div>
      <div className="canva">

      <div className="resume-ctn" id="resumeCtn">
            {/* <header>
              <h1 className="full-name" id="fullName">
                {formValues.personalInfo.fullName}
              </h1>
              <div className="header-section">
                <p className="email">{formValues.personalInfo.email}</p>
                <p className="phone-number">{formValues.personalInfo.phone}</p>
                <p className="address">{formValues.personalInfo.address}</p>
              </div>
            </header> */}

            <div className="education section">
              <h4>EDUCATION</h4>
              {/* {formData.education.map((form) => eduSnippet(form))} */}
              
            </div>

            <div className="experience section">
              <h4>EXPERIENCE</h4>
              {/* {formData.experience.map((form) => experienceSnippet(form))} */}

             
            </div>

            <div className="projects section">
              <h4>PROJECTS</h4>
              {/* {formData.projects.map((form) => projectsSnippet(form))} */}
              
            </div>

            <div className="skills section">
              <h4>SKILLS</h4>
              {/* {formData.skills.map((form) => skillsSnippet(form))} */}

            <div className="certificates section">
              <h4>CERTIFICATES</h4>
              {/* {formData.certificates.map((form) => certificatesSnippet(form))} */}

              
            </div>

          </div>
          
      </div>
    </div>
    </div>
  );
};

export default Display;
