import * as React from "react"
import { CheckCircle2, XCircle, Clock, Search, Filter, MoreVertical, FileText, Download } from "lucide-react"
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

const academicResults = [
  { id: "RES-001", course: "Introduction to Computer Science", instructor: "Dr. Ahmed Hassan", semester: "Fall 2023", submissions: 120, status: "Pending" },
  { id: "RES-002", course: "Data Structures & Algorithms", instructor: "Dr. Sara Ali", semester: "Fall 2023", submissions: 85, status: "Approved" },
  { id: "RES-003", course: "Advanced Software Engineering", instructor: "Dr. Laila Mahmoud", semester: "Fall 2023", submissions: 94, status: "Pending" },
  { id: "RES-004", course: "Database Management Systems", instructor: "Dr. Youssef Zaki", semester: "Fall 2023", submissions: 110, status: "Approved" },
]

export function Results() {
  const { t } = useApp()

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight">{t('results')}</h1>
          <p className="text-muted-foreground font-medium">Review and approve final course results and grades.</p>
        </div>
        <Button className="rounded-xl font-bold gap-2 h-12 px-6 shadow-lg shadow-primary/20">
          <Download className="size-4" />
          Export All Results
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-sm rounded-3xl bg-amber-500/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
              <Clock className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Pending Approval</p>
              <p className="text-2xl font-black">12 Courses</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-3xl bg-emerald-500/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Approved Today</p>
              <p className="text-2xl font-black">8 Courses</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-3xl bg-primary/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <FileText className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Total Submissions</p>
              <p className="text-2xl font-black">4,520</p>
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
                placeholder="Search by course or instructor..." 
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
                <TableHead className="ps-8 h-14 font-bold uppercase tracking-widest text-[10px]">Course</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Instructor</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Submissions</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Status</TableHead>
                <TableHead className="pe-8 h-14 text-end font-bold uppercase tracking-widest text-[10px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {academicResults.map((result) => (
                <TableRow key={result.id} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                  <TableCell className="ps-8 py-5">
                    <div className="flex flex-col">
                      <span className="font-bold">{result.course}</span>
                      <span className="text-xs text-muted-foreground font-medium">{result.semester}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-5">
                    <span className="font-bold text-sm">{result.instructor}</span>
                  </TableCell>
                  <TableCell className="py-5">
                    <span className="font-bold text-sm">{result.submissions} Students</span>
                  </TableCell>
                  <TableCell className="py-5">
                    <Badge className={cn(
                      "rounded-lg font-bold",
                      result.status === 'Approved' ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                    )}>
                      {result.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="pe-8 py-5 text-end">
                    <div className="flex items-center justify-end gap-2">
                      {result.status === 'Pending' && (
                        <Button size="sm" className="rounded-lg font-bold bg-emerald-500 hover:bg-emerald-600">
                          Approve
                        </Button>
                      )}
                      <Button variant="ghost" size="icon" className="rounded-xl">
                        <MoreVertical className="size-4" />
                      </Button>
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
