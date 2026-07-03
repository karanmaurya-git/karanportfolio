import { Link2, BrainCircuit, Boxes, Database, Network } from 'lucide-react';
import { profile } from '../data/profile';
import { skills } from '../data/skills';
import useReveal from '../hooks/useReveal';
import './About.css';

const LUCIDE_ICONS = { Link2, BrainCircuit, Boxes, Database, Network };

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <h2 className="section-title">About Me</h2>

        <p className="about__bio">{profile.aboutParagraph}</p>

        <h3 className="about__subtitle">Technical Skills</h3>

        <div ref={ref} className={`about__skills reveal ${visible ? 'visible' : ''}`}>
          {skills.map((s) => (
            <div className="skill-card" key={s.name}>
              <span className="skill-card__icon">
                {s.type === 'img' ? (
                  <img src={s.src} alt="" className={s.invert ? 'is-invert' : ''} />
                ) : (
                  (() => {
                    const Icon = LUCIDE_ICONS[s.icon];
                    return <Icon size={26} strokeWidth={1.6} />;
                  })()
                )}
              </span>
              <span className="skill-card__label">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
