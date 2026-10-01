import { Star } from 'lucide-react';

export default function Rating({ value, size = 18 }) {
  return (
    <span className="rating">
      <span>{value}</span>
      <Star size={size + 4} fill="var(--lime-400)" stroke="var(--lime-600)" strokeWidth={1.5} aria-hidden="true" />
    </span>
  );
}

export function Stars({ count, size = 18 }) {
  return (
    <span className="stars" role="img" aria-label={`${count} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={size} fill={i <= count ? 'var(--lime-400)' : 'none'}
          stroke={i <= count ? 'var(--lime-600)' : 'var(--gray-200)'} strokeWidth={1.5} />
      ))}
    </span>
  );
}
