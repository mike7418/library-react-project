import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import Nav from './components/Nav'
import './App.css'
import Landing from './components/Landing'
import Highlights from './components/Highlights'
import Featured from './components/Featured'
import Discounted from './components/Discounted'
import Explore from './components/Explore'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
          <Nav />
          < Landing />
          <Highlights />
          <Featured />
          <Discounted />
          <Explore />
          <Footer />
    </div>
  )
}

export default App
