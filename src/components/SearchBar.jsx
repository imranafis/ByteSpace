import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, onSubmit, placeholder = 'Course, topic, creator', button = 'Search', scope }) {
  return (
    <form className="searchbar" role="search" onSubmit={(e) => { e.preventDefault(); onSubmit?.(value); }}>
      {scope && (
        <label className="searchbar__scope">
          <span className="visually-hidden">Search in</span>
          <select defaultValue={scope[0]}>{scope.map((o) => <option key={o}>{o}</option>)}</select>
        </label>
      )}
      <label className="searchbar__field">
        <Search size={24} aria-hidden="true" />
        <span className="visually-hidden">Search courses</span>
        <input type="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
      </label>
      <button type="submit" className="btn btn--lime btn--md">{button}</button>
    </form>
  );
}
