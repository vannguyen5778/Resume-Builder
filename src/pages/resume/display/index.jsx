import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Display = () => {
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
      <div className="canva"></div>
    </div>
  );
};

export default Display;
