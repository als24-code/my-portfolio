import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLinkedinIn,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaRegLightbulb,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import { BiPhone } from "react-icons/bi";
import { FiUser, FiMail, FiFileText, FiCodesandbox } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { FiCode, FiUsers, FiBarChart } from "react-icons/fi";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  // { label: "Contact", href: "#contact" },
];

export const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alina-mehdi-59308413a",
    Icon: FaLinkedinIn,
  },
  { label: "GitHub", href: "https://github.com/als24-code/", Icon: FaGithub },
  {
    label: "Email",
    href: "mailto:soomroalina24@gmail.com",
    Icon: MdOutlineEmail,
  },
];

export const TECH_STACK = [
  { label: "React", Icon: FaReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "React Native", Icon: FaReact },
  { label: "HTML5", Icon: FaHtml5 },
  { label: "CSS3", Icon: FaCss3Alt },
  { label: "Git", Icon: FaGitAlt },
];

export const FILTERS = ["All", "Web", "Mobile", "Professional", "Personal"];

export const PROJECTS = [
  {
    id: "fantom",
    title: "Fantom Hypnotik - Smart-home lighting control",
    description:
      "A full system for hypnotik lights. A cross platform mobile app to control them and admin dashboard for managing app users.",
    image: "/fantom.png",
    tags: ["Next.js", "Nest.js", "MongoDB", "Firebase", "AWS"],
    categories: ["Mobile", "Web", "Professional"],
    href: "https://play.google.com/store/apps/details?id=ca.cgagnier.hypnoyiknativeandroid&hl=en",
  },
  {
    id: "eijent",
    title: "Eijent - AI powered transcription app",
    description:
      "An app to transcribe meetings/calls and then summarize/edit the audio using Eijent hardware connected via bluetooth.",
    image: "/eijent.png",
    tags: ["React Native", "BLE"],
    categories: ["Mobile", "Professional"],
    href: "https://www.eijent.com/",
  },
  {
    id: "ancestro",
    title: "Ancestro ",
    description:
      "Clean-energy subscription platform focused on making solar and battery systems accessible without a large upfront purchase.",
    image: "/ancestro.png",
    tags: ["Next.js", "Tailwind", "Vercel"],
    categories: ["Web", "Professional"],
    href: "#",
  },
  {
    id: "mediapilot",
    title: "Mediapilot - Streaming infrastructure service",
    description:
      "Service that helps content creators turn their existing video content into their own monetized over-the-top media platform.",
    image: "/mediapilot-3.png",
    tags: ["React", "Express.js", "FFmpeg", "Redis"],
    categories: ["Web", "Full Stack", "Professional"],
    href: "https://mediapilot.io/",
  },
  {
    id: "coconut-beach",
    title: "Coconut Beach Hotels",
    description:
      "Mock site for online travel booking for a fictional hotel chain.",
    image: "/coconut-beach.png",
    tags: ["Next.js", "Tailwind", "GSAP"],
    categories: ["Web", "Personal"],
    href: "https://coconut-beach-hotels-two.vercel.app/",
  },
];

export const EXPERIENCES = [
  {
    id: "strugbits",
    date: "Jun 2025 – Present",
    role: "Software Engineer",
    company: "Strugbits",
    location: "Karachi, Pakistan",
    points: [
      "Developed and maintained responsive web and mobile applications using React, Next.js, and React Native, translating frontend product requirements.",
      "Translated UI/UX designs from Figma and Adobe XD into responsive, visually consistent interfaces using Tailwind CSS across desktop and mobile devices.",
      "Integrated REST APIs and backend services into frontend applications to support dynamic content, and application functionality.",
      "Implemented animations, interactive components to enhance UX.",
      "Integrated Wix CMS and SDK to support dynamic content management and automated customer workflows.",
      "Collaborated with UI/UX designers to improve interface usability & accessibility by identifying interaction issues and recommending design adjustments.",
    ],
  },
  {
    id: "fission",
    date: "Nov 2023 – Apr 2025",
    role: "Full Stack Developer",
    company: "Fission Tech",
    points: [
      "Collaborated within a four-person development team to deliver maintainable frontend, backend, and database solutions.",
      "Developed and maintained complex web and mobile applications using React.js, React Native and Node.js (Express.js and NestJS).",
      "Implemented client-side state management using Redux to manage application data and API workflows.",
      "Translated Figma designs and technical specifications into functional, responsive interfaces across desktop, mobile layouts.",
      "Worked with NoSQL databases and backend services to support application data storage and end-to-end functionality.",
      "Participated in feature development, testing, debugging, and performance improvements to ensure application reliability and quality.",
    ],
  },
];

