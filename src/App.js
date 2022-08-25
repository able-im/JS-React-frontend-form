import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/Login';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' exact element={<Login />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;