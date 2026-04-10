import { Router } from 'express';
import { checkHealth } from '../controllers/healthController.js';
import { loginOrSignup } from '../controllers/authController.js';
import { getStudents, getFaculty } from '../controllers/userController.js';
import { authorize } from '../middleware/roleMiddleware.js';

const router = Router();

// مسار فحص الحالة - أساسي للتأكد من اتصال الواجهة بالسيرفر
router.get('/health', checkHealth);

// مسار المصادقة وتسجيل الدخول التلقائي
router.post('/auth/login', loginOrSignup);

// مسارات إدارة المستخدمين
router.get('/users/students', authorize(['ADMIN', 'FACULTY']), getStudents);
router.get('/users/faculty', authorize(['ADMIN']), getFaculty);

export default router;