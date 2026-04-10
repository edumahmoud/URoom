import { PrismaClient } from '@prisma/client';
import { config } from './env.js';

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: config.dbUrl,
      },
    },
  });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

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
