import React from 'react'
import './App.css';
import List from './components/List/List'
import Offer from './components/Offer/Offer'
import Cart from './components/Cart/Cart'
import logo from './images/myntra-logo.png'
import Login from './components/Login/Login'

function App() {

  const [cartValue, setcartValue] = React.useState([])
  const [userData, setUserData] = React.useState(localStorage.getItem('user') || null)

  let addToCart = (selectedProduct) => {
    setcartValue([...cartValue, selectedProduct])
  }

  function changeUserData(data) {
    setUserData(data)
  }

  let handleLogout = () => {
    localStorage.removeItem('user')
    setUserData(null)
  }

  return (
    <div className="App">
      {userData ? <><header>
        <img src={logo} alt="img" />
        <div className="right-header">
          <Offer />
          <Cart cartValue={cartValue} />
          <a className="logout-linkButton" onClick={handleLogout}>Logout</a>
        </div>
      </header>
        <div className="body-container">
          <List addToCart={addToCart} cartValue={cartValue} />
        </div></> : <Login changeUserData={changeUserData} />}

    </div>
  );
}

export default App;
