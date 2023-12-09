import PropTypes from 'prop-types';

function Textarea({
  title,
  name,
  addonTag = null,
  placeholder,
  value,
  cols,
  rows,
  onInput,
}) {
  return (
    <div className="info-group">
      <span>
        <h3>{title}</h3>
        <p className="additional">{addonTag}</p>
      </span>
      <textarea
        cols={cols}
        rows={rows}
        name={name}
        placeholder={placeholder}
        value={value}
        onInput={onInput}
      />
    </div>
  );
}

Textarea.propTypes = {
  title: PropTypes.string,
  addonTag: PropTypes.oneOf(['optional', 'recommended', null]),
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
  name: PropTypes.string,
  onInput: PropTypes.func,
};

export default Textarea;