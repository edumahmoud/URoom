/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Sidebar, Topbar } from "@/src/components/layout/Shell"
import { AppProvider, useApp } from "@/src/context/AppContext"
import { Dashboard } from "@/src/pages/Dashboard"
import { Courses } from "@/src/pages/Courses"
import { Assignments } from "@/src/pages/Assignments"
import { Attendance } from "@/src/pages/Attendance"
import { FacultyMgmt } from "@/src/pages/FacultyMgmt"
import { Students } from "@/src/pages/Students"
import { Results } from "@/src/pages/Results"
import { UniversityControl } from "@/src/pages/UniversityControl"
import { FacultiesDepts } from "@/src/pages/FacultiesDepts"
import { SystemUsers } from "@/src/pages/SystemUsers"
import { Profile } from "@/src/pages/Profile"
import { Settings } from "@/src/pages/Settings"
import { cn } from "@/lib/utils"

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  const { language, t } = useApp()

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Sidebar 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <div className={cn(
        "transition-all duration-500 ease-in-out pt-24",
        language === 'ar' ? "lg:pr-72" : "lg:pl-72"
      )}>
        <Topbar 
          setIsOpen={setIsSidebarOpen}
        />
        
        <main className="p-8 md:p-12 min-h-[calc(100vh-6rem)]">
          <div className="mx-auto max-w-[1600px] space-y-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<Courses />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/assignments/:id" element={<Assignments />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              
              {/* Faculty Admin Routes */}
              <Route path="/faculty-mgmt" element={<FacultyMgmt />} />
              <Route path="/students" element={<Students />} />
              <Route path="/results" element={<Results />} />
              
              {/* University Admin Routes */}
              <Route path="/uni-mgmt" element={<UniversityControl />} />
              <Route path="/faculties" element={<FacultiesDepts />} />
              <Route path="/users" element={<SystemUsers />} />
              
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
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

export default function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  )
}

