import { Star } from 'lucide-react';
import Band from '../components/Band.jsx';
import Shape3D from '../components/Shape3D.jsx';
import AvatarStack from '../components/AvatarStack.jsx';
import CourseCard from '../components/CourseCard.jsx';
import { featuredCourses } from '../data';

/** Two-column screen used by Login and Register: pitch + floating cards on the left, form card on the right. */
export default function AuthLayout({ title, text, children }) {
  return (
    <main>
      <Band className="auth">
        <div className="auth__inner">
          <div className="auth__pitch">
            <h1 className="heading-s auth__title">{title}</h1>
            <p className="body-l">{text}</p>
            <div className="auth__visual" aria-hidden="true">
              <div className="auth__card auth__card--a"><CourseCard course={featuredCourses[1]} /></div>
              <div className="auth__card auth__card--b"><CourseCard course={featuredCourses[2]} /></div>
              <div className="float-card auth__students">
                <strong>Happy Students</strong>
                <span className="fc-rating">4.5 (240) <Star size={14} fill="var(--lime-400)" stroke="none" /></span>
                <AvatarStack count={5} size={36} label="2K+" dark className="avatar-stack--overlap" />
              </div>
              <Shape3D src="f9c0e0fd" size={150} x={420} y={250} color="#f5f5f6" />
              <Shape3D src="5b3686bc" size={120} x={-20} y={330} color="#d4fb20" />
            </div>
          </div>
          <div className="auth__panel">{children}</div>
        </div>
      </Band>
    </main>
  );
}
