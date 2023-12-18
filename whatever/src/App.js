import { useState, useEffect, useRef } from 'react';
import './scss/App.scss';
import Button from "./components/Button";
import FormInput from "./components/FormInput";
import SubscriptionArea from './components/SubscriptionArea';

function App() {
  const buttonRef = useRef();

  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [subscription, setSubscription] = useState(false);

  const increment = () =>
    setCount(count => count + 1);
  const getKeyword = (ele) => 
    setKeyword(ele.target.value);
  const setSubscriptionStatus = () =>
    setSubscription(status => !status);

  let BUTTON_NAME = `AppButton ${count}`;

  useEffect(() => {
    buttonRef.current.innerText = BUTTON_NAME;
  }, [count]);

  useEffect(() => {
    if (keyword.length !== 0) {
      buttonRef.current.innerText = keyword;
    }
  }, [keyword]);

  return (
    <div className="App">
      {subscription ? <SubscriptionArea /> : null}
      <Button 
        text={subscription ? "I want to unsubscribe :(" : "I want to subscribe 😍"} 
        buttonClickEvent={setSubscriptionStatus} 
      />

      <Button 
        buttonRef={buttonRef} 
        text={BUTTON_NAME} 
        buttonClickEvent={increment} 
      />
      <FormInput 
        inputType="text" 
        value={keyword} 
        inputChangeEvent={getKeyword} 
      />
    </div>
  );
}

export default App;
