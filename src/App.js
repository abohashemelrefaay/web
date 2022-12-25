
import React from 'react'
import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom'

import Navbar from './components/navebar/index'
import Contact from './components/contact/index'
import Index from './components/index'


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Router>
        <Routes>
          <Route 
          exact path="/"
          element={<Index />}/>
          <Route 
          exact path="/contact" 
          element={<Contact />}/>
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
