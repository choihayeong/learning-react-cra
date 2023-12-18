import { useState } from "react";
import SelectBox from "./components/SelectBox";
import FormInput from "./components/FormInput";

const CoinTracker = (props) => {
  const { optionArr, maxOption = 10 } = props;

  const [sltIndex, setSltIndex] = useState(0);
  const getSelectValue = (ele) => {
    setSltIndex(ele.target.value);
  }

  const [usd, setUsd] = useState(0);
  const getUsdValue = (ele) => {
    setUsd(ele.target.value);
  }

  return (
    <>
      <SelectBox value={sltIndex} onChange={getSelectValue}>
        {optionArr.slice(0, maxOption).map((item, index) => (
          <option 
            value={index} 
            key={index}
          >
            {item.name} ({item.symbol})
          </option>
        ))}
      </SelectBox>

      <hr />

      <div className="unit-converter">
        <h3>{optionArr[sltIndex].name} to USD</h3>

        <FormInput 
          inputType={"number"}
          label={"USD"} 
          forId={"iptUSD"} 
          value={usd} 
          getFormInputValue={getUsdValue} 
        />

        <div>
          <h4>Result</h4>
          {usd / optionArr[sltIndex].quotes.USD.price} {optionArr[sltIndex].symbol}
        </div>
      </div>
    </>
  )
}

export default CoinTracker;
