/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { Sidebar, Topbar } from "@/src/components/layout/Shell"
import { DoctorDashboard, FacultyDashboard, UniversityDashboard } from "@/src/components/dashboard/Views"
import { UserRole } from "@/src/types"
import { cn } from "@/lib/utils"

export default function App() {
  const [role, setRole] = React.useState<UserRole>('DOCTOR_TA')
  const [activeTab, setActiveTab] = React.useState('/')
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)

  // Apply dark mode class to html element
  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const renderContent = () => {
    // For this demo, we only show the dashboard overview for each role
    // In a real app, we would route based on activeTab
    switch (role) {
      case 'DOCTOR_TA':
        return <DoctorDashboard />
      case 'FACULTY_ADMIN':
        return <FacultyDashboard />
      case 'UNIVERSITY_ADMIN':
        return <UniversityDashboard />
      default:
        return <DoctorDashboard />
    }
  }

  return (
    <div className={cn(
      "min-h-screen bg-background text-foreground font-sans antialiased",
      isDark && "dark"
    )}>
      <Sidebar 
        role={role} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <div className="lg:pl-64">
        <Topbar 
          role={role} 
          setRole={setRole} 
          setIsOpen={setIsSidebarOpen}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        
        <main className="p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

