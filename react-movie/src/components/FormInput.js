const FormInput = (props) => {
  const { inputType, label, forId, value, getFormInputValue } = props

  return (
    <label htmlFor={forId}>
      {label}
      <input type={inputType} id={forId} value={value} onChange={getFormInputValue} />
    </label>
  )
}

export default FormInput;
