import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { modules } from '../data';

export default function CourseLessons() {
  const [open, setOpen] = useState(0);
  return (
    <div className="prose-block">
      <section>
        <h2 className="heading-xs">Explore the Modules</h2>
        <p className="body-m">Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
      </section>
      <section>
        <h2 className="heading-xs">Lesson List</h2>
        <ul className="accordion">
          {modules.map((m, i) => (
            <li key={m.title} className={open === i ? 'is-open' : ''}>
              <h3>
                <button type="button" aria-expanded={open === i} aria-controls={`mod-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{m.title}</span>
                  <ChevronDown size={22} aria-hidden="true" />
                </button>
              </h3>
              <div id={`mod-${i}`} role="region" hidden={open !== i}><p className="body-m">{m.body}</p></div>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="heading-xs">Lesson Content</h2>
        <p className="body-m">Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>
      </section>
      <section>
        <h2 className="heading-xs">Lesson Progress Tracking</h2>
        <p className="body-m">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
        <div className="progress-card">
          <span>Learning Progress</span>
          <strong>55%</strong>
          <div className="progress" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}><span style={{ width: '56%' }} /></div>
        </div>
      </section>
    </div>
  );
}
