import { ExternalLink, Github } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        <img src={project.image} alt={project.name} loading="lazy" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__desc">{project.desc}</p>

        <div className="project-card__tags">
          {project.tags.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <a className="btn btn-primary btn-sm" href={project.live} target="_blank" rel="noreferrer">
            <ExternalLink size={14} /> View Live
          </a>
          <a className="btn btn-ghost btn-sm" href={project.github} target="_blank" rel="noreferrer">
            <Github size={14} /> View Code
          </a>
        </div>
      </div>
    </article>
  );
}
