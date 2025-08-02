
// import { useState } from 'react';
// import { exportPDF } from './pdfExporter';

// const InvoiceApp = () => {

//   const getCurrentDate = () => {
//     const today = new Date();
//     return today.toLocaleDateString('en-GB');
//   };

//   const [invoice, setInvoice] = useState({
//     number: 'INV102',
//     date: getCurrentDate(),
//     customerName: '',
//     customerContact: '',
//     items: [],
//   });

//   const [itemInput, setItemInput] = useState({ name: '', qty: 1, price: 0, discount: 0 });
//   const [editIndex, setEditIndex] = useState(null);

//   const handleItemChange = (e) => {
//     const { name, value } = e.target;
//     setItemInput((prev) => ({
//       ...prev,
//       [name]: name === 'name' ? value : parseFloat(value),
//     }));
//   };

//   const handleInvoiceChange = (e) => {
//     const { name, value } = e.target;
//     setInvoice((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const addItem = () => {
//     if (!itemInput.name || itemInput.qty <= 0 || itemInput.price <= 0) return;

//     const updatedItems = [...invoice.items];
//     if (editIndex !== null) {
//       updatedItems[editIndex] = itemInput;
//     } else {
//       updatedItems.push(itemInput);
//     }

//     setInvoice((prev) => ({
//       ...prev,
//       items: updatedItems,
//     }));

//     setItemInput({ name: '', qty: 1, price: 0, discount: 0 });
//     setEditIndex(null);
//   };

//   const editItem = (index) => {
//     setItemInput(invoice.items[index]);
//     setEditIndex(index);
//   };

//   const deleteItem = (index) => {
//     const updatedItems = invoice.items.filter((_, i) => i !== index);
//     setInvoice((prev) => ({
//       ...prev,
//       items: updatedItems,
//     }));
//     setItemInput({ name: '', qty: 1, price: 0, discount: 0 });
//     setEditIndex(null);
//   };

//   const totalBaseAmount = invoice.items.reduce((sum, item) => {
//     const discounted = item.price * (1 - (item.discount || 0) / 100);
//     return sum + discounted * item.qty;
//   }, 0);

//   let totalCGST = 0;
//   let totalSGST = 0;
//   let netPayable = 0;

//   const rows = invoice.items.map((item, i) => {
//     const gstRate = item.price > 999 ? 6 : 2.5;
//     const discountedPrice = item.price * (1 - (item.discount || 0) / 100);
//     const baseTotal = discountedPrice * item.qty;
//     const cgst = Math.round((baseTotal * gstRate) / 100);
//     const sgst = cgst;
//     const total = baseTotal + cgst + sgst;

//     totalCGST += cgst;
//     totalSGST += sgst;
//     netPayable += total;

//     const tdStyle = i === invoice.items.length - 1 ? styles.lastRowTd : styles.td;

//     return (
//       <tr key={i}>
//         <td style={tdStyle}>{item.name}</td>
//         <td style={tdStyle}>{item.qty}</td>
//         <td style={tdStyle}>{item.price}</td>
//         <td style={tdStyle}>{item.discount || 0}%</td>
//         <td style={tdStyle}>{gstRate}%</td>
//         <td style={tdStyle}>{cgst}</td>
//         <td style={tdStyle}>{gstRate}%</td>
//         <td style={tdStyle}>{sgst}</td>
//         <td style={tdStyle}>{total}</td>
//       </tr>
//     );
//   });

//   return (
//     <div style={styles.wrapper}>
//       <div style={styles.formSection}>
//         <h3>🧾 Invoice Details</h3>
//         <label>Invoice Number</label>
//         <input name="number" value={invoice.number} onChange={handleInvoiceChange} />

//         <label>Date</label>
//         <input name="date" value={invoice.date} onChange={handleInvoiceChange} />

//         <label>Customer Name</label>
//         <input name="customerName" value={invoice.customerName} onChange={handleInvoiceChange} />

//         <label>Customer Contact</label>
//         <input name="customerContact" value={invoice.customerContact} onChange={handleInvoiceChange} />

//         <hr style={{ margin: '15px 0' }} />

//         <h4>🧾 Add Item</h4>

//         <label>Item Name</label>
//         <input name="name" value={itemInput.name} onChange={handleItemChange} />

//         <label>Quantity</label>
//         <input name="qty" type="number" value={itemInput.qty} onChange={handleItemChange} />

//         <label>Price (₹)</label>
//         <input name="price" type="number" value={itemInput.price} onChange={handleItemChange} />

