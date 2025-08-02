import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tools from './pages/Tools';
import TimeComparator from '../src/components/Tools/TimeComparator/TimeComparator';
import GSTInvoiceApp from '../src/components/Tools/Invoice/InvoiceGen/GSTInvoiceApp';
import InvoiceApp from '../src/components/Tools/Invoice/InvoiceGen/InvoiceApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/time-comparator" element={<TimeComparator />} />
        <Route path="/tools/gst-invoice" element={<GSTInvoiceApp />} />
        <Route path="/tools/invoice" element={<InvoiceApp />} />
      </Routes>
    </Router>
  );
}

export default App;
