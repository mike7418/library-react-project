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
    setCart([...cart, {...book, quantity: 1}])   
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      return item.id === book.id 
      ? {        
          ...item,
          quantity: +quantity,
        }
      : item
    }))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function itemsInCart() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }
  

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
    <div className="App">
          <Nav itemsInCart={itemsInCart()} />           
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
          <Footer />
    </div>
    </Router>
  )
}

export default App
