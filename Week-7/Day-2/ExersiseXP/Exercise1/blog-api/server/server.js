const express = require('express');
const app = express();
const postRoutes = require('./routes/posts.routes');

app.use(express.json());
app.use('/', postRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Server error
app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Server error' });
});

app.listen(3000, () => {
  console.log('Blog API running on port 3000');
});
