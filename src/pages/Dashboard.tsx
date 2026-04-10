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

const attendanceTrends = [
  { name: 'Sep 01', value: 82 },
  { name: 'Sep 08', value: 85 },
  { name: 'Sep 15', value: 88 },
  { name: 'Sep 22', value: 92 },
  { name: 'Sep 29', value: 89 },
  { name: 'Oct 06', value: 94 },
  { name: 'Oct 13', value: 91 },
]

const recentSubmissions = [
  { name: "Ahmed Ramadan Korany", course: "Advanced Software Engineering", time: "2 hours ago", status: "Pending" },
  { name: "Sara Ahmed Hassan", course: "Database Management Systems", time: "4 hours ago", status: "Pending" },
  { name: "Mohamed Ali Omar", course: "Data Structures & Algorithms", time: "5 hours ago", status: "Pending" },
  { name: "Laila Mahmoud Zaki", course: "Introduction to Computer Science", time: "1 day ago", status: "Pending" },
]

const facultyStats = [
  { title: "Academic Departments", value: "12 Units", icon: Building2, color: "primary", description: "Across 3 main buildings" },
  { title: "Faculty Members", value: "142 Staff", icon: Users, color: "blue", description: "Professors & Assistants" },
  { title: "Pending Approvals", value: "24 Requests", icon: AlertCircle, color: "amber", description: "Course & Result approvals" },
  { title: "Research Output", value: "+15%", icon: ArrowUpRight, color: "emerald", description: "Increase from last year" },
]

const universityStats = [
  { title: "Total Faculties", value: "14 Faculties", icon: School, color: "primary", description: "Engineering, Medicine, CS..." },
  { title: "Active Users", value: "12,450", icon: Users, color: "blue", description: "Students & Staff online" },
  { title: "System Status", value: "Operational", icon: Globe, color: "emerald", description: "All services healthy" },
  { title: "Server Load", value: "24%", icon: Clock, color: "amber", description: "Optimized performance" },
]

export function Dashboard() {
  const { role, t } = useApp()

  if (role === 'DOCTOR_TA') return <DoctorDashboard t={t} />
  if (role === 'FACULTY_ADMIN') return <FacultyDashboard t={t} />
  return <UniversityDashboard t={t} />
}

