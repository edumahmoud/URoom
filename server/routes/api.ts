import { Router } from 'express';
import { checkHealth } from '../controllers/healthController.js';

const router = Router();

// مسار فحص الحالة - أساسي للتأكد من اتصال الواجهة بالسيرفر
router.get('/health', checkHealth);

// يمكنك إضافة مسارات المشروع الأخرى هنا (مثل /rooms أو /users)
export default router;