const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const TASKS_FILE = path.join(__dirname, 'tasks.json');

// Middleware
app.use(express.json());

// Helper function to read tasks from file
async function readTasks() {
  try {
    const data = await fs.readFile(TASKS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // File doesn't exist, create it with empty array
      await fs.writeFile(TASKS_FILE, '[]', 'utf8');
      return [];
    }
    throw error;
  }
}

// Helper function to write tasks to file
async function writeTasks(tasks) {
  await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2), 'utf8');
}

// Helper function to validate task data
function validateTask(task, isUpdate = false) {
  const errors = [];
  
  if (!isUpdate && !task.title) {
    errors.push('Title is required');
  }
  
  if (task.title && typeof task.title !== 'string') {
    errors.push('Title must be a string');
  }
  
  if (task.description && typeof task.description !== 'string') {
    errors.push('Description must be a string');
  }
  
  if (task.completed !== undefined && typeof task.completed !== 'boolean') {
    errors.push('Completed must be a boolean');
  }
  
  return errors;
}

// Router
const router = express.Router();

// GET /tasks - Retrieve all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read tasks', details: error.message });
  }
});

// GET /tasks/:id - Retrieve a specific task by ID
router.get('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read task', details: error.message });
  }
});

// POST /tasks - Create a new task
router.post('/', async (req, res) => {
  try {
    const validationErrors = validateTask(req.body);
    
    if (validationErrors.length > 0) {
      return res.status(400).json({ error: 'Validation failed', details: validationErrors });
    }
    
    const tasks = await readTasks();
    
    // Generate new ID
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    
    const newTask = {
      id: newId,
      title: req.body.title,
      description: req.body.description || '',
      completed: req.body.completed || false,
      createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    await writeTasks(tasks);
    
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task', details: error.message });
  }
});

// PUT /tasks/:id - Update a task by ID
router.put('/:id', async (req, res) => {
  try {
    const validationErrors = validateTask(req.body, true);
    
    if (validationErrors.length > 0) {
      return res.status(400).json({ error: 'Validation failed', details: validationErrors });
    }
    
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    // Update only provided fields
    const updatedTask = {
      ...tasks[taskIndex],
      ...(req.body.title !== undefined && { title: req.body.title }),
      ...(req.body.description !== undefined && { description: req.body.description }),
      ...(req.body.completed !== undefined && { completed: req.body.completed }),
      updatedAt: new Date().toISOString()
    };
    
    tasks[taskIndex] = updatedTask;
    await writeTasks(tasks);
    
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task', details: error.message });
  }
});

// DELETE /tasks/:id - Delete a task by ID
router.delete('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    await writeTasks(tasks);
    
    res.json({ message: 'Task deleted successfully', task: deletedTask });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task', details: error.message });
  }
});

// Mount router
app.use('/tasks', router);

// Start server
app.listen(PORT, () => {
  console.log(`Task Management API running on http://localhost:${PORT}`);
});