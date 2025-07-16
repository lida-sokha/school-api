import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { register, login, getAllUsers } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// ✅ Protect this route
router.get('/users', authMiddleware, getAllUsers);

export default router;
