import { experience } from '../data/experience';
import useReveal from '../hooks/useReveal';
import './Experience.css';

export default function Experience() {
  const [ref, visible] = useReveal();

  return (
    <section id="experience" className="section experience">
      <div className="section-inner">
        <h2 className="section-title">Professional Experience</h2>

        <div ref={ref} className={`experience__list reveal ${visible ? 'visible' : ''}`}>
          {experience.map((exp) => (
            <div className="experience__row" key={exp.role}>
              <div className="experience__date">{exp.date}</div>
              <div className="experience__content">
                <h3>{exp.role}</h3>
                <p className="experience__company">{exp.company}</p>
                <p className="experience__desc">{exp.desc}</p>
                <ul className="experience__points">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
