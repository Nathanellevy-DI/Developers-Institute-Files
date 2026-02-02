const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

const PORT = 3000;

// Mount router
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
