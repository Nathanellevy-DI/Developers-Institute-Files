const express = require('express');
const app = express();

app.use(express.json());

let posts = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
  { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.' }
];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  
  const newPost = {
    id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
    title,
    content
  };
  
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex !== -1) {
    if (title) posts[postIndex].title = title;
    if (content) posts[postIndex].content = content;
    
    res.json(posts[postIndex]);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex !== -1) {
    const deletedPost = posts.splice(postIndex, 1);
    res.json({ message: 'Post deleted successfully', post: deletedPost[0] });
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on the server' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Blog API server is running on http://localhost:${PORT}`);
});