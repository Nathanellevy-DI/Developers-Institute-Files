// colorful-message.js
const chalk = require('chalk');

function showColorfulMessage() {
  console.log(
    chalk.blue.bold('Node.js is awesome! ') +
    chalk.green('Learning NPM is fun 🎉')
  );
}

module.exports = showColorfulMessage;
