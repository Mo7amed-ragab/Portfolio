import {
  SiBootstrap,
  SiCss,
  SiFormik,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiSocketdotio,
  SiAppwrite,
  SiReactrouter,
  SiAxios,
  SiJsonwebtokens,
  SiFramer,
  SiChartdotjs,
  SiI18Next,
  SiFirebase,
  SiShadcnui,
  SiZod,
  SiThemoviedatabase,
} from "react-icons/si";
import { FaCode, FaAws, FaMobileAlt, FaGlobe, FaCloud } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

export const SKILLS_DATA = {
  html: { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
  css: { name: "CSS3", icon: SiCss, color: "#1572b6" },
  javascript: { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  typescript: { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  react: { name: "React.js", icon: SiReact, color: "#61dafb" },
  nextjs: { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  tailwindcss: { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  bootstrap: { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
  redux: { name: "Redux", icon: SiRedux, color: "#a78bfa" },
  git: { name: "Git", icon: SiGit, color: "#f1502f" },
  github: { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  sass: { name: "Sass", icon: SiSass, color: "#cc6699" },
  reactquery: { name: "React Query", icon: SiReactquery, color: "#ff4154" },
  postman: { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  zustand: {
    name: "Zustand",
    icon: null,
    iconSvg:
      "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    color: "#8b6b4a",
  },
  formik: { name: "Formik", icon: SiFormik, color: "#ec4899" },
  restapi: { name: "REST APIs", icon: TbApi, color: "#f97316" },
  socketio: { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
  aws: { name: "AWS", icon: FaAws, color: "#ff9900" },
  appwrite: { name: "Appwrite", icon: SiAppwrite, color: "#f02e65" },
  firebase: { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
  zod: { name: "Zod", icon: SiZod, color: "#000000" },
  router: { name: "React Router", icon: SiReactrouter, color: "#ca4245" },
  axios: { name: "Axios", icon: SiAxios, color: "#5a29e4" },
  jwt: { name: "JWT", icon: SiJsonwebtokens, color: "#000000" },
  i18next: { name: "i18next", icon: SiI18Next, color: "#26a69a" },
  shadcn: { name: "Shadcn UI", icon: SiShadcnui, color: "#000000" },
  framer: { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  chartjs: { name: "Chart.js", icon: SiChartdotjs, color: "#FF6384" },
  tmdb: { name: "TMDB", icon: SiThemoviedatabase, color: "#01b4e4" },
  globe: { name: "Globe", icon: FaGlobe, color: "#c9f31d" },
  cloud: { name: "Cloud", icon: FaCloud, color: "#c9f31d" },
  mobile: { name: "Mobile", icon: FaMobileAlt, color: "#c9f31d" },
};

const TECH_MAP = {
  "react js": "react",
  "react.js": "react",
  reactjs: "react",
  "next.js": "nextjs",
  tailwind: "tailwindcss",
  "tailwind css": "tailwindcss",
  "tailwind css 4": "tailwindcss",
  html5: "html",
  css3: "css",
  "tanstack query": "reactquery",
  "react query": "reactquery",
  "rest apis": "restapi",
  "restful apis": "restapi",
  api: "restapi",
  tmdb: "tmdb",
  "react router": "router",
  auth: "jwt",
  "jwt auth": "jwt",
  "aws s3": "aws",
  "socket.io": "socketio",
  i18n: "i18next",
  responsive: "mobile",
};

export const getTechDetails = (name) => {
  const slug = name.toLowerCase().trim();

  const targetId = TECH_MAP[slug] || slug;
  const skill = SKILLS_DATA[targetId];

  if (skill) {
    return {
      name: skill.name,
      icon: skill.icon,
      iconSvg: skill.iconSvg || null,
      color: skill.color,
    };
  }

  return {
    name: name,
    icon: FaCode,
    iconSvg: null,
    color: "#c9f31d",
  };
};

const orbitSkillsBase = [
  {
    value: "React.js",
    orbit: "orbit-one",
    angle: "12deg",
    textColor: "#07131f",
  },
  {
    value: "TypeScript",
    orbit: "orbit-three",
    angle: "84deg",
    textColor: "#f8fbff",
  },
  { value: "GitHub", orbit: "orbit-one", angle: "92deg", textColor: "#0b1220" },
  {
    value: "Next.js",
    orbit: "orbit-two",
    angle: "34deg",
    textColor: "#0a0d12",
  },
  {
    value: "JavaScript",
    orbit: "orbit-two",
    angle: "322deg",
    textColor: "#161910",
  },
  { value: "Redux", orbit: "orbit-one", angle: "286deg", textColor: "#140f24" },
  {
    value: "React Query",
    orbit: "orbit-three",
    angle: "140deg",
    textColor: "#fff4f6",
  },
  {
    value: "Bootstrap",
    orbit: "orbit-two",
    angle: "156deg",
    textColor: "#fcfbff",
  },
  {
    value: "Tailwind CSS",
    orbit: "orbit-three",
    angle: "232deg",
    textColor: "#08131d",
  },
  {
    value: "Postman",
    orbit: "orbit-three",
    angle: "284deg",
    textColor: "#1d0e07",
  },
  { value: "HTML5", orbit: "orbit-one", angle: "150deg", textColor: "#fff7f4" },
  { value: "CSS3", orbit: "orbit-two", angle: "246deg", textColor: "#fff7f4" },
  { value: "Sass", orbit: "orbit-one", angle: "212deg", textColor: "#220d18" },
  {
    value: "Zustand",
    orbit: "orbit-two",
    angle: "184deg",
    textColor: "#fff8f0",
  },
  {
    value: "Formik",
    orbit: "orbit-three",
    angle: "24deg",
    textColor: "#210811",
  },
  { value: "Git", orbit: "orbit-two", angle: "120deg", textColor: "#1b0d09" },
  {
    value: "REST APIs",
    orbit: "orbit-three",
    angle: "184deg",
    textColor: "#1c0d05",
  },
];

export const orbitSkills = orbitSkillsBase.map((skill) => {
  const details = getTechDetails(skill.value);
  return {
    ...skill,
    ...details,
  };
});
