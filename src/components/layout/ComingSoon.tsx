import * as React from "react"
import { motion } from "motion/react"
import { Rocket, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { useApp } from "@/src/context/AppContext"

interface ComingSoonProps {
  title: string
  description?: string
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  const navigate = useNavigate()
  const { t } = useApp()

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="size-32 rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary shadow-2xl shadow-primary/10"
      >
        <Rocket className="size-16" />
      </motion.div>
      
      <div className="space-y-3 max-w-md">
        <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {title}
        </h1>
        <p className="text-muted-foreground font-medium text-lg">
          {description || "We're working hard to bring this feature to you. Stay tuned for updates!"}
        </p>
      </div>

      <div className="flex gap-4">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="rounded-xl font-bold h-12 px-6 border-2"
        >
          <ArrowLeft className="me-2 size-4" />
          Go Back
        </Button>
        <Button 
          onClick={() => navigate('/')}
          className="rounded-xl font-bold h-12 px-6 shadow-lg shadow-primary/20"
        >
          Return Home
        </Button>
      </div>

      <div className="pt-12 grid grid-cols-3 gap-8 opacity-20 grayscale">
        <div className="h-2 w-24 bg-primary rounded-full" />
        <div className="h-2 w-24 bg-primary rounded-full" />
        <div className="h-2 w-24 bg-primary rounded-full" />
      </div>
    </div>
  )
}
