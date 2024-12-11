// adminCourseRoutes.js
import express from 'express';
// import adminAuthMiddleware from '../middlewares/adminAuthMiddleware.js';  // Admin চেক করার middleware
import { createCourse, deleteCourse, getCourses, updateCourse } from '../controller/admin/adminCourseControler.js';

const router = express.Router();

// admin auth middlewere use korte hobe 

// router.post('/create', adminAuthMiddleware, createCourse);
// router.get('/', getCourses);
// router.put('/update/:courseId', adminAuthMiddleware, updateCourse);
// router.delete('/delete/:courseId', adminAuthMiddleware, deleteCourse);

router.post('/create', createCourse);
router.get('/all', getCourses);
router.put('/update/:courseId', updateCourse);
router.delete('/delete/:courseId', deleteCourse);


export default router;
