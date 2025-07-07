//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SkillsCards from './components/SkillsCards/SkillsCards';
import ProductCards from './components/ProjectsCards/ProjectCards';
import GitContribution from './components/GitContribution/GitContribution';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SkillsCards />
      <ProductCards />
      <GitContribution />
    </div>
  );
}

export default App;
