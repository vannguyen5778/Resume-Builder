import PropTypes from "prop-types";



const Input = ({
    type = "text",
    title,
    id,
    addonTag = null,
    placeholder,
    value,
    name,
    onInput,
  }) => {
    return (
      <div className="info-group">
        <span>
          <h3>{title}</h3>
          <p className="additional">{addonTag}</p>
        </span>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          name={name}
          onInput={onInput}
        />
      </div>
    );
  }
  
  export default Input;

  Input.propTypes = {
    title: PropTypes.string,
    addonTag: PropTypes.oneOf(['optional', 'recommended', null]),
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    onInput: PropTypes.func,
  };