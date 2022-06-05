import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

	useEffect(() => {
		fetch('http://127.0.0.1:5000/getdata', { 
				'method': 'GET', 
				'headers': { 
					'Content-Type': 'application/json' 
				} 
			})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error))
		})
		
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App;