//         <label>Discount (%)</label>
//         <input name="discount" type="number" value={itemInput.discount} onChange={handleItemChange} />

//         <button onClick={addItem} style={styles.button}>
//           {editIndex !== null ? 'Update Item' : 'Add Item'}
//         </button>

//         {invoice.items.length > 0 && (
//           <div style={{ marginTop: '15px' }}>
//             <h4>🧾 Items List</h4>
//             <ul style={{ listStyle: 'none', padding: 0 }}>
//               {invoice.items.map((item, index) => (
//                 <li key={index} style={styles.itemList}>
//                   {item.name} - {item.qty} × ₹{item.price} ({item.discount}%)
//                   <span>
//                     <button onClick={() => editItem(index)} style={styles.actionBtn}>✏️</button>
//                     <button onClick={() => deleteItem(index)} style={styles.actionBtn}>🗑️</button>
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <button onClick={() => exportPDF('invoiceApp')} style={styles.button}>
//           📄 Print PDF
//         </button>
//       </div>

//       <div id="invoiceApp" style={styles.invoice}>
//         <h3>Tax Invoice</h3>
//         <div style={styles.invoiceHeader}>
//           <div>
//             <h1>🧥 Dakhsit Collection</h1>
//             <p><b>Address:</b> Main Rd, Tamnar, Raigarh</p>
//             <p><b>Contact:</b> 9876543210</p>
//             <p><b>GSTIN:</b> 22ABCDE1234F1Z5</p>
//           </div>
//           <div>
//             <p><b>Invoice No:</b> {invoice.number}</p>
//             <p><b>Date:</b> {invoice.date}</p>
//             {invoice.customerName && <p><b>Customer:</b> {invoice.customerName}</p>}
//             {invoice.customerContact && <p><b>Contact:</b> {invoice.customerContact}</p>}
//           </div>
//         </div>

//         <hr />
//         <table style={styles.table}>
//           <h1 style={styles.watermark}>Dakhsit Collection</h1>
//           <thead>
//             <tr>
//               <th rowSpan="2" style={styles.th}>Item</th>
//               <th rowSpan="2" style={styles.th}>Qty</th>
//               <th rowSpan="2" style={styles.th}>Rate</th>
//               <th rowSpan="2" style={styles.th}>Disc%</th>
//               <th colSpan="2" style={styles.th}>CGST</th>
//               <th colSpan="2" style={styles.th}>SGST</th>
//               <th rowSpan="2" style={styles.th}>Amt</th>
//             </tr>
//             <tr>
//               <th style={styles.th}>Rate</th>
//               <th style={styles.th}>Amt</th>
//               <th style={styles.th}>Rate</th>
//               <th style={styles.th}>Amt</th>
//             </tr>
//           </thead>
//           <tbody>{rows}</tbody>
//         </table>

//         <hr />
//         <div style={styles.summary}>
//           <p>Base Amount: <span>₹{totalBaseAmount}</span></p>
//           <p>Total CGST: <span>₹{totalCGST}</span></p>
//           <p>Total SGST: <span>₹{totalSGST}</span></p>
//           <hr />
//           <p><strong>Net Payable: ₹{netPayable}</strong></p>
//         </div>

//         <hr />
//         <div style={{ textAlign: 'left', fontSize: '12px', marginTop: '20px' }}>
//           <h4>Terms & Conditions</h4>
//           <ul style={{ paddingLeft: '18px' }}>
//             <li>Items can be exchanged within 2 days of purchase.</li>
//             <li>Product must be unused, unwashed, and with original tags & bill.</li>
//             <li>No exchange on innerwear, undergarments, or altered clothes.</li>
//             <li>No cash refunds. Only exchange or store credit is available.</li>
//             <li>Exchange applicable only if the item is defective or damaged.</li>
//             <li>Please check the item thoroughly before billing.</li>
//             <li>Keep the bill safe; it's mandatory for any post-sale claim.</li>
//           </ul>
//         </div>

