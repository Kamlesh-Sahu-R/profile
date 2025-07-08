// //import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// import SkillsCards from './components/SkillsCards/SkillsCards';
// import ProductCards from './components/ProjectsCards/ProjectCards';
// import GitContribution from './components/GitContribution/GitContribution';


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <SkillsCards />
//       <ProductCards />
//       <GitContribution />
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SkillsCards from './components/SkillsCards/SkillsCards';
import ProductCards from './components/ProjectsCards/ProjectCards';
import GitContribution from './components/GitContribution/GitContribution';
import Certificates from './components/Certificates/Certificates';

function App() {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <aside className="sidebar">
        <Certificates />
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

