import './Tools.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import TimeComparator from '../components/TimeComparator/TimeComparator';

function Tools() {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <div className="content-wrapper">
        <aside className="sidebar">
        
        </aside>
        <main className="main-content">
            <TimeComparator />
        </main>  
      </div>
      <Footer />
    </div>
  );
}

export default Tools;