import { profile } from '../data/profile';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">© 2026 {profile.name}. All rights reserved.</p>
    </footer>
  );
}
