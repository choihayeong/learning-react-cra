import styles from "../scss/Submit.module.scss";

function SubmitInput(props) {
  const { submitVal } = props;

  return (
    <input type="submit" value={submitVal} />
  )
}

export default SubmitInput;
