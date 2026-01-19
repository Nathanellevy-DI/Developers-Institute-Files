const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();

app.use(express.json());

app.get('/api/posts', async (req, res) => {
  try {
    console.log('Fetching posts from JSONPlaceholder API...');
    const posts = await fetchPosts();
    console.log('Data successfully retrieved and sent as response');
    res.json(posts);
  } catch (error) {
    console.error('Error retrieving posts:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts from external API' });
  }
});

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to CRUD API', 
    endpoints: {
      getAllPosts: 'GET /api/posts'
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`CRUD API server is running on http://localhost:${PORT}`);
});
