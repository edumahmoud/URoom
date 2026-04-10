import * as React from "react"
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
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  Languages
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { NAV_ITEMS } from "@/src/constants"
import { UserRole } from "@/src/types"

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
  role: UserRole
  activeTab: string
  setActiveTab: (tab: string) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function Sidebar({ role, activeTab, setActiveTab, isOpen, setIsOpen }: SidebarProps) {
  const filteredNav = NAV_ITEMS.filter(item => item.roles.includes(role))

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background transition-transform lg:translate-x-0",
      !isOpen && "-translate-x-full"
    )}>
      <div className="flex h-16 items-center border-b px-6">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
            U
          </div>
          <span>UniManage</span>
        </div>
      </div>
      
      <nav className="flex flex-col gap-1 p-4">
        {filteredNav.map((item) => {
          const Icon = iconMap[item.icon]
          const isActive = activeTab === item.href
          
          return (
            <button
              key={item.href}
              onClick={() => {
                setActiveTab(item.href)
                if (window.innerWidth < 1024) setIsOpen(false)
              }}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive 
                  ? "bg-secondary text-secondary-foreground" 
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              )}
            >
              <Icon className="size-4" />
              {item.title}
              {isActive && <ChevronRight className="ml-auto size-4" />}
            </button>
          )
        })}
      </nav>

      <div className="absolute bottom-0 w-full border-t p-4">
        <DropdownMenu>
          <DropdownMenuTrigger className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-start gap-3 px-2")}>
            <Avatar className="size-8">
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start text-xs">
              <span className="font-semibold">User Name</span>
              <span className="text-muted-foreground capitalize">{role.toLowerCase().replace('_', ' ')}</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  )
}

interface TopbarProps {
  role: UserRole
  setRole: (role: UserRole) => void
  setIsOpen: (open: boolean) => void
  isDark: boolean
  setIsDark: (dark: boolean) => void
}

export function Topbar({ role, setRole, setIsOpen, isDark, setIsDark }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-6 backdrop-blur">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(true)}>
          <Menu className="size-5" />
        </Button>
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search system..."
            className="h-9 w-64 rounded-md border bg-muted/50 pl-9 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:flex")}>
            Role: {role.split('_').map(w => w[0] + w.slice(1).toLowerCase()).join(' ')}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setRole('DOCTOR_TA')}>Doctor / TA</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRole('FACULTY_ADMIN')}>Faculty Admin</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRole('UNIVERSITY_ADMIN')}>University Admin</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)}>
          {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </Button>
        
        <Button variant="ghost" size="icon">
          <Languages className="size-5" />
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-primary" />
        </Button>
      </div>
    </header>
  )
}
