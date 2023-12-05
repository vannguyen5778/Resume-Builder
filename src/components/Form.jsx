import GripDots from "./GripDots";
import PropTypes from "prop-types";

const Form = ({ title, children }) => {
  return (
    <div className="form">
      <GripDots />
      <h3 className="title">{title}</h3>
      <div className="items">{children}</div>
    </div>
  );
};

export default Form;

Form.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
