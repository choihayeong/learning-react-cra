import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue(prev => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('I run all the time');
  useEffect(() => {
    console.log('CALL THE API....');
  }, []);
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('SEARCH FOR', keyword);
    }
  }, [keyword]); // keyword가 변화될때마다 console 실행
  useEffect(() => {
    console.log('I run when "counter" changes');
  }, [counter]); // counter가 변화될때마다 console 실행
  useEffect(() => {
    console.log('I run when "counter" and "keyword" change');
  }, [keyword, counter])

  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="SEARCH HERE...." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
