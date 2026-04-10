import React from 'react';
import { useApp } from '../context/AppContext';
import { GraduationCap, ShieldCheck, BookOpen, Building2 } from 'lucide-react';

export default function LoginPage() {
  const { t, setRole, setUser } = useApp();

  const roles = [
    { id: 'ADMIN', title: 'University Admin', icon: ShieldCheck, color: 'text-rose-600 bg-rose-50' },
    { id: 'FACULTY', title: 'Faculty Dean', icon: Building2, color: 'text-emerald-600 bg-emerald-50' },
    { id: 'DOCTOR_TA', title: 'Doctor / TA', icon: BookOpen, color: 'text-indigo-600 bg-indigo-50' },
    { id: 'STUDENT', title: 'Student', icon: GraduationCap, color: 'text-amber-600 bg-amber-50' },
  ];

  const handleLogin = async (roleId: string) => {
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: `${roleId.toLowerCase()}@uniroom.edu`,
          name: `User ${roleId}`,
          role: roleId
        })
      });

      if (!response.ok) throw new Error('فشل الاتصال بالسيرفر');

      const data = await response.json();
      if (data.user) {
        setUser(data.user);
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('تعذر الاتصال بالسيرفر. يرجى التأكد من تشغيل الخلفية (Backend) وحاول مجدداً.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-geist">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
            <Building2 className="text-white h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">{t('login_title')}</h2>
          <p className="mt-2 text-slate-500">{t('login_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleLogin(role.id)}
              className="flex items-center p-4 border border-slate-100 rounded-xl hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group text-right rtl:text-right"
            >
              <div className={`p-3 rounded-lg ${role.color} mr-4 rtl:ml-4 rtl:mr-0 group-hover:scale-110 transition-transform`}>
                <role.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800">{role.title}</h3>
                <p className="text-xs text-slate-400">Login as {role.id.toLowerCase()}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center text-slate-400 text-sm mt-6">
          &copy; {new Date().getFullYear()} URoom System. All rights reserved.
        </div>
      </div>
    </div>
  );
}