export const OnePageMenu = ({ onItemClick }) => {
  const items = [
    { href: "#home", label: "Home", active: true },
    { href: "#about", label: "About" },
    { href: "#experiences", label: "Experiences" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Me" },
  ];

  return (
    <ul className="navigation clearfix">
      {items.map((item) => (
        <li key={item.href} className={item.active ? "current" : ""}>
          <a
            className={`text-decoration-none ${item.active ? "is-active" : ""}`}
            href={item.href}
            aria-current={item.active ? "page" : undefined}
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
