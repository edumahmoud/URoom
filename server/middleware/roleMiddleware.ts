import { Request, Response, NextFunction } from 'express';

export const authorize = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // في مرحلة التطوير الحالية، نعتمد على رأس الطلب (Header) لتحديد الدور
    // مستقبلاً سيتم استخراج هذا من توكن JWT
    const userRole = req.headers['x-user-role'] as string;

    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({ error: 'صلاحيات غير كافية للوصول إلى هذا المورد' });
    }

    next();
  };
};