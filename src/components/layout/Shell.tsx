import * as React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  QrCode, 
  Building2, 
  Users, 
  CheckCircle2, 
  Globe, 
  School, 
  UserCog, 
  Settings,
  LogOut,
  Bell,
  Search,
  Shield,
  ChevronRight,
  Menu,
  Moon,
  Sun,
  Languages,
  User
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup,
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { NAV_ITEMS } from "@/src/constants"
import { useApp } from "@/src/context/AppContext"

const iconMap: Record<string, any> = {
  LayoutDashboard,
  BookOpen,
  FileText,
  QrCode,
  Building2,
  Users,
  CheckCircle2,
  Globe,
  School,
  UserCog,
  Settings,
}

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const { role, t, language } = useApp()
  const location = useLocation()
  const navigate = useNavigate()
  const filteredNav = NAV_ITEMS.filter(item => item.roles.includes(role))

  return (
    <aside className={cn(
      "fixed top-0 z-50 h-screen w-72 border-e bg-card/80 backdrop-blur-2xl shadow-2xl transition-all duration-500 ease-in-out lg:translate-x-0 border-white/10",
      language === 'ar' ? "right-0" : "left-0",
      !isOpen && (language === 'ar' ? "translate-x-full" : "-translate-x-full")
    )}>
      <div className="flex h-24 items-center border-b border-white/10 px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <Link to="/" className="flex items-center gap-4 font-black text-2xl tracking-tighter hover:opacity-80 transition-all active:scale-95">
          <div className="size-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-xl shadow-primary/30 rotate-3 hover:rotate-0 transition-transform">
            <School className="size-7" />
          </div>
          <span className="text-gradient">UniManage</span>
        </Link>
      </div>
      
      <nav className="flex flex-col gap-2 p-6 overflow-y-auto h-[calc(100vh-12rem)]">
        {filteredNav.map((item, idx) => {
          const Icon = iconMap[item.icon]
          const isActive = location.pathname === item.href
          
          return (
            <motion.div
              key={item.href}
              initial={{ x: language === 'ar' ? 20 : -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                to={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) setIsOpen(false)
                }}
                className={cn(
                  "group flex items-center gap-4 rounded-2xl px-5 py-4 text-sm font-bold transition-all duration-300 relative overflow-hidden",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20" 
                    : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                )}
              >
                <Icon className={cn(
                  "size-5 transition-transform group-hover:scale-125 duration-300", 
                  isActive ? "text-primary-foreground" : "text-muted-foreground/60 group-hover:text-primary",
                  language === 'ar' && ["ChevronRight", "ArrowLeft"].includes(item.icon) && "rotate-180"
                )} />
                <span className="relative z-10">{t(item.title)}</span>
                {isActive && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  />
                )}
              </Link>
            </motion.div>
          )
        })}
      </nav>

      <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-primary/5 to-transparent">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start gap-4 px-4 h-20 rounded-[2rem] bg-secondary/50 border-2 border-white/10 hover:border-primary/20 hover:bg-primary/5 transition-all shadow-xl group">
              <Avatar className="size-12 border-4 border-background shadow-xl group-hover:scale-110 transition-transform">
                <AvatarFallback className="bg-gradient-primary text-primary-foreground font-black text-lg">MR</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-xs overflow-hidden">
                <span className="font-black text-sm truncate w-full group-hover:text-primary transition-colors">Mahmoud Ramadan</span>
                <span className="text-primary font-black uppercase tracking-widest text-[10px] truncate w-full opacity-70">{role.replace('_', ' ')}</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72 rounded-[2rem] p-3 shadow-2xl border-primary/10 backdrop-blur-xl">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">User Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="mx-2" />
              <DropdownMenuItem onClick={() => navigate('/profile')} className="rounded-2xl px-4 py-3 cursor-pointer font-bold focus:bg-primary focus:text-primary-foreground transition-colors">
                <User className="me-3 size-5 opacity-70" />
                {t('profile')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/settings')} className="rounded-2xl px-4 py-3 cursor-pointer font-bold focus:bg-primary focus:text-primary-foreground transition-colors">
                <Settings className="me-3 size-5 opacity-70" />
                {t('settings')}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="mx-2" />
            <DropdownMenuItem className="rounded-2xl px-4 py-3 text-destructive font-black focus:bg-destructive/10 focus:text-destructive cursor-pointer transition-colors">
              <LogOut className="me-3 size-5" />
              {t('logout')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  )
}

