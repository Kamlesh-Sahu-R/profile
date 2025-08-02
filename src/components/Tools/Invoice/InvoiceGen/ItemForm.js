import styles from './styles';

const ItemForm = ({ itemInput, onChange, addItem, editIndex }) => {
  return (
    <div style={styles.inputGroup}>
      <h3 style={{ marginBottom: '8px', color: '#444' }}>➕ Add Item</h3>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>Item Name</label>
        <input
          style={styles.input}
          name="name"
          value={itemInput.name}
          onChange={onChange}
        />
      </div>

      <div style={styles.doubleFieldGroup}>
        <div style={{ flex: 1 }}>
          <label style={styles.label}>Quantity</label>
          <input
            style={styles.input}
            name="qty"
            type="number"
            value={itemInput.qty}
            onChange={onChange}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label style={styles.label}>Price (₹)</label>
          <input
            style={styles.input}
            name="price"
            type="number"
            value={itemInput.price}
            onChange={onChange}
          />
        </div>
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>Discount (%)</label>
        <input
          style={styles.input}
          name="discount"
          type="number"
          value={itemInput.discount}
          onChange={onChange}
        />
      </div>

      <button onClick={addItem} style={styles.button}>
        {editIndex !== null ? 'Update Item' : 'Add Item'}
      </button>
    </div>
  );
};

export default ItemForm;
