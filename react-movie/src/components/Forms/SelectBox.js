import styles from "@/scss/SelectBox.module.scss";

const SelectBox = (props) => {
  const { value, onChange, children } = props;

  return (
    <select value={value} onChange={onChange} className={styles.slt_box}>
      {children}
    </select>
  )
}

export default SelectBox;
