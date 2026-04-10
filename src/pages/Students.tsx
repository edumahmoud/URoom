import * as React from "react"
import { Users, UserPlus, Search, Filter, MoreVertical, Mail, Phone, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useApp } from "@/src/context/AppContext"
import { cn } from "@/lib/utils"

import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export function Students() {
  const { t, user } = useApp()
  const [students, setStudents] = React.useState<any[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/users/students', {
          headers: {
            'x-user-role': user?.role || 'STUDENT'
          }
        });
        const data = await response.json();
        setStudents(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch students:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, [user]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">{t('students')}</h1>
          <p className="text-muted-foreground font-medium mt-1">Manage student records, academic levels, and performance metrics.</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-xl font-bold gap-2 h-12 px-6 shadow-lg shadow-primary/20">
              <UserPlus className="size-4" />
              Add Student
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black">Add New Student</DialogTitle>
              <DialogDescription className="font-medium">
                Enter the student's details to create a new record in the system.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="font-bold">Full Name</Label>
                <Input id="name" placeholder="e.g. Ahmed Ali" className="rounded-xl h-12" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="font-bold">Email Address</Label>
                <Input id="email" type="email" placeholder="student@university.edu" className="rounded-xl h-12" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="level" className="font-bold">Academic Level</Label>
                  <Input id="level" placeholder="Level 1" className="rounded-xl h-12" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="gpa" className="font-bold">Current GPA</Label>
                  <Input id="gpa" placeholder="0.0" className="rounded-xl h-12" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full h-12 rounded-xl font-black shadow-lg shadow-primary/20">Create Student Record</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-sm rounded-3xl bg-primary/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Users className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Total Students</p>
              <p className="text-2xl font-black">1,284</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-3xl bg-emerald-500/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <GraduationCap className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Graduating Soon</p>
              <p className="text-2xl font-black">342</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-3xl bg-amber-500/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
              <Users className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">New Admissions</p>
              <p className="text-2xl font-black">156</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
        <CardHeader className="p-8 border-b bg-muted/30">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute start-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input 
                placeholder="Search students by name, ID or email..." 
                className="h-12 ps-11 rounded-2xl bg-background border-none shadow-inner"
              />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="rounded-xl h-12 gap-2 font-bold">
                <Filter className="size-4" />
                Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="ps-8 h-14 font-bold uppercase tracking-widest text-[10px]">Student</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Level</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">GPA</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Status</TableHead>
                <TableHead className="pe-8 h-14 text-end font-bold uppercase tracking-widest text-[10px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow><TableCell colSpan={5} className="text-center py-10 font-bold">جاري تحميل البيانات...</TableCell></TableRow>
              ) : students.length === 0 ? (
                <TableRow><TableCell colSpan={5} className="text-center py-10 text-muted-foreground">لا يوجد طلاب مسجلين حالياً</TableCell></TableRow>
              ) : (
                students.map((student) => (
                  <TableRow key={student.id} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                    <TableCell className="ps-8 py-5">
                      <div className="flex items-center gap-4">
                        <Avatar className="size-10 rounded-xl border-2 border-background shadow-sm">
                          <AvatarFallback className="bg-primary/10 text-primary font-bold">
                            {student.name?.split(' ').map((n: any) => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-bold">{student.name}</span>
                          <span className="text-xs text-muted-foreground font-medium">{student.email}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-5">
                      <span className="font-bold text-sm">{student.level || 'غير محدد'}</span>
                    </TableCell>
                    <TableCell className="py-5">
                      <Badge variant="outline" className="rounded-lg font-bold border-primary/20 text-primary">
                        {student.gpa || '0.0'}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-5">
                      <Badge className={cn(
                        "rounded-lg font-bold",
                        student.status !== 'Inactive' ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                      )}>
                        {student.status || 'Active'}
                      </Badge>
                    </TableCell>
                    <TableCell className="pe-8 py-5 text-end">
                    <Button variant="ghost" size="icon" className="rounded-xl">
                      <MoreVertical className="size-4" />
                    </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
