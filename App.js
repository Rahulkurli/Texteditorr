// import About from './About';
import Navbar from './Navbar'
import './style.css';
import Textform from './Textform';
import React, { useState } from 'react';
import Alert from './Alert';
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const ToggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled.", "success!");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success!");
    }
  }







  return (

    <>
      <Router>
        <Navbar title="TextEditer" mode={mode} ToggleMode={ToggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          
        <Routes>
        <Route path='/About' element={<About/>} />
        <Route path='/' element={<Textform showAlert={showAlert} heading="Enter your text" mode={mode} />} />
        
        </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;