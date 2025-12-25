const express = require('express');
const app = express();
const bookRoutes = require('./routes/books.routes');

app.use(express.json());
app.use('/', bookRoutes);

app.listen(5000, () => {
  console.log('Book API running on port 5000');
});
