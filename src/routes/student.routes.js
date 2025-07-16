import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} from '../controllers/student.controller.js';

const router = express.Router();

// ✅ Protect all student routes
router.use(authMiddleware);

router.post('/', createStudent);
router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
