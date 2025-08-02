import { useState } from 'react';
import InvoiceForm from './InvoiceForm';
import ItemForm from './ItemForm';
import ItemList from './ItemList';
import InvoicePreviewGST from './InvoicePreviewGST';
import styles from './styles';
import { exportPDF } from '../utils/pdfExporter';

const GSTInvoiceApp = () => {
  const getCurrentDate = () => new Date().toLocaleDateString('en-GB');

  const [invoice, setInvoice] = useState({
    number: 'INV102',
    date: getCurrentDate(),
    customerName: '',
    customerContact: '',
    items: [],
  });

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItemInput(prev => ({ ...prev, [name]: name === 'name' ? value : parseFloat(value) }));
  };

  const handleInvoiceChange = (e) => {
    const { name, value } = e.target;
    setInvoice(prev => ({ ...prev, [name]: value }));
  };

  const addItem = () => {
    if (!itemInput.name || itemInput.qty <= 0 || itemInput.price <= 0) return;

    const updatedItems = [...invoice.items];
    if (editIndex !== null) {
      updatedItems[editIndex] = itemInput;
    } else {
      updatedItems.push(itemInput);
    }

    setInvoice(prev => ({ ...prev, items: updatedItems }));
    setItemInput({ name: '', qty: 1, price: 0, discount: 0 });
    setEditIndex(null);
  };

  const editItem = (index) => {
    setItemInput(invoice.items[index]);
    setEditIndex(index);
  };

  const deleteItem = (index) => {
    const updatedItems = invoice.items.filter((_, i) => i !== index);
    setInvoice(prev => ({ ...prev, items: updatedItems }));
    setItemInput({ name: '', qty: 1, price: 0, discount: 0 });
    setEditIndex(null);
  };

  const [itemInput, setItemInput] = useState({ name: '', qty: 1, price: 0, discount: 15 });
  const [editIndex, setEditIndex] = useState(null);

  return (
    <div style={styles.wrapper}>
      <div style={styles.formSection}>
        <div style={styles.formGroup}>
          <InvoiceForm invoice={invoice} onChange={handleInvoiceChange} />
          <ItemForm
            itemInput={itemInput}
            onChange={handleItemChange}
            addItem={addItem}
            editIndex={editIndex}
          />
        </div>
        {invoice.items.length > 0 && (
          <ItemList
            items={invoice.items}
            editItem={editItem}
            deleteItem={deleteItem}
            exportPDF={() => exportPDF('invoiceApp')}
          />
        )}
      </div>
      <InvoicePreviewGST invoice={invoice} />
    </div>
  );
};

export default GSTInvoiceApp;
