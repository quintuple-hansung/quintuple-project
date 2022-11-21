import Login from './pages/Login';
import Intro from './pages/Intro';
import Main from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import app from './components/firebase_config';
import Join from './pages/Join';
import MyPage from './pages/MyPage';
import Portfolio from './pages/Portfolio';
import { AppAppBar } from './pages/AppAppBar';
import SelectTemplate from './pages/SelectTemplate';
import Template1 from './pages/Template1';
import Template2 from './pages/temp2/Template2';


function App() {
	return (
		<>
			<div className="app_container">
				<Router>
					<Routes>
						<Route path="/" element={<Intro />} />
						<Route path="/login" element={<Login />} />
						<Route path="/join" element={<Join />} />
						<Route path="/main" element={<Main />} />
						<Route path='/mypage' element={<MyPage />}/>
						<Route path='/Portfolio' element={<Portfolio />}/>
						<Route path='/selectTemplate' element={<SelectTemplate/>}/>
						<Route path='/template1' element={<Template1/>}/>
						<Route path='/template2' element={<Template2/>}/>
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
