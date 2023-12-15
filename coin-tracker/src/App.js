import { useState, useEffect } from "react";
import './scss/App.scss';
import Skeleton from "./components/Skeleton";
import CoinTracker from "./CoinTracker";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [coinArr, setCoinArr] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setCoinArr(json);
        setLoading(false);
      })
  }, [])

  return (
    <div className="App">
      <div className="pad-inline">
        <header className="App__header">
          chanllenge #3 coin tracker 
        </header>
        <section>
          {
            loading ? 
              <Skeleton /> : <CoinTracker optionArr={coinArr} />
          }
        </section>
      </div>
    </div>
  );
}

export default App;
