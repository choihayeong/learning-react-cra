import PropTypes from "prop-types";
import "../scss/Input.module.scss";

function FormInput ({inputType = "text", value, inputChangeEvent}) {
  return (
    <input type={inputType} value={value} onChange={inputChangeEvent} />
  )
}

FormInput.propTypes = {
  inputType : PropTypes.string.isRequired,
  value : PropTypes.string || PropTypes.number || PropTypes.bool,
  inputChangeEvent : PropTypes.func,
}

export default FormInput;
