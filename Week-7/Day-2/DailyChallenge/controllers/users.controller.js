const db = require('../models/db');
const bcrypt = require('bcrypt');

// REGISTER
exports.register = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.transaction(async trx => {
      await trx('users').insert({
        email,
        username,
        first_name,
        last_name
      });

      await trx('hashpwd').insert({
        username,
        password: hashedPassword
      });
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// LOGIN
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await db('hashpwd').where({ username }).first();

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful' });
};

// GET ALL USERS
exports.getUsers = async (req, res) => {
  const users = await db('users');
  res.json(users);
};

// GET USER BY ID
exports.getUserById = async (req, res) => {
  const user = await db('users')
    .where({ id: req.params.id })
    .first();

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
};

// UPDATE USER
exports.updateUser = async (req, res) => {
  const { email, first_name, last_name } = req.body;

  await db('users')
    .where({ id: req.params.id })
    .update({ email, first_name, last_name });

  res.json({ message: 'User updated' });
};
