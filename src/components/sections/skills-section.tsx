"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skills = [
  "TypeScript",
  "Next.js (React)",
  "Nuxt (Vue.js)",
  "Git",
  "Linux",
  "Tailwind CSS",
  "Bootstrap",
  "REST API",
];

const softSkills = [
  "Team Collaboration",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Communication",
  "Critical Thinking",
];

const toolsAndWorkflow = [
  "Trello",
  "Postman",
  "Figma",
  "Notion",
  "GitHub",
  "Vercel",
  "Netlify",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/10">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Skills & Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Technologies and tools I&apos;ve mastered throughout my professional
            journey.
          </p>
        </motion.div>

        <Tabs defaultValue="technical" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="technical"
              className="cursor-pointer text-foreground"
            >
              Technical Skills
            </TabsTrigger>
            <TabsTrigger
              value="soft"
              className="cursor-pointer text-foreground"
            >
              Soft Skills
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="cursor-pointer text-foreground"
            >
              Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-6 text-left md:grid-cols-3 "
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="soft">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-6 text-left md:grid-cols-3 "
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="tools">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-6 text-left md:grid-cols-3 "
            >
              {toolsAndWorkflow.map((workflowTool, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{workflowTool}</span>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
