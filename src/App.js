
import React from 'react'


import Navbar from './components/navebar/index'
import Home from './components/home';
import Work from './components/work';
import Socailmedia from "./components/Socailmedia/index";
import Profile from './components/profile';
import Porgak from './components/porgak/porgak';

function App() {
  return (
    <div className="App">
      
      <Home />
      <Work />
      <Porgak/>
      <Profile />
      <Socailmedia />
      
    
      
    </div>
  );
}

export default App;
