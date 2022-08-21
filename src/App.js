import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Login from './pages/login';
import Contact from './pages/contact';
  
function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' exact element={<Login />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    </Router>
);
}
  
export default App;