import './Tools.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import TimeComparator from '../components/Tools/TimeComparator/TimeComparator';
import GSTInvoiceApp from '../components/Tools/Invoice/InvoiceGen/GSTInvoiceApp';
import InvoiceApp from '../components/Tools/Invoice/InvoiceGen/InvoiceApp';
import HabitTracker from '../components/Tools/HabitTracker/HabitTracker';

function Tools() {
  const tools = [
    {
      name: 'Time Comparator',
      component: <TimeComparator />,
      path: '/tools/time-comparator',
    },
    {
      name: 'Invoice Generator with GST',
      component: <GSTInvoiceApp />,
      path: '/tools/gst-invoice',
    },
    {
      name: 'Invoice Generator',
      component: <InvoiceApp />,
      path: '/tools/invoice',
    },
    {
      name: 'Habit Tracker',
      component: <HabitTracker />,
      path: '/tools/habit-tracker',
    },
  ];

  const handleToolClick = (path) => {
    window.open(path, '_blank'); // open full tool in new tab
  };

  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <div className="content-wrapper">
        <main className="main-content">
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="tool-card"
                onClick={() => handleToolClick(tool.path)}
              >
                <h2 className="tool-title">{tool.name}</h2>
                <div className="tool-preview">
                  {tool.component}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Tools;
