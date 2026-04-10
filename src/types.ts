export type UserRole = 'DOCTOR_TA' | 'FACULTY_ADMIN' | 'UNIVERSITY_ADMIN';

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
}

export interface Student {
  id: string;
  name: string;
  department: string;
  level: string;
  status: string;
}

export interface Faculty {
  id: string;
  name: string;
  dean: string;
  departmentsCount: string;
}
