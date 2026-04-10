import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'dashboard',
    href: '/',
    icon: 'LayoutDashboard',
    roles: ['DOCTOR_TA', 'FACULTY_ADMIN', 'UNIVERSITY_ADMIN'],
  },
  {
    title: 'courses',
    href: '/courses',
    icon: 'BookOpen',
    roles: ['DOCTOR_TA'],
  },
  {
    title: 'assignments',
    href: '/assignments',
    icon: 'FileText',
    roles: ['DOCTOR_TA'],
  },
  {
    title: 'attendance',
    href: '/attendance',
    icon: 'QrCode',
    roles: ['DOCTOR_TA'],
  },
  {
    title: 'faculty_mgmt',
    href: '/faculty-mgmt',
    icon: 'Building2',
    roles: ['FACULTY_ADMIN'],
  },
  {
    title: 'students',
    href: '/students',
    icon: 'Users',
    roles: ['FACULTY_ADMIN'],
  },
  {
    title: 'results',
    href: '/results',
    icon: 'CheckCircle2',
    roles: ['FACULTY_ADMIN'],
  },
  {
    title: 'uni_mgmt',
    href: '/uni-mgmt',
    icon: 'Globe',
    roles: ['UNIVERSITY_ADMIN'],
  },
  {
    title: 'faculties',
    href: '/faculties',
    icon: 'School',
    roles: ['UNIVERSITY_ADMIN'],
  },
  {
    title: 'users',
    href: '/users',
    icon: 'UserCog',
    roles: ['UNIVERSITY_ADMIN'],
  },
  {
    title: 'settings',
    href: '/settings',
    icon: 'Settings',
    roles: ['DOCTOR_TA', 'FACULTY_ADMIN', 'UNIVERSITY_ADMIN'],
  },
];
