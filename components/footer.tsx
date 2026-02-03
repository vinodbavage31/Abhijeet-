"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/AbhijeetJadhav72",
    icon: Github
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abhijeetsjadhav/",
    icon: Linkedin
  },
  {
    name: "Email",
    href: "mailto:jadhavabhijeet4404@gmail.com",
    icon: Mail
  }
]

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-secondary/50 border-t">
      {/* Scroll to top button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full shadow-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center justify-center"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Abhijeet Jadhav</h3>
            <p className="text-muted-foreground mb-4">
              AI Engineer passionate about building intelligent systems that solve real-world problems.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Let&apos;s Work Together</h4>
            <p className="text-muted-foreground mb-4">
              Open to exciting opportunities in AI/ML engineering and data science.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-1">
            <span>© 2026 Abhijeet Jadhav.</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>By Vinod Bavage</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
