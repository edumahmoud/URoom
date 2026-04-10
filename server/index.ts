import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import { checkDbConnection } from './config/db.js';
import apiRouter from './routes/api.js';

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// المسارات
app.use('/api', apiRouter);

// معالج المسارات غير الموجودة (404)
app.use((req, res) => {
  res.status(404).json({ error: 'المسار غير موجود' });
});

// معالج الأخطاء المركزي (Global Error Handler)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('🔴 Server Error:', err.stack);
  res.status(500).json({
    error: 'حدث خطأ في السيرفر الداخلي',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const startServer = async () => {
  // التأكد من الاتصال بقاعدة البيانات قبل بدء السيرفر
  await checkDbConnection();

  app.listen(config.port, () => {
    console.log(`🚀 URoom Server is running on http://localhost:${config.port}`);
  });
};

startServer();