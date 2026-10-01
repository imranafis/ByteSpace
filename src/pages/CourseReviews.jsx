import { useState } from 'react';
import { Stars } from '../components/Rating.jsx';
import { ratingBreakdown, reviews } from '../data';

export default function CourseReviews() {
  const [filter, setFilter] = useState('All');
  const { average, counts } = ratingBreakdown;
  const max = Math.max(...counts);
  const list = filter === 'All' ? reviews : reviews.filter((r) => r.stars === Number(filter));

  return (
    <div className="prose-block">
      <section>
        <h2 className="heading-xs">What Learners Are Saying</h2>
        <p className="body-m">Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>
      </section>

      <section className="ratings" aria-label="Ratings">
        <div className="ratings__score">
          <strong>{average}</strong>
          <Stars count={5} size={20} />
          <span className="body-xs">Ratings</span>
        </div>
        <ul className="ratings__bars">
          {counts.map((c, i) => (
            <li key={i}>
              <span className="ratings__star">{5 - i}</span>
              <div className="ratings__track"><i style={{ width: `${Math.max(3, (c / max) * 100)}%` }} /></div>
              <span className="ratings__count">{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="reviews__head">
          <h2 className="heading-xs">Individual Reviews:</h2>
          <label className="select">
            <span className="visually-hidden">Filter by rating</span>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All rating</option>
              {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
        </div>
        {list.length ? (
          <ul className="review-list">
            {list.map((r) => (
              <li key={r.name} className="review">
                <img src={r.avatar} alt="" width="52" height="52" />
                <div>
                  <div className="review__head">
                    <p className="label-l">{r.name}</p>
                    <Stars count={r.stars} size={16} />
                  </div>
                  <p className="body-xs tint-black700">{r.role} · {r.when}</p>
                  <p className="body-m">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty">No reviews with that rating yet.</p>
        )}
      </section>
    </div>
  );
}
