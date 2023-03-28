let arr = [
  { id: 1, product: 'TV' },
  { id: 2, product: 'Mobile' },
  { id: 1, product: 'TV' },
  { id: 3, product: 'AC' },
  { id: 2, product: 'Mobile' }
];

let uniqueArr = arr.filter((obj, index, self) =>
  index === self.findIndex((t) => (
    t.id === obj.id && t.product === obj.product
  ))
);

console.log(uniqueArr);