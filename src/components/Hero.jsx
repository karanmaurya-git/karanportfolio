import { Github, Linkedin, Code2, FileDown, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { profile } from '../data/profile';
import karanPhoto from '../assets/karan.jpg';
import './Hero.css';

const ACTIONS = [
  { icon: Github, label: 'GitHub', href: profile.links.github, external: true },
  { icon: Linkedin, label: 'LinkedIn', href: profile.links.linkedin, external: true },
  { icon: Code2, label: 'LeetCode', href: profile.links.leetcode, external: true },
  { icon: FileDown, label: 'Resume', href: profile.resumeUrl, download: true },
  { icon: Mail, label: 'Email', href: profile.emailHref },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__photo">
          <img src={karanPhoto} alt="Karan Maurya" />
        </div>

        <h1 className="hero__name">{profile.name}</h1>

        <p className="hero__role">
          <TypeAnimation
            sequence={[
              'Full-Stack Developer',
              800,
              'Full-Stack Developer | System Design Enthusiast',
            ]}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
          />
        </p>

        <p className="hero__lead">{profile.tagline}</p>

        <div className="hero__actions">
          {ACTIONS.map((a) => {
            const Icon = a.icon;

            return (
              <a
                key={a.label}
                className="hero__pill"
                href={a.href}
                target={a.external ? '_blank' : undefined}
                rel={a.external ? 'noreferrer' : undefined}
                download={a.download || undefined}
              >
                <Icon size={16} />
                <span>{a.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}