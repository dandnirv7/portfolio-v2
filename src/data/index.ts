import { Project } from "@/types";

export const domainPath = "https://dandnirv-portfolio.vercel.app";

export const personalInfo = {
  name: "Dandi",
  title: "Web Developer",
  fullname: "Dandi Nirpana Nahin",
  contact: {
    email: "dandinirpana7@gmail.com",
    phone: "+6285155333412",
    linkedin: "https://www.linkedin.com/in/dandnirv",
    github: "https://github.com/dandnirv7",
    personalWebsite: domainPath,
    location: "Bekasi, Indonesia",
  },
  profilePicture: "/images/profile-picture.jpg",
  summary: [
    `Passionate Fullstack Developer who enjoys building modern web applications from idea to deployment. Work primarily focuses on the React ecosystem with Next.js on the front-end and Node.js with NestJS on the back-end, aiming to create applications that are fast, reliable, and maintainable.`,

    `Experienced with technologies such as TypeScript, Prisma, Supabase, and Tailwind CSS, including implementing authentication systems and payment gateway integrations like Xendit and Midtrans. Built a strong foundation through the Alkademi x AWS in Communities bootcamp and hands-on projects, with emphasis on clean coding practices, Git-based workflows, and Agile collaboration using tools like Trello.`,

    `Driven by curiosity and continuous learning, with a strong interest in building scalable products and improving developer and user experiences through modern web technologies.`,
  ],
};

// Example education data
export const educations = [
  {
    degree: "Bachelor of Computer Science (Bsc)",
    institution: "Bani Saleh University",
    location: "Bekasi, Indonesia",
    startDate: "2023-9",
    endDate: "",
    description:
      "Programming and Mathematics courses covering concepts such as Object-Oriented Programming in Java, PHP and Laravel, Database Applications, Web Programming, Numerical Computation, and Cybersecurity. Mathematics background includes Algebra, Calculus, Statistics, Discrete Mathematics, and Language & Automata Theory.",
    achievements: [],
    logo: "/images/institutions/bani-saleh.png",
    cgpa: "3.69",
    institutionUrl: "https://ubs.ac.id/",
    documents: [
      {
        name: "",
        url: "",
      },
    ],
    techStacks: ["Java", "HTML", "CSS", "Bootstrap", "Linux", "MySQL"],
  },
  {
    degree: "Bootcamp Fullstack Web Development",
    institution: "Alkademi - AWS in Communities",
    location: "Bandung, Indonesia",
    startDate: "2023-5-1",
    endDate: "2023-7-28",
    description:
      "Completed an intensive full-stack web development bootcamp with hands-on experience in both frontend (HTML, CSS, JavaScript, Git, Tailwind CSS, Vue.js, Nuxt.js) and backend (Node.js, Express.js, MySQL, Sequelize). Gained a solid understanding of Single Page Applications (SPA), Vue Router, and software development best practices (SDLC). Collaborated in cross-functional teams to build and deliver full-stack web applications.",
    achievements: [],
    logo: "/images/companies/alkademi.png",
    cgpa: "3.7439",
    institutionUrl: "https://alkademi.id/",
    documents: [
      {
        name: "Transcript",
        url: "/pdf/alkademi-certificate.pdf",
      },
    ],
    techStacks: [
      "HTML",
      "CSS",
      "JavaScript",
      "Express.js",
      "Node.js",
      "Vue.js",
      "Nuxt",
      "Git",
      "Trello",
    ],
  },
  {
    degree: "FullStack Web Developer",
    institution: "ITBOX",
    location: "Bandung, Indonesia",
    startDate: "2022-1",
    endDate: "2022-6",
    description:
      "Completed a comprehensive course in full-stack JavaScript development, focusing on building web applications using HTML, CSS, and advanced JavaScript. Gained hands-on experience with backend development using Node.js and Express.js.",
    achievements: [],
    logo: "/images/companies/itbox.png",
    cgpa: "3.7439",
    institutionUrl: "https://itbox.id/",
    documents: [
      {
        name: "Transcript",
        url: "/pdf/itbox-certificate.pdf",
      },
    ],
    techStacks: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Git",
      "Postman",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Noku Coffee",
    description:
      "An advanced, scalable e-commerce platform engineered to deliver a seamless and secure shopping experience. The system is fortified with advanced database locking mechanisms and price snapshotting to guarantee inventory accuracy and prevent data discrepancies during high-traffic transactions. It features a fully integrated Xendit payment gateway equipped with automated verification and comprehensive fraud detection logic. To optimize operational efficiency, the application utilizes NestJS Schedule (Cron Jobs) to automate order lifecycles and cancellations, significantly reducing manual overhead. Additionally, the product search functionality is enhanced with strategic caching and URL-based filtration for blazing-fast navigation.",
    github: "https://github.com/dandnirv7/noku-coffee-frontend",
    image: "/images/projects/noku-coffee.jpg",
    demo: "https://noku-coffee.vercel.app/",
    status: "In Progress",
    techStacks: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Supabase",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "OAuth 2.0",
      "Tanstack Query",
      "Tailwind CSS",
      "Xendit",
    ],
    date: "2026-01-23",
  },
  {
    title: "Night Movie",
    description:
      "A highly responsive movie streaming platform featuring sophisticated search and filtration capabilities, built with React and TypeScript. The application boasts a 30% reduction in loading times achieved through optimized data fetching and intelligent caching strategies utilizing React Query. Furthermore, the platform's performance and scalability are significantly enhanced through rigorous code splitting and lazy loading techniques. The entire architecture is highly modular, emphasizing reusable components to ensure long-term maintainability and clean code practices.",
    image: "/images/projects/night-movie.png",
    demo: "https://night-movie-ten.vercel.app/",
    status: "Completed",
    techStacks: [
      "React",
      "TypeScript",
      "Tanstack Query",
      "TailwindCSS",
      "Shadcn-UI",
    ],
    date: "2024-10-15",
  },
  {
    title: "Berita Kini",
    description:
      "A static news portal developed rapidly within three days as part of a competitive frontend internship selection (MSIB Batch 7). The platform integrates seamlessly with the Berita Indonesia API to deliver real-time content updates. The project involved transforming a comprehensive Figma design into a highly responsive and accessible user interface, prioritizing optimal usability across various devices.",
    image: "/images/projects/berita-kini.png",
    github: "https://github.com/dandnirv7/berita-kini",
    demo: "https://berita-kini-one.vercel.app/",
    status: "Completed",
    techStacks: [
      "React",
      "TypeScript",
      "Tanstack Query",
      "TailwindCSS",
      "Shadcn-UI",
    ],
    date: "2024-10-17",
  },
  {
    title: "Aspirasi Desa",
    description:
      "A public feedback management system designed to facilitate communication between village residents and local administration. The frontend, developed with Nuxt.js and Tailwind CSS, integrates robustly with a backend RESTful API to manage the submission and tracking of public aspirations. The application emphasizes performance through lazy loading and a highly modular code structure. Development was driven by an Agile workflow managed via Trello, ensuring efficient cross-team collaboration.",
    github: "https://github.com/dandnirv7/asp-desa-frontend",
    status: "Completed",
    techStacks: [
      "Nuxt.js",
      "Express.js",
      "Sequelize",
      "MySQL",
      "Tailwind CSS",
      "Flowbite",
    ],
    date: "2023-07-01",
  },
  {
    title: "Taskia",
    description:
      "Taskia is a web-based digital note-taking application that leverages localStorage for efficient data management. With a design inspired by Shayna Kit, Taskia provides a clean and intuitive interface, making it easy for users to organize their tasks and ideas. Built with React and Tailwind, it ensures a seamless experience for daily note-taking and task management.A personal website built with Nuxt, TailwindCSS, and Vercel",
    image: "/images/projects/taskia.png",
    github: "https://github.com/dandnirv7/taskia/",
    demo: "https://taskia-five.vercel.app/",
    status: "Completed",
    techStacks: ["React", "TailwindCSS", "Shadcn-UI", "localStorage"],
    date: "2024-7-24",
  },
  {
    title: "Laundry API",
    description: `"Laundry API" is a robust backend service designed for a laundry management application, developed during the Bootcamp Pesilat Alkademi - AWS in Communities. Built with Node.js, Express, MySQL, and Sequelize, it efficiently handles data for managing orders, services, and customers.`,
    image: "",
    github: "https://github.com/dandnirv7/laundry-api",
    demo: "",
    status: "Completed",
    techStacks: ["Node.js", "Express.js", "MySQL", "Sequelize"],
    date: "2023-6-11",
  },
  {
    title: "The Meal",
    description:
      "The Meal is your go-to destination for daily cooking inspiration. Explore a diverse range of recipes from around the world, experiment with new ingredients, and delight in delicious meals with us. Built using Vue and Tailwind, The Meal leverages the TheMealDB API to bring you a wealth of culinary ideas at your fingertips.",
    image: "/images/projects/the-meal-app.png",
    demo: "https://the-meals-app.netlify.app/home",
    github: "https://github.com/dandnirv7/meals-app",
    status: "Completed",
    techStacks: ["Vue.js", "TailwindCSS", "Shadcn-UI"],
    date: "2023-9-16",
  },
  {
    title: "Pokedex",
    description:
      "This project is a fun and interactive application that consumes data from the official PokeAPI. Built using Vue and Tailwind, it allows users to explore and interact with a vast collection of Pokémon data, bringing the world of Pokémon to life in a sleek and dynamic interface.",
    image: "/images/projects/pokedex.png",
    github: "https://github.com/dandnirv7/vue-pokeapi/tree/development",
    status: "Completed",
    techStacks: ["Vue.js", "TailwindCSS"],
    date: "2023-8-18",
  },

  {
    title: "Naked Press Clone | Mobile Only",
    description:
      "Clone of the Naked Press website, this project highlights the benefits of detox cold-pressed juice made from fresh fruits and vegetables. Developed with Vue and Tailwind, the project delivers a smooth, clean interface for a seamless user experience.",
    demo: "https://nakedpress-clone-by-dandnirv.netlify.app/",
    github: "https://github.com/dandnirv7/nakedpress-clone",
    status: "In Progress",
    techStacks: ["Vue.js", "TailwindCSS", "Shadcn-UI"],
    date: "2023-9-5",
  },
];

// export const certifications = [
//   {
//     name: "CCNA: Introduction to Networks",
//     link: "https://www.credly.com/badges/fa38eb0b-43b0-4a2a-bdc0-da2a334c8738?source=linked_in_profile",
//     issuingOrganization: "CISCO",
//     issueDate: "2021-6-20",
//   },
//   {
//     name: "HTML, CSS, and Javascript for Web Developers",
//     link: `${domainPath}pdf/TDA-html_css_js.pdf`,
//     issuingOrganization: "The Digital Adda",
//     issueDate: "2023-12-11",
//   },
//   {
//     name: "ReactJS",
//     link: `${domainPath}pdf/TDA-reactjs.pdf`,
//     issuingOrganization: "The Digital Adda",
//     issueDate: "2023-12-12",
//   },
//   {
//     name: "Rust Workshop 2024 - Parallel Programming",
//     link: "https://credsverse.com/credentials/af37b752-6f6d-4f6d-9368-34f56c1242e5",
//     issuingOrganization: "",
//     issueDate: "2024-4-25",
//     pdf: `${domainPath}assets/pdf/rust-workshop-2024-parallel-programming.pdf`,
//   },
// ];

export const skills = {
  languages: ["TypeScript", "JavaScript"],
  frameworks: ["Next.js", "React", "Vue.js", "Nuxt.js", "Express", "Node.js"],
  databases: ["PostgreSQL", "MySQL"],
  tools: ["Git", "Postman", "Supabase"],
};
