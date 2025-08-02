import styles from '../InvoiceGen/styles';

export const calculateTotalsGST = (items) => {
  let base = 0, cgst = 0, sgst = 0, total = 0;

  const rows = items.map((item, i) => {
    const rate = item.price > 999 ? 6 : 2.5;
    const discPrice = item.price * (1 - (item.discount || 0) / 100);
    const baseTotal = discPrice * item.qty;
    const tax = Math.round((baseTotal * rate) / 100);

    base += baseTotal;
    cgst += tax;
    sgst += tax;
    total += baseTotal + tax * 2;

    return (
      <tr key={i}>
        <td style={styles.td}>{item.name}</td>
        <td style={styles.td}>{item.qty}</td>
        <td style={styles.td}>{item.price}</td>
        <td style={styles.td}>{item.discount || 0}%</td>
        <td style={styles.td}>{rate}%</td>
        <td style={styles.td}>{tax}</td>
        <td style={styles.td}>{rate}%</td>
        <td style={styles.td}>{tax}</td>
        <td style={styles.td}>{baseTotal + tax * 2}</td>
      </tr>
    );
  });

  return { rows, base, cgst, sgst, total };
};