function DoctorDashboard({ t }: { t: any }) {
  return (
    <div className="space-y-12">
      <div className="relative overflow-hidden rounded-[3.5rem] bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-12 text-primary-foreground shadow-2xl shadow-primary/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
        <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-black/10 blur-3xl" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-6">
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-none px-6 py-2 rounded-full backdrop-blur-xl font-black uppercase tracking-widest text-[10px]">Academic Year 2023/2024</Badge>
            <h1 className="text-5xl font-black tracking-tighter md:text-7xl leading-none">
              {t('welcome_back')},<br /> Mahmoud Ramadan!
            </h1>
            <p className="text-xl font-medium opacity-90 max-w-2xl leading-relaxed">
              You have <span className="font-black underline underline-offset-4">18 assignments</span> to review and 2 upcoming lectures today. Your current attendance rate is performing 5% better than last semester.
            </p>
          </div>
          <Button className="bg-white text-primary hover:bg-white/90 shadow-2xl shadow-black/20 rounded-[2rem] h-20 px-12 text-xl font-black transition-all hover:scale-105 active:scale-95 shrink-0 border-none">
            <Plus className="me-3 size-7" />
            {t('new_material')}
          </Button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Card className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-[3rem] bg-card/40 backdrop-blur-xl border border-white/10">
          <CardHeader className="pb-2">
            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
              <BookOpen className="size-8 text-primary" />
            </div>
            <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">{t('active_courses')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black tracking-tighter text-gradient">04 Courses</div>
            <p className="text-sm text-muted-foreground font-bold mt-3">Faculty of Computer Science</p>
          </CardContent>
        </Card>
        <Card className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-[3rem] bg-card/40 backdrop-blur-xl border border-white/10">
          <CardHeader className="pb-2">
            <div className="size-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
              <Users className="size-8 text-blue-600" />
            </div>
            <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">{t('total_students')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black tracking-tighter text-gradient">342 Students</div>
            <p className="text-sm text-muted-foreground font-bold mt-3">Enrolled in your sections</p>
          </CardContent>
        </Card>
        <Card className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-[3rem] bg-card/40 backdrop-blur-xl border border-white/10">
          <CardHeader className="pb-2">
            <div className="size-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
              <FileText className="size-8 text-amber-600" />
            </div>
            <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">{t('pending_assignments')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black tracking-tighter text-gradient">18 Pending</div>
            <p className="text-sm text-amber-600 font-black mt-3 flex items-center gap-2">
              <AlertCircle className="size-4" />
              Action required
            </p>
          </CardContent>
        </Card>
        <Card className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-[3rem] bg-card/40 backdrop-blur-xl border border-white/10">
          <CardHeader className="pb-2">
            <div className="size-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
              <CheckCircle2 className="size-8 text-emerald-600" />
            </div>
            <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">{t('avg_attendance')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black tracking-tighter text-gradient">92.4%</div>
            <p className="text-sm text-emerald-600 font-black mt-3 flex items-center gap-2">
              <ArrowUpRight className="size-4" />
              Top 5% in Faculty
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-7">
        <Card className="lg:col-span-4 border-none shadow-xl overflow-hidden rounded-[2.5rem] bg-card/50 backdrop-blur-sm">
          <CardHeader className="border-b bg-muted/30 p-8">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-black">{t('attendance_trends')}</CardTitle>
                <CardDescription className="text-base font-medium">Student presence analysis for the current semester.</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="rounded-xl font-bold">Download CSV</Button>
            </div>
          </CardHeader>
          <CardContent className="h-[400px] p-8">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attendanceTrends}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12, fontWeight: 600}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12, fontWeight: 600}} dx={-10} />
                <Tooltip 
                  contentStyle={{backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '16px', boxShadow: 'var(--shadow-2xl)', border: 'none'}}
                  itemStyle={{color: 'hsl(var(--primary))', fontWeight: 800}}
                  cursor={{stroke: 'hsl(var(--primary))', strokeWidth: 2}}
                />
                <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" animationDuration={2000} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3 border-none shadow-xl overflow-hidden rounded-[2.5rem] bg-card/50 backdrop-blur-sm">
          <CardHeader className="border-b bg-muted/30 p-8">
            <CardTitle className="text-2xl font-black">{t('recent_submissions')}</CardTitle>
            <CardDescription className="text-base font-medium">Latest student works awaiting evaluation.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              {recentSubmissions.map((sub, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-pointer">
                  <div className="size-14 rounded-2xl bg-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 shadow-sm">
                    <FileText className="size-7" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-lg font-black leading-none group-hover:text-primary transition-colors">{sub.name}</p>
                    <p className="text-sm text-muted-foreground font-bold">{sub.course}</p>
                    <p className="text-[10px] text-muted-foreground/60 font-black uppercase tracking-widest">{sub.time}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="rounded-xl font-black hover:bg-primary hover:text-primary-foreground h-10 px-4">Review</Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-10 rounded-2xl h-14 font-black border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">View All Submissions</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function FacultyDashboard({ t }: { t: any }) {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between bg-card/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-xl">
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-gradient">{t('faculty_admin')}</h1>
          <p className="text-xl text-muted-foreground font-medium mt-2">Faculty of Computer Science & Information Technology</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-2xl font-black h-16 px-8 border-2 shadow-sm hover-lift">
            <FileText className="me-2 size-5" />
            Generate Report
          </Button>
          <Button className="rounded-2xl font-black h-16 px-8 shadow-2xl shadow-primary/20 hover-lift">
            <UserPlus className="me-2 size-5" />
            Manage Students
          </Button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {facultyStats.map((stat, i) => (
          <Card key={i} className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-[3rem] bg-card/40 backdrop-blur-xl border border-white/10">
            <CardHeader className="pb-2">
              <div className={cn(
                "size-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner",
                stat.color === 'primary' ? "bg-primary/10 text-primary" :
                stat.color === 'blue' ? "bg-blue-500/10 text-blue-600" :
                stat.color === 'amber' ? "bg-amber-500/10 text-amber-600" :
                "bg-emerald-500/10 text-emerald-600"
              )}>
                <stat.icon className="size-8" />
              </div>
              <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black tracking-tighter text-gradient">{stat.value}</div>
              <p className="text-sm text-muted-foreground font-bold mt-3">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function UniversityDashboard({ t }: { t: any }) {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between bg-card/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-xl">
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-gradient">{t('uni_control')}</h1>
          <p className="text-xl text-muted-foreground font-medium mt-2">Global University Infrastructure & Operations</p>
        </div>
        <Button className="rounded-2xl font-black h-16 px-10 shadow-2xl shadow-primary/20 hover-lift">
          <Plus className="me-2 size-6" />
          Add New Faculty
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {universityStats.map((stat, i) => (
          <Card key={i} className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-[3rem] bg-card/40 backdrop-blur-xl border border-white/10">
            <CardHeader className="pb-2">
              <div className={cn(
                "size-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner",
                stat.color === 'primary' ? "bg-primary/10 text-primary" :
                stat.color === 'blue' ? "bg-blue-500/10 text-blue-600" :
                stat.color === 'amber' ? "bg-amber-500/10 text-amber-600" :
                "bg-emerald-500/10 text-emerald-600"
              )}>
                <stat.icon className="size-8" />
              </div>
              <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black tracking-tighter text-gradient">{stat.value}</div>
              <p className="text-sm text-muted-foreground font-bold mt-3">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
