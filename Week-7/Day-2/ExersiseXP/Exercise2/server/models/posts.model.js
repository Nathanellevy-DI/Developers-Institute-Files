const db = require('./db');

// Get all posts
const getAllPosts = () => {
  return db('posts');
};

// Get post by ID
const getPostById = (id) => {
  return db('posts').where({ id }).first();
};

// Create post
const createPost = (post) => {
  return db('posts').insert(post).returning('*');
};

// Update post
const updatePost = (id, post) => {
  return db('posts').where({ id }).update(post);
};

// Delete post
const deletePost = (id) => {
  return db('posts').where({ id }).del();
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
