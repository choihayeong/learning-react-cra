const FormInput = (props) => {
  const { inputType, label, forId, value, maxValue, minValue, valueSteps, getFormInputValue } = props

  return (
    <div className="form-input">
      <label htmlFor={forId}>
        {label}
        <input 
          type={inputType} 
          id={forId} 
          value={value} 
          max={maxValue} 
          min={minValue} 
          step={valueSteps}
          onChange={getFormInputValue} 
        />
      </label>
      {value}
    </div>
  )
}

export default FormInput;
