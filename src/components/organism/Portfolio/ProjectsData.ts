export type Project = {
  iconPng: string;
  iconAvif: string;
  type: "desktop" | "react" | "Html-Css" | "Html-Css-Js" | "Nextjs";
  name: string;
  description: string;
  demo?: string; // optional
  github: string;
};
const projectsData: Project[] = [
  {
    iconPng: "/Projects/DVLD.png",
    iconAvif: "/Projects/DVLD.avif",
    type: "desktop",
    name: "Driving License Management System (DVLD)",
    description:
      "A C# desktop app for managing driving license issuance, renewal, and verification with SQL Server support",
    demo: "https://vimeo.com/1056301250/53c69bb538",
    github: "https://github.com/Ishaaq-21/Driving-Management-System-",
  },
  {
    iconPng: "/Projects/shopcart.png",
    iconAvif: "/Projects/shopcart.avif",
    type: "Nextjs",
    name: "Shopcart E-commerce",
    description:
      "A Next.js e-commerce platform with product listings, cart management, user authentication, and secure payment processing.",
    demo: "https://shopcart-project.vercel.app/",
    github: "https://github.com/Ishaaq-21/Shopcart-ecommerce-store",
  },
  {
    iconPng: "/Projects/voyanta.png",
    iconAvif: "/Projects/voyanta.avif",
    type: "Nextjs",
    name: "Voyanta Tours",
    description:
      "A travel exploration app featuring tour listings, detailed guides, user profiles, and secure authentication.",
    demo: "https://voyanta-tours.vercel.app/",
    github: "https://github.com/Ishaaq-21/Voyanta-project",
  },
  {
    iconPng: "/Projects/Portfolio.png",
    iconAvif: "/Projects/Portfolio.avif",
    type: "Nextjs",
    name: "My Portfolio",
    description:
      "A sleek, responsive web portfolio to showcase my projects, skills, and background, built with modern web technologies.",
    github: "https://github.com/Ishaaq-21/My-Nextjs-Portfolio",
  },
  {
    iconPng: "/Projects/PrayerTimes.png",
    iconAvif: "/Projects/PrayerTimes.avif",
    type: "react",
    name: "Prayer Times for muslims",
    description:
      "Responsive app showing global prayer times, live clock, countdown, multilingual support, and AI Islamic assistant.",
    demo: "https://prayer-times-for-muslims.netlify.app/",
    github: "https://github.com/Ishaaq-21/Prayer-Times-React-App",
  },

  {
    iconPng: "/Projects/creative-mini.png",
    iconAvif: "/Projects/creative-mini.avif",
    type: "Html-Css-Js",
    name: "Creative Agency Portfolio",
    description:
      "A modern, responsive website for a creative agency with interactive sections, theme customization — built using HTML, CSS, and JavaScript.",
    demo: "https://ishaaq-21.github.io/Creative-Agency/",
    github: "https://github.com/Ishaaq-21/Creative-Agency",
  },
  {
    iconPng: "/Projects/dash.png",
    iconAvif: "/Projects/dash.avif",
    type: "Html-Css",
    name: "Admin Dashboard Template",
    description:
      "A modern admin dashboard with task, file, and project management features. Built for clarity, responsiveness, and smooth user workflows.",
    demo: "https://ishaaq-21.github.io/Admin-Dashboard/",
    github: "https://github.com/Ishaaq-21/Admin-Dashboard",
  },
  {
    iconPng: "/Projects/master-mini.png",
    iconAvif: "/Projects/master-mini.avif",
    type: "Html-Css",
    name: "Master Template",
    description:
      "A clean, multipurpose business template with sections for articles, features, and testimonials. Ideal for scalable, professional websites.",
    demo: "https://ishaaq-21.github.io/Html-Css-Template-master/",
    github: "https://github.com/Ishaaq-21/Html-Css-Template-master",
  },
  {
    iconPng: "/Projects/todo.png",
    iconAvif: "/Projects/todo.avif",
    type: "react",
    name: "Todo App",
    description:
      "Modern, responsive todo app with full CRUD, filtering, local storage, and context-driven state using React, Material-UI, and Vite.",
    demo: "https://ishaaq-21.github.io/React-TodoApp/",
    github: "https://github.com/Ishaaq-21/React-TodoApp",
  },
  {
    iconPng: "/Projects/leon.png",
    iconAvif: "/Projects/leon.avif",
    type: "Html-Css",
    name: "Leon Template",
    description:
      "A sleek landing template with services, portfolio, and pricing sections. Built using Flexbox, Grid, and polished animations.",
    demo: "https://ishaaq-21.github.io/Html-Css-Leon-template/",
    github: "https://github.com/Ishaaq-21/Html-Css-Leon-template",
  },
  {
    iconPng: "/Projects/kasper-mini.png",
    iconAvif: "/Projects/kasper-mini.avif",
    type: "Html-Css",
    name: "Kasper Template",
    description:
      "A minimalist portfolio template with animated sections and a responsive layout. Great for freelancers or creative agencies.",
    demo: "https://ishaaq-21.github.io/Html-Css-Kasper-Template/",
    github: "https://github.com/Ishaaq-21/Html-Css-Kasper-Template",
  },
  {
    iconPng: "/Projects/miniJs.png",
    iconAvif: "/Projects/miniJs.avif",
    type: "Html-Css-Js",
    name: "Mini-Projects",
    description:
      "A web app with four interactive sections: custom cursor effects, typing animation, live calendar, and city-based weather forecast.",
    demo: "https://ishaaq-21.github.io/Vanilla-Js-Mini-Projects/",
    github: "https://github.com/Ishaaq-21/Vanilla-Js-Mini-Projects",
  },
];

export default projectsData;
