"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 dark:from-purple-500/20 dark:via-pink-500/20 dark:to-blue-500/20" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Abhijeet Jadhav</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <p className="text-xl lg:text-2xl text-muted-foreground">
                AI Engineer | Machine Learning Engineer | Data Scientist
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
                Building Intelligent Systems That Solve Real-World Problems
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              To work in a dynamic organization that provides opportunities to apply my knowledge 
              in AI, Machine Learning, and Data Science, while continuously learning emerging 
              technologies and contributing to impactful projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1O0VYzHh3jlevUc4-jlq3oqTfJo4uIf1E/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/AbhijeetJadhav72"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/abhijeetsjadhav/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="mailto:jadhavabhijeet4404@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-glow" />
              
              {/* Image container */}
              <div className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl animate-float">
                <div className="bg-background rounded-2xl p-2 shadow-2xl">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                    {/* Placeholder for profile image */}
                    <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold gradient-text">
                      AJ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#skills" className="flex flex-col items-center space-y-2 group">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
