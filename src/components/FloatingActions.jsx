import { useEffect, useState } from 'react';
import { ArrowUp, Download } from 'lucide-react';
import { profile } from '../data/profile';
import './FloatingActions.css';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="floating-actions">
      {showTop && (
        <button className="floating-actions__top" onClick={scrollTop} aria-label="Back to top">
          <ArrowUp size={18} />
        </button>
      )}
      <a className="floating-actions__resume" href={profile.resumeUrl} download>
        <Download size={16} /> Download Resume
      </a>
    </div>
  );
}
