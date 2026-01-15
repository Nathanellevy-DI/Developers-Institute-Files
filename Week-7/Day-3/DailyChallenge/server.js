const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, 'users.json');
const SALT_ROUNDS = 10;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Helper function to read users from file
async function readUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(USERS_FILE, '[]', 'utf8');
      return [];
    }
    throw error;
  }
}

// Helper function to write users to file
async function writeUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
}

// Helper function to validate user registration data
function validateRegistration(data) {
  const errors = [];
  
  if (!data.name || data.name.trim() === '') {
    errors.push('Name is required');
  }
  
  if (!data.lastName || data.lastName.trim() === '') {
    errors.push('Last name is required');
  }
  
  if (!data.email || data.email.trim() === '') {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Invalid email format');
  }
  
  if (!data.username || data.username.trim() === '') {
    errors.push('Username is required');
  }
  
  if (!data.password || data.password.trim() === '') {
    errors.push('Password is required');
  } else if (data.password.length < 6) {
    errors.push('Password must be at least 6 characters long');
  }
  
  return errors;
}

// Router
const router = express.Router();

// POST /register - Register a new user
router.post('/register', async (req, res) => {
  try {
    const validationErrors = validateRegistration(req.body);
    
    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        success: false,
        error: 'Validation failed', 
        details: validationErrors 
      });
    }
    
    const users = await readUsers();
    
    // Check if username already exists
    const existingUsername = users.find(u => u.username === req.body.username);
    if (existingUsername) {
      return res.status(400).json({ 
        success: false,
        error: 'Username already exists' 
      });
    }
    
    // Check if email already exists
    const existingEmail = users.find(u => u.email === req.body.email);
    if (existingEmail) {
      return res.status(400).json({ 
        success: false,
        error: 'Email already exists' 
      });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
    
    // Generate new ID
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    
    const newUser = {
      id: newId,
      name: req.body.name.trim(),
      lastName: req.body.lastName.trim(),
      email: req.body.email.trim().toLowerCase(),
      username: req.body.username.trim(),
      password: hashedPassword,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    await writeUsers(users);
    
    // Return user without password
    const { password, ...userWithoutPassword } = newUser;
    
    res.status(201).json({ 
      success: true,
      message: `User ${req.body.username} registered successfully!`,
      user: userWithoutPassword 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to register user', 
      details: error.message 
    });
  }
});

// POST /login - Login a user
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ 
        success: false,
        error: 'Username and password are required' 
      });
    }
    
    const users = await readUsers();
    
    // Find user by username
    const user = users.find(u => u.username === username);
    
    if (!user) {
      return res.status(401).json({ 
        success: false,
        error: 'Invalid username or password' 
      });
    }
    
    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      return res.status(401).json({ 
        success: false,
        error: 'Invalid username or password' 
      });
    }
    
    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    
    res.json({ 
      success: true,
      message: `Welcome back, ${user.name}!`,
      user: userWithoutPassword 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to login', 
      details: error.message 
    });
  }
});

// GET /users - Retrieve all users (for demonstration)
router.get('/', async (req, res) => {
  try {
    const users = await readUsers();
    // Remove passwords from response
    const usersWithoutPasswords = users.map(({ password, ...user }) => user);
    res.json(usersWithoutPasswords);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read users', details: error.message });
  }
});

// GET /users/:id - Retrieve a specific user by ID (for demonstration)
router.get('/:id', async (req, res) => {
  try {
    const users = await readUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Remove password from response
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read user', details: error.message });
  }
});

// PUT /users/:id - Update a user by ID (for demonstration)
router.put('/:id', async (req, res) => {
  try {
    const users = await readUsers();
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Check if new username conflicts with another user
    if (req.body.username) {
      const existingUsername = users.find(
        u => u.username === req.body.username && u.id !== parseInt(req.params.id)
      );
      if (existingUsername) {
        return res.status(400).json({ error: 'Username already exists' });
      }
    }
    
    // Check if new email conflicts with another user
    if (req.body.email) {
      const existingEmail = users.find(
        u => u.email === req.body.email.toLowerCase() && u.id !== parseInt(req.params.id)
      );
      if (existingEmail) {
        return res.status(400).json({ error: 'Email already exists' });
      }
    }
    
    // Hash new password if provided
    let updates = {
      ...(req.body.name && { name: req.body.name.trim() }),
      ...(req.body.lastName && { lastName: req.body.lastName.trim() }),
      ...(req.body.email && { email: req.body.email.trim().toLowerCase() }),
      ...(req.body.username && { username: req.body.username.trim() })
    };
    
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
      updates.password = hashedPassword;
    }
    
    const updatedUser = {
      ...users[userIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    users[userIndex] = updatedUser;
    await writeUsers(users);
    
    // Remove password from response
    const { password, ...userWithoutPassword } = updatedUser;
    res.json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user', details: error.message });
  }
});

// Mount router
app.use('/users', router);

// Start server
app.listen(PORT, () => {
  console.log(`User Management API running on http://localhost:${PORT}`);
  console.log(`Register page: http://localhost:${PORT}/register.html`);
  console.log(`Login page: http://localhost:${PORT}/login.html`);
});