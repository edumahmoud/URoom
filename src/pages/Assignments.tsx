import * as React from "react"
import { useParams, Link } from "react-router-dom"
import { FileText, Clock, CheckCircle2, AlertCircle, ArrowLeft, Download, Eye, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

const assignmentList = [
  { id: "ASG-001", title: "Project Proposal", course: "Software Engineering", dueDate: "Oct 22, 2023", submissions: "45/60", status: "Active" },
  { id: "ASG-002", title: "Midterm Quiz", course: "Data Structures", dueDate: "Oct 24, 2023", submissions: "58/60", status: "Closed" },
  { id: "ASG-003", title: "Database Design Schema", course: "Database Systems", dueDate: "Oct 26, 2023", submissions: "30/60", status: "Active" },
  { id: "ASG-004", title: "Algorithm Analysis Report", course: "Introduction to CS", dueDate: "Oct 28, 2023", submissions: "12/60", status: "Active" },
  { id: "ASG-005", title: "Final Project Draft", course: "Software Engineering", dueDate: "Oct 30, 2023", submissions: "0/60", status: "Active" },
]

export function Assignments() {
  const { t } = useApp()
  const { id } = useParams()

  if (id) {
    const assignment = assignmentList.find(a => a.id === id) || assignmentList[0]
    return <AssignmentDetails assignment={assignment} t={t} />
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">{t('assignments')}</h1>
          <p className="text-muted-foreground font-medium">Track and grade student submissions with ease.</p>
        </div>
        <Button className="rounded-xl font-bold uppercase tracking-widest text-xs h-12 px-6 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
          <Plus className="me-2 size-4" />
          Create Assignment
        </Button>
      </div>

      <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="ps-8 h-16 font-bold uppercase tracking-widest text-[10px]">Title</TableHead>
                <TableHead className="h-16 font-bold uppercase tracking-widest text-[10px]">Course</TableHead>
                <TableHead className="h-16 font-bold uppercase tracking-widest text-[10px]">Due Date</TableHead>
                <TableHead className="h-16 font-bold uppercase tracking-widest text-[10px]">Submissions</TableHead>
                <TableHead className="h-16 font-bold uppercase tracking-widest text-[10px]">Status</TableHead>
                <TableHead className="pe-8 h-16 text-end font-bold uppercase tracking-widest text-[10px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignmentList.map((asg) => (
                <TableRow key={asg.id} className="hover:bg-muted/30 border-b border-border/50 transition-colors group">
                  <TableCell className="ps-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <FileText className="size-5" />
                      </div>
                      <Link to={`/assignments/${asg.id}`} className="font-black hover:text-primary transition-colors">
                        {asg.title}
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 font-bold text-muted-foreground">{asg.course}</TableCell>
                  <TableCell className="py-6 font-medium">{asg.dueDate}</TableCell>
                  <TableCell className="py-6">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-16 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/3" />
                      </div>
                      <span className="text-xs font-black">{asg.submissions}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-6">
                    <Badge variant={asg.status === 'Active' ? "default" : "secondary"} className="rounded-lg font-bold px-3 py-1">
                      {asg.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="pe-8 py-6 text-end">
                    <Link 
                      to={`/assignments/${asg.id}`} 
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" }), 
                        "rounded-xl font-bold text-primary hover:bg-primary hover:text-primary-foreground"
                      )}
                    >
                      View Details
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function AssignmentDetails({ assignment, t }: { assignment: any, t: any }) {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-6">
        <Link to="/assignments" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12 rounded-2xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all")}>
          <ArrowLeft className="size-5" />
        </Link>
        <div>
          <h1 className="text-4xl font-black tracking-tight">{assignment.title}</h1>
          <p className="text-muted-foreground font-bold text-lg">{assignment.course} • Due {assignment.dueDate}</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        <Card className="border-none shadow-xl bg-primary text-primary-foreground rounded-[2rem] overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
          <CardHeader className="p-8 pb-4 relative z-10">
            <CardTitle className="text-sm font-bold opacity-70 uppercase tracking-widest">Submissions</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 relative z-10">
            <div className="text-4xl font-black">42/60</div>
            <div className="mt-4 h-2 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[70%]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Graded</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="text-4xl font-black text-emerald-500">15</div>
            <p className="mt-4 text-xs font-bold text-muted-foreground">25% complete</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Pending</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="text-4xl font-black text-amber-500">27</div>
            <p className="mt-4 text-xs font-bold text-muted-foreground">Needs review</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Time Left</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="text-4xl font-black text-primary">2 Days</div>
            <p className="mt-4 text-xs font-bold text-muted-foreground">Until deadline</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
        <CardHeader className="border-b bg-muted/30 p-8 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-black">Student Submissions</CardTitle>
            <CardDescription className="text-base font-medium">Review and grade individual student work.</CardDescription>
          </div>
          <Button variant="outline" className="rounded-xl h-12 px-6 font-bold uppercase tracking-widest text-xs border-2">
            <Download className="me-2 size-4" />
            Export All
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="ps-8 h-14 font-bold uppercase tracking-widest text-[10px]">Student</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Submitted At</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Status</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Grade</TableHead>
                <TableHead className="pe-8 h-14 text-end font-bold uppercase tracking-widest text-[10px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4, 5].map((i) => (
                <TableRow key={i} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                  <TableCell className="ps-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-secondary flex items-center justify-center font-black text-xs">
                        JD
                      </div>
                      <span className="font-bold">{t('placeholder_name')}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-5 text-muted-foreground font-medium">Oct {20 + i}, 2023</TableCell>
                  <TableCell className="py-5">
                    <Badge variant={i % 3 === 0 ? "outline" : "default"} className="rounded-lg font-bold">
                      {i % 3 === 0 ? "Pending" : "Graded"}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-5 font-black text-primary">
                    {i % 3 === 0 ? "--" : "85/100"}
                  </TableCell>
                  <TableCell className="pe-8 py-5 text-end">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"><Download className="size-4" /></Button>
                      <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"><Eye className="size-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
