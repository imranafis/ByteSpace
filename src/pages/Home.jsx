import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Star, TrendingUp } from 'lucide-react';
import Band from '../components/Band.jsx';
import Footer from '../components/Footer.jsx';
import SearchBar from '../components/SearchBar.jsx';
import FloatingCard from '../components/FloatingCard.jsx';
import AvatarStack from '../components/AvatarStack.jsx';
import PartnerLogos from '../components/PartnerLogos.jsx';
import CategoryTabs from '../components/CategoryTabs.jsx';
import CourseCard from '../components/CourseCard.jsx';
import CategoryIcon from '../components/Icons.jsx';
import Button from '../components/Button.jsx';
import Shape3D, { ShapeField } from '../components/Shape3D.jsx';
import { categoryTabs, categoryCards, featuredCourses, creatorBenefits, testimonials, heroShapes, ctaShapes, img } from '../data';

function Hero() {
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  return (
    <Band className="hero">
      <div className="hero__ring" aria-hidden="true" />
      <ShapeField shapes={heroShapes} />
      <div className="hero__copy">
        <h1 className="display-l">Get Access to Hundreds Courses Available</h1>
        <p className="body-l">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        <SearchBar value={q} onChange={setQ} onSubmit={(v) => navigate(`/search${v ? `?q=${encodeURIComponent(v)}` : ''}`)} />
      </div>
      <div className="hero__stage" aria-hidden="false">
        <img className="hero__person" src={img('29a52a24')} alt="Learner wearing headphones holding a laptop" />
        <FloatingCard className="fc-topic">
          <strong>UI/UX Design</strong>
          <span>200 Courses <i>•</i> 1000+ Students</span>
        </FloatingCard>
        <FloatingCard className="fc-progress">
          <span className="fc-label">Learning Progress</span>
          <strong className="fc-percent">55%</strong>
          <div className="progress progress--light"><span style={{ width: '56%' }} /></div>
        </FloatingCard>
        <FloatingCard className="fc-students">
          <strong>Happy Students</strong>
          <span className="fc-rating">4.5 (240) <Star size={14} fill="var(--lime-400)" stroke="none" /></span>
          <AvatarStack count={7} size={43} label="2K+" dark />
        </FloatingCard>
      </div>
    </Band>
  );
}

function CoursesSection() {
  const [tab, setTab] = useState('Featured');
  const list = useMemo(
    () => (tab === 'Featured' ? featuredCourses : featuredCourses.filter((c) => c.category === tab)),
    [tab]
  );
  return (
    <section className="section courses-section" aria-labelledby="passion-h">
      <div className="container">
        <div className="section__head section__head--center">
          <h2 id="passion-h" className="display-s">Discover Your Passion, Build Your Skills</h2>
          <p className="body-l tint-violet">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
        </div>
        <CategoryTabs items={categoryTabs} active={tab} onChange={setTab} className="tabs-pills--center" />
        {list.length ? (
          <div className="grid-cards">{list.map((c) => <CourseCard key={c.id} course={c} />)}</div>
        ) : (
          <p className="empty">No featured courses in “{tab}” yet. <Link to="/search">Browse every course</Link></p>
        )}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="section categories" aria-labelledby="paths-h">
      <div className="container">
        <div className="section__head section__head--center">
          <h2 id="paths-h" className="display-xs tint-vulcan">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="body-l tint-gray">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.</p>
        </div>
        <ul className="category-cards">
          {categoryCards.map((c, i) => (
            <li key={c.name}>
              <Link to={`/search?category=${encodeURIComponent(c.name)}`} className={`category-card${i === 0 ? '' : ' category-card--lime'}`}>
                <span className="category-card__icon"><CategoryIcon name={c.icon} /></span>
                <span className="heading-xs">{c.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CreatorSection() {
  return (
    <section className="section creator-section" aria-label="For learners and creators">
      <div className="creator-section__glow" aria-hidden="true" />
      <div className="container creator-section__inner">
        <div className="split">
          <div className="split__text">
            <h2 className="display-s">Your Path to Professional Growth Starts Here!</h2>
            <p className="body-l tint-black700">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
            <div className="split__actions">
              <Button to="/search" variant="blue">Explore Courses</Button>
              <Button to="/register" variant="ghost">Join Us</Button>
            </div>
          </div>
          <div className="split__visual split__visual--a">
            <img className="split__photo" src={img('29a52a24')} alt="" />
            <div className="earnings float-card-light">
              <span className="earnings__label"><TrendingUp size={16} /> Earnings 2023</span>
              <strong>$1,200.38</strong>
              <div className="earnings__bars" aria-hidden="true">{[30, 52, 40, 70, 58, 86].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
            </div>
            <Shape3D src="92fc70a3" size={150} x={420} y={40} color="#d4fb20" />
          </div>
        </div>
        <div className="split split--reverse">
          <div className="split__visual split__visual--b">
            <img className="split__photo" src={img('0d6596fb')} alt="" />
            <div className="float-card-light stat-card">
              <strong>Happy Students</strong>
              <span>4.5 (240) <Star size={14} fill="var(--lime-400)" stroke="none" /></span>
              <AvatarStack count={5} size={36} label="2K+" className="avatar-stack--overlap" />
            </div>
            <Shape3D src="5b3686bc" size={150} x={380} y={110} color="#7f30f7" />
          </div>
          <div className="split__text">
            <h2 className="display-s">Create &amp; Manage Courses Easily.</h2>
            <p className="body-l tint-black700">ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <ul className="checklist">
              {creatorBenefits.map((b) => (
                <li key={b}><span className="checklist__tick"><Check size={16} strokeWidth={3} /></span>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreatorCTA() {
  return (
    <Band className="cta" withHeader={false}>
      <ShapeField shapes={ctaShapes} />
      <div className="cta__content">
        <h2 className="display-xs cta__title">Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="body-l">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <Button to="/register" variant="purple">Join as Creator</Button>
      </div>
    </Band>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials" aria-labelledby="community-h">
      <div className="testimonials__glow" aria-hidden="true" />
      <div className="container">
        <div className="testimonials__head">
          <h2 id="community-h" className="display-s">Discover What Our Community Is Saying</h2>
          <p className="body-l tint-black700">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <ul className="testimonial-cards">
          {testimonials.map((t) => (
            <li key={t.name} className="testimonial">
              <img src={t.avatar} alt="" width="80" height="80" />
              <blockquote>{t.text}</blockquote>
              <p className="testimonial__who"><strong>{t.name}</strong><span>{t.role}</span></p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section className="partners-section" aria-label="Partners"><div className="container"><PartnerLogos /></div></section>
        <CoursesSection />
        <Categories />
        <CreatorSection />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
