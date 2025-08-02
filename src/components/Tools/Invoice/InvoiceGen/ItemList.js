import styles from './styles';

const ItemList = ({ items, editItem, deleteItem, exportPDF }) => {
  return (
    <div style={{ marginTop: '15px' }}>
      <div style={styles.itemListHead}>
        <h4>🧾 Items List</h4>
        <button onClick={exportPDF} style={styles.button}>
          Print Invoice in PDF
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={styles.itemList}>
            {item.name} - {item.qty} × ₹{item.price} ({item.discount || 0}%)
            <span>
              <button onClick={() => editItem(index)} style={styles.actionBtn}>✏️</button>
              <button onClick={() => deleteItem(index)} style={styles.actionBtn}>🗑️</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
