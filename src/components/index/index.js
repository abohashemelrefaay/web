import React, { Component } from 'react';

import About from     './../about'
import Home from     './../home'
import Socailmedia from    './../Socailmedia'
import Profile from   './../profile'
import Portfolio from './../portfolio'
import Footer from      './../footer'
import Work from      './../work'
import Contact from      './../contact'

class Index extends Component {
  
render(){
  return (
    <div className="App">
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <Socailmedia />
      <Contact />
      <Footer />
    
    </div>
  );
}
}

export default Index;