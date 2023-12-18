import styles from "../scss/FormInput.module.scss";

function FormInput(props) {
  const {inputType, value, onChange, placeholder} = props;

  return (
    <input type={inputType} placeholder={placeholder} value={value} onChange={onChange} className={styles.ipt} />
  )
}

export default FormInput;
