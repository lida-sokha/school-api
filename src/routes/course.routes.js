import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from '../controllers/course.controller.js';

const router = express.Router();

// ✅ Protect all course routes
router.use(authMiddleware);

router.post('/', createCourse);
router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;
