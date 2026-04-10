import * as React from "react"
import { useParams, Link } from "react-router-dom"
import { BookOpen, Users, Clock, FileText, ArrowLeft, Upload, QrCode, Plus, ChevronRight, CheckCircle2, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useApp } from "@/src/context/AppContext"
import { cn } from "@/lib/utils"

const courseList = [
  { id: "CS101", name: "Introduction to Computer Science", dept: "Computer Science", students: 120, hours: 3, status: "Active" },
  { id: "CS202", name: "Data Structures & Algorithms", dept: "Computer Science", students: 85, hours: 4, status: "Active" },
  { id: "SE301", name: "Software Engineering", dept: "Software Engineering", students: 94, hours: 3, status: "Active" },
  { id: "DB404", name: "Database Management Systems", dept: "Information Systems", students: 110, hours: 3, status: "Active" },
  { id: "AI505", name: "Artificial Intelligence", dept: "Computer Science", students: 65, hours: 4, status: "Active" },
  { id: "NW606", name: "Computer Networks", dept: "Computer Science", students: 78, hours: 3, status: "Active" },
]

export function Courses() {
  const { t } = useApp()
  const { id } = useParams()

  if (id) {
    const course = courseList.find(c => c.id === id) || courseList[0]
    return <CourseDetails course={course} t={t} />
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between bg-card/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-xl">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-gradient">{t('courses')}</h1>
          <p className="text-muted-foreground font-medium">Manage and view all your academic courses.</p>
        </div>
        <Button className="rounded-2xl font-black h-14 px-8 shadow-2xl shadow-primary/20 hover-lift">
          <Plus className="me-2 size-5" />
          Add Course
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courseList.map((course) => (
          <Card key={course.id} className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-[3rem] bg-card/40 backdrop-blur-xl border border-white/10">
            <div className="h-32 bg-gradient-to-br from-primary to-primary/60 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent)]" />
              <div className="absolute top-6 end-6">
                <Badge className="bg-white/20 backdrop-blur-md border-white/20 text-white font-black rounded-xl px-4 py-1 uppercase tracking-widest text-[10px]">{course.status}</Badge>
              </div>
            </div>
            <CardHeader className="relative -mt-12 pt-0 px-8">
              <div className="size-20 rounded-[2rem] bg-card shadow-2xl border-4 border-background flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-primary/10">
                <BookOpen className="size-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-black group-hover:text-primary transition-colors tracking-tight">{course.name}</CardTitle>
              <CardDescription className="font-black text-primary/70 text-sm uppercase tracking-widest">{course.dept}</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="flex items-center gap-6 text-sm text-muted-foreground font-bold">
                <div className="flex items-center gap-2">
                  <Users className="size-5 text-primary/60" />
                  <span>{course.students} Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-5 text-primary/60" />
                  <span>{course.hours}h / week</span>
                </div>
              </div>
              <div className="mt-8">
                <Link 
                  to={`/courses/${course.id}`} 
                  className={cn(
                    buttonVariants({ variant: "outline" }), 
                    "w-full h-14 justify-between rounded-2xl border-2 font-black uppercase tracking-widest text-[10px] group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shadow-sm"
                  )}
                >
                  View Details
                  <ChevronRight className="size-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function CourseDetails({ course, t }: { course: any, t: any }) {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-6">
        <Link to="/courses" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12 rounded-2xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all")}>
          <ArrowLeft className="size-5" />
        </Link>
        <div>
          <h1 className="text-4xl font-black tracking-tight">{course.name}</h1>
          <p className="text-muted-foreground font-bold text-lg">{course.id} • {course.dept}</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="border-none shadow-xl bg-primary text-primary-foreground rounded-[2rem] overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
          <CardHeader className="p-8 pb-4 relative z-10">
            <CardTitle className="text-sm font-bold opacity-70 uppercase tracking-widest">Total Students</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 relative z-10">
            <div className="text-5xl font-black">120</div>
            <div className="mt-6 h-2 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white w-3/4" />
            </div>
            <p className="mt-4 text-sm font-bold opacity-80">75% capacity reached</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Average Attendance</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="text-5xl font-black text-primary">92%</div>
            <div className="mt-6 flex items-center gap-2 text-emerald-500 font-bold">
              <TrendingUp className="size-5" />
              <span>+4% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Assignments Due</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="text-5xl font-black text-amber-500">03</div>
            <p className="mt-6 text-sm font-bold text-muted-foreground">Next due in 2 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-none shadow-xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="border-b bg-muted/30 p-8 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-black">Recent Materials</CardTitle>
              <CardDescription className="text-base font-medium">Manage your course content and uploads.</CardDescription>
            </div>
            <Button className="rounded-xl h-12 px-6 font-bold uppercase tracking-widest text-xs">
              <Upload className="me-2 size-4" />
              Upload
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="ps-8 h-14 font-bold uppercase tracking-widest text-[10px]">Name</TableHead>
                  <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Type</TableHead>
                  <TableHead className="pe-8 h-14 text-end font-bold uppercase tracking-widest text-[10px]">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3, 4].map((i) => (
                  <TableRow key={i} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                    <TableCell className="ps-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <FileText className="size-5" />
                        </div>
                        <span className="font-bold">Lecture_{i}_Slides.pdf</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-5">
                      <Badge variant="secondary" className="rounded-lg font-bold">PDF</Badge>
                    </TableCell>
                    <TableCell className="pe-8 py-5 text-end text-muted-foreground font-medium">Oct {10 + i}, 2023</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-xl font-black">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 grid gap-4">
              <Button variant="outline" className="h-16 rounded-2xl justify-start px-6 border-2 group hover:border-primary hover:bg-primary/5 transition-all">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary me-4 group-hover:scale-110 transition-transform">
                  <QrCode className="size-5" />
                </div>
                <div className="text-start">
                  <p className="font-bold">Take Attendance</p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Start QR Session</p>
                </div>
              </Button>
              <Button variant="outline" className="h-16 rounded-2xl justify-start px-6 border-2 group hover:border-primary hover:bg-primary/5 transition-all">
                <div className="size-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 me-4 group-hover:scale-110 transition-transform">
                  <Plus className="size-5" />
                </div>
                <div className="text-start">
                  <p className="font-bold">New Assignment</p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Create Task</p>
                </div>
              </Button>
              <Button variant="outline" className="h-16 rounded-2xl justify-start px-6 border-2 group hover:border-primary hover:bg-primary/5 transition-all">
                <div className="size-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 me-4 group-hover:scale-110 transition-transform">
                  <Users className="size-5" />
                </div>
                <div className="text-start">
                  <p className="font-bold">Student List</p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">View Roster</p>
                </div>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden bg-muted/30">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-xl font-black">Course Progress</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>Syllabus Covered</span>
                  <span className="text-primary">65%</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[65%]" />
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border shadow-sm">
                <CheckCircle2 className="size-5 text-emerald-500" />
                <p className="text-xs font-bold">Midterm exams completed</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
