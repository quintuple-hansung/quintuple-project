import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Index from './components/Index';
import Intro from './components/Intro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import app from './components/firebase_config';
import Join from './components/Join';


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
