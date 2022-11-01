import './App.css';
import Login from './pages/Login';
import Intro from './pages/Intro';
import Main from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import app from './components/firebase_config';
import Join from './pages/Join';

function App() {
	return (
		<div className="app_container">
			<Router>
				<Routes>
					<Route path="/" element={<Intro />} />
					{/*<Route path="/" element={<Index/>}/>*/}
					<Route path="/login" element={<Login />} />
					<Route path="/join" element={<Join />} />
					<Route path="/main" element={<Main />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
