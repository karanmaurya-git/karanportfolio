import { GraduationCap, School } from 'lucide-react';
import { education } from '../data/education';
import useReveal from '../hooks/useReveal';
import './Education.css';

const ICONS = { GraduationCap, School };

export default function Education() {
  const [ref, visible] = useReveal();

  return (
    <section id="education" className="section education">
      <div className="section-inner">
        <h2 className="section-title">Education</h2>

        <div ref={ref} className={`education__grid reveal ${visible ? 'visible' : ''}`}>
          {education.map((edu) => {
            const Icon = ICONS[edu.icon];
            return (
              <div className="edu-card" key={edu.degree}>
                <span className="edu-card__icon">
                  <Icon size={18} />
                </span>
                <div className="edu-card__body">
                  <h3 className="edu-card__degree">{edu.degree}</h3>
                  <p className="edu-card__school">{edu.school}</p>
                  <p className="edu-card__date">{edu.date}</p>
                  {edu.desc && <p className="edu-card__desc">{edu.desc}</p>}
                  {edu.chips?.length > 0 && (
                    <div className="edu-card__chips">
                      {edu.chips.map((c) => (
                        <span className="chip" key={c}>
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
