import Index from './pages/Index';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduce1 from './pages/Index';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Introduce1 />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
