import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';

export const authorize = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'لم يتم توفير توكن المصادقة' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, config.jwtSecret) as any;
      
      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ error: 'صلاحيات غير كافية للوصول إلى هذا المورد' });
      }

      (req as any).user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'توكن غير صالح أو منتهي الصلاحية' });
    }
  };
};