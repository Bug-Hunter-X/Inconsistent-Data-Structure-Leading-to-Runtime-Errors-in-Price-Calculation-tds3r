```javascript
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price; //Error: Assuming all items have a 'price' property
  }
  return total;
}

const myItems = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", quantity: 5 },
  { name: "Item 3", price: 20 }
];

const total = calculateTotal(myItems);
console.log(total); //Error: will throw an error because of missing price in Item 2
```