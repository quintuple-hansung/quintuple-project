import Login from './pages/Login';
import Intro from './pages/Intro';
import Main from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import app from './components/firebase_config';
import Join from './pages/Join';
import MyPage from './pages/MyPage';
import PortFolio from './pages/PortFolio';
import { AppAppBar } from './pages/AppAppBar';
import SelectTemplate from './pages/SelectTemplate';
import Template1 from './pages/temp1/Template1';
import Template2 from './pages/temp2/Template2';
import PortfolidView from './components/main/PortfolioView';
import PostView from './components/main/PostView';

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
						<Route path="/mypage" element={<MyPage />} />
						<Route path="/PortFolio" element={<PortFolio />} />
						<Route path="/selectTemplate" element={<SelectTemplate />} />
						<Route path="/template1" element={<Template1 />} />
						<Route path="/template2" element={<Template2 />} />
						<Route path="portfolioView/:email" element={<PortfolidView />} />
						<Route path="/postview/:postid" element={<PostView />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
