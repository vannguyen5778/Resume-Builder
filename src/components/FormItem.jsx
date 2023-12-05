import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from "prop-types";

const FormItem = ({ title }) => {
  return (
     <div className="item">
       <span className="item-name">{title}</span>
       <FontAwesomeIcon className="chevron" icon={faChevronDown} />
     </div>
     
  )
}

export default FormItem

FormItem.propTypes = {
    title: PropTypes.string.isRequired,
  };
  