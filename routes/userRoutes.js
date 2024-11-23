const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');

// Register a new user
router.post('/users/register', registerUser);

// Login an existing user
router.post('/users/login', loginUser);

// Get all users
router.get('/users', verifyToken, getAllUsers);

// Get user by ID
router.get('/users/:id', verifyToken, getUserById);

// Update user details
router.put('/users/:id', verifyToken, updateUser);

// Delete a user
router.delete('/users/:id', verifyToken, deleteUser);

module.exports = router;
