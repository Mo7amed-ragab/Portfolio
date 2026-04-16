"use client";

import { useState } from "react";

const orbitSkills = [
  {
    value: "React",
    orbit: "orbit-one",
    angle: "18deg",
    color: "#61dafb",
    size: "sm",
    textColor: "#07131f",
  },
  {
    value: "TypeScript",
    orbit: "orbit-three",
    angle: "102deg",
    color: "#3178c6",
    size: "md",
    textColor: "#f8fbff",
  },
  {
    value: "Next.js",
    orbit: "orbit-two",
    angle: "58deg",
    color: "#f8fafc",
    size: "sm",
    textColor: "#0a0d12",
  },
  {
    value: "JavaScript",
    orbit: "orbit-two",
    angle: "338deg",
    color: "#f7df1e",
    size: "md",
    textColor: "#161910",
  },
  {
    value: "Redux",
    orbit: "orbit-one",
    angle: "300deg",
    color: "#a78bfa",
    size: "sm",
    textColor: "#140f24",
  },
  {
    value: "React Query",
    orbit: "orbit-three",
    angle: "136deg",
    color: "#ff4154",
    size: "md",
    width: "164px",
    textColor: "#fff4f6",
  },
  {
    value: "TailwindCSS",
    orbit: "orbit-three",
    angle: "222deg",
    color: "#38bdf8",
    size: "md",
    textColor: "#08131d",
  },
  {
    value: "Bootstrap",
    orbit: "orbit-two",
    angle: "146deg",
    color: "#7952b3",
    size: "sm",
    textColor: "#fcfbff",
  },
  {
    value: "Postman",
    orbit: "orbit-three",
    angle: "294deg",
    color: "#ff6c37",
    size: "md",
    textColor: "#1d0e07",
  },
  {
    value: "HTML",
    orbit: "orbit-one",
    angle: "132deg",
    color: "#e34f26",
    size: "sm",
    textColor: "#fff7f4",
  },
  {
    value: "CSS",
    orbit: "orbit-two",
    angle: "252deg",
    color: "#1572b6",
    size: "sm",
    textColor: "#fff7f4",
  },
  {
    value: "Sass",
    orbit: "orbit-one",
    angle: "230deg",
    color: "#cc6699",
    size: "sm",
    textColor: "#220d18",
  },
  {
    value: "Zustand",
    orbit: "orbit-two",
    angle: "16deg",
    color: "#8b6b4a",
    size: "sm",
    width: "138px",
    textColor: "#fff8f0",
  },
  {
    value: "Formik",
    orbit: "orbit-three",
    angle: "18deg",
    color: "#ec4899",
    size: "lg",
    textColor: "#210811",
  },
  {
    value: "Git",
    orbit: "orbit-two",
    angle: "196deg",
    color: "#f1502f",
    size: "sm",
    textColor: "#1b0d09",
  },
  {
    value: "REST APIs",
    orbit: "orbit-three",
    angle: "174deg",
    color: "#f97316",
    size: "md",
    width: "146px",
    textColor: "#1c0d05",
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
  const [activeSkill, setActiveSkill] = useState("React");

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
                  "--skill-width":
                    skill.width ??
                    (skill.size === "lg"
                      ? "190px"
                      : skill.size === "md"
                        ? "154px"
                        : "126px"),
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveSkill(skill.value)}
                  className={`skills-orbit__skill ${isActive ? "skills-orbit__skill--active" : ""}`}
                  aria-pressed={isActive}
                  aria-label={`${skill.value} skill highlight`}
                >
                  <span className="skills-orbit__skill-dot" />
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
