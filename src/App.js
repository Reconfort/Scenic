import React, {useEffect} from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Company from './Pages/Company';
import OurWork from './Pages/Work';
import Services from './Pages/Services';
import Header from './Components/Header';

function App() {
  useEffect(() => {
    document.title = "Reconfort";
  },[])
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
          
        <Route path='/Services' element={<Services/>} exact/>
          
        <Route path='/Works' element={<OurWork/>} exact/>
          
        <Route path='/Company' element={<Company/>} exact/>
          
        
      </Routes>
    </Router>
  );
}

export default App;
