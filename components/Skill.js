const skills = [
  { id: 1, name: "HTML5", iconClass: "fab fa-html5" },
  { id: 2, name: "CSS3", iconClass: "fab fa-css3-alt" },
  { id: 3, name: "JavaScript", iconClass: "fab fa-js" },
  { id: 4, name: "TypeScript", iconClass: "fas fa-code" },
  { id: 5, name: "React.js", iconClass: "fab fa-react" },
  { id: 6, name: "Next.js", iconClass: "fas fa-layer-group" },
  { id: 7, name: "Tailwind CSS", iconClass: "fas fa-wind" },
  { id: 8, name: "Bootstrap", iconClass: "fab fa-bootstrap" },
  { id: 9, name: "Redux", iconClass: "fas fa-project-diagram" },
  { id: 10, name: "Git", iconClass: "fab fa-git-alt" },
  { id: 11, name: "GitHub", iconClass: "fab fa-github" },
  { id: 12, name: "VS Code", iconClass: "fas fa-terminal" },
];

const Skill = () => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Technologies &amp; <br />
                    <span>Tools I Use</span>
                  </h2>
                  <p>
                    A modern toolkit of frameworks, libraries, and tools that I
                    rely on to craft clean, scalable, and high-performance web
                    apps.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {skills.map((skill) => (
                    <div
                      className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6"
                      key={skill.id}
                    >
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <i
                          className={`${skill.iconClass} fa-4x`}
                          style={{ color: "#00bcd4" }}
                        />
                        <h5>{skill.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Skill;
