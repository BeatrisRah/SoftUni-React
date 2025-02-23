import { useState } from 'react';
import './App.css'

function App() {
	const [number, setNumber] = useState('0')

	function changeDisplay(e){
		const newNum = e.target.textContent
		
		if (newNum === "." && number.includes(".")) return;

		if(number == 0){
			setNumber(newNum)
		} else {
			setNumber(n => n + newNum)
		}
	} 

	function clearDisplay(){
		setNumber(0)
	}


	function calculate(e){
		setNumber(num => eval(num))
		
	}
	return (
		<>
			<div className="calculator">
				<div className="display" id="display">
					{number}
				</div>
				<div className="buttons">
					<button onClick={changeDisplay}>7</button>
					<button onClick={changeDisplay}>8</button>
					<button onClick={changeDisplay}>9</button>

					<button className="operator" onClick={clearDisplay}>C</button>

					<button onClick={changeDisplay}>4</button>
					<button onClick={changeDisplay}>5</button>
					<button onClick={changeDisplay}>6</button>
					<button className="operator" onClick={changeDisplay}>*</button>
					<button onClick={changeDisplay}>1</button>
					<button onClick={changeDisplay}>2</button>
					<button onClick={changeDisplay}>3</button>

					<button className="operator" onClick={changeDisplay}>-</button>

					<button onClick={changeDisplay}>0</button>
					<button onClick={changeDisplay}>.</button>
					<button className="operator" onClick={calculate}>=</button>
					<button className="operator" onClick={changeDisplay}>+</button>
				</div>
			</div>
		</>
	);
}

export default App;
