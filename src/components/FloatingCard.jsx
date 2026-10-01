export default function FloatingCard({ className = '', style, children }) {
  return <div className={`float-card ${className}`} style={style}>{children}</div>;
}
