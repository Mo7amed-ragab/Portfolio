import { globalSkills } from "@/utility/techIcons";

const Skill = () => {
  const displaySkills = globalSkills
    .filter((s) => s.iconSvg || s.icon)
    .slice(0, 12);

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
                  {displaySkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6"
                        key={skill.id}
                      >
                        <div className="skill-item wow fadeInUp delay-0-2s text-center">
                          {skill.iconSvg ? (
                            <img
                              src={skill.iconSvg}
                              alt={skill.name}
                              style={{
                                width: "64px",
                                height: "64px",
                                marginBottom: "10px",
                                filter: "drop-shadow(0 0 4px #00bcd4)",
                              }}
                            />
                          ) : (
                            <div
                              style={{
                                marginBottom: "10px",
                                fontSize: "64px",
                                color: skill.color,
                              }}
                            >
                              <Icon />
                            </div>
                          )}
                          <h5>{skill.name}</h5>
                        </div>
                      </div>
                    );
                  })}
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
