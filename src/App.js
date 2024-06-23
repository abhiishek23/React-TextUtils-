import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import Alertss from './components/Alertss';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode enabled", "success");
      document.title = "Textutils-darkmode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode enabled", "success");
      document.title = "Textutils-Lightmode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" Mode={mode} toggleMode={toggleMode} />
        <Alertss alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textforms heading="Enter The Text To Analyse" Mode={mode} showalert={showalert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;