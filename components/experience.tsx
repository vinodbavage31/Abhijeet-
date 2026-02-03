"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Labra.io",
    location: "Bengaluru, India",
    type: "On-site",
    period: "Jan 2026 – Present",
    description: [
      "Contributing to serverless architecture using AWS Lambda",
      "Working with S3, SNS/SQS for cloud messaging",
      "Backend development with FastAPI",
      "Exploring Temporal workflows",
      "Using Docker for containerization",
      "Collaborating on cloud integrations"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    role: "Data Science Intern",
    company: "Rubixe AI Solutions",
    location: "Remote",
    type: "Remote",
    period: "Mar 2025 – Oct 2025",
    description: [
      "Performed EDA and preprocessing on large datasets",
      "Built ML models with 85%+ accuracy",
      "Feature engineering and hyperparameter tuning",
      "Built interactive dashboards",
      "Assisted in model deployment",
      "Collaborated with cross-functional teams"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    role: "Python Intern",
    company: "QSpiders",
    location: "Remote",
    type: "Remote",
    period: "Apr 2024 – Jun 2024",
    description: [
      "Core Python and OOP concepts",
      "Built mini projects and applications",
      "Optimized Python applications",
      "Learned industry best practices",
      "Automated repetitive tasks",
      "Code reviews and debugging"
    ],
    color: "from-orange-500 to-red-500"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience in AI, ML, and software engineering
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-orange-500" />

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`} />
                  <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-75`} />
                </div>

                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "md:pr-12 pl-8 md:pl-0" : "md:pl-12 pl-8 md:pr-0"}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${exp.color} mb-4`}>
                        {exp.period}
                      </div>

                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      
                      <div className="flex flex-col space-y-2 mb-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location} • {exp.type}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start space-x-2">
                            <span className="text-primary mt-1">▸</span>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
