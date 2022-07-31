import { useState, useEffect } from "react";

function App() {
	const [counter, setValue] = useState(0);
	const onClick = () => setValue(prev => prev + 1);

	const [keyword, setKeyword] = useState("");
	const onChange = (event) => setKeyword(event.target.value);

	console.log('I run all the time');
	useEffect(() => {
		console.log('I run only once.');
	}, []);
	useEffect(() => {
		if (keyword !== '' && keyword.length >= 5) {
			console.log('I run when keyword changes.');
		} 
	}, [keyword]);
	useEffect(() => {
		console.log('I run when counter changes.');
	}, [counter]);
	useEffect(() => {
		console.log('I run when keyword & counter changes.');
	}, [keyword, counter]);

	return (
		<div>
			<input 
				type="text" 
				onChange={onChange} 
				value={keyword} 
				placeholder="Search here..." 
			/>
			<h1>Hello Stranger!</h1>
			<p>{counter}</p>
			<button onClick={onClick}>Click ME!</button>
		</div>
	);
}

export default App;
