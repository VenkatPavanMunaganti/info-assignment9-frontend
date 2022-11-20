import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Conact';
import {Login} from "./Login/Login"
import JobsPanel from './JobsPanel/JobsPanel';

function App() {
  return (
    <div className='container'>
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/jobs" element={<JobsPanel/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
