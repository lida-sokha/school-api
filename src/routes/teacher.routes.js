import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher
} from '../controllers/teacher.controller.js';

const router = express.Router();

// ✅ Protect all teacher routes
router.use(authMiddleware);

router.post('/', createTeacher);
router.get('/', getAllTeachers);
router.get('/:id', getTeacherById);
router.put('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

export default router;
