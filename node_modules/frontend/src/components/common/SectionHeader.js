const SectionHeader = ({ title, subtitle, align = "center" }) => (
  <div className={`section-header ${align === "left" ? "left" : ""}`}>
    <h2>{title}</h2>
    {subtitle ? <p>{subtitle}</p> : null}
  </div>
);

export default SectionHeader;
