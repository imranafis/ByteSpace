import Header from './Header.jsx';

/** Blue section with the 120px grid pattern and the site header on top. */
export default function Band({ className = '', children, withHeader = true, style }) {
  return (
    <section className={`band ${className}`} style={style}>
      <div className="band__grid" aria-hidden="true" />
      {withHeader && <Header />}
      {children}
    </section>
  );
}
