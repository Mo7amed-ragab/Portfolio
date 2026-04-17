"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const OnePageMenu = ({ onItemClick }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const items = [
    { href: isHomePage ? "#home" : "/#home", label: "Home", eyebrow: "Start here" },
    { href: isHomePage ? "#about" : "/#about", label: "About", eyebrow: "Who I am" },
    { href: isHomePage ? "#experiences" : "/#experiences", label: "Experiences", eyebrow: "Career path" },
    { href: isHomePage ? "#projects" : "/#projects", label: "Projects", eyebrow: "Selected work" },
    { href: isHomePage ? "#contact" : "/#contact", label: "Contact Me", eyebrow: "Let us talk" },
  ];
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sectionIds = items.map((item) => item.href.slice(1));

    const updateActiveSection = () => {
      const currentHash = window.location.hash;
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let nextActive =
        currentHash && sectionIds.includes(currentHash.slice(1))
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
      {items.map((item, index) => {
        const isActive = activeHref === item.href;
        return (
          <motion.li
            key={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className={isActive ? "current" : ""}
          >
            <LinkItem
              item={item}
              isActive={isActive}
              onItemClick={onItemClick}
            />
          </motion.li>
        );
      })}
    </ul>
  );
};

const LinkItem = ({ item, isActive, onItemClick }) => {
  return (
    <Link
      href={item.href}
      className={`text-decoration-none ${isActive ? "is-active" : ""}`}
      style={{ position: "relative", display: "flex", width: "100%" }}
      onClick={onItemClick}
    >
      <motion.div
        className="menu-link-wrapper"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <span className="menu-link__copy">
          <span className="menu-link__eyebrow">{item.eyebrow}</span>
          <span className="menu-link__label">{item.label}</span>
        </span>
        <span className="menu-link__arrow" aria-hidden="true">
          <i className="far fa-arrow-right" />
        </span>

        {isActive && (
          <motion.div
            layoutId="nav-underline"
            className="nav-motion-underline"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
      </motion.div>
    </Link>
  );
};

export default OnePageMenu;
