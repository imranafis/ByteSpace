import { Link } from 'react-router-dom';
import AvatarStack from './AvatarStack.jsx';
import Rating from './Rating.jsx';

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <Link to={`/course/${course.id}`} className="course-card__link" aria-label={course.title}>
        <div className="course-card__cover">
          <img src={course.cover} alt="" loading="lazy" />
          <ul className="course-card__chips">
            <li>{course.lessons}</li>
            <li>{course.duration}</li>
            <li>{course.comments}</li>
          </ul>
        </div>
        <div className="course-card__body">
          <div>
            <h3 className="course-card__title">{course.title}</h3>
            <p className="course-card__author">by {course.author}</p>
          </div>
          <div className="course-card__meta">
            <span className={`level level--${course.level.toLowerCase()}`}>{course.level}</span>
            <AvatarStack count={3} size={32} label={course.students} className="avatar-stack--overlap" />
          </div>
          <p className="course-card__price"><strong>${course.price}</strong><span>/lifetime</span></p>
        </div>
        <div className="course-card__rating"><Rating value={course.rating} /></div>
      </Link>
    </article>
  );
}
