const skills = [
  {
    id: 1,
    name: "HTML5",
    iconSvg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "CSS3",
    iconSvg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    iconSvg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "TypeScript",
    iconSvg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 5,
    name: "React.js",
    iconSvg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 6,
    name: "Next.js",
    iconSvg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    iconSvg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 8,
    name: "Bootstrap",
    iconSvg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    id: 9,
    name: "Redux",
    iconSvg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    id: 10,
    name: "Git",
    iconSvg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: 11,
    name: "GitHub",
    iconSvg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    id: 12,
    name: "VS Code",
    iconSvg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
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
                      <div className="skill-item wow fadeInUp delay-0-2s text-center">
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
