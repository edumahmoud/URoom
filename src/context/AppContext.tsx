import * as React from 'react';
import { UserRole, Language, Theme } from '../types';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colorTheme: string;
  setColorTheme: (color: string) => void;
  toggleTheme: () => void;
  t: (key: string) => string;
  user: any;
  setUser: (user: any) => void;
}

const AppContext = React.createContext<AppContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    login_title: 'Sign in to URoom',
    login_subtitle: 'Select your role to continue',
    dashboard: 'Dashboard',
    courses: 'My Courses',
    assignments: 'Assignments',
    attendance: 'Attendance',
    faculty_mgmt: 'Faculty Management',
    students: 'Student Directory',
    results: 'Results Approval',
    uni_mgmt: 'University Control',
    faculties: 'Faculties & Depts',
    users: 'System Users',
    settings: 'Settings',
    profile: 'Profile',
    logout: 'Log out',
    search: 'Search system...',
    role: 'Role',
    academic_overview: 'Academic Overview',
    manage_courses: 'Manage your courses, lectures, and student submissions.',
    new_material: 'New Course Material',
    active_courses: 'Active Courses',
    total_students: 'Total Students',
    pending_assignments: 'Pending Assignments',
    avg_attendance: 'Avg. Attendance',
    attendance_trends: 'Attendance Trends',
    recent_submissions: 'Recent Submissions',
    course_mgmt: 'Course Management',
    faculty_admin: 'Faculty Administration',
    uni_control: 'University Control Center',
    language: 'Language',
    dark_mode: 'Dark Mode',
    account_settings: 'Account Settings',
    notifications: 'Notifications',
    save_changes: 'Save Changes',
    edit_profile: 'Edit Profile',
    full_name: 'Full Name',
    email: 'Email Address',
    bio: 'Biography',
    placeholder_name: 'Student Name',
    placeholder_course: 'Course Title',
    placeholder_dept: 'Department Name',
    placeholder_status: 'Status',
    switch_role: 'Switch Role',
    welcome_back: 'Welcome back',
  },
  ar: {
    login_title: 'تسجيل الدخول إلى URoom',
    login_subtitle: 'اختر دورك للمتابعة',
    dashboard: 'لوحة القيادة',
    courses: 'مقرراتي',
    assignments: 'التكليفات',
    attendance: 'الحضور',
    faculty_mgmt: 'إدارة الكلية',
    students: 'دليل الطلاب',
    results: 'اعتماد النتائج',
    uni_mgmt: 'تحكم الجامعة',
    faculties: 'الكليات والأقسام',
    users: 'مستخدمي النظام',
    settings: 'الإعدادات',
    profile: 'الملف الشخصي',
    logout: 'تسجيل الخروج',
    search: 'البحث في النظام...',
    role: 'الدور',
    academic_overview: 'نظرة عامة أكاديمية',
    manage_courses: 'إدارة المقررات والمحاضرات وتسليمات الطلاب.',
    new_material: 'مادة دراسية جديدة',
    active_courses: 'المقررات النشطة',
    total_students: 'إجمالي الطلاب',
    pending_assignments: 'التكليفات المعلقة',
    avg_attendance: 'متوسط الحضور',
    attendance_trends: 'اتجاهات الحضور',
    recent_submissions: 'التسليمات الأخيرة',
    course_mgmt: 'إدارة المقررات',
    faculty_admin: 'إدارة الكلية',
    uni_control: 'مركز تحكم الجامعة',
    language: 'اللغة',
    dark_mode: 'الوضع الليلي',
    account_settings: 'إعدادات الحساب',
    notifications: 'التنبيهات',
    save_changes: 'حفظ التغييرات',
    edit_profile: 'تعديل الملف الشخصي',
    full_name: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    bio: 'السيرة الذاتية',
    placeholder_name: 'اسم الطالب',
    placeholder_course: 'عنوان المقرر',
    placeholder_dept: 'اسم القسم',
    placeholder_status: 'الحالة',
    switch_role: 'تبديل الدور',
    welcome_back: 'مرحباً بك',
  }
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = React.useState<UserRole>('DOCTOR_TA');
  const [language, setLanguage] = React.useState<Language>('en');
  const [theme, setTheme] = React.useState<Theme>('light');
  const [colorTheme, setColorTheme] = React.useState<string>('indigo');
  const [user, setUser] = React.useState<any>(null);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const t = (key: string) => translations[language][key] || key;

  React.useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  React.useEffect(() => {
    const themes = ['theme-indigo', 'theme-emerald', 'theme-rose', 'theme-amber', 'theme-violet'];
    document.documentElement.classList.remove(...themes);
    document.documentElement.classList.add(`theme-${colorTheme}`);
  }, [colorTheme]);

  return (
    <AppContext.Provider value={{ role, setRole, language, setLanguage, theme, setTheme, colorTheme, setColorTheme, toggleTheme, t, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
