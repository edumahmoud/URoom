import * as React from "react"
import { Users, UserPlus, Search, Filter, MoreVertical, Shield, Mail, Lock, ShieldCheck, UserCog } from "lucide-react"
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

const systemUsers = [
  { id: "USR-001", name: "Mahmoud Ramadan", email: "mahmoud@university.edu", role: "UNIVERSITY_ADMIN", lastLogin: "2 hours ago", status: "Active" },
  { id: "USR-002", name: "Ahmed Hassan", email: "ahmed@university.edu", role: "FACULTY_ADMIN", lastLogin: "5 hours ago", status: "Active" },
  { id: "USR-003", name: "Sara Ali", email: "sara@university.edu", role: "DOCTOR_TA", lastLogin: "1 day ago", status: "Active" },
  { id: "USR-004", name: "System Auditor", email: "auditor@university.edu", role: "UNIVERSITY_ADMIN", lastLogin: "3 days ago", status: "Inactive" },
]

export function SystemUsers() {
  const { t } = useApp()

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight">{t('users')}</h1>
          <p className="text-muted-foreground font-medium">Manage system access, user roles, and security permissions.</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-xl font-bold gap-2 h-12 px-6 shadow-lg shadow-primary/20">
              <UserPlus className="size-4" />
              Create User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black">Create System User</DialogTitle>
              <DialogDescription className="font-medium">
                Assign a new user to the university management system with specific roles.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="user-name" className="font-bold">Full Name</Label>
                <Input id="user-name" placeholder="e.g. Mahmoud Ramadan" className="rounded-xl h-12" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="user-email" className="font-bold">Email Address</Label>
                <Input id="user-email" type="email" placeholder="user@university.edu" className="rounded-xl h-12" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="user-role" className="font-bold">System Role</Label>
                <Input id="user-role" placeholder="e.g. UNIVERSITY_ADMIN" className="rounded-xl h-12" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full h-12 rounded-xl font-black shadow-lg shadow-primary/20">Create User Account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-sm rounded-3xl bg-primary/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Active Admins</p>
              <p className="text-2xl font-black">12</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-3xl bg-emerald-500/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <UserCog className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Staff Users</p>
              <p className="text-2xl font-black">245</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-3xl bg-amber-500/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
              <Lock className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Security Alerts</p>
              <p className="text-2xl font-black">0</p>
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
                placeholder="Search users by name or email..." 
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
                <TableHead className="ps-8 h-14 font-bold uppercase tracking-widest text-[10px]">User</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Role</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Last Login</TableHead>
                <TableHead className="h-14 font-bold uppercase tracking-widest text-[10px]">Status</TableHead>
                <TableHead className="pe-8 h-14 text-end font-bold uppercase tracking-widest text-[10px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {systemUsers.map((user) => (
                <TableRow key={user.id} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                  <TableCell className="ps-8 py-5">
                    <div className="flex items-center gap-4">
                      <Avatar className="size-10 rounded-xl border-2 border-background shadow-sm">
                        <AvatarFallback className="bg-primary/10 text-primary font-bold">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-bold">{user.name}</span>
                        <span className="text-xs text-muted-foreground font-medium">{user.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-5">
                    <Badge variant="outline" className="rounded-lg font-bold border-primary/20 text-primary">
                      {user.role.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-5">
                    <span className="font-bold text-sm text-muted-foreground">{user.lastLogin}</span>
                  </TableCell>
                  <TableCell className="py-5">
                    <Badge className={cn(
                      "rounded-lg font-bold",
                      user.status === 'Active' ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-destructive/10 text-destructive border-destructive/20"
                    )}>
                      {user.status}
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
