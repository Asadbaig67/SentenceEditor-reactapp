import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
	const [Modetext, setModeText] = useState('Enable Dark Mode')
	const [ActualMode, setMode] = useState('light');
	// const [CustomTheme1, setCustomTheme1] = useState('#198754');
	// const [CustomTheme2, setCustomTheme2] = useState('#0d6efd');
	// const [CustomTheme3, setCustomTheme3] = useState('#6f42c1');
	const ToggleMode = () => {
		if (ActualMode === 'light') {
			setMode('dark');
			setModeText('Enable Light Mode');
			document.body.style.backgroundColor = 'black';
		}
		else {
			setMode('light');
			setModeText('Enable Dark Mode');
			document.body.style.backgroundColor = 'white';
		}
	}
	const GreenTheme = () => {
		if (ActualMode !== '#198754') {
			setMode('#198754');
			document.body.style.backgroundColor = '#adff2f';
		}
		else {
			setMode('light');
			setModeText('Enable Dark Mode');
			document.body.style.backgroundColor = 'white';
		}

	}
	const BlueTheme = () => {
		if (ActualMode !== '#0d6efd') {
			setMode('#0d6efd');
			document.body.style.backgroundColor = 'rgb(31, 31, 122)';
		}
		else {
			setMode('light');
			setModeText('Enable Dark Mode');
			document.body.style.backgroundColor = 'white';
		}

	}
	const PurpleTheme = () => {
		if (ActualMode !== '#6f42c1') {
			setMode('#6f42c1');
			document.body.style.backgroundColor = 'rgb(92, 22, 92)';
		}
		else {
			setMode('light');
			setModeText('Enable Dark Mode');
			document.body.style.backgroundColor = 'white';
		}

	}
	return (
		<>
			<Navbar brand="CodeGrepper" Home="Home" Links="Blog" purplemode={PurpleTheme} bluemode={BlueTheme} greenmode={GreenTheme} togglemode={ToggleMode} mode={{ Modetext, ActualMode }} />
			<Textarea mode={{ Modetext, ActualMode }} />
		</>
	);
}

export default App;
