import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SkillsCards from './components/SkillsCards/SkillsCards';
import ProductCards from './components/ProjectsCards/ProjectCards';
import GitContribution from './components/GitContribution/GitContribution';
import Certificates from './components/Certificates/Certificates';
import Documents from './components/Documents/Documents';

function App() {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <aside className="sidebar">
        <Certificates />
        <Documents />
      </aside>
      <main className="main-content">
        <Hero />
        <SkillsCards />
        <ProductCards />
        <GitContribution />
      </main>
    </div>
  );
}

export default App;

