import * as React from "react"
import { Building2, Plus, Search, Filter, MoreVertical, School, Users, Globe, Shield } from "lucide-react"
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

const universityFaculties = [
  { id: "FAC-CS", name: "Computer Science & IT", dean: "Dr. Ahmed Ramadan Korany", departments: 4, students: 1284, status: "Active" },
  { id: "FAC-ENG", name: "Engineering", dean: "Dr. Sara Ahmed Hassan", departments: 6, students: 2450, status: "Active" },
  { id: "FAC-MED", name: "Medicine", dean: "Dr. Mohamed Ali Omar", departments: 8, students: 1840, status: "Active" },
  { id: "FAC-BUS", name: "Business Administration", dean: "Dr. Laila Mahmoud Zaki", departments: 5, students: 3120, status: "Active" },
  { id: "FAC-ART", name: "Arts & Humanities", dean: "Dr. Youssef Ibrahim Zaki", departments: 7, students: 1560, status: "Active" },
]

export function FacultiesDepts() {
  const { t } = useApp()

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-gradient">{t('faculties')}</h1>
          <p className="text-muted-foreground font-medium mt-1">Manage university faculties, departments, and administrative leadership.</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-xl font-bold gap-2 h-12 px-6 shadow-lg shadow-primary/20">
              <Plus className="size-4" />
              Add Faculty
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black">Create New Faculty</DialogTitle>
              <DialogDescription className="font-medium">
                Establish a new faculty within the university structure.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="faculty-name" className="font-bold">Faculty Name</Label>
                <Input id="faculty-name" placeholder="e.g. Faculty of Medicine" className="rounded-xl h-12" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dean" className="font-bold">Appointed Dean</Label>
                <Input id="dean" placeholder="e.g. Prof. Khaled Zaki" className="rounded-xl h-12" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="depts-count" className="font-bold">Initial Departments Count</Label>
                <Input id="depts-count" type="number" placeholder="0" className="rounded-xl h-12" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full h-12 rounded-xl font-black shadow-lg shadow-primary/20">Establish Faculty</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-sm rounded-3xl bg-primary/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <School className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Total Faculties</p>
              <p className="text-2xl font-black">12</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-3xl bg-emerald-500/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <Building2 className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Total Departments</p>
              <p className="text-2xl font-black">64</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-3xl bg-amber-500/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
              <Users className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Total Students</p>
              <p className="text-2xl font-black">18,450</p>
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
                placeholder="Search faculties or deans..." 
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
                <TableHead className="ps-8 h-14 font-bold uppercase tracking-widest text-[10px]">Faculty Name</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Dean</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Departments</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Students</TableHead>
                <TableHead className="pe-8 h-14 text-end font-bold uppercase tracking-widest text-[10px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {universityFaculties.map((faculty) => (
                <TableRow key={faculty.id} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                  <TableCell className="ps-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <School className="size-5" />
                      </div>
                      <span className="font-bold">{faculty.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-5">
                    <span className="font-bold text-sm">{faculty.dean}</span>
                  </TableCell>
                  <TableCell className="py-5">
                    <Badge variant="secondary" className="rounded-lg font-bold">
                      {faculty.departments} Depts
                    </Badge>
                  </TableCell>
                  <TableCell className="py-5">
                    <span className="font-bold text-sm">{faculty.students.toLocaleString()} Students</span>
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
