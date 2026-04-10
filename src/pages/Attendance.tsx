import * as React from "react"
import { QrCode, Users, Clock, CheckCircle2, RefreshCw, Download } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { useApp } from "@/src/context/AppContext"

export function Attendance() {
  const { t } = useApp()
  const [isStarted, setIsStarted] = React.useState(false)

  return (
    <div className="space-y-10">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between bg-card/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-xl"
      >
        <div>
          <h1 className="text-4xl font-black tracking-tight text-gradient">{t('attendance_tracking')}</h1>
          <p className="text-muted-foreground font-medium">{t('manage_attendance')}</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="rounded-2xl font-black h-14 px-8 border-2 shadow-sm hover-lift">
            <Download className="me-2 size-5" />
            Export Logs
          </Button>
          <Button 
            onClick={() => setIsStarted(!isStarted)}
            className={cn(
              "rounded-2xl font-black h-14 px-8 shadow-2xl transition-all hover-lift",
              isStarted ? "bg-destructive text-destructive-foreground shadow-destructive/20" : "bg-primary text-primary-foreground shadow-primary/20"
            )}
          >
            {isStarted ? (
              <><RefreshCw className="me-2 size-5 animate-spin" /> Stop Session</>
            ) : (
              <><QrCode className="me-2 size-5" /> Start Session</>
            )}
          </Button>
        </div>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-none shadow-lg rounded-[2rem] h-full">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-xl font-black">Session Setup</CardTitle>
              <CardDescription className="text-sm font-medium">Select course and session details.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Select Course</label>
                <Select>
                  <SelectTrigger className="h-14 rounded-2xl border-2 bg-secondary/30 focus:ring-primary/20 transition-all">
                    <SelectValue placeholder="Choose a course" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="cs101">CS-101 Introduction to CS</SelectItem>
                    <SelectItem value="cs202">CS-202 Data Structures</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Session Type</label>
                <Select>
                  <SelectTrigger className="h-14 rounded-2xl border-2 bg-secondary/30 focus:ring-primary/20 transition-all">
                    <SelectValue placeholder="Lecture / Lab" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="lecture">Lecture</SelectItem>
                    <SelectItem value="lab">Lab</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                className="w-full h-14 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20 transition-all active:scale-95" 
                onClick={() => setIsStarted(!isStarted)}
              >
                {isStarted ? "Stop Session" : "Start Session"}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="border-none shadow-xl overflow-hidden rounded-[2rem] h-full">
            <CardHeader className="border-b bg-muted/30 p-8">
              <CardTitle className="text-2xl font-black">QR Attendance Interface</CardTitle>
              <CardDescription className="text-base font-medium">Students scan this code to mark their presence.</CardDescription>
            </CardHeader>
            <CardContent className="p-12 flex flex-col items-center justify-center min-h-[500px] relative">
              <AnimatePresence mode="wait">
                {isStarted ? (
                  <motion.div 
                    key="active"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="space-y-10 text-center w-full max-w-md"
                  >
                    <div className="relative mx-auto size-72 p-6 bg-white rounded-[3rem] shadow-2xl shadow-primary/10 group">
                      <div className="absolute inset-0 border-4 border-primary/20 rounded-[3rem] animate-pulse" />
                      <QrCode className="size-full text-primary group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="space-y-4">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 text-primary font-bold text-lg"
                      >
                        <Users className="size-6" />
                        <span>42 Students Joined</span>
                      </motion.div>
                      <div className="flex items-center justify-center gap-8 text-muted-foreground font-bold">
                        <div className="flex flex-col items-center">
                          <span className="text-2xl text-foreground">04:52</span>
                          <span className="text-[10px] uppercase tracking-widest">Time Remaining</span>
                        </div>
                        <div className="w-px h-8 bg-border" />
                        <div className="flex flex-col items-center">
                          <span className="text-2xl text-foreground">85%</span>
                          <span className="text-[10px] uppercase tracking-widest">Attendance Rate</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="inactive"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="text-center space-y-6 max-w-sm"
                  >
                    <div className="size-24 rounded-[2.5rem] bg-muted flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <Clock className="size-12 text-muted-foreground/40" />
                    </div>
                    <h3 className="text-2xl font-black text-muted-foreground/60">No Active Session</h3>
                    <p className="text-muted-foreground font-medium">
                      Select a course and section from the panel to start a new attendance session.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsStarted(true)}
                      className="rounded-2xl h-14 px-8 font-bold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all active:scale-95"
                    >
                      Start Session
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-none shadow-lg rounded-[2rem] bg-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)]" />
          <CardHeader className="p-8 relative z-10">
            <CardTitle className="text-xl font-black">Recent Logs</CardTitle>
            <CardDescription className="text-primary-foreground/60 font-medium">View and export attendance records.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-4 relative z-10">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { name: "CS101 - Lecture 08", date: "Oct 10, 2023", rate: "85%" },
                { name: "CS202 - Lab 04", date: "Oct 09, 2023", rate: "92%" },
                { name: "SE301 - Lecture 12", date: "Oct 08, 2023", rate: "78%" },
              ].map((session, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 transition-colors hover:bg-white/20"
                >
                  <div className="space-y-1">
                    <p className="text-lg font-bold">{session.name}</p>
                    <p className="text-xs opacity-60 font-bold uppercase tracking-wider">{session.date}</p>
                  </div>
                  <span className="text-2xl font-black">{session.rate}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
