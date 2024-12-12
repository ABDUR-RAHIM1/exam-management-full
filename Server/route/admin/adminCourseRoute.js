import express from 'express'
import { createCourse, deleteCourse, getAllCourses, getCourseByCategory, getCourseById, updateCourse } from '../../controller/admin/adminCourseController.js';
const router = express.Router();

router.post('/create', createCourse);
router.get('/all', getAllCourses);
router.get('/me', getCourseById);
router.get('/category', getCourseByCategory);  // get by category query
router.put('/update/:id', updateCourse);
router.delete('/delete/:id', deleteCourse);

export default router;
