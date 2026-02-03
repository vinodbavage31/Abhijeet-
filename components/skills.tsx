"use client"

import { motion } from "framer-motion"
import { Database, Code, Wrench, Brain, Cloud, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: ["SQL", "Python", "Statistics", "Machine Learning", "Deep Learning", "Artificial Intelligence", "FastAPI", "Temporal"]
  },
  {
    title: "Libraries & Frameworks",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "TensorFlow", "Keras", "Pydantic"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    skills: ["AWS", "Docker", "S3", "SNS/SQS", "Tableau", "Power BI", "MySQL", "GitHub"]
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and solving complex problems
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon
            return (
              <motion.div key={idx} variants={item}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIdx) => (
                        <motion.span
                          key={skillIdx}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Projects Completed", value: "15+" },
            { label: "Technologies", value: "20+" },
            { label: "Years Learning", value: "3+" },
            { label: "ML Models Built", value: "10+" }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-lg glass"
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
