import React from 'react'
import './App.css';
import List from './components/List/List'
import Offer from './components/Offer/Offer'
import Cart from './components/Cart/Cart'
import logo from './images/myntra-logo.png'
import Login from './components/Login/Login'

function App() {

  const [userData, setUserData] = React.useState(localStorage.getItem('user') || null)


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
          <Cart />
          <a className="logout-linkButton" onClick={handleLogout}>Logout</a>
        </div>
      </header>
        <div className="body-container">
          <List />
        </div></> : <Login changeUserData={changeUserData} />}

    </div>
  );
}

export default App;
