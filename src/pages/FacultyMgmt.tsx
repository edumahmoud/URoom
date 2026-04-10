import * as React from "react"
import { Building2, UserPlus, Search, Filter, MoreVertical, Shield, BookOpen, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
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

const MOCK_FACULTY = [
  { id: "1", name: "Dr. Ahmed Hassan", role: "Professor", department: "Computer Science", courses: 3, status: "Active" },
  { id: "2", name: "Dr. Sara Ali", role: "Associate Professor", department: "Information Systems", courses: 2, status: "Active" },
  { id: "3", name: "Eng. Mohamed Omar", role: "Teaching Assistant", department: "Computer Science", courses: 4, status: "On Leave" },
  { id: "4", name: "Dr. Laila Mahmoud", role: "Professor", department: "Software Engineering", courses: 2, status: "Active" },
  { id: "5", name: "Dr. Youssef Zaki", role: "Assistant Professor", department: "Information Systems", courses: 3, status: "Active" },
]

export function FacultyMgmt() {
  const { t } = useApp()

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight">{t('faculty_mgmt')}</h1>
          <p className="text-muted-foreground font-medium">Manage faculty members, roles, and department assignments.</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-xl font-bold gap-2 h-12 px-6 shadow-lg shadow-primary/20">
              <UserPlus className="size-4" />
              Add Faculty Member
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black">Add Faculty Member</DialogTitle>
              <DialogDescription className="font-medium">
                Register a new academic staff member in the university system.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="font-bold">Full Name</Label>
                <Input id="name" placeholder="e.g. Dr. Ahmed Hassan" className="rounded-xl h-12" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dept" className="font-bold">Department</Label>
                <Input id="dept" placeholder="e.g. Computer Science" className="rounded-xl h-12" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role" className="font-bold">Academic Role</Label>
                <Input id="role" placeholder="e.g. Professor" className="rounded-xl h-12" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full h-12 rounded-xl font-black shadow-lg shadow-primary/20">Register Staff Member</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-sm rounded-3xl bg-primary/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Shield className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Total Faculty</p>
              <p className="text-2xl font-black">84</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-3xl bg-emerald-500/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <BookOpen className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Active Courses</p>
              <p className="text-2xl font-black">156</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-3xl bg-amber-500/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
              <Building2 className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Departments</p>
              <p className="text-2xl font-black">8</p>
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
                placeholder="Search faculty by name or department..." 
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
                <TableHead className="ps-8 h-14 font-bold uppercase tracking-widest text-[10px]">Faculty Member</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Department</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Courses</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Status</TableHead>
                <TableHead className="pe-8 h-14 text-end font-bold uppercase tracking-widest text-[10px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_FACULTY.map((member) => (
                <TableRow key={member.id} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                  <TableCell className="ps-8 py-5">
                    <div className="flex items-center gap-4">
                      <Avatar className="size-10 rounded-xl border-2 border-background shadow-sm">
                        <AvatarFallback className="bg-primary/10 text-primary font-bold">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-bold">{member.name}</span>
                        <span className="text-xs text-muted-foreground font-medium">{member.role}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-5">
                    <span className="font-bold text-sm">{member.department}</span>
                  </TableCell>
                  <TableCell className="py-5">
                    <Badge variant="secondary" className="rounded-lg font-bold">
                      {member.courses} Courses
                    </Badge>
                  </TableCell>
                  <TableCell className="py-5">
                    <Badge className={cn(
                      "rounded-lg font-bold",
                      member.status === 'Active' ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                    )}>
                      {member.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="pe-8 py-5 text-end">
                    <Button variant="ghost" size="icon" className="rounded-xl">
                      <MoreVertical className="size-4" />
                    </Button>
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
