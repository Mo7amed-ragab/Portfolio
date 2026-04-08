"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/utility/projectsData";

const INITIAL_COUNT = 4;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, INITIAL_COUNT);

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
                Explore My Popular <span>Projects</span>
              </h2>
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

        {projectsData.length > INITIAL_COUNT && (
          <div className="text-center mt-30">
            <button
              className="theme-btn"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show Less" : "Show More"}{" "}
              <i
                className={`far fa-angle-${showAll ? "up" : "down"}`}
              />
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
