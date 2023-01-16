import Navbar from './components/Navbar'
import './App.css';
import About from './components/About';
import Textform from './components/Textform';
import React,{useState}from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  
  Route,
  Routes
  
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(msg,type)=>{
setAlert({
msg:msg,
type:type
})
setTimeout(() => {
  setAlert(null);
}, 1000);
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
showAlert("Light mode is enabled","success");
      
    }
    else{
      setMode('dark');
     
      document.body.style.backgroundColor='#05142a';
      showAlert("Dark mode is enabled","success");
    }
  }
  return (
   
    <>
     
     <Navbar title="TextUtil" aboutTextUtil="aboutextUtil" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container">
    <Textform heading="Enter text below" mode={mode} showAlert={showAlert}/>
    
          
       
          
    
        </div>
        </>
  );
}

export default App;
