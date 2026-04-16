const Logo = ({ className = "", title = "MR logo" }) => {
  const classes = ["brand-logo", className].filter(Boolean).join(" ");

  return (
    <span className={classes} role="img" aria-label={title}>
      <span className="brand-logo__angle">&lt;</span>
      <span className="brand-logo__letters">MR</span>
      <span className="brand-logo__slash">/</span>
      <span className="brand-logo__angle">&gt;</span>
    </span>
  );
};

export default Logo;
