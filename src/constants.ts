import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: 'LayoutDashboard',
    roles: ['DOCTOR_TA', 'FACULTY_ADMIN', 'UNIVERSITY_ADMIN'],
  },
  {
    title: 'My Courses',
    href: '/courses',
    icon: 'BookOpen',
    roles: ['DOCTOR_TA'],
  },
  {
    title: 'Assignments',
    href: '/assignments',
    icon: 'FileText',
    roles: ['DOCTOR_TA'],
  },
  {
    title: 'Attendance',
    href: '/attendance',
    icon: 'QrCode',
    roles: ['DOCTOR_TA'],
  },
  {
    title: 'Faculty Management',
    href: '/faculty-mgmt',
    icon: 'Building2',
    roles: ['FACULTY_ADMIN'],
  },
  {
    title: 'Student Directory',
    href: '/students',
    icon: 'Users',
    roles: ['FACULTY_ADMIN'],
  },
  {
    title: 'Results Approval',
    href: '/results',
    icon: 'CheckCircle2',
    roles: ['FACULTY_ADMIN'],
  },
  {
    title: 'University Control',
    href: '/uni-mgmt',
    icon: 'Globe',
    roles: ['UNIVERSITY_ADMIN'],
  },
  {
    title: 'Faculties & Depts',
    href: '/faculties',
    icon: 'School',
    roles: ['UNIVERSITY_ADMIN'],
  },
  {
    title: 'System Users',
    href: '/users',
    icon: 'UserCog',
    roles: ['UNIVERSITY_ADMIN'],
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: 'Settings',
    roles: ['DOCTOR_TA', 'FACULTY_ADMIN', 'UNIVERSITY_ADMIN'],
  },
];
