import { useMemo, useState } from 'react';
import Band from '../components/Band.jsx';
import Footer from '../components/Footer.jsx';
import Button from '../components/Button.jsx';
import CourseCard from '../components/CourseCard.jsx';
import Shape3D from '../components/Shape3D.jsx';
import { FilterBar, applyFilters } from './Search.jsx';
import { featuredCourses, creator } from '../data';

export default function CreatorProfile() {
  const [following, setFollowing] = useState(false);
  const [level, setLevel] = useState('All levels');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Most relevant');
  const list = useMemo(() => applyFilters(featuredCourses, { level, category, sort }), [level, category, sort]);
  const followers = 12 + (following ? 1 : 0);

  return (
    <>
      <main>
        <Band className="creator-band">
          <div className="container creator-band__inner">
            <img className="creator-band__avatar" src={creator.avatar} alt="" width="160" height="160" />
            <div className="creator-band__info">
              <div className="creator-band__name">
                <h1 className="display-xs">{creator.name}</h1>
                <span className="level level--creator">Creator</span>
              </div>
              <p className="heading-xs creator-band__role">Passionate UI/UX, Web designer</p>
              <p className="body-l creator-band__bio">Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!</p>
              <p className="body-l creator-band__bio">Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
            </div>
            <div className="creator-band__side">
              <dl className="creator-stats">
                <div><dt>Products</dt><dd>3</dd></div>
                <div><dt>Followers</dt><dd>{followers}</dd></div>
              </dl>
              <Button variant="lime" aria-pressed={following} onClick={() => setFollowing(!following)}>{following ? 'Following' : 'Follow'}</Button>
            </div>
          </div>
          <Shape3D src="92fc70a3" size={170} x={1290} y={290} color="#f5f5f6" />
        </Band>
        <section className="section results">
          <div className="container">
            <FilterBar {...{ level, setLevel, category, setCategory, sort, setSort }} />
            {list.length ? (
              <div className="grid-cards">{list.map((c) => <CourseCard key={c.id} course={c} />)}</div>
            ) : <p className="empty">No products match your filters.</p>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
