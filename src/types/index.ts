import { Icons } from "@/components/icons";

export interface NavItem {
  name: string;
  href: string;
  icon: keyof typeof Icons;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  github?: string;
  demo?: string;
  status?: string;
  techStacks: string[];
  date?: string;
  blogSlugs?: string[];
}
