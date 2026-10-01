import { Check } from 'lucide-react';
import { course } from '../data';

export default function CourseAbout() {
  return (
    <div className="prose-block">
      <section>
        <h2 className="heading-xs">Description</h2>
        {course.description.map((p, i) => <p key={i} className="body-m">{p}</p>)}
      </section>
      <section>
        <h2 className="heading-xs">Sneak Peak</h2>
        <ul className="sneak">
          {course.sneakPeek.map((src, i) => <li key={i}><img src={src} alt={`Course preview ${i + 1}`} loading="lazy" /></li>)}
        </ul>
      </section>
      <section>
        <h2 className="heading-xs">Key Points</h2>
        <ul className="checklist checklist--grid">
          {course.keyPoints.map((k) => (
            <li key={k}><span className="checklist__tick"><Check size={16} strokeWidth={3} /></span>{k}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
