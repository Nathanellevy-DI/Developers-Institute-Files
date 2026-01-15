const express = require('express');
const app = express();
const userRoutes = require('./routes/users.routes');

const PORT = 3000;

app.use(express.json());
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
