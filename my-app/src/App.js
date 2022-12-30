import { useState, useEffect } from 'react';
import Button from './components/Button';
import styles from './assets/scss/App.module.scss';

function Hello() {
  function byeFn() {
    console.log('bye :(');
  }
  function hiFn() {
    console.log('created :)');

    return byeFn; // cleanup Function
  }
  useEffect(hiFn, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);

  return (
    <div>
      {showing ? <Hello></Hello> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {/* <Button text={"Continue"} onClick={onClick} /> */}
    </div>
  );
}

export default App;
