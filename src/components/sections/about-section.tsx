"use client";

import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { personalInfo } from "@/data";
import Image from "next/image";
import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
            About Me
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 z-10 -m-1 border rounded-lg border-primary/20" />
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-lg blur-sm" />
            <Image
              src={personalInfo.profilePicture}
              alt="About Me"
              width={600}
              height={400}
              className="rounded-lg relative z-0 h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h3 className="mb-4 text-2xl font-semibold">My Journey</h3>
            <p className="mb-6 text-muted-foreground">{personalInfo.summary}</p>
            <p className="mb-6 text-muted-foreground">
              I specialize in front-end development with React and TypeScript,
              but I&apos;m also comfortable working on the back-end when needed.
              I believe in writing clean, maintainable code and creating
              intuitive user experiences.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="py-4 text-xs rounded-full sm:text-sm group border-primary/20 hover:border-primary/50"
                asChild
              >
                <Link href="/pdf/resume.pdf">
                  <FileText className="mr-1.5 h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                  <span>View Resume</span>
                </Link>
              </Button>
              <Link
                href="/#contact"
                className={cn(buttonVariants(), "rounded-full px-6")}
              >
                <Mail className="w-4 h-4 mr-2" /> Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
