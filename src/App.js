import './App.css';
import Login from './pages/Login';
import Intro from './pages/Intro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import app from './pages/firebase_config';
import Join from './pages/Join';


function App() {
  return (
    <body>
        <div className='container'>
        <Router>
          <Routes>
            <Route path="/" element={<Intro/>}/>
            {/*<Route path="/" element={<Index/>}/>*/}
            <Route path="/login" element={<Login/>}/>
            <Route path='/join' element={<Join/>}/>
            {/* Route path="/main", element={Main/>}/>*/}
          </Routes>
        </Router>
    </div>
    </body>
  );
}

export default App;
