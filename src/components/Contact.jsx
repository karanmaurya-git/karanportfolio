import { Mail, Phone, Linkedin, Code2, Link2 } from 'lucide-react';
import { profile } from '../data/profile';
import useReveal from '../hooks/useReveal';
import './Contact.css';

const ROWS = [
  { icon: Mail, label: profile.email, href: profile.emailHref },
  { icon: Phone, label: profile.phone, href: profile.phoneHref },
  { icon: Linkedin, label: 'LinkedIn Profile', href: profile.links.linkedin, external: true },
  { icon: Code2, label: 'LeetCode Profile', href: profile.links.leetcode, external: true },
  { icon: Link2, label: 'All Project Links', href: profile.links.linktree, external: true },
];

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact__inner">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact__lead">
          Open to discussing Software Engineering internships, full-stack opportunities,
          and interesting problems to solve.
        </p>

        <div ref={ref} className={`contact__list reveal ${visible ? 'visible' : ''}`}>
          {ROWS.map((r) => {
            const Icon = r.icon;
            return (
              <a
                key={r.label}
                className="contact__row"
                href={r.href}
                target={r.external ? '_blank' : undefined}
                rel={r.external ? 'noreferrer' : undefined}
              >
                <span className="contact__row-icon">
                  <Icon size={18} />
                </span>
                <span className="contact__row-label">{r.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
