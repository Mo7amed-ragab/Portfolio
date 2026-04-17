import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/utility/projectsData";

const INITIAL_COUNT = 4;

const Projects = () => {
  const visibleProjects = projectsData.slice(0, INITIAL_COUNT);

  return (
    <section
      id="projects"
      className="about-area projects-area-four pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="about-bg-glow" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-80 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Projects</span>
              <h2 className="projects-title">
                Explore My Popular{" "}
                <span className="hero-v2__title-gradient">Projects</span>
              </h2>
              <p className="projects-subtitle">
                I turn complex ideas into stunning, interactive websites.
                Focused on sleek aesthetics, smooth animations, and creating
                digital experiences that leave a lasting impression.
              </p>
            </div>
          </div>
        </div>

        <div className="projects-items-wrapper">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        {projectsData.length > INITIAL_COUNT && (
          <div className="text-center mt-60">
            <Link href="/projects" className="theme-btn projects-load-more">
              <span>
                Explore All Projects <i className="ms-2 far fa-arrow-right" />
              </span>
            </Link>
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
