import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ page, pages, onChange }) {
  return (
    <nav className="pagination" aria-label="Pagination">
      <button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => onChange(page - 1)}><ChevronLeft /></button>
      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <button key={n} type="button" aria-current={n === page ? 'page' : undefined}
          className={n === page ? 'is-active' : ''} onClick={() => onChange(n)}>{n}</button>
      ))}
      <button type="button" aria-label="Next page" disabled={page === pages} onClick={() => onChange(page + 1)}><ChevronRight /></button>
    </nav>
  );
}
