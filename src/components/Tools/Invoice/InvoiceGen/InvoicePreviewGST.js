import styles from './styles';
import TermsAndConditions from './TermsAndConditions';
import { calculateTotalsGST } from '../utils/calculateTotalGST';

const InvoicePreviewGST = ({ invoice }) => {
  const { rows, base, cgst, sgst, total } = calculateTotalsGST(invoice.items);

  return (
    <div id="invoiceApp" style={styles.invoice}>
      <h1 style={styles.watermark}>Dakhsit Collection</h1>
      <h3>Tax Invoice</h3>

      <div style={styles.invoiceHeader}>
        <div>
          <h1>🧥 Dakhsit Collection</h1>
          <p><b>Address:</b> Main Rd, Tamnar, Raigarh</p>
          <p><b>Contact:</b> 9876543210</p>
          <p><b>GSTIN:</b> 22ABCDE1234F1Z5</p>
        </div>
        <div>
          <p><b>Invoice No:</b> {invoice.number}</p>
          <p><b>Date:</b> {invoice.date}</p>
          {invoice.customerName && <p><b>Customer:</b> {invoice.customerName}</p>}
          {invoice.customerContact && <p><b>Contact:</b> {invoice.customerContact}</p>}
        </div>
      </div>

      <hr />
      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="2" style={styles.th}>Item</th>
            <th rowSpan="2" style={styles.th}>Qty</th>
            <th rowSpan="2" style={styles.th}>Rate</th>
            <th rowSpan="2" style={styles.th}>Disc%</th>
            <th colSpan="2" style={styles.th}>CGST</th>
            <th colSpan="2" style={styles.th}>SGST</th>
            <th rowSpan="2" style={styles.th}>Amt</th>
          </tr>
          <tr>
            <th style={styles.th}>Rate</th>
            <th style={styles.th}>Amt</th>
            <th style={styles.th}>Rate</th>
            <th style={styles.th}>Amt</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

      <hr />
      <div style={styles.summary}>
        <p>Base Amount: ₹{base}</p>
        <p>Total CGST: ₹{cgst}</p>
        <p>Total SGST: ₹{sgst}</p>
        <hr />
        <p><strong>Net Payable: ₹{total}</strong></p>
      </div>

      <hr />
      <TermsAndConditions />
      <hr />
      <h4>Thank you, Visit Again!</h4>
    </div>
  );
};

export default InvoicePreviewGST;
