// shop.js
const products = require('./products');

function findProduct(productName) {
  const product = products.find(
    item => item.name.toLowerCase() === productName.toLowerCase()
  );

  if (product) {
    console.log(product);
  } else {
    console.log('Product not found');
  }
}

findProduct('Laptop');
findProduct('Book');
findProduct('Tablet');
