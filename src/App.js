import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Work from './routes/Work.js';
import About from './routes/About.js';
import Contact from './routes/Contact.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={< Work />} />
          <Route path='/about' element={< About />} />
          <Route path='/contact' element={< Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
