import './Tools.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import TimeComparator from '../components/TimeComparator/TimeComparator';
// import Invoice from '../components/Tools/Invoice/Invoice';
import InvoiceApp from '../components/Tools/Invoice/InvoiceApp';

function Tools() {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <div className="content-wrapper">
        {/* <aside className="sidebar">
        
        </aside> */}
        <main className="main-content">
          <TimeComparator />
          {/* <Invoice /> */}
          <InvoiceApp />
        </main>  
      </div>
      <Footer />
    </div>
  );
}

export default Tools;