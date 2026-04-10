import * as React from "react"
import { 
  Languages, 
  Moon, 
  Sun, 
  Bell, 
  Shield, 
  User, 
  Globe, 
  Smartphone,
  Lock,
  Mail
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useApp } from "@/src/context/AppContext"
import { cn } from "@/lib/utils"

export function Settings() {
  const { t, language, setLanguage, theme, setTheme, toggleTheme, colorTheme, setColorTheme } = useApp()

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">{t('settings')}</h1>
        <p className="text-muted-foreground font-medium">Manage your account preferences and system configuration.</p>
      </div>

      <div className="grid gap-8 max-w-4xl">
        <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl font-black">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Globe className="size-5" />
              </div>
              {t('language')} & Regional
            </CardTitle>
            <CardDescription className="text-base font-medium">Choose your preferred language and regional settings.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-6">
            <div className="flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border-2 border-transparent hover:border-primary/20 transition-all">
              <div className="space-y-1">
                <Label className="text-lg font-bold">{t('language')}</Label>
                <p className="text-sm text-muted-foreground font-medium">Select the language for the entire interface.</p>
              </div>
              <Select value={language} onValueChange={(val: any) => setLanguage(val)}>
                <SelectTrigger className="w-[200px] h-12 rounded-xl border-2 font-bold">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="en" className="font-bold">English</SelectItem>
                  <SelectItem value="ar" className="font-bold">العربية (Arabic)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border-2 border-transparent hover:border-primary/20 transition-all">
              <div className="space-y-1">
                <Label className="text-lg font-bold">Time Zone</Label>
                <p className="text-sm text-muted-foreground font-medium">Set your local time zone for sessions and deadlines.</p>
              </div>
              <Select defaultValue="utc">
                <SelectTrigger className="w-[200px] h-12 rounded-xl border-2 font-bold">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="utc" className="font-bold">UTC (Universal Time)</SelectItem>
                  <SelectItem value="eet" className="font-bold">EET (Eastern European)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl font-black">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {theme === 'dark' ? <Moon className="size-5" /> : <Sun className="size-5" />}
              </div>
              Appearance & Theme
            </CardTitle>
            <CardDescription className="text-base font-medium">Customize how the system looks on your screen.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-6">
            <div className="flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border-2 border-transparent hover:border-primary/20 transition-all">
              <div className="space-y-1">
                <Label className="text-lg font-bold">{t('dark_mode')}</Label>
                <p className="text-sm text-muted-foreground font-medium">Toggle between light and dark visual themes.</p>
              </div>
              <div className="flex items-center gap-4">
                <Sun className={cn("size-5 transition-colors", theme === 'light' ? "text-amber-500" : "text-muted-foreground")} />
                <Switch 
                  checked={theme === 'dark'} 
                  onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} 
                  className="scale-125" 
                />
                <Moon className={cn("size-5 transition-colors", theme === 'dark' ? "text-primary" : "text-muted-foreground")} />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/30 border-2 border-transparent hover:border-primary/20 transition-all space-y-4">
              <div className="space-y-1">
                <Label className="text-lg font-bold">Primary Color Theme</Label>
                <p className="text-sm text-muted-foreground font-medium">Select the main accent color for the application.</p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  { id: 'indigo', color: 'bg-[#6366f1]', label: 'Indigo' },
                  { id: 'emerald', color: 'bg-[#10b981]', label: 'Emerald' },
                  { id: 'rose', color: 'bg-[#f43f5e]', label: 'Rose' },
                  { id: 'amber', color: 'bg-[#f59e0b]', label: 'Amber' },
                  { id: 'violet', color: 'bg-[#8b5cf6]', label: 'Violet' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setColorTheme(t.id as any)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all hover:scale-105 active:scale-95",
                      colorTheme === t.id 
                        ? "bg-background border-primary shadow-md" 
                        : "bg-background/50 border-transparent opacity-70 hover:opacity-100"
                    )}
                  >
                    <div className={cn("size-6 rounded-lg shadow-sm", t.color)} />
                    <span className="font-bold text-sm">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl font-black">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Bell className="size-5" />
              </div>
              {t('notifications')}
            </CardTitle>
            <CardDescription className="text-base font-medium">Configure how you receive alerts and updates.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-6">
            <div className="flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border-2 border-transparent hover:border-primary/20 transition-all">
              <div className="space-y-1">
                <Label className="text-lg font-bold">Email Notifications</Label>
                <p className="text-sm text-muted-foreground font-medium">Receive course updates and assignment alerts.</p>
              </div>
              <Switch defaultChecked className="scale-125" />
            </div>
            <div className="flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border-2 border-transparent hover:border-primary/20 transition-all">
              <div className="space-y-1">
                <Label className="text-lg font-bold">Push Notifications</Label>
                <p className="text-sm text-muted-foreground font-medium">Receive real-time alerts in your browser.</p>
              </div>
              <Switch defaultChecked className="scale-125" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl font-black">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Lock className="size-5" />
              </div>
              Security
            </CardTitle>
            <CardDescription className="text-base font-medium">Manage your password and account security.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-6">
            <div className="flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border-2 border-transparent hover:border-primary/20 transition-all">
              <div className="space-y-1">
                <Label className="text-lg font-bold">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground font-medium">Add an extra layer of security to your account.</p>
              </div>
              <Button variant="outline" className="rounded-xl font-bold border-2 h-12 px-6 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">Enable</Button>
            </div>
            <div className="flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border-2 border-transparent hover:border-primary/20 transition-all">
              <div className="space-y-1">
                <Label className="text-lg font-bold">Change Password</Label>
                <p className="text-sm text-muted-foreground font-medium">Update your login credentials.</p>
              </div>
              <Button variant="outline" className="rounded-xl font-bold border-2 h-12 px-6 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">Update</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
