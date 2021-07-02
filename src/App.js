import React from 'react'
import './App.css';
import List from './components/List/List'
import Offer from './components/Offer/Offer'
import Cart from './components/Cart/Cart'
import logo from './images/myntra-logo.png'
import Login from './components/Login/Login'

function App() {

  const [cartValue, setcartValue] = React.useState([])

  let addToCart = (selectedProduct) => {
    setcartValue([...cartValue, selectedProduct])
  }

  return (
    <div className="App">
      {/* <header>
        <img src={logo} alt="img" />
        <div className="right-header">
          <Offer />
          <Cart cartValue={cartValue} />
        </div>
      </header>
      <div className="body-container">
        <List addToCart={addToCart} cartValue={cartValue} />
      </div> */}
      <Login />
    </div>
  );
}

export default App;
