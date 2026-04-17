"use client";

import { useState } from "react";
import Image from "next/image";
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
  SiOpenapiinitiative,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const getSkillWidth = (skill) =>
  skill.width ?? `${Math.max(126, skill.value.length * 9 + 48)}px`;

const orbitSkills = [
  {
    value: "React.js",
    orbit: "orbit-one",
    angle: "12deg",
    color: "#61dafb",
    textColor: "#07131f",
    icon: SiReact,
  },
  {
    value: "TypeScript",
    orbit: "orbit-three",
    angle: "84deg",
    color: "#3178c6",
    textColor: "#f8fbff",
    icon: SiTypescript,
  },
  {
    value: "GitHub",
    orbit: "orbit-one",
    angle: "92deg",
    color: "#f5f7fb",
    textColor: "#0b1220",
    icon: SiGithub,
  },
  {
    value: "Next.js",
    orbit: "orbit-two",
    angle: "34deg",
    color: "#f8fafc",
    textColor: "#0a0d12",
    icon: SiNextdotjs,
  },
  {
    value: "JavaScript",
    orbit: "orbit-two",
    angle: "322deg",
    color: "#f7df1e",
    textColor: "#161910",
    icon: SiJavascript,
  },
  {
    value: "Redux",
    orbit: "orbit-one",
    angle: "286deg",
    color: "#a78bfa",
    textColor: "#140f24",
    icon: SiRedux,
  },
  {
    value: "React Query",
    orbit: "orbit-three",
    angle: "140deg",
    color: "#ff4154",
    textColor: "#fff4f6",
    icon: SiReactquery,
  },
  {
    value: "Bootstrap",
    orbit: "orbit-two",
    angle: "156deg",
    color: "#7952b3",
    textColor: "#fcfbff",
    icon: SiBootstrap,
  },
  {
    value: "TailwindCSS",
    orbit: "orbit-three",
    angle: "232deg",
    color: "#38bdf8",
    textColor: "#08131d",
    icon: SiTailwindcss,
  },
  {
    value: "Postman",
    orbit: "orbit-three",
    angle: "284deg",
    color: "#ff6c37",
    textColor: "#1d0e07",
    icon: SiPostman,
  },
  {
    value: "HTML",
    orbit: "orbit-one",
    angle: "150deg",
    color: "#e34f26",
    textColor: "#fff7f4",
    icon: SiHtml5,
  },
  {
    value: "CSS",
    orbit: "orbit-two",
    angle: "246deg",
    color: "#1572b6",
    textColor: "#fff7f4",
    icon: SiCss,
  },
  {
    value: "Sass",
    orbit: "orbit-one",
    angle: "212deg",
    color: "#cc6699",
    textColor: "#220d18",
    icon: SiSass,
  },
  {
    value: "Zustand",
    orbit: "orbit-two",
    angle: "184deg",
    color: "#8b6b4a",
    textColor: "#fff8f0",
    iconSrc:
      "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    iconImageClassName: "skills-orbit__skill-icon-image--zustand",
  },
  {
    value: "Formik",
    orbit: "orbit-three",
    angle: "24deg",
    color: "#ec4899",
    textColor: "#210811",
    icon: SiFormik,
  },
  {
    value: "Git",
    orbit: "orbit-two",
    angle: "120deg",
    color: "#f1502f",
    textColor: "#1b0d09",
    icon: SiGit,
  },
  {
    value: "REST APIs",
    orbit: "orbit-three",
    angle: "184deg",
    color: "#f97316",
    textColor: "#1c0d05",
    icon: SiOpenapiinitiative,
  },
];

const stars = [
  { top: "8%", left: "12%", size: "4px", delay: "0s" },
  { top: "16%", left: "72%", size: "3px", delay: "0.8s" },
  { top: "26%", left: "88%", size: "5px", delay: "1.4s" },
  { top: "34%", left: "18%", size: "3px", delay: "0.4s" },
  { top: "52%", left: "8%", size: "4px", delay: "1.1s" },
  { top: "68%", left: "80%", size: "4px", delay: "1.8s" },
  { top: "82%", left: "22%", size: "5px", delay: "0.6s" },
  { top: "88%", left: "90%", size: "3px", delay: "1.3s" },
  { top: "58%", left: "92%", size: "3px", delay: "0.2s" },
  { top: "14%", left: "34%", size: "2px", delay: "1.6s" },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState("React.js");

  return (
    <div className="skills-orbit">
      <div className="skills-orbit__stars" aria-hidden="true">
        {stars.map((star, index) => (
          <span
            key={index}
            className="skills-orbit__star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="skills-orbit__wrap">
        <div className="skills-orbit__core">
          <div className="skills-orbit__core-ring skills-orbit__core-ring--outer" />
          <div className="skills-orbit__core-ring skills-orbit__core-ring--inner" />
          <div className="skills-orbit__core-content">
            <strong className="skills-orbit__core-title">
              Front End Developer
            </strong>
          </div>
        </div>

        <div className="skills-orbit__ring skills-orbit__ring--one" />
        <div className="skills-orbit__ring skills-orbit__ring--two" />
        <div className="skills-orbit__ring skills-orbit__ring--three" />

        {orbitSkills.map((skill) => {
          const isActive = activeSkill === skill.value;
          const Icon = skill.icon;

          return (
            <div
              key={skill.value}
              className={`skills-orbit__path skills-orbit__path--${skill.orbit}`}
            >
              <div
                className="skills-orbit__anchor"
                style={{
                  "--orbit-angle": skill.angle,
                  "--skill-color": skill.color,
                  "--skill-text-color": skill.textColor,
                  "--skill-width": getSkillWidth(skill),
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveSkill(skill.value)}
                  className={`skills-orbit__skill ${isActive ? "skills-orbit__skill--active" : ""}`}
                  aria-pressed={isActive}
                  aria-label={`${skill.value} skill highlight`}
                >
                  <span className="skills-orbit__skill-icon" aria-hidden="true">
                    {skill.iconSrc ? (
                      <Image
                        src={skill.iconSrc}
                        alt={skill.value}
                        width={24}
                        height={24}
                        className={`skills-orbit__skill-icon-image ${skill.iconImageClassName ?? ""}`}
                      />
                    ) : (
                      <Icon {...skill.iconProps} />
                    )}
                  </span>
                  <span className="skills-orbit__skill-label">
                    {skill.value}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