//         <hr />
//         <h4>Thank you, Visit Again!</h4>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//     flexWrap: 'wrap',
//     gap: '20px',
//   },
//   formSection: {
//     width: '350px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '6px',
//     background: '#f9f9f9',
//     padding: '15px',
//     borderRadius: '8px',
//     boxShadow: '0 0 6px rgba(0,0,0,0.1)',
//   },
//   invoice: {
//     width: '600px',
//     padding: '20px',
//     border: '2px solid #000',
//     backgroundColor: '#fff',
//     textAlign: 'center',
//     minWidth: '350px',
//   },
//   invoiceHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     textAlign: 'left',
//     gap: '20px',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginTop: '10px',
//   },
//   th: {
//     border: '1px solid black',
//     padding: '6px',
//     textAlign: 'center',
//     backgroundColor: '#e0e0e0',
//   },
//   td: {
//     borderLeft: '1px solid black',
//     borderRight: '1px solid black',
//     borderTop: 'none',
//     borderBottom: 'none',
//     padding: '6px',
//     textAlign: 'center',
//   },
//   lastRowTd: {
//     borderLeft: '1px solid black',
//     borderRight: '1px solid black',
//     borderBottom: '1px solid black',
//     padding: '6px',
//     textAlign: 'center',
//   },
//   summary: {
//     textAlign: 'right',
//     marginTop: '10px',
//     lineHeight: '1.5',
//   },
//   itemList: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#f1f1f1',
//     padding: '6px 10px',
//     marginBottom: '4px',
//     borderRadius: '4px',
//   },
//   actionBtn: {
//     marginLeft: '5px',
//     cursor: 'pointer',
//     background: 'none',
//     border: 'none',
//     fontSize: '16px',
//   },
//   button: {
//     marginTop: '10px',
//     padding: '8px 10px',
//     background: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   watermark: {
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%) rotate(-30deg)',
//       fontSize: '60px',
//       color: 'rgba(0, 0, 0, 0.08)',
//       whiteSpace: 'nowrap',
//       pointerEvents: 'none',
//       zIndex: 0,
//     },
// };

// export default InvoiceApp;

import { useState } from 'react';
import { exportPDF } from './pdfExporter';

