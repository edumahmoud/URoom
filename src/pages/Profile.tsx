import * as React from "react"
import { User, Mail, Building2, Shield, Calendar, Edit2, Save } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useApp } from "@/src/context/AppContext"

export function Profile() {
  const { t, role } = useApp()
  const [isEditing, setIsEditing] = React.useState(false)

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">{t('profile')}</h1>
          <p className="text-muted-foreground font-medium">Manage your personal information and academic profile.</p>
        </div>
        <Button 
          onClick={() => setIsEditing(!isEditing)} 
          variant={isEditing ? "default" : "outline"}
          className="rounded-xl font-bold uppercase tracking-widest text-xs h-12 px-6 shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          {isEditing ? (
            <>
              <Save className="me-2 size-4" />
              {t('save_changes')}
            </>
          ) : (
            <>
              <Edit2 className="me-2 size-4" />
              {t('edit_profile')}
            </>
          )}
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-1 border-none shadow-xl rounded-[2.5rem] overflow-hidden">
          <div className="h-32 bg-gradient-to-br from-primary to-primary/60 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
          </div>
          <CardContent className="relative -mt-16 flex flex-col items-center text-center space-y-6 px-8 pb-10">
            <Avatar className="size-32 border-8 border-background shadow-2xl">
              <AvatarFallback className="text-4xl font-black bg-primary text-primary-foreground">UN</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="text-2xl font-black">User Name</h3>
              <p className="text-sm font-bold text-primary uppercase tracking-widest">{role.replace('_', ' ')}</p>
            </div>
            <div className="w-full pt-6 space-y-4 text-sm text-left border-t">
              <div className="flex items-center gap-3 text-muted-foreground font-bold">
                <div className="size-8 rounded-lg bg-muted flex items-center justify-center">
                  <Mail className="size-4" />
                </div>
                <span>user@university.edu</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground font-bold">
                <div className="size-8 rounded-lg bg-muted flex items-center justify-center">
                  <Building2 className="size-4" />
                </div>
                <span>{t('placeholder_dept')}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground font-bold">
                <div className="size-8 rounded-lg bg-muted flex items-center justify-center">
                  <Shield className="size-4" />
                </div>
                <span>Staff ID: XXX-XXXX</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 border-none shadow-xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-2xl font-black">Personal Information</CardTitle>
            <CardDescription className="text-base font-medium">Update your personal details and public profile.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t('full_name')}</Label>
                <Input id="name" defaultValue="User Name" disabled={!isEditing} className="h-14 rounded-2xl border-2 bg-secondary/30 focus:ring-primary/20 font-bold" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t('email')}</Label>
                <Input id="email" defaultValue="user@university.edu" disabled={!isEditing} className="h-14 rounded-2xl border-2 bg-secondary/30 focus:ring-primary/20 font-bold" />
              </div>
            </div>
            <div className="space-y-3">
              <Label htmlFor="bio" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t('bio')}</Label>
              <textarea 
                id="bio"
                className="flex min-h-[120px] w-full rounded-2xl border-2 border-input bg-secondary/30 px-4 py-3 text-sm font-bold ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                defaultValue="Academic staff member specializing in computer science and software engineering."
                disabled={!isEditing}
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Department</Label>
                <Input defaultValue={t('placeholder_dept')} disabled={!isEditing} className="h-14 rounded-2xl border-2 bg-secondary/30 focus:ring-primary/20 font-bold" />
              </div>
              <div className="space-y-3">
                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Office Location</Label>
                <Input defaultValue="Building A, Room 302" disabled={!isEditing} className="h-14 rounded-2xl border-2 bg-secondary/30 focus:ring-primary/20 font-bold" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
        <CardHeader className="p-8 pb-4">
          <CardTitle className="text-2xl font-black">Assigned Courses</CardTitle>
          <CardDescription className="text-base font-medium">Courses you are currently teaching or managing.</CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group flex items-center gap-4 p-6 rounded-2xl bg-secondary/30 border-2 border-transparent hover:border-primary hover:bg-primary/5 transition-all duration-300">
                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Calendar className="size-6" />
                </div>
                <div>
                  <p className="text-lg font-black">{t('placeholder_course')} {i}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">CS-{i}00</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
