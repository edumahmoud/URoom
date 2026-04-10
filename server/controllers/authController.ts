import { Request, Response } from 'express';
import { prisma } from '../config/db.js';
import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';

export const loginOrSignup = async (req: Request, res: Response) => {
  const { email, name, role } = req.body;

  // أمنياً: التحقق من أن الدور المرسل هو دور صالح وليس محاولة اختراق
  const validRoles = ['ADMIN', 'FACULTY', 'DOCTOR_TA', 'STUDENT'];
  const finalRole = validRoles.includes(role) ? role : 'STUDENT';

  try {
    // البحث عن المستخدم أو إنشاؤه تلقائياً (Upsert)
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        name,
        // لا يتم تحديث الـ role هنا لمنع تصعيد الصلاحيات يدوياً
      },
      create: {
        email,
        name,
        role: finalRole,
      },
    });

    // تحديد الصلاحيات بناءً على الدور
    const permissions = {
      canManageUniversity: user.role === 'ADMIN',
      canManageFaculty: ['ADMIN', 'FACULTY'].includes(user.role),
      canManageCourses: ['ADMIN', 'FACULTY', 'DOCTOR_TA'].includes(user.role),
      canViewResults: true,
    };

    // إصدار توكن JWT للموبايل والويب
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      config.jwtSecret,
      { expiresIn: '30d' } // مدة طويلة تناسب مستخدم الموبايل
    );

    res.status(200).json({
      user,
      token,
      permissions,
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'فشل في عملية تسجيل الدخول', details: error });
  }
};