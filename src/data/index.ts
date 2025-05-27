import { Project } from "@/types";

export const domainPath = "https://dandnirv-portfolio.netlify.app";

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
  summary:
    "Passionate front-end developer with 4 months of hands-on experience from an AWS-supported fullstack bootcamp. Skilled in JavaScript, TypeScript, React, Vue.js, Nuxt, Tailwind CSS, Bootstrap, Shadcn-ui and Flowbite. Enjoys collaborating in real-world projects using Git and Trello, and constantly exploring new front-end technologies.",
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
      "Basic Programming Concepts through various languages such as Object-Oriented Programming in Java. Mathematics courses included Algebra, Calculus, Statistics, Discrete Math, Language and Automata Theory.",
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
    title: "Noku: Mini e-Commerce",
    description:
      "Noku delivers a smooth and efficient coffee shopping experience, combining an intuitive interface with powerful features like real-time cart updates and automated order tracking. Designed for both customers and admins, it includes a sleek dashboard to monitor sales and customer activity, streamlining the entire process.",
    github: "https://github.com/dandnirv7/mini-pos",
    status: "In Progress",
    techStacks: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "Tanstack Query",
      "Tailwind CSS",
    ],
    date: "2025-5-26",
  },
  {
    title: "Aspirasi Desa",
    description: `"Aspirasi Desa" is the final project I developed during the intensive Alkademi-AWS community bootcamp. In this project, our team collaborated closely, combining frontend and backend skills to create a full-stack web application. Utilizing a tech stack that includes Nuxt, Express, Sequelize, Tailwind, Flowbite, and MySQL, we aimed to build a robust platform. For effective collaboration and project management, we used Trello to organize our tasks and facilitate daily stand-ups, ensuring smooth communication throughout the development process.`,
    github: "https://github.com/dandnirv7/asp-desa-frontend",
    status: "Completed",
    techStacks: [
      "Nuxt",
      "Express",
      "Sequelize",
      "MySQL",
      "TailwindCSS",
      "Flowbite",
    ],
    date: "2023-8-28",
  },
  {
    title: "Night Movie",
    description:
      "Night Movie is a modern movie streaming platform powered by the TMDB API. Built with React, TypeScript, and TailwindCSS, it offers a responsive interface for exploring an extensive collection of movies and TV shows. Key features include efficient search and filtering by genre, release date, and popularity, along with detailed information like ratings and trailers. Utilizing Tanstack Query for data management and caching ensures quick load times. Its modular architecture allows for future enhancements, such as user accounts and personalized recommendations, making Night Movie a modern and scalable streaming solution.",
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
    description: `"Berita Kini" is a sleek and informative news website developed during the Technical Frontend Internship MSIB Batch 7 program. Following a detailed Figma design, this project was built as a static website to showcase the latest news from Indonesia. It consumes data from the Berita Indonesia API and provides a clean, responsive interface for users to browse news by category.`,
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
