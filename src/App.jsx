import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'  
import './App.css'
import Home from './Pages/Home'

function App() {

  return (
    <Router>
    <div className="App">
          <Nav />
          <Home />
          <Footer />
    </div>
    </Router>
  )
}

export default App
