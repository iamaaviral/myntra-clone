import React from 'react'
import './App.css';
import List from './components/List/List'
import Offer from './components/Offer/Offer'
import Cart from './components/Cart/Cart'
import logo from './images/myntra-logo.png'
import Login from './components/Login/Login'
import { ThemeContext } from './themeContext'

function App() {

  const value = React.useContext(ThemeContext)
  const [userData, setUserData] = React.useState(localStorage.getItem('user') || null)


  function changeUserData(data) {
    setUserData(data)
  }

  let handleLogout = () => {
    localStorage.removeItem('user')
    setUserData(null)
  }

  return (
    <div className={`App ${value.theme}`}>
      {userData ? <><header>
        <img src={logo} alt="img" />
        <div className="right-header">
          <Offer />
          <Cart />
          <label class="switch">
            <input type="checkbox" onChange={value.toggleTheme} />
            <span class="slider round"></span>
          </label>
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
