import { useState } from 'react';
import { getCurrentDate } from '../utils/getCurrentDate';
import { calculateTotal } from '../utils/calculateTotal';
import { exportPDF } from '../utils/pdfExporter';

import InvoiceForm from './InvoiceForm';
import ItemForm from './ItemForm';
import ItemList from './ItemList';
import InvoicePreview from './InvoicePreview';
import styles from './styles';

const InvoiceApp = () => {
  const [invoice, setInvoice] = useState({
    number: 'INV102',
    date: getCurrentDate(),
    customerName: '',
    customerContact: '',
    items: [],
  });

  const [itemInput, setItemInput] = useState({ name: '', qty: 1, price: 0, discount: 15 });
  const [editIndex, setEditIndex] = useState(null);

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

  const totalAmount = calculateTotal(invoice.items);

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

      <InvoicePreview invoice={invoice} totalAmount={totalAmount} />
    </div>
  );
};

export default InvoiceApp;
