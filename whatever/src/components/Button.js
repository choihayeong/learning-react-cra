import PropTypes from "prop-types";
import styles from "../scss/Button.module.scss";

function Button (props) {
  const { buttonRef, text="Default", buttonClickEvent } = props

  return (
    <button ref={buttonRef} type="button" className={styles.button} onClick={buttonClickEvent}>{text}</button>
  )
}

Button.propTypes = {
  text : PropTypes.string.isRequired,
  buttonClickEvent : PropTypes.func,
}

export default Button
