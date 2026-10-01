import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import Band from '../components/Band.jsx';
import Footer from '../components/Footer.jsx';
import SearchBar from '../components/SearchBar.jsx';
import CategoryTabs from '../components/CategoryTabs.jsx';
import CourseCard from '../components/CourseCard.jsx';
import Pagination from '../components/Pagination.jsx';
import Shape3D from '../components/Shape3D.jsx';
import { catalog, categoryTabs } from '../data';

const PAGE_SIZE = 9;
const levels = ['All levels', 'Beginner', 'Intermediate', 'Advanced'];
const sorts = ['Most relevant', 'Top rated', 'Price: low to high'];

export function FilterBar({ level, setLevel, category, setCategory, sort, setSort }) {
  return (
    <div className="filters">
      <div className="filters__group">
        <span className="filters__title"><SlidersHorizontal size={22} aria-hidden="true" /> Filter</span>
        <label className="select">
          <span className="visually-hidden">Level</span>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            {levels.map((l) => <option key={l} value={l}>{l === 'All levels' ? 'Level' : l}</option>)}
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Category</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">Category</option>
            {categoryTabs.filter((c) => c !== 'Featured').map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
      </div>
      <label className="select select--sort">
        <ArrowUpDown size={20} aria-hidden="true" />
        <span className="visually-hidden">Sort by</span>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>{sorts.map((s) => <option key={s}>{s}</option>)}</select>
      </label>
    </div>
  );
}

export function applyFilters(list, { q = '', level, category, sort }) {
  let out = list.filter((c) =>
    (!q || `${c.title} ${c.author} ${c.category}`.toLowerCase().includes(q.toLowerCase())) &&
    (level === 'All levels' || c.level === level) &&
    (category === 'All' || c.category === category));
  if (sort === 'Top rated') out = [...out].sort((a, b) => b.rating - a.rating);
  if (sort === 'Price: low to high') out = [...out].sort((a, b) => a.price - b.price);
  return out;
}

export default function Search() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get('category');
  const [q, setQ] = useState(params.get('q') ?? '');
  const [query, setQuery] = useState(params.get('q') ?? '');
  const [tab, setTab] = useState('Featured');
  const [level, setLevel] = useState('All levels');
  const [category, setCategory] = useState(categoryTabs.includes(initialCat) ? initialCat : 'All');
  const [sort, setSort] = useState('Most relevant');
  const [page, setPage] = useState(1);

  useEffect(() => { setPage(1); }, [query, tab, level, category, sort]);

  const results = useMemo(() => {
    const base = tab === 'Featured' ? catalog : catalog.filter((c) => c.category === tab);
    return applyFilters(base, { q: query, level, category, sort });
  }, [query, tab, level, category, sort]);

  const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const shown = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const submit = (v) => { setQuery(v); setParams(v ? { q: v } : {}); };

  return (
    <>
      <main>
        <Band className="search-band">
          <div className="search-band__content">
            <h1 className="display-xs search-band__title">Find Your Next Course</h1>
            <SearchBar value={q} onChange={setQ} onSubmit={submit} placeholder="Search" button="Search" scope={['Courses', 'Creators']} />
          </div>
          <Shape3D src="cda676fe" size={230} x={-40} y={150} color="#d4fb20" />
          <Shape3D src="92fc70a3" size={200} x={1250} y={120} color="#f5f5f6" />
        </Band>
        <section className="section results">
          <div className="container">
            <CategoryTabs items={categoryTabs} active={tab} onChange={setTab} className="tabs-pills--center" />
            <FilterBar {...{ level, setLevel, category, setCategory, sort, setSort }} />
            <p className="results__count" role="status">{results.length} {results.length === 1 ? 'course' : 'courses'} found</p>
            {shown.length ? (
              <div className="grid-cards">{shown.map((c) => <CourseCard key={c.id} course={c} />)}</div>
            ) : (
              <p className="empty">No courses match your filters. Try a different keyword or clear a filter.</p>
            )}
            {pages > 1 && <Pagination page={page} pages={pages} onChange={setPage} />}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
