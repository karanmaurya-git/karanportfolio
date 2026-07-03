import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/nav';
import { profile } from '../data/profile';
import useActiveSection from '../hooks/useActiveSection';
import './Navbar.css';

export default function Navbar() {
  const ids = NAV_LINKS.map((n) => n.id);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => scrollTo('home')} aria-label="Go to home">
          {profile.firstName} <span className="accent">{profile.lastName}</span>
        </button>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${active === link.id ? 'is-active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button className="navbar__burger" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar__mobile-link ${active === link.id ? 'is-active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
