import { PrismaClient } from '@prisma/client';
import { config } from './env.js';

export const prisma = new PrismaClient();

export const checkDbConnection = async () => {
  try {
    await prisma.$connect();
    console.log('Database connection successful.');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};
