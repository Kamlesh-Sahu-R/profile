export const getCurrentDate = () => {
  const today = new Date();
  return today.toLocaleDateString('en-GB');
};
