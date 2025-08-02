import styles from './styles';

const InvoiceForm = ({ invoice, onChange }) => {
 
  return (
    <div style={styles.inputGroup}>
      <h3>🧾 Invoice Details</h3>
      {['number', 'date', 'customerName', 'customerContact'].map((field) => (
        <div key={field} style={styles.fieldGroup}>
          <label style={styles.label}>{field.replace(/([A-Z])/g, ' $1')}</label>
          <input
            style={styles.input}
            name={field}
            value={invoice[field]}
            onChange={onChange }
          />
        </div>
      ))}
    </div>
  );
};

export default InvoiceForm;
