export type UserRole = 'DOCTOR_TA' | 'FACULTY_ADMIN' | 'UNIVERSITY_ADMIN';
export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface NavItem {
  title: string;
  href: string;
  icon: string;
  roles: UserRole[];
}

export interface Course {
  id: string;
  title: string;
  code: string;
  department: string;
  doctor: string;
  studentsCount: string;
  description: string;
}

export interface Assignment {
  id: string;
  title: string;
  courseId: string;
  dueDate: string;
  status: 'active' | 'closed';
  submissionsCount: string;
}

export interface Student {
  id: string;
  name: string;
  department: string;
  level: string;
  status: string;
  email: string;
}

export interface Faculty {
  id: string;
  name: string;
  dean: string;
  departmentsCount: string;
}
