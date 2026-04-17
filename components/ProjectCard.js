import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project, isReversed }) => {
  const imageColumn = (
    <div className={isReversed ? "col-lg-6" : "col-md-6"}>
      <div className="project-item style-four wow fadeInUp delay-0-2s">
        <div className="image">
          <Image
            src={project.image}
            alt={project.alt}
            width={800}
            height={600}
            layout="responsive"
            priority={false}
          />
          {project.link && (
            <Link legacyBehavior href={project.link}>
              <a
                className="hover-box"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.ariaLabel}
              >
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  const contentColumn = (
    <div className="col-xl-6 col-lg-6">
      <div className="project-content wow fadeInRight delay-0-2s">
        {project.badge && (
          <span className="project-type-badge">{project.badge}</span>
        )}
        <span className="sub-title">{project.subtitle}</span>
        <h2>{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <ul className="project-bullets">
          {project.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
        <div className="tech-stack">
          {project.techStack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
        <p className="key-feature">{project.keyFeature}</p>
      </div>
    </div>
  );

  return (
    <div className="row align-items-center">
      {isReversed ? (
        <>
          {contentColumn}
          {imageColumn}
        </>
      ) : (
        <>
          {imageColumn}
          {contentColumn}
        </>
      )}
    </div>
  );
};

export default ProjectCard;
