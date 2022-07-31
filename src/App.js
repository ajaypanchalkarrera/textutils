// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode enable or not
  const [alert, setAlert] = useState(null);

  // Alert Function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  // function for toggleMode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#272669';
      showAlert('Dark Mode Has Been Enabled', 'Success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Has Been Enabled', 'Success');
    }
  }
  return (
    <>
      <Router>
        {/*importing from Navbar.js and we can change title by using props*/}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Us" />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </> 
  );
}

export default App;
