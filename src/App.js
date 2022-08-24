import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Login from './pages/login';
import Contact from './pages/contact';
import Read from './pages/read';

  
function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' exact element={<Login />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/read' element={<Read/>} />
    </Routes>
    </Router>
);
}
  
export default App;