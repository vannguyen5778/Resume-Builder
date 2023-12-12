import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import styles from "./Display.module.scss";

const Display = () => {
  const forms = useSelector((state) => state.resumes.forms);

  const eduSnippet = (form) => {
    const { content, start, end, degree, description } = form;

    return (
      <>
        <div className={styles.flexbox}>
          <div className={styles.bold}>{content}</div>
          <div className={styles.time}>
            <span className={styles.start}>{start}</span>{" "}
            { start && start.length > 0 && <span>-</span>}{" "}
            <span className={styles.end}>{end}</span>
          </div>
        </div>
        <div className={styles.cursive}>{degree}</div>
        <ul className={styles.resumeUl}>
          <li className={styles.description}>{description}</li>
        </ul>
      </>
    );
  };
  const experienceSnippet = (form) => {
    const { content, position, start, end, location, description } = form;

    return (
      <>
        <div className={styles.flexbox}>
          <div className={styles.position}>
            <span className={styles.bold}>{position}</span>{" "}
                  { position && position.length > 0 && <span>at</span>}{" "}
            <span className={styles.bold}>{content}</span>
          </div>
          <div className={styles.time}>
            <span className={styles.start}>{start}</span>{" "}
            { start && start.length > 0 && <span>-</span>}{" "}
            <span className={styles.end}>{end}</span>
          </div>
        </div>
        <div className={styles.cursive}>{location}</div>
        <ul className={styles.resumeUl}>
          <li className={styles.description}>{description}</li>
        </ul>
      </>
    );
  };
  const projectsSnippet = (form) => {
    const { content, description, tech, start, end, link } = form;
    return (
      <>
        <div className={styles.flexbox}>
          <div className={styles.bold}>{content}</div>
          <div className={styles.time}>
            <span className={styles.start}>{start}</span>{" "}
            { start && start.length > 0 && <span>-</span>}{" "}
            <span className={styles.end}>{end}</span>
          </div>
        </div>
        <div className={styles.cursive}>
          { tech && tech.length > 0 && <span>Techologies used: </span>}
          {tech}
        </div>
        <ul className={styles.resumeUl}>
          <li className={styles.description}>{description}</li>
          <li className={styles.link}>
            { link && link.length > 0 && <span>Demo link: </span>} {link}
          </li>
        </ul>
      </>
    );
  };

  const skillsSnippet = (form) => {
    const { content } = form;
    return (
      <div className={styles.flexbox}>
        <div className={styles.description}>{content}</div>
      </div>
    );
  };
  const certificatesSnippet = (form) => {
    const { content, level } = form;
    return (
      <div className={styles.flexbox}>
        <div className={styles.section}>
          {content} { level && level.length > 0 && <span>-</span>}{" "}
          <span className={styles.level}>{level}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.topSection}>
        <div className={styles.toggle}>
          <button className={styles.clearResume}>
            <FontAwesomeIcon className={styles.clearIcon} icon={faTrashCan} />
            Clear Resume
          </button>
          <button className={styles.loadResume}>Load Example</button>
        </div>
        <button className={styles.button}>Download PDF</button>
      </div>
      <div className={styles.canva}>
        <div className={styles.resumeCtn} id="resumeCtn">
          {forms.map((form) => {
            const contentLowerCase = form.content.toLowerCase();
            const sectionClassName = `${contentLowerCase} section`;
            console.log("forms", forms);

            switch (form.content) {
              case "Experience":
                return (
                  <div key={form.id} className={sectionClassName}>
                    <h4 className={styles.section__header}>
                      {form.content.toUpperCase()}
                    </h4>
                    {form.subItems.map((subItem) => experienceSnippet(subItem))}
                  </div>
                );

              case "Education":
                return (
                  <div key={form.id} className={sectionClassName}>
                    <h4 className={styles.section__header}>
                      {form.content.toUpperCase()}
                    </h4>
                    {form.subItems.map((subItem) => eduSnippet(subItem))}
                  </div>
                );

              case "Projects":
                return (
                  <div key={form.id} className={sectionClassName}>
                    <h4>{form.content.toUpperCase()}</h4>
                    {form.subItems.map((subItem) => projectsSnippet(subItem))}
                  </div>
                );

              case "Skills":
                return (
                  <div key={form.id} className={sectionClassName}>
                    <h4>{form.content.toUpperCase()}</h4>
                    {form.subItems.map((subItem) => skillsSnippet(subItem))}
                  </div>
                );

              case "Certificates":
                return (
                  <div key={form.id} className={sectionClassName}>
                    <h4 className={styles.section__header}>
                      {form.content.toUpperCase()}
                    </h4>
                    {form.subItems.map((subItem) =>
                      certificatesSnippet(subItem)
                    )}
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Display;
