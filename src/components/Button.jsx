import { Link } from 'react-router-dom';

export default function Button({ to, variant = 'lime', size = 'md', className = '', children, ...rest }) {
  const cls = `btn btn--${variant} btn--${size} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}
