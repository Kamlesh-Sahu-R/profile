import styles from './styles';
import TermsAndConditions from './TermsAndConditions';

const InvoicePreview = ({ invoice, totalAmount }) => {
  const rows = invoice.items.map((item, i) => {
    const discountedPrice = item.price * (1 - (item.discount || 0) / 100);
    const total = discountedPrice * item.qty;
    const tdStyle = i === invoice.items.length - 1 ? styles.lastRowTd : styles.td;

    return (
      <tr key={i}>
        <td style={tdStyle}>{item.name}</td>
        <td style={tdStyle}>{item.qty}</td>
        <td style={tdStyle}>{item.price}</td>
        <td style={tdStyle}>{item.discount || 0}%</td>
        <td style={tdStyle}>{total.toFixed(2)}</td>
      </tr>
    );
  });

  return (
    <div id="invoiceApp" style={styles.invoice}>
      <h1 style={styles.watermark}>Dakhsit Collection</h1>
      <h3>Invoice</h3>

      <div style={styles.invoiceHeader}>
        <div>
          <h1>🧥 Dakhsit Collection</h1>
          <p><b>Address:</b> Main Rd, Tamnar, Raigarh</p>
          <p><b>Contact:</b> 9876543210</p>
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
            <th style={styles.th}>Item</th>
            <th style={styles.th}>Qty</th>
            <th style={styles.th}>Rate</th>
            <th style={styles.th}>Disc%</th>
            <th style={styles.th}>Amt</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

      <hr />
      <div style={styles.summary}>
        <p><strong>Total Amount: ₹{totalAmount.toFixed(2)}</strong></p>
      </div>

      <hr />
      <TermsAndConditions />

      <hr />
      <h4>Thank you, Visit Again!</h4>
    </div>
  );
};

export default InvoicePreview;
