import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [sltIndex, setSltIndex] = useState('default');
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onSelect = (event) => {
    setSltIndex(event.target.value);
  }

  function BitCoinsToUSD(btc) {
    const [usd, setUsd] = useState(0);
    const onChange = (event) => {
      setUsd(event.target.value);
    }

    return (
      <div className='unit-converter__wrap'>
        <h2>BitCoins To USD</h2>

        <label htmlFor='usd'>USD: </label>
        <input 
          type='number' 
          id='usd' 
          value={usd} 
          onChange={onChange}
        />

        <label htmlFor='btc'>BTC</label>
        <input type='number' id='btc' value={usd / 16534} readOnly />
      </div>
    )
  }

  return (
    <div>
      <h1>The Coins! ({loading ? '' : `${coins.length}`})</h1>
      {loading ? (<strong>Loading....</strong>) : (
        <select value={sltIndex} onChange={onSelect}>
          <option value="default">Select the coin unit</option>
          {coins.map((item, index) => (
            <option value={item.name} key={item.id}>{item.name} ({item.symbol}) : {item.quotes.USD.price}</option>
          ))}
        </select>
      )}
      <hr />
      <div className='unit-converter'>
        {sltIndex === 'default' ? 'Select the coin Units' : null}
        {sltIndex === 'Bitcoin' ? <BitCoinsToUSD /> : null}
      </div>
    </div>
  );
}

export default App;
