// app.js
const { readFile, writeFile } = require('./fileManager');

const content = readFile('Hello World.txt');
console.log(content);

writeFile('Bye World.txt', 'Writing to the file');
