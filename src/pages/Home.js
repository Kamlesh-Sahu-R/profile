import './Home.css';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import SkillsCards from '../components/SkillsCards/SkillsCards';
import ProductCards from '../components/ProjectsCards/ProjectCards';
import GitContribution from '../components/GitContribution/GitContribution';
import Certificates from '../components/Certificates/Certificates';
import Documents from '../components/Documents/Documents';
import Footer from '../components/Footer/Footer';
//import TimeComparator from './components/TimeComparator/TimeComparator';

function Home() {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <div className="content-wrapper">
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
      {/* <TimeComparator /> */}
      <Footer />
    </div>
  );
}

export default Home;

