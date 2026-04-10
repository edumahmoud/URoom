import * as React from "react"
import { Shield, Settings, Database, Activity, Lock, Bell, Globe, Server, Cpu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useApp } from "@/src/context/AppContext"
import { cn } from "@/lib/utils"

export function UniversityControl() {
  const { t } = useApp()

  const systemStats = [
    { label: "System Status", value: "Operational", icon: Activity, color: "emerald" as const },
    { label: "Database Load", value: "14%", icon: Database, color: "primary" as const },
    { label: "Active Sessions", value: "1,245", icon: Globe, color: "amber" as const },
    { label: "Security Level", value: "High", icon: Shield, color: "emerald" as const },
  ]

  const infrastructureHealth = [
    { name: "Main Database Cluster", status: "Healthy", load: 24, icon: Database },
    { name: "Authentication Service", status: "Healthy", load: 12, icon: Lock },
    { name: "File Storage (CDN)", status: "Healthy", load: 45, icon: Server },
    { name: "LMS Core Engine", status: "Healthy", load: 32, icon: Cpu },
  ]

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-gradient">{t('uni_mgmt')}</h1>
          <p className="text-muted-foreground font-medium mt-1">Global university system configuration and security monitoring.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="rounded-2xl font-black gap-2 h-14 px-8 border-2 hover-lift">
            <Activity className="size-5" />
            System Logs
          </Button>
          <Button className="rounded-2xl font-black gap-2 h-14 px-8 shadow-2xl shadow-primary/20 hover-lift">
            <Settings className="size-5" />
            Global Settings
          </Button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {systemStats.map((stat, i) => (
          <Card key={i} className="border-none shadow-xl rounded-[2.5rem] overflow-hidden relative group hover-lift">
            <div className={cn(
              "absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity", 
              stat.color === 'emerald' ? "bg-emerald-500" : 
              stat.color === 'amber' ? "bg-amber-500" : "bg-primary"
            )} />
            <CardContent className="p-8 flex items-center gap-5">
              <div className={cn(
                "size-14 rounded-2xl flex items-center justify-center shadow-inner",
                stat.color === 'emerald' ? "bg-emerald-500/10 text-emerald-600" : 
                stat.color === 'amber' ? "bg-amber-500/10 text-amber-600" : "bg-primary/10 text-primary"
              )}>
                <stat.icon className="size-7" />
              </div>
              <div>
                <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
                <p className="text-2xl font-black tracking-tight">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-none shadow-2xl rounded-[3rem] overflow-hidden bg-card/50 backdrop-blur-sm">
          <CardHeader className="p-10 border-b bg-muted/30">
            <CardTitle className="text-3xl font-black tracking-tight">Infrastructure Health</CardTitle>
            <CardDescription className="text-lg font-medium">Real-time monitoring of university servers and core services.</CardDescription>
          </CardHeader>
          <CardContent className="p-10 space-y-8">
            {infrastructureHealth.map((service, i) => (
              <div key={i} className="flex items-center justify-between p-8 rounded-[2rem] bg-secondary/30 border-2 border-transparent hover:border-primary/10 transition-all hover:bg-secondary/50">
                <div className="flex items-center gap-6">
                  <div className="size-16 rounded-2xl bg-background flex items-center justify-center text-muted-foreground shadow-inner">
                    <service.icon className="size-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl font-black tracking-tight">{service.name}</p>
                    <Badge className={cn(
                      "rounded-xl font-black text-[10px] px-3 py-1 uppercase tracking-widest border-none",
                      service.status === 'Healthy' ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"
                    )}>
                      {service.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-end space-y-3">
                  <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">Current Load</p>
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-40 bg-background rounded-full overflow-hidden shadow-inner">
                      <div className={cn("h-full transition-all duration-1000", service.load > 80 ? "bg-amber-500" : "bg-primary")} style={{ width: `${service.load}%` }} />
                    </div>
                    <span className="text-lg font-black tracking-tighter">{service.load}%</span>
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