export const EDUCATION = [
  {
    id: "masters",
    degree: "Master's in Software Engineering",
    school: "Mohammad Ali Jinnah Univeristy",
    years: "2023 – 2025",
    description:
      "Focused on modern software development, system design and web technologies.",
  },
  {
    id: "bachelors",
    degree: "Bachelor's in Electronics Engineering",
    school: "Mehran University of Engineering and Technology",
    years: "2016 – 2020",
    description:
      "Built a strong foundation in electronics, programming and problem solving.",
  },
];

export const FORM_FIELDS = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Your name",
    Icon: FiUser,
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "yourname@gmail.com",
    Icon: FiMail,
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Your message",
    Icon: FiFileText,
  },
];

export const CONTACT_DETAILS = [
  { label: "Email", value: "soomroalina24@gmail.com", Icon: MdOutlineEmail },
  { label: "Phone", value: "+49 174 296 7173", Icon: BiPhone },
  { label: "Location", value: "Berlin, Germany", Icon: LuMapPin },
];

export const SOCIALS_CONTACT = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alina-mehdi-59308413a",
    Icon: FaLinkedinIn,
  },
  { label: "GitHub", href: "https://github.com/als24-code/", Icon: FaGithub },
  {
    label: "Email",
    href: "mailto:soomroalina24@gmail.com",
    Icon: MdOutlineEmail,
  },
];

export const FEATURES = [
  {
    id: "clean-code",
    title: "Clean Code",
    text: "Maintainable, scalable, efficient",
    Icon: FiCodesandbox,
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    text: "Find simple better solutions",
    Icon: FaRegLightbulb,
  },
  {
    id: "team-player",
    title: "Team Player",
    text: "Communicate and collaborate",
    Icon: FiUsers,
  },
  {
    id: "always-learning",
    title: "Always Learning",
    text: "Stay curious, keep improving",
    Icon: FiBarChart,
  },
];

export const TECH_STACK_SKILLS = [
  { label: "React", Icon: FaReact, tone: "react" },
  { label: "Next.js", Icon: SiNextdotjs, tone: "solid" },
  { label: "React Native", Icon: FaReact, tone: "react" },
  { label: "HTML5", Icon: FaHtml5, tone: "primary" },
  { label: "CSS3", Icon: FaCss3Alt, tone: "primary" },
  { label: "Git", Icon: FaGitAlt, tone: "primary" },
  { label: "Node.js", Icon: FaNodeJs, tone: "node" },
  { label: "Express", Icon: SiExpress, tone: "dark" },
  { label: "MongoDB", Icon: SiMongodb, tone: "mongo" },
  { label: "Firebase", Icon: SiFirebase, tone: "firebase" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, tone: "tailwind" },
];

export const site = {
  name: "AlinaSoomro",
  role: "Software Engineer",
  location: "Berlin",
  availability: "Available for full-time",
  email: "soomroalina24@gmail.com",
  year: 2026,
  headline: "I sort out the problem before I touch the code.",
  intro:
    "With 2.5+ years of experience, I develope intuitive web and mobile applications that are fast, reliable, and thoughtfully engineered to solve real-world problems.",
  portrait: "/hero-image.jpg",
  tools: "Javascript · Typescript",
};

export const nav = [
  { k: "01", label: "Work", href: "#work" },
  { k: "02", label: "Approach", href: "#approach" },
  { k: "03", label: "Capabilities", href: "#capabilities" },
  { k: "04", label: "About", href: "#about" },
  { k: "05", label: "Contact", href: "#contact" },
];

export const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alina-mehdi-59308413a/",
  },
  {
    label: "GitHub",
    href: "https://github.com/als24-code/",
  },
  { label: "Email", href: `mailto:${site.email}` },
];

