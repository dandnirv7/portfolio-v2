"use client";

import { motion } from "framer-motion";
import {
  School,
  Calendar,
  Award,
  ExternalLink,
  BookOpen,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { educations } from "@/data";
import { formatStartEndDate, cn } from "@/lib/utils";
import Image from "next/image";
// Animation variants
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

const timelineVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "100%",
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

export function EducationsSection() {
  return (
    <section id="education" className="py-24 bg-muted/5">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <div className="inline-block p-1.5 px-3 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <BookOpen className="inline w-4 h-4 mr-1 text-primary" />
            <span className="text-xs font-medium">Academic Journey</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Education & Certifications
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My academic journey and continuous learning path that has shaped my
            professional skills.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 w-1 h-full transform md:left-1/2 md:-translate-x-1/2"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-b from-primary via-primary/50 to-primary/10"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10"
          >
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`mb-12 md:mb-24 flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline node */}
                <div className="hidden md:flex absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-2 border-primary/80 bg-background items-center justify-center shadow-[0_0_10px_rgba(var(--primary),0.3)]">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                </div>

                {/* Date tag */}
                <div
                  className={cn(
                    "hidden md:flex absolute md:left-1/2 transform items-center",
                    index % 2 === 0
                      ? "md:translate-x-12"
                      : "md:-translate-x-[calc(100%+48px)] flex-row-reverse",
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center bg-primary/10 border border-primary/20 rounded-full py-1 px-3 text-xs font-mono",
                      index % 2 === 0 ? "pl-3 pr-4" : "pl-4 pr-3",
                    )}
                  >
                    <Calendar className="w-3 h-3 text-primary shrink-0" />
                    <span className="ml-1.5">
                      {formatStartEndDate(edu.startDate, edu.endDate)}
                    </span>
                  </div>
                </div>

                {/* Timeline content */}
                <div
                  className={`relative ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <motion.div
                    className="relative p-6 transition-all duration-300 border rounded-lg bg-background/80 backdrop-blur-sm border-border/40 hover:shadow-lg"
                    whileHover={{
                      scale: 1.02,
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {/* Mobile timeline marker */}
                    <div className="absolute flex flex-col items-center -left-8 md:hidden top-8">
                      <div className="flex items-center justify-center w-4 h-4 border rounded-full border-primary bg-background">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <div className="h-full w-0.5 bg-gradient-to-b from-primary to-primary/10"></div>
                    </div>

                    {/* Content header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">
                          {edu.degree}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center mt-2 text-muted-foreground">
                        <div className="flex items-center mr-4">
                          <School className="h-3.5 w-3.5 mr-1 text-primary" />
                          <span className="text-sm">{edu.institution}</span>
                        </div>
                        <div className="flex items-center mt-1 sm:mt-0">
                          <MapPin className="h-3.5 w-3.5 mr-1 text-primary/70" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        <div className="flex items-center mt-1 md:hidden sm:mt-0">
                          <Calendar className="h-3.5 w-3.5 mr-1 text-primary/70" />
                          <span className="text-sm">
                            {formatStartEndDate(edu.startDate, edu.endDate)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      {/* Decorative line */}
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary/30 to-transparent"></div>
                      <p className="pl-3 my-4 text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>

                    {edu.achievements.length > 0 && (
                      <div className="pt-4 mt-5 border-t border-border/40">
                        <h4 className="flex items-center mb-2 text-sm font-semibold">
                          <Award className="h-4 w-4 mr-1.5 text-primary" />{" "}
                          Achievements & Honors
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-y-1 gap-x-4">
                          {edu.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-xs pl-5 relative before:absolute before:left-1.5 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-primary/40 before:rounded-full"
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-border/40">
                      <div className="text-xs text-muted-foreground">
                        {edu.logo && (
                          <div className="relative flex items-center justify-center w-14 h-14">
                            <Image
                              src={edu.logo}
                              alt={edu.institution}
                              fill
                              className="object-contain opacity-70"
                            />
                          </div>
                        )}
                      </div>
                      {edu.documents?.[0]?.url?.trim() ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-xs"
                          asChild
                        >
                          <a
                            href={edu.documents[0].url}
                            target="_blank"
                            className="flex items-center group"
                            rel="noopener noreferrer"
                          >
                            <span>View certificate</span>
                            <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        </Button>
                      ) : null}
                    </div>

                    {/* Visual highlight effect */}
                    {/* <div className={`absolute ${index % 2 === 0 ? '-right-1 md:-right-3' : '-right-1 md:-left-3'} top-8 transform translate-x-1/2 md:translate-x-0 w-2 h-16 bg-gradient-to-b from-primary/80 to-transparent rounded-full blur-sm opacity-60`}></div> */}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* <motion.div 
          className="mt-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Button variant="outline" className="text-sm rounded-full group">
            <span>View All Certifications</span>
            <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
