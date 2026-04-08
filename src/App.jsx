import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'  
import './App.css'
import Home from './pages/Home'
import Books from './components/Books'
import { books } from './components/data'
import BookInfo from './pages/Bookinfo'
import Cart from './pages/Cart'

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book])   
  }

  function changeQuantity(book, quantity) {
    console.log(book, quantity);
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])
  return (
    <Router>
    <div className="App">
          <Nav />           
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart}/>} />
          <Route path="/cart" render={() => <Cart books={books} />} />
          <Footer />
    </div>
    </Router>
  )
}

export default App
