export function SectionHeader({ children, accent, description }) {
  return (
    <header className="section-header">
      <h2>
        {children}
        {accent ? (
          <>
            <br />
            <span>{accent}</span>
          </>
        ) : null}
      </h2>
      <div className="accent-rule" aria-hidden="true" />
      {description ? <p>{description}</p> : null}
    </header>
  );
}
