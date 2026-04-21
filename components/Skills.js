"use client";

import { useState } from "react";
import Image from "next/image";
import { orbitSkills } from "@/utility/techIcons";

const getSkillWidth = (skill) =>
  skill.width ?? `${Math.max(126, skill.value.length * 9 + 48)}px`;

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
                    {skill.iconSrc || skill.iconSvg ? (
                      <Image
                        src={skill.iconSrc || skill.iconSvg}
                        alt={skill.value}
                        width={24}
                        height={24}
                        className={`skills-orbit__skill-icon-image ${skill.iconImageClassName ?? ""}`}
                      />
                    ) : (
                      Icon && <Icon {...skill.iconProps} />
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
