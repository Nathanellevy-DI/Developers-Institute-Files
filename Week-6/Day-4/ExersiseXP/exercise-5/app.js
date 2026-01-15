// app.js
const _ = require('lodash');
const { add, multiply } = require('./math');

const numbers = [2, 4, 6];

console.log('Sum:', _.sum(numbers));
console.log('Add:', add(5, 3));
console.log('Multiply:', multiply(4, 2));