export const projects = [
  {
    id: "p1",
    num: "01",
    title: "Blueprint Studios",
    label: "Project one",
    kind: "Site",
    role: "Software Engineer",
    year: "2025",
    cta: "Open project",
    img: "/bps.png",
    desc: "I contributed towards implementing animations, making the website engaging and improving overall UX.",
  },
  {
    id: "p2",
    num: "02",
    title: "Eijent",
    label: "Project two",
    kind: "Mobile App",
    role: "Software Engineer",
    year: "2026",
    cta: "Open project",
    img: "/eijent.png",
    desc: "I was responsible for implementing the interface that enabled transcription functionality",
  },
  {
    id: "p3",
    num: "03",
    title: "Ancestro",
    label: "Project three",
    kind: "Website",
    role: "Software Engineer",
    year: "2026",
    cta: "Open project",
    img: "/ancestro.png",
    desc: "I worked on the UI, form control and API integrations for CMS.",
  },
  {
    id: "p5",
    num: "05",
    title: "Mediapilot.io",
    label: "Project four",
    kind: "Brand identity",
    role: "Software Engineer",
    year: "2025",
    cta: "Open project",
    img: "/mediapilot-3.png",
    desc: "Implemented video processing workflows in Node.js.",
  },
  {
    id: "p6",
    num: "06",
    title: "Fantom Hypnotik",
    label: "Project four",
    kind: "Brand identity",
    role: "Software Engineer",
    year: "2025",
    cta: "Open project",
    img: "/fantom.png",
    desc: "Built the foundation for connection between app and IoT devices",
  },
];

export const CASE_STUDIES = {
  p1: {
    meta: [
      ["Client", "Blueprint Studios"],
      ["Role", "Software Engineer · Frontend"],
      ["Timeline", "2025"],
      ["Platform", "Web"],
    ],
    blocks: [
      [
        "The problem",
        "A large product catalogue needed a responsive browsing experience that made it easier for users to explore products and find relevant information.",
      ],
      [
        "What I did",
        "Worked on the Next.js frontend, implementing product listing and detail interfaces, search, filters, and pagination. Used Tailwind CSS for consistent styling and worked on rendering and caching improvements.",
      ],
      [
        "What changed",
        "Delivered a more responsive and organized product browsing experience across desktop and mobile, with improved product loading performance.",
      ],
    ],
  },

  p2: {
    meta: [
      ["Client", "Eijent"],
      ["Role", "Software Engineer · React Native"],
      ["Timeline", "2025–2026"],
      ["Platform", "iOS · Android · Tablets"],
    ],
    blocks: [
      [
        "The problem",
        "Users needed a mobile interface for working with meeting recordings, transcripts, and AI-generated summaries alongside connected Eijent hardware.",
      ],
      [
        "What I did",
        "Implemented React Native interfaces from Adobe XD designs, including recording and audio playback experiences. Connected frontend screens to APIs for authentication, uploads, synchronization, and transcript-related workflows.",
      ],
      [
        "What changed",
        "Connected the mobile interface with the transcription and summarization workflows, making recording-related functionality accessible through the app.",
      ],
    ],
  },

  p3: {
    meta: [
      ["Client", "Ancestro"],
      ["Role", "Software Engineer · Frontend"],
      ["Timeline", "2025–2026"],
      ["Platform", "Web"],
    ],
    blocks: [
      [
        "The problem",
        "The clean-energy subscription platform needed a clear website experience for presenting solar and battery solutions and collecting customer enquiries.",
      ],
      [
        "What I did",
        "Built frontend sections using Next.js and Tailwind CSS, worked with Wix CMS and forms, and integrated website functionality with content and customer workflows.",
      ],
      [
        "What changed",
        "Delivered a responsive website experience with CMS-supported content and customer enquiry functionality.",
      ],
    ],
  },

  p5: {
    meta: [
      ["Client", "Mediapilot.io"],
      ["Role", "Software Engineer · Frontend"],
      ["Timeline", "2023–2025"],
      ["Platform", "Web · Mobile"],
    ],
    blocks: [
      [
        "The problem",
        "Content creators needed a way to manage media and schedule content for their own streaming platforms through a usable web and mobile experience.",
      ],
      [
        "What I did",
        "Implemented scheduling interfaces, calendar selection, and drag-and-drop media ordering. Connected frontend workflows to REST APIs and worked with Redux and TanStack Query for application state and server data.",
      ],
      [
        "What changed",
        "Connected scheduling and media-management interfaces to backend workflows, helping users organize content and configure publishing schedules.",
      ],
    ],
  },

  p6: {
    meta: [
      ["Client", "Fantom Hypnotik"],
      ["Role", "Software Engineer · Web & Mobile"],
      ["Timeline", "2023–2025"],
      ["Platform", "iOS · Android · Web · IoT"],
    ],
    blocks: [
      [
        "The problem",
        "A smart-home lighting system needed mobile controls for rooms and devices, alongside a web dashboard for managing application users and viewing data.",
      ],
      [
        "What I did",
        "Built React Native screens for homes, rooms, and lighting devices. Worked with AWS IoT Core and MQTT-based communication, and developed dashboard interfaces with React and Material UI, including graphs and tables.",
      ],
      [
        "What changed",
        "Connected the mobile control experience with smart-lighting functionality and delivered dashboard interfaces for administration and data visualization.",
      ],
    ],
  },
};

