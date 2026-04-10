import * as React from "react"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts'
import { 
  BookOpen, 
  Users, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ArrowUpRight,
  Plus,
  Upload,
  QrCode,
  Building2,
  ShieldCheck,
  UserPlus,
  School,
  Globe,
  Settings
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useApp } from "@/src/context/AppContext"

const academicData = [
  { name: 'Week 1', value: 85 },
  { name: 'Week 2', value: 88 },
  { name: 'Week 3', value: 92 },
  { name: 'Week 4', value: 89 },
  { name: 'Week 5', value: 94 },
  { name: 'Week 6', value: 91 },
]

export function Dashboard() {
  const { role, t } = useApp()

  if (role === 'DOCTOR_TA') return <DoctorDashboard t={t} />
  if (role === 'FACULTY_ADMIN') return <FacultyDashboard t={t} />
  return <UniversityDashboard t={t} />
}

function DoctorDashboard({ t }: { t: any }) {
  return (
    <div className="space-y-10">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-10 text-primary-foreground shadow-2xl shadow-primary/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)]" />
        <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-white/5 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              {t('welcome_back')}, Mahmoud Ramadan!
            </h1>
            <p className="text-lg font-medium opacity-80">
              Here's what's happening in your academic dashboard today.
            </p>
          </div>
          <Button className="bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/10 rounded-2xl h-14 px-8 font-bold transition-all hover:scale-105 active:scale-95">
            <Plus className="me-2 size-5" />
            {t('new_material')}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
          <CardHeader className="pb-2">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="size-6 text-primary" />
            </div>
            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{t('active_courses')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black tracking-tight">4 Courses</div>
            <p className="text-xs text-muted-foreground font-medium mt-2">Computer Science Dept.</p>
          </CardContent>
        </Card>
        <Card className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
          <CardHeader className="pb-2">
            <div className="size-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="size-6 text-blue-600" />
            </div>
            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{t('total_students')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black tracking-tight">342 Students</div>
            <p className="text-xs text-muted-foreground font-medium mt-2">Across all sections</p>
          </CardContent>
        </Card>
        <Card className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
          <CardHeader className="pb-2">
            <div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="size-6 text-amber-600" />
            </div>
            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{t('pending_assignments')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black tracking-tight">18 Pending</div>
            <p className="text-xs text-amber-600 font-bold mt-2 flex items-center gap-1">
              <AlertCircle className="size-3" />
              Requires review
            </p>
          </CardContent>
        </Card>
        <Card className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
          <CardHeader className="pb-2">
            <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="size-6 text-emerald-600" />
            </div>
            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{t('avg_attendance')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black tracking-tight">92.4%</div>
            <p className="text-xs text-muted-foreground font-medium mt-2">This semester average</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-none shadow-md overflow-hidden">
          <CardHeader className="border-b bg-muted/30">
            <CardTitle className="text-lg">{t('attendance_trends')}</CardTitle>
            <CardDescription>Visual representation of student presence over time.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pt-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={academicData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px', boxShadow: 'var(--shadow-lg)'}}
                  itemStyle={{color: 'hsl(var(--primary))'}}
                />
                <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3 border-none shadow-md overflow-hidden">
          <CardHeader className="border-b bg-muted/30">
            <CardTitle className="text-lg">{t('recent_submissions')}</CardTitle>
            <CardDescription>Latest student works awaiting your review.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {[
                { name: "Ahmed Ali", course: "Introduction to CS" },
                { name: "Sara Hassan", course: "Data Structures" },
                { name: "Mohamed Omar", course: "Software Engineering" },
                { name: "Laila Mahmoud", course: "Database Systems" },
              ].map((sub, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <div className="size-10 rounded-xl bg-secondary flex items-center justify-center transition-colors group-hover:bg-primary/10">
                    <FileText className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-semibold leading-none group-hover:text-primary transition-colors">{sub.name}</p>
                    <p className="text-xs text-muted-foreground">{sub.course}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="rounded-full hover:bg-primary hover:text-primary-foreground">Review</Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6 rounded-full">View All Submissions</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function FacultyDashboard({ t }: { t: any }) {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">{t('faculty_admin')}</h1>
          <p className="text-muted-foreground font-medium">Manage departments, staff, and academic approvals.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl font-bold h-12 px-6 border-2">
            <FileText className="me-2 size-4" />
            Report
          </Button>
          <Button className="rounded-xl font-bold h-12 px-6 shadow-lg shadow-primary/20">
            <UserPlus className="me-2 size-4" />
            {t('students')}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Departments", value: "8 Depts", icon: Building2, color: "primary" },
          { title: "Academic Staff", value: "84 Staff", icon: Users, color: "blue" },
          { title: "Pending Approvals", value: "12 Courses", icon: AlertCircle, color: "amber" },
          { title: "Success Rate", value: "94.2%", icon: ArrowUpRight, color: "emerald" },
        ].map((stat, i) => (
          <Card key={i} className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden rounded-[2rem]">
            <CardHeader className="pb-2">
              <div className={cn(
                "size-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                stat.color === 'primary' ? "bg-primary/10 text-primary" :
                stat.color === 'blue' ? "bg-blue-500/10 text-blue-600" :
                stat.color === 'amber' ? "bg-amber-500/10 text-amber-600" :
                "bg-emerald-500/10 text-emerald-600"
              )}>
                <stat.icon className="size-6" />
              </div>
              <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black tracking-tight">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function UniversityDashboard({ t }: { t: any }) {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">{t('uni_control')}</h1>
          <p className="text-muted-foreground font-medium">Global university management and system administration.</p>
        </div>
        <Button className="rounded-xl font-bold h-12 px-6 shadow-lg shadow-primary/20">
          <Plus className="me-2 size-4" />
          Add Faculty
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Faculties", value: "12 Faculties", icon: School, color: "primary" },
          { title: "Total Users", value: "1,245 Users", icon: Users, color: "blue" },
          { title: "System Health", value: "Healthy", icon: Globe, color: "emerald" },
          { title: "Active Sessions", value: "1,420", icon: Clock, color: "amber" },
        ].map((stat, i) => (
          <Card key={i} className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden rounded-[2rem]">
            <CardHeader className="pb-2">
              <div className={cn(
                "size-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                stat.color === 'primary' ? "bg-primary/10 text-primary" :
                stat.color === 'blue' ? "bg-blue-500/10 text-blue-600" :
                stat.color === 'amber' ? "bg-amber-500/10 text-amber-600" :
                "bg-emerald-500/10 text-emerald-600"
              )}>
                <stat.icon className="size-6" />
              </div>
              <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black tracking-tight">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
