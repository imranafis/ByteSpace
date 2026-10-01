const logos = [
  { name: 'Logoipsum', glyph: 'circle' },
  { name: 'Logoipsum', glyph: 'cloud' },
  { name: 'Logoipsum', glyph: 'bolt' },
  { name: 'Logoipsum', glyph: 'hex' },
  { name: 'Logoipsum', glyph: 'diamond' },
];

const Glyph = ({ type }) => {
  const p = { width: 40, height: 40, viewBox: '0 0 40 40', fill: 'currentColor', 'aria-hidden': true };
  switch (type) {
    case 'circle': return <svg {...p}><path d="M20 0a20 20 0 1 0 0 40V0Z" /><circle cx="20" cy="20" r="8" opacity=".5" /></svg>;
    case 'cloud': return <svg {...p}><path d="M10 34a9 9 0 0 1-1-18 12 12 0 0 1 23 2 8 8 0 0 1-1 16H10Z" /></svg>;
    case 'bolt': return <svg {...p}><path d="M24 0 6 23h11l-3 17 20-25H22L24 0Z" /></svg>;
    case 'hex': return <svg {...p}><path d="M20 0 37 10v20L20 40 3 30V10L20 0Z" /></svg>;
    default: return <svg {...p}><path d="M20 0 40 20 20 40 0 20 20 0Z" /></svg>;
  }
};

export default function PartnerLogos() {
  return (
    <ul className="partners" aria-label="Trusted by">
      {logos.map((l, i) => (
        <li key={i}><Glyph type={l.glyph} /><span>{l.name}</span></li>
      ))}
    </ul>
  );
}
