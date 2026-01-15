const db = require('../models/db');

// GET all posts
exports.getPosts = async (req, res) => {
  const posts = await db('posts');
  res.json(posts);
};

// GET post by ID
exports.getPostById = async (req, res) => {
  const post = await db('posts')
    .where({ id: req.params.id })
    .first();

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(post);
};

// CREATE post
exports.createPost = async (req, res) => {
  const { title, content } = req.body;

  const [post] = await db('posts')
    .insert({ title, content })
    .returning('*');

  res.status(201).json(post);
};

// UPDATE post
exports.updatePost = async (req, res) => {
  const { title, content } = req.body;

  await db('posts')
    .where({ id: req.params.id })
    .update({ title, content });

  res.json({ message: 'Post updated' });
};

// DELETE post
exports.deletePost = async (req, res) => {
  await db('posts')
    .where({ id: req.params.id })
    .del();

  res.json({ message: 'Post deleted' });
};
