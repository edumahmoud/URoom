import { Request, Response } from 'express';
import { prisma } from '../config/db.js';

export const checkHealth = async (req: Request, res: Response) => {
  try {
    await prisma.$queryRaw`SELECT 1`; // فحص حقيقي لقاعدة البيانات
    res.status(200).json({
      status: 'healthy',
      database: 'connected',
      uptime: Math.floor(process.uptime()) + 's',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      database: 'disconnected',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};