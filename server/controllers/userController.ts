import { Request, Response } from 'express';
import { prisma } from '../config/db.js';

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await prisma.user.findMany({
      where: { role: 'STUDENT' },
      orderBy: { name: 'asc' }
    });
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'فشل في جلب قائمة الطلاب' });
  }
};

export const getFaculty = async (req: Request, res: Response) => {
  try {
    const faculty = await prisma.user.findMany({
      where: { 
        role: { in: ['FACULTY', 'DOCTOR_TA'] } 
      },
      orderBy: { name: 'asc' }
    });
    res.json(faculty);
  } catch (error) {
    console.error('Error fetching faculty:', error);
    res.status(500).json({ error: 'فشل في جلب قائمة الهيئة التدريسية' });
  }
};