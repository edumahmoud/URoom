import * as React from "react"
import { Shield, Settings, Database, Activity, Lock, Bell, Globe, Server, Cpu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useApp } from "@/src/context/AppContext"
import { cn } from "@/lib/utils"

export function UniversityControl() {
  const { t } = useApp()

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight">{t('uni_mgmt')}</h1>
          <p className="text-muted-foreground font-medium">Global university system configuration and security monitoring.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl font-bold gap-2 h-12 px-6">
            <Activity className="size-4" />
            System Logs
          </Button>
          <Button className="rounded-xl font-bold gap-2 h-12 px-6 shadow-lg shadow-primary/20">
            <Settings className="size-4" />
            Global Settings
          </Button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "System Status", value: "Operational", icon: Activity, color: "emerald" as const },
          { label: "Database Load", value: "12%", icon: Database, color: "primary" as const },
          { label: "Active Sessions", value: "1,420", icon: Globe, color: "amber" as const },
          { label: "Security Level", value: "High", icon: Shield, color: "emerald" as const },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm rounded-3xl overflow-hidden relative group">
            <div className={cn(
              "absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity", 
              stat.color === 'emerald' ? "bg-emerald-500" : 
              stat.color === 'amber' ? "bg-amber-500" : "bg-primary"
            )} />
            <CardContent className="p-6 flex items-center gap-4">
              <div className={cn(
                "size-12 rounded-2xl flex items-center justify-center",
                stat.color === 'emerald' ? "bg-emerald-500/10 text-emerald-600" : 
                stat.color === 'amber' ? "bg-amber-500/10 text-amber-600" : "bg-primary/10 text-primary"
              )}>
                <stat.icon className="size-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                <p className="text-xl font-black">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-none shadow-xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-8 border-b bg-muted/30">
            <CardTitle className="text-2xl font-black">Infrastructure Health</CardTitle>
            <CardDescription className="text-base font-medium">Real-time monitoring of university servers and services.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            {[
              { name: "Main Database Cluster", status: "Healthy", load: 24, icon: Database },
              { name: "Authentication Service", status: "Healthy", load: 12, icon: Lock },
              { name: "File Storage (CDN)", status: "Healthy", load: 45, icon: Server },
              { name: "LMS Core Engine", status: "Warning", load: 82, icon: Cpu },
            ].map((service, i) => (
              <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border border-transparent hover:border-primary/10 transition-all">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-xl bg-background flex items-center justify-center text-muted-foreground shadow-sm">
                    <service.icon className="size-6" />
                  </div>
                  <div>
                    <p className="font-bold">{service.name}</p>
                    <Badge className={cn(
                      "rounded-lg font-bold text-[10px] uppercase tracking-widest",
                      service.status === 'Healthy' ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"
                    )}>
                      {service.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-end space-y-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Load</p>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-32 bg-background rounded-full overflow-hidden">
                      <div className={cn("h-full transition-all", service.load > 80 ? "bg-amber-500" : "bg-primary")} style={{ width: `${service.load}%` }} />
                    </div>
                    <span className="text-sm font-black">{service.load}%</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-primary text-primary-foreground relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)]" />
            <CardHeader className="p-8 relative z-10">
              <CardTitle className="text-xl font-black">Security Overview</CardTitle>
              <CardDescription className="text-primary-foreground/70 font-medium">Active security protocols and alerts.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6 relative z-10">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest">Firewall</span>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-none rounded-lg">Active</Badge>
                </div>
                <p className="text-sm font-medium">Blocking 124 suspicious requests today.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest">2FA Enforcement</span>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-none rounded-lg">98%</Badge>
                </div>
                <p className="text-sm font-medium">Most administrative accounts secured.</p>
              </div>
              <Button className="w-full h-12 rounded-xl bg-white text-primary font-black hover:bg-white/90">
                Security Audit
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-xl font-black">System Notifications</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-4">
              {[
                { title: "Database Backup", time: "2h ago", type: "success" },
                { title: "System Update v2.4", time: "5h ago", type: "info" },
                { title: "New Admin Registered", time: "1d ago", type: "warning" },
              ].map((notif, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="size-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="text-sm font-bold">{notif.title}</p>
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{notif.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
