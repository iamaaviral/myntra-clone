import './App.css';
import List from './components/List/List'
import logo from './images/myntra-logo.png'

function App() {
  return (
    <div className="App">
      <header><img src={logo} /></header>
      <div className="body-container">
        <List />
      </div>
    </div>
  );
}

export default App;
