// routes/todos.js
const express = require('express');
const pool = require('../db');
const router = express.Router();

// Create a new to-do item
router.post('/', async (req, res) => {
  try {
    const { heading, description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todos (heading, description) VALUES ($1, $2) RETURNING *',
      [heading, description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get all to-do items
router.get('/', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todos ORDER BY id ASC');
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get a single to-do item by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
    if (todo.rows.length === 0) {
      return res.status(404).json({ message: 'To-Do not found' });
    }
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update a to-do item
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, description } = req.body;
    const updatedTodo = await pool.query(
      'UPDATE todos SET heading = $1, description = $2 WHERE id = $3 RETURNING *',
      [heading, description, id]
    );
    if (updatedTodo.rows.length === 0) {
      return res.status(404).json({ message: 'To-Do not found' });
    }
    res.json(updatedTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete a to-do item
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
    if (deletedTodo.rows.length === 0) {
      return res.status(404).json({ message: 'To-Do not found' });
    }
    res.json({ message: 'To-Do deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;