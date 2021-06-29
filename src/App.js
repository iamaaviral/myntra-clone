import './App.css';
import List from './components/List/List'
import Offer from './components/Offer/Offer'
import Cart from './components/Cart/Cart'
import logo from './images/myntra-logo.png'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="img" />
        <div className="right-header">
          <Offer />
          <Cart />
        </div>
      </header>
      <div className="body-container">
        <List />
      </div>
    </div>
  );
}

export default App;
