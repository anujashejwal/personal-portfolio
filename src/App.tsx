import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Accounts from './Components/Accounts/Accounts';



export default function App(){
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/accounts' element={<Accounts/>}/>
        {/* <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/> */}
        
      </Routes>
    </Router>
   
    </>
  )
}

