import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Index from './components/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import app from './firebase_config';
import Join from './components/Join';

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/join' element={<Join/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
