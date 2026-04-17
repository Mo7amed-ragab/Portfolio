import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import { projectsData } from "@/utility/projectsData";

export const metadata = {
  title: "Projects | Mohamed Ragab",
  description:
    "A comprehensive showcase of high-fidelity platforms, dashboards, and digital masterpieces engineered with precision.",
};

export default function ProjectsPage() {
  return (
    <NoxfolioLayout onePageMenu={false}>
      <section className="projects-page-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        {/* Same background as about */}
        <div className="about-bg-glow" />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-80 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Featured Work</span>
                <h2 className="projects-title">
                  Real-World{" "}
                  <span className="hero-v2__title-gradient">Projects</span>
                </h2>
                <p className="projects-subtitle">
                  Exploring the depth of my technical expertise through
                  real-world applications and complex systems.
                </p>
              </div>
            </div>
          </div>

          <div className="projects-items-wrapper">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>

        <div className="bg-lines">
          {[...Array(10)].map((_, i) => (
            <span key={i} />
          ))}
        </div>
      </section>

      {/* Contact Section at the bottom */}
      <Contact />
    </NoxfolioLayout>
  );
}
