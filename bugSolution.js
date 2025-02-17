```javascript
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].hasOwnProperty('price')) {
      total += items[i].price;
    } else {
      console.warn('Item missing price property:', items[i]);
      // Consider alternative handling:  throw an error, use a default price, etc.
    }
  }
  return total;
}

const myItems = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", quantity: 5 },
  { name: "Item 3", price: 20 }
];

const total = calculateTotal(myItems);
console.log(total); //Output: 30 with a warning message
```