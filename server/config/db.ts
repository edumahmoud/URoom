import { PrismaClient } from '@prisma/client';
import { config } from './env.js';

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: config.dbUrl,
    },
  },
});

export const checkDbConnection = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Database connection successful.');
  } catch (error) {
    console.error('❌ Database connection failed:', error instanceof Error ? error.message : error);
    // يفضل إنهاء العملية إذا لم تنجح في الاتصال بقاعدة البيانات عند بدء التشغيل
    process.exit(1);
  }
};
