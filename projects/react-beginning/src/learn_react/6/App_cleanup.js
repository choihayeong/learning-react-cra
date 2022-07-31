import { useState, useEffect } from "react";

function Hello() {
	function destroyFunc() {
		console.log("bye :(")
	}
	function helloFunc() {
		console.log("created :)");

		return destroyFunc; /*cleanup function */
	}
	useEffect(helloFunc, []);

	return(
		<h1>Hello Stranger!</h1>
	);
}

function App() {
	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing(prev => !prev);

	return (
		<div>
			{showing ? <Hello /> : null}
			<button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
		</div>
	);
}

export default App;
