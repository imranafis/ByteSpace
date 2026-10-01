import { avatars } from '../data';

export default function AvatarStack({ count = 3, size = 32, label, dark = false, className = '' }) {
  return (
    <span className={`avatar-stack ${className}`} style={{ '--size': `${size}px` }}>
      {avatars.slice(0, count).map((a, i) => <img key={i} src={a} alt="" />)}
      {label && <span className={`avatar-stack__more${dark ? ' is-dark' : ''}`}>{label}</span>}
    </span>
  );
}