const InvoiceApp = () => {
  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString('en-GB');
  };

  const [invoice, setInvoice] = useState({
    number: 'INV102',
    date: getCurrentDate(),
    customerName: '',
    customerContact: '',
    items: [],
  });

  const [itemInput, setItemInput] = useState({ name: '', qty: 1, price: 0, discount: 0 });
  const [editIndex, setEditIndex] = useState(null);

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItemInput((prev) => ({
      ...prev,
      [name]: name === 'name' ? value : parseFloat(value),
    }));
  };

  const handleInvoiceChange = (e) => {
    const { name, value } = e.target;
    setInvoice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addItem = () => {
    if (!itemInput.name || itemInput.qty <= 0 || itemInput.price <= 0) return;

    const updatedItems = [...invoice.items];
    if (editIndex !== null) {
      updatedItems[editIndex] = itemInput;
    } else {
      updatedItems.push(itemInput);
    }

    setInvoice((prev) => ({
      ...prev,
      items: updatedItems,
    }));

    setItemInput({ name: '', qty: 1, price: 0, discount: 0 });
    setEditIndex(null);
  };

  const editItem = (index) => {
    setItemInput(invoice.items[index]);
    setEditIndex(index);
  };

  const deleteItem = (index) => {
    const updatedItems = invoice.items.filter((_, i) => i !== index);
    setInvoice((prev) => ({
      ...prev,
      items: updatedItems,
    }));
    setItemInput({ name: '', qty: 1, price: 0, discount: 0 });
    setEditIndex(null);
  };

  const totalBaseAmount = invoice.items.reduce((sum, item) => {
    const discounted = item.price * (1 - (item.discount || 0) / 100);
    return sum + discounted * item.qty;
  }, 0);

  let totalCGST = 0;
  let totalSGST = 0;
  let netPayable = 0;

  const rows = invoice.items.map((item, i) => {
    const gstRate = item.price > 999 ? 6 : 2.5;
    const discountedPrice = item.price * (1 - (item.discount || 0) / 100);
    const baseTotal = discountedPrice * item.qty;
    const cgst = Math.round((baseTotal * gstRate) / 100);
    const sgst = cgst;
    const total = baseTotal + cgst + sgst;

    totalCGST += cgst;
    totalSGST += sgst;
    netPayable += total;

    const tdStyle = i === invoice.items.length - 1 ? styles.lastRowTd : styles.td;

    return (
      <tr key={i}>
        <td style={tdStyle}>{item.name}</td>
        <td style={tdStyle}>{item.qty}</td>
        <td style={tdStyle}>{item.price}</td>
        <td style={tdStyle}>{item.discount || 0}%</td>
        <td style={tdStyle}>{gstRate}%</td>
        <td style={tdStyle}>{cgst}</td>
        <td style={tdStyle}>{gstRate}%</td>
        <td style={tdStyle}>{sgst}</td>
        <td style={tdStyle}>{total}</td>
      </tr>
    );
  });

  return (
    <div style={styles.wrapper}>
      <div style={styles.formSection}>
        <h3>🧾 Invoice Details</h3>
        <label>Invoice Number</label>
        <input name="number" value={invoice.number} onChange={handleInvoiceChange} />
        <label>Date</label>
        <input name="date" value={invoice.date} onChange={handleInvoiceChange} />
        <label>Customer Name</label>
        <input name="customerName" value={invoice.customerName} onChange={handleInvoiceChange} />
        <label>Customer Contact</label>
        <input name="customerContact" value={invoice.customerContact} onChange={handleInvoiceChange} />

        <hr style={{ margin: '15px 0' }} />
        <h4>🧾 Add Item</h4>
        <label>Item Name</label>
        <input name="name" value={itemInput.name} onChange={handleItemChange} />
        <label>Quantity</label>
        <input name="qty" type="number" value={itemInput.qty} onChange={handleItemChange} />
        <label>Price (₹)</label>
        <input name="price" type="number" value={itemInput.price} onChange={handleItemChange} />
        <label>Discount (%)</label>
        <input name="discount" type="number" value={itemInput.discount} onChange={handleItemChange} />

        <button onClick={addItem} style={styles.button}>
          {editIndex !== null ? 'Update Item' : 'Add Item'}
        </button>

        {invoice.items.length > 0 && (
          <div style={{ marginTop: '15px' }}>
            <h4>🧾 Items List</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {invoice.items.map((item, index) => (
                <li key={index} style={styles.itemList}>
                  {item.name} - {item.qty} × ₹{item.price} ({item.discount}%)
                  <span>
                    <button onClick={() => editItem(index)} style={styles.actionBtn}>✏️</button>
                    <button onClick={() => deleteItem(index)} style={styles.actionBtn}>🗑️</button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button onClick={() => exportPDF('invoiceApp')} style={styles.button}>
          📄 Print PDF
        </button>
      </div>

      <div id="invoiceApp" style={styles.invoice}>
        {/* Watermark inside invoice area */}
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
          <p>Base Amount: <span>₹{totalBaseAmount}</span></p>
          <p>Total CGST: <span>₹{totalCGST}</span></p>
          <p>Total SGST: <span>₹{totalSGST}</span></p>
          <hr />
          <p><strong>Net Payable: ₹{netPayable}</strong></p>
        </div>

        <hr />
        <div style={{ textAlign: 'left', fontSize: '12px', marginTop: '20px' }}>
          <h4>Terms & Conditions</h4>
          <ul style={{ paddingLeft: '18px' }}>
            <li>Items can be exchanged within 2 days of purchase.</li>
            <li>Product must be unused, unwashed, and with original tags & bill.</li>
            <li>No exchange on innerwear, undergarments, or altered clothes.</li>
            <li>No cash refunds. Only exchange or store credit is available.</li>
            <li>Exchange applicable only if the item is defective or damaged.</li>
            <li>Please check the item thoroughly before billing.</li>
            <li>Keep the bill safe; it's mandatory for any post-sale claim.</li>
          </ul>
        </div>

        <hr />
        <h4>Thank you, Visit Again!</h4>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    flexWrap: 'wrap',
    gap: '20px',
  },
  formSection: {
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    background: '#f9f9f9',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 6px rgba(0,0,0,0.1)',
  },
  invoice: {
    width: '600px',
    padding: '20px',
    border: '2px solid #000',
    backgroundColor: '#fff',
    textAlign: 'center',
    minWidth: '350px',
    position: 'relative',
    overflow: 'hidden',
  },
  invoiceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left',
    gap: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  th: {
    border: '1px solid black',
    padding: '6px',
    textAlign: 'center',
    backgroundColor: '#e0e0e0',
  },
  td: {
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    borderTop: 'none',
    borderBottom: 'none',
    padding: '6px',
    textAlign: 'center',
  },
  lastRowTd: {
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    padding: '6px',
    textAlign: 'center',
  },
  summary: {
    textAlign: 'right',
    marginTop: '10px',
    lineHeight: '1.5',
  },
  itemList: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: '6px 10px',
    marginBottom: '4px',
    borderRadius: '4px',
  },
  actionBtn: {
    marginLeft: '5px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontSize: '16px',
  },
  button: {
    marginTop: '10px',
    padding: '8px 10px',
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-30deg)',
    fontSize: '60px',
    color: 'rgba(0, 0, 0, 0.08)',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: 0,
  },
};

export default InvoiceApp;
