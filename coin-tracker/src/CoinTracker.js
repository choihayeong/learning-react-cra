import { useState } from "react";
import SelectBox from "./components/SelectBox";
import FormInput from "./components/FormInput";

const CoinTracker = (props) => {
  const { optionArr, maxOption = 10 } = props;

  const INITIAL_INDEX = optionArr[0].name;

  const [sltIndex, setSltIndex] = useState(INITIAL_INDEX);
  const getSelectValue = (ele) => {
    setSltIndex(ele.target.value);
  }

  // const [sltObject, setSltObject] = useState();


  const [usd, setUsd] = useState(0);
  const getUsdValue = (ele) => {
    setUsd(ele.target.value);
  }

  const [coin, setCoin] = useState(0);
  const getUSDtoCoin = (ele) => {
    setCoin();
  }

  return (
    <>
      <SelectBox value={sltIndex} onChange={getSelectValue}>
        {optionArr.slice(0, maxOption).map((item, index) => (
          <option 
            value={item.name} 
            key={index}
          >
            {item.name} ({item.symbol})
          </option>
        ))}
      </SelectBox>
      <hr />
      <div className="unit-converter">
        <h3>{sltIndex} to USD</h3>

        <FormInput 
          inputType={"number"}
          label={"USD"} 
          forId={"iptUSD"} 
          value={usd} 
          getFormInputValue={getUsdValue} 
        />

        <FormInput 
          inputType={"number"}
          label={sltIndex} 
          forId={"iptCoin"} 
          value={usd} 
        />
      </div>
    </>
  )
}

export default CoinTracker;
