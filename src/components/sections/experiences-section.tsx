"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ExperiencesSection() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute rounded-full right-1/4 top-1/4 w-96 h-96 bg-primary/5 filter blur-3xl"></div>
        <div className="absolute rounded-full left-1/4 bottom-1/4 w-96 h-96 bg-secondary/5 filter blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <div className="inline-block p-1.5 px-3 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <Briefcase className="inline w-4 h-4 mr-1 text-primary" />
            <span className="text-xs font-medium">Work History</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Professional Experience
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A showcase of my professional journey and the skills I&apos;ve
            developed along the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
