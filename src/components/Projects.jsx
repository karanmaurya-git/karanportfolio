import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import useReveal from '../hooks/useReveal';
import './Projects.css';

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <h2 className="section-title">Featured Projects</h2>

        <div ref={ref} className={`projects__grid reveal ${visible ? 'visible' : ''}`}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
