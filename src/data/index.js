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
    title: "Ancestro - Clean energy solutions",
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
