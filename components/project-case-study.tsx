"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Github, CheckCircle2, Lightbulb, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/projects-data"

interface ProjectCaseStudyProps {
  project: Project
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${project.gradient} mb-6`}>
            Case Study
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.github && (
            <Button asChild size="lg" className={`bg-gradient-to-r ${project.gradient} hover:opacity-90`}>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          )}
        </motion.div>

        {/* Project image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] rounded-2xl overflow-hidden mb-12 shadow-2xl"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Problem Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Problem Statement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Approach & Methodology</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.approach.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm mt-1">
                          {idx + 1}
                        </div>
                        <p className="text-muted-foreground leading-relaxed flex-1">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Architecture Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>System Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-secondary/50 rounded-lg p-12 text-center">
                    <p className="text-muted-foreground">
                      Architecture diagram showcasing the end-to-end pipeline
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Results & Impact</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground leading-relaxed">
                          {result}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Learnings */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Key Learnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.learnings.map((learning, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-sm text-muted-foreground">
                          {learning}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center py-12"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in similar projects?</h3>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss how I can help solve your challenges
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/#projects">View More Projects</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