export const approach = [
  {
    n: "01",
    t: "Understand",
    d: "Break down the requirements, explore the existing codebase, and identify the real problem before writing a line of code.",
  },
  {
    n: "02",
    t: "Architect",
    d: "Plan the component structure, data flow, and API interactions. Choose an approach that keeps the solution maintainable and scalable.",
  },
  {
    n: "03",
    t: "Build",
    d: "Turn the plan into working software, building reusable components, handling edge cases, and testing assumptions early.",
  },
  {
    n: "04",
    t: "Refine",
    d: "Test, debug, and optimize the implementation. Review the details, address issues, and make sure the final product works as intended.",
  },
];

export const capabilities = [
  {
    id: "logic",
    n: "01",
    t: "Problem solving",
    d: "Breaking down requirements into practical, maintainable solutions.",
    file: "logic.ts",
    caption: "From problem to solution",
  },
  {
    id: "frontend",
    n: "02",
    t: "Frontend development",
    d: "Building responsive, interactive interfaces with React and Next.js.",
    file: "interface.tsx",
    caption: "Every interaction matters",
  },
  {
    id: "components",
    n: "03",
    t: "Component architecture",
    d: "Reusable components with clear responsibilities and predictable behavior.",
    file: "components.tsx",
    caption: "One component, many use cases",
  },
  {
    id: "integration",
    n: "04",
    t: "API integration",
    d: "Connecting interfaces to backend services, managing data, and handling edge cases.",
    file: "api.ts",
    caption: "From request to response",
  },
  {
    id: "debugging",
    n: "05",
    t: "Testing & debugging",
    d: "Tracking down bugs, validating behavior, and making applications more reliable.",
    file: "tests.spec.ts",
    caption: "Find it, fix it, verify it",
  },
  {
    id: "ai",
    n: "06",
    t: "AI-assisted development",
    d: "Using AI tools to explore solutions faster while keeping code quality and decisions in my hands.",
    file: "workflow.ts",
    caption: "AI-assisted, engineer-reviewed",
  },
];

export const about = {
  title: "Building with purpose, not just requirements",
  body: "I'm a software engineer with 2.5+ years of experience building websites, applications, and dashboards for startups and growing businesses. I look beyond the requirements to understand the problem, challenge assumptions, and ask the questions that lead to better solutions. From shaping ideas to writing production-ready code, I care about building software that works well for people and makes sense for the business. I collaborate closely with designers and product teams to explore ideas, solve problems, and refine the details. I also integrate AI tools into my development workflow to produce faster, explore alternatives, and work through technical challenges — using them to elaborate ideas, not replace them.",
  facts: [
    { k: "Focus", v: "Web · Apps" },
    { k: "Experience", v: "2.5+ years" },
    { k: "Works with", v: "Designers, Developers, Product Teams" },
  ],
  cta: { label: "Connect on LinkedIn ↗", href: links[0].href },
};

export const intro = {
  title: "Every problem starts as a mess.",
  pieces: [
    "Hello, World!",
    "Component.tsx",
    "State: Updated",
    "Fetching Data...",
    "await response",
    "git commit",
    "Deploying...",
    "200: Success",
  ],
};
