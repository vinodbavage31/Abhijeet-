"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ArrowDown, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 dark:from-purple-500/20 dark:via-pink-500/20 dark:to-blue-500/20" />
      
      {/* Floating orbs - removed animate-pulse for smoother experience */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50" />

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
              {/* Primary CTA - Modern Design */}
              <motion.a
                href="https://drive.google.com/file/d/1O0VYzHh3jlevUc4-jlq3oqTfJo4uIf1E/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>View Resume</span>
                  <motion.div
                    className="absolute -right-1 -top-1"
                    animate={{ rotate: [0, 10, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Sparkles className="h-4 w-4 text-yellow-300" />
                  </motion.div>
                </div>
              </motion.a>

              {/* Secondary CTAs - Modern Glass Design */}
              <motion.a
                href="https://github.com/AbhijeetJadhav72"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-2xl font-semibold border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/abhijeetsjadhav/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-2xl font-semibold border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href="mailto:jadhavabhijeet4404@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-2xl font-semibold border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:border-pink-500/50 hover:bg-pink-500/5 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>Contact</span>
              </motion.a>
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
              {/* Static Glow effect - removed animate-glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
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
              
              {/* Open to Work Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -bottom-4 -right-4 z-10"
              >
                <div className="relative">
                  <div className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-xl border-4 border-background flex items-center space-x-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    <span className="text-sm">Open to Work</span>
                  </div>
                </div>
              </motion.div>
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
