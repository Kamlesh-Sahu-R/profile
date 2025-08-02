export const calculateTotal = (items) => {
  return items.reduce((sum, item) => {
    const discounted = item.price * (1 - (item.discount || 0) / 100);
    return sum + discounted * item.qty;
  }, 0);
};
