import { useState } from 'react';
import './App.css'

function App() {
	const [number, setNumber] = useState('')

	function changeDisplay(e){
		const newNum = e.target.textContent
		setNumber(n => n + newNum)
		
		
	} 

	return (
		<>
			<div className="calculator">
				<div className="display" id="display">
					{number === '' ? 0: number}
				</div>
				<div className="buttons">
					<button onClick={changeDisplay}>7</button>
					<button onClick={changeDisplay}>8</button>
					<button onClick={changeDisplay}>9</button>

					<button className="operator">/</button>

					<button onClick={changeDisplay}>4</button>
					<button onClick={changeDisplay}>5</button>
					<button onClick={changeDisplay}>6</button>
					<button className="operator">*</button>
					<button onClick={changeDisplay}>1</button>
					<button onClick={changeDisplay}>2</button>
					<button onClick={changeDisplay}>3</button>

					<button className="operator">-</button>

					<button onClick={changeDisplay}>0</button>
					<button onClick={changeDisplay}>.</button>
					<button className="operator">=</button>
					<button className="operator">+</button>
				</div>
			</div>
		</>
	);
}

export default App;
