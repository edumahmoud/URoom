import { Router } from 'express';
import { checkHealth } from '../controllers/healthController.js';
import { loginOrSignup } from '../controllers/authController.js';
import { getStudents, getFaculty } from '../controllers/userController.js';

const router = Router();

// مسار فحص الحالة - أساسي للتأكد من اتصال الواجهة بالسيرفر
router.get('/health', checkHealth);

// مسار المصادقة وتسجيل الدخول التلقائي
router.post('/auth/login', loginOrSignup);

// مسارات إدارة المستخدمين
router.get('/users/students', getStudents);
router.get('/users/faculty', getFaculty);

export default router;