"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/utility/projectsData";

const INITIAL_COUNT = 4;

const skillMatchers = {
  React: ["react"],
  "Next.js": ["next"],
  TypeScript: ["typescript"],
  JavaScript: ["javascript"],
  Redux: ["redux"],
  TailwindCSS: ["tailwind"],
  APIs: ["api", "restful"],
  Git: ["git", "github"],
};

const projectMatchesSkill = (project, skill) => {
  if (!skill) return true;

  const haystack = [
    project.title,
    project.subtitle,
    project.description,
    project.keyFeature,
    ...project.bullets,
    ...project.techStack,
  ]
    .join(" ")
    .toLowerCase();

  return (skillMatchers[skill] || [skill.toLowerCase()]).some((term) =>
    haystack.includes(term),
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    const handleFilterEvent = (event) => {
      setSelectedSkill(event.detail?.skill || null);
      setShowAll(true);
    };

    window.addEventListener("projects:filter", handleFilterEvent);

    return () => {
      window.removeEventListener("projects:filter", handleFilterEvent);
    };
  }, []);

  const filteredProjects = !selectedSkill
    ? projectsData
    : (() => {
        const matchingProjects = projectsData.filter((project) =>
          projectMatchesSkill(project, selectedSkill),
        );

        return matchingProjects.length ? matchingProjects : projectsData;
      })();

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_COUNT);

  return (
    <section
      id="projects"
      className="projects-area-four projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              <h2>
                Explore My Popular{" "}
                <span className="hero-v2__title-gradient">Projects</span>
              </h2>
              {selectedSkill && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <span className="rounded-full border border-[#c9f31d]/30 bg-[#c9f31d]/10 px-4 py-2 text-sm text-[#c9f31d]">
                    Filtered by {selectedSkill}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedSkill(null)}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    Clear filter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isReversed={index % 2 !== 0}
          />
        ))}

        {filteredProjects.length > INITIAL_COUNT && (
          <div className="text-center mt-30">
            <button
              className="theme-btn"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show Less" : "Show More"}{" "}
              <i className={`far fa-angle-${showAll ? "up" : "down"}`} />
            </button>
          </div>
        )}
      </div>

      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};

export default Projects;
