const cart = [
  { unitPrice: 10, quantity: 2 },
  { unitPrice: 5, quantity: 3 },
  { unitPrice: 15, quantity: 1 }
];

const calculateTotalCost = (cart) => {
  return cart.reduce((totalCost, item) => {
    return totalCost + item.unitPrice * item.quantity;
  }, 0);
};

console.log(calculateTotalCost(cart));