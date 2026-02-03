"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in cutting-edge AI and Machine Learning technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden">
            {/* Gradient header */}
            <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
            
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      Bachelor of Engineering
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-3">
                      Artificial Intelligence & Machine Learning
                    </p>
                  </div>

                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">Visvesvaraya Technological University, Belgaum</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>2021 – 2025</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-muted-foreground leading-relaxed">
                      Specialized in Artificial Intelligence and Machine Learning with comprehensive 
                      coursework covering deep learning, neural networks, natural language processing, 
                      computer vision, and advanced algorithms. Developed strong foundation in 
                      mathematics, statistics, and programming essential for AI engineering.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-4">
                    <h4 className="font-semibold mb-3 text-foreground">Key Highlights:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Advanced ML Algorithms",
                        "Deep Learning & CNNs",
                        "Natural Language Processing",
                        "Computer Vision",
                        "Data Structures & Algorithms",
                        "Cloud Computing & AWS",
                        "Big Data Analytics",
                        "AI Ethics & Governance"
                      ].map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
