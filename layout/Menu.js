import { useEffect, useState } from "react";

export const OnePageMenu = ({ onItemClick }) => {
  const items = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experiences", label: "Experiences" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Me" },
  ];
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sectionIds = items.map((item) => item.href.slice(1));

    const updateActiveSection = () => {
      const currentHash = window.location.hash;
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let nextActive = currentHash && sectionIds.includes(currentHash.slice(1))
        ? currentHash
        : "#home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          nextActive = `#${id}`;
        }
      }

      setActiveHref(nextActive);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <ul className="navigation clearfix">
      {items.map((item) => (
        <li key={item.href} className={activeHref === item.href ? "current" : ""}>
          <a
            className={`text-decoration-none ${activeHref === item.href ? "is-active" : ""}`}
            href={item.href}
            aria-current={activeHref === item.href ? "page" : undefined}
            onClick={onItemClick}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default OnePageMenu;