interface TopbarProps {
  setIsOpen: (open: boolean) => void
}

export function Topbar({ setIsOpen }: TopbarProps) {
  const { role, setRole, theme, toggleTheme, colorTheme, setColorTheme, language, setLanguage, t } = useApp()
  const navigate = useNavigate()

  const themes = [
    { name: 'indigo', color: 'bg-[#6366f1]' },
    { name: 'emerald', color: 'bg-[#10b981]' },
    { name: 'rose', color: 'bg-[#f43f5e]' },
    { name: 'amber', color: 'bg-[#f59e0b]' },
    { name: 'violet', color: 'bg-[#8b5cf6]' },
  ]

  return (
    <header className="h-24 glass fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-10 border-b shadow-sm transition-all duration-500">
      <div className={cn(
        "flex items-center gap-8 transition-all duration-500",
        language === 'ar' ? "lg:pr-72" : "lg:pl-72"
      )}>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsOpen(true)}
          className="lg:hidden rounded-2xl hover:bg-secondary size-12"
        >
          <Menu className="size-6" />
        </Button>
        
        <div className="relative hidden md:block group">
          <Search className="absolute start-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <input 
            type="text" 
            placeholder={t('search')}
            className="h-14 w-96 ps-12 pe-6 rounded-2xl bg-secondary/40 border-2 border-transparent focus:border-primary/20 focus:bg-background focus:ring-4 focus:ring-primary/5 transition-all outline-none text-sm font-bold shadow-inner"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center bg-secondary/40 p-1.5 rounded-2xl border-2 border-transparent shadow-inner">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="h-10 px-4 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] hover:bg-background hover:shadow-sm transition-all"
          >
            <Languages className="me-2 size-4" />
            {language === 'en' ? 'AR' : 'EN'}
          </Button>
          <div className="w-px h-5 bg-border mx-2" />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleTheme}
            className="h-10 w-10 p-0 rounded-xl hover:bg-background hover:shadow-sm transition-all"
          >
            {theme === 'light' ? <Moon className="size-5" /> : <Sun className="size-5" />}
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-14 rounded-2xl gap-3 border-2 border-primary/10 hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all font-bold px-6 shadow-sm">
              <Shield className="size-5" />
              <span className="hidden sm:inline">{t('switch_role')}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 rounded-[2rem] p-3 shadow-2xl border-primary/10 backdrop-blur-xl">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Select Role</DropdownMenuLabel>
              <DropdownMenuSeparator className="mx-2" />
              <DropdownMenuItem onClick={() => setRole('DOCTOR_TA')} className="rounded-2xl px-4 py-3 cursor-pointer font-bold focus:bg-primary focus:text-primary-foreground transition-colors">
                Doctor / TA
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRole('FACULTY_ADMIN')} className="rounded-2xl px-4 py-3 cursor-pointer font-bold focus:bg-primary focus:text-primary-foreground transition-colors">
                Faculty Admin
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRole('UNIVERSITY_ADMIN')} className="rounded-2xl px-4 py-3 cursor-pointer font-bold focus:bg-primary focus:text-primary-foreground transition-colors">
                University Admin
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" className="size-14 rounded-2xl relative hover:bg-secondary transition-all active:scale-90">
          <Bell className="size-6" />
          <span className="absolute top-4 end-4 size-3 bg-destructive rounded-full border-4 border-background shadow-lg" />
        </Button>
      </div>
    </header>
  )
}
