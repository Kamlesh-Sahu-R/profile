//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProductCards from './components/ProjectsCards/ProjectCards';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProductCards />
    </div>
  );
}

export default App;
