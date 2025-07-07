//import logo from './logo.svg';
import './App.css';
import logo from './assets/mypic.png'
import Navbar from './components/Navbar/Navbar';
import ProductCards from './components/ProjectsCards/ProjectCards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductCards />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
