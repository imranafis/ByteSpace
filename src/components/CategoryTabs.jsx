export default function CategoryTabs({ items, active, onChange, className = '' }) {
  return (
    <ul className={`tabs-pills ${className}`} role="tablist" aria-label="Course categories">
      {items.map((c) => (
        <li key={c}>
          <button type="button" role="tab" aria-selected={active === c}
            className={`pill${active === c ? ' is-active' : ''}`} onClick={() => onChange(c)}>
            {c}
          </button>
        </li>
      ))}
    </ul>
  );
}
