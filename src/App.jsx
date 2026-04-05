import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'  
import './App.css'
import Home from './Pages/Home'
import Books from './components/Books'
import { books } from './components/data'
import BookInfo from './Pages/Bookinfo'

function App() {

  return (
    <Router>
    <div className="App">
          <Nav />           
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/books/i" render={() => <BookInfo books={books} />} />
          <Footer />
    </div>
    </Router>
  )
}

export default App
