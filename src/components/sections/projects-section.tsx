"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";

import { useEffect, useState } from "react";

function useBreakpoint() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width >= 1024) return "desktop";
  if (width >= 768) return "tablet";
  return "mobile";
}

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

export function ProjectsSection() {
  const breakpoint = useBreakpoint();

  let sliceCount = 3; // default desktop
  if (breakpoint === "tablet") sliceCount = 4;
  if (breakpoint === "mobile") sliceCount = 2;
  return (
    <section id="projects" className="py-24">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some projects I&apos;ve worked on that showcase my skills
            and approach to problem-solving.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.slice(0, sliceCount).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Button variant="outline" className="rounded-full" asChild>
            <Link href="/projects">
              See All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
