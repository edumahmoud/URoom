import { Request, Response } from 'express';
import { prisma } from '../config/db.js';

export const loginOrSignup = async (req: Request, res: Response) => {
  const { email, name, role } = req.body;

  try {
    // البحث عن المستخدم أو إنشاؤه تلقائياً (Upsert)
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        name,
        // أمنياً: لا يسمح للمستخدم بتغيير دوره بنفسه عند تسجيل الدخول
      },
      create: {
        email,
        name,
        role: role || 'STUDENT', // الدور الافتراضي طالب
      },
    });

    // تحديد الصلاحيات بناءً على الدور
    const permissions = {
      canManageUniversity: user.role === 'ADMIN',
      canManageFaculty: ['ADMIN', 'FACULTY'].includes(user.role),
      canManageCourses: ['ADMIN', 'FACULTY', 'DOCTOR_TA'].includes(user.role),
      canViewResults: true,
    };

    res.status(200).json({
      user,
      permissions,
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'فشل في عملية تسجيل الدخول', details: error });
  }
};