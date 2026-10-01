import { useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { Share2, BookOpen, PlayCircle, BadgeCheck, MessageCircle, Play, Star, Users } from 'lucide-react';
import Band from '../components/Band.jsx';
import Footer from '../components/Footer.jsx';
import Button from '../components/Button.jsx';
import { course, creator } from '../data';

const includeIcons = [BookOpen, PlayCircle, BadgeCheck, MessageCircle];

export default function CourseLayout() {
  const { id } = useParams();
  const [shared, setShared] = useState(false);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: course.title, url });
      else { await navigator.clipboard.writeText(url); setShared(true); setTimeout(() => setShared(false), 2000); }
    } catch { /* user cancelled */ }
  };

  const base = `/course/${id}`;
  const tabs = [
    { to: base, label: 'About', end: true },
    { to: `${base}/lessons`, label: 'Lessons' },
    { to: `${base}/reviews`, label: 'Reviews' },
  ];

  return (
    <>
      <main>
        <Band className="course-band">
          <div className="container course-band__inner">
            <div>
              <h1 className="display-xs course-band__title">{course.title}</h1>
              <p className="heading-xs course-band__tagline">{course.tagline}</p>
              <p className="label-l course-band__author">{course.author}</p>
            </div>
            <div className="course-band__meta">
              <span className="level level--intermediate">{course.level}</span>
              <span className="course-band__stat"><Star size={18} fill="var(--lime-400)" stroke="none" /> {course.rating}</span>
              <span className="course-band__stat"><Users size={18} /> {course.students}</span>
              <button type="button" className="btn btn--glass btn--sm" onClick={share}><Share2 size={18} /> {shared ? 'Link copied' : 'Share'}</button>
            </div>
          </div>
        </Band>

        <div className="container course-page">
          <div className="course-page__main">
            <div className="video" role="img" aria-label="Course preview video">
              <img src={course.video} alt="" />
              <button type="button" className="video__play" aria-label="Play preview"><Play size={28} fill="currentColor" /></button>
            </div>
            <nav className="course-tabs" aria-label="Course sections">
              {tabs.map((t) => (
                <NavLink key={t.label} to={t.to} end={t.end} className={({ isActive }) => `course-tabs__tab${isActive ? ' is-active' : ''}`}>{t.label}</NavLink>
              ))}
            </nav>
            <Outlet />
          </div>

          <aside className="course-page__aside">
            <section className="panel">
              <h2 className="heading-s">{course.totalLessons}</h2>
              <ol className="lesson-list">
                {course.sidebarLessons.map((l) => (
                  <li key={l.n}>
                    <span className="lesson-list__n">{l.n}</span>
                    <span className="lesson-list__t">{l.title}</span>
                    <span className="lesson-list__d">{l.time}</span>
                  </li>
                ))}
              </ol>
              <p className="lesson-list__more">{course.moreVideos}</p>
            </section>

            <section className="panel panel--enroll">
              <p className="body-m">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
              <p className="price"><strong>${course.price}</strong><span>/lifetime</span></p>
              <Button variant="blue" className="btn--block">Enroll Now</Button>
            </section>

            <section className="panel">
              <h2 className="heading-xs">This course include</h2>
              <ul className="includes">
                {course.includes.map((t, i) => {
                  const Icon = includeIcons[i];
                  return <li key={t}><Icon size={22} aria-hidden="true" />{t}</li>;
                })}
              </ul>
            </section>

            <section className="panel creator-card">
              <img src={creator.avatar} alt="" width="52" height="52" />
              <div>
                <p className="label-l">{creator.name}</p>
                <p className="body-xs tint-black700">{creator.role}</p>
              </div>
              <Link to="/creator" className="creator-card__link">See Full Profile</Link>
            </section>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
