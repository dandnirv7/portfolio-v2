"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatDate } from "@/lib/utils";
import { Project } from "@/types";
import { motion } from "framer-motion";
import {
  Calendar,
  Code,
  ExternalLink,
  Github,
  ImageIcon,
  Info,
  // Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
// import { RelatedBlogLinks } from "./blog/related-blog-links";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 border border-border/40 bg-muted/10 backdrop-blur-sm hover:shadow-xl group">
        <div className="relative overflow-hidden h-52">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center transition-colors duration-500 bg-gradient-to-br from-primary/5 to-secondary/10 group-hover:from-primary/10 group-hover:to-secondary/20">
              <div className="flex flex-col items-center gap-3">
                <ImageIcon
                  className="w-12 h-12 transition-opacity opacity-40 group-hover:opacity-60"
                  aria-label="Project placeholder"
                  width={48}
                  height={48}
                />
                <div className="text-sm font-medium text-muted-foreground/50">
                  Project Preview
                </div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

          {/* Status badge with glow effect on hover */}
          <div className="absolute transition-transform duration-300 top-3 right-3 group-hover:scale-110 group-hover:translate-x-1">
            <span
              className={`px-2 py-1 text-xs rounded-full backdrop-blur-sm group-hover:shadow-glow ${
                project.status === "Completed"
                  ? "bg-green-500/20 text-green-500 group-hover:bg-green-500/30"
                  : project.status === "In Progress"
                    ? "bg-blue-500/20 text-blue-500 group-hover:bg-blue-500/30"
                    : project.status === "Maintaining"
                      ? "bg-purple-500/20 text-purple-500 group-hover:bg-purple-500/30"
                      : "bg-gray-500/20 text-gray-500 group-hover:bg-gray-500/30"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>

          {/* Animated tech stack tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {project.techStacks.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-muted/30 rounded-md transition-all duration-300 group-hover:translate-y-[-2px] group-hover:bg-muted/50"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {tech}
              </span>
            ))}
            {project.techStacks.length > 3 && (
              <span
                className="text-xs px-2 py-1 bg-muted/20 rounded-md transition-all duration-300 group-hover:translate-y-[-2px]"
                style={{ transitionDelay: `150ms` }}
              >
                +{project.techStacks.length - 3}
              </span>
            )}
          </div>
        </CardHeader>

        <CardFooter className="flex-col gap-3 pt-2 mt-auto">
          <div className="flex w-full gap-3">
            {project.github && (
              <Button
                variant="outline"
                size="sm"
                className="transition-all duration-300 group/button hover:border-primary/50"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-1 group-hover/button:rotate-[-8deg] transition-transform" />
                  <span className="relative">
                    Code
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-primary/0 group-hover/button:bg-primary/50 transform scale-x-0 group-hover/button:scale-x-100 transition-transform origin-left duration-300"></span>
                  </span>
                </a>
              </Button>
            )}
            {project.demo && (
              <Button
                size="sm"
                className="transition-all duration-300 group/button"
                asChild
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-1 transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                  Demo
                </a>
              </Button>
            )}

            {/* Dialog trigger button */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full text-xs gap-1.5 hover:bg-muted/50 ml-auto"
                >
                  <span>Details</span>
                  <Info className="h-3.5 w-3.5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-xl">
                    {project.title}
                    <Badge
                      className={`ml-2 text-xs ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-500"
                          : project.status === "In Progress"
                            ? "bg-blue-500/20 text-blue-500"
                            : project.status === "Maintaining"
                              ? "bg-purple-500/20 text-purple-500"
                              : "bg-gray-500/20 text-gray-500"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-base">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 mt-4">
                  {/* Created Date */}
                  {project.date && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Created: {formatDate(project.date)}</span>
                    </div>
                  )}

                  {/* Project Image */}
                  {project.image && (
                    <div className="relative w-full h-48 overflow-hidden rounded-md">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="flex items-center gap-2 text-sm font-medium">
                      <Code className="w-4 h-4" /> Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStacks.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-background/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Related blog posts */}
                  {/* {project.blogSlugs && project.blogSlugs.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="flex items-center gap-2 text-sm font-medium">
                        <Sparkles className="w-4 h-4" /> Related Articles
                      </h4>
                      <RelatedBlogLinks blogSlugs={project.blogSlugs} />
                    </div>
                  )} */}
                </div>

                <DialogFooter className="flex flex-col gap-3 mt-6 sm:flex-row">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="w-full sm:w-auto" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </a>
                    </Button>
                  )}
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
