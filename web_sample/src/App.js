import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Index from './components/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import app from './firebase_config';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
