import studyflowImg from '../assets/projects/studyflow.png';
import fintrackImg from '../assets/projects/fintrack.png';
import stacksImg from '../assets/projects/stacks.png';

export const projects = [
  {
    id: 'studyflow-ai',
    name: 'StudyFlow AI',
    image: studyflowImg,
    desc: 'A smart student dashboard that generates personalized study plans through the Google Gemini API — track subjects, tasks, notes, and progress analytics in one place, secured with JWT authentication.',
    tags: ['React', 'Node.js', 'MongoDB', 'Gemini API'],
    live: 'https://studyflow-ai-eight.vercel.app/',
    github: 'https://github.com/karanmaurya-git/studyflow-ai',
  },
  {
    id: 'fintrack',
    name: 'FinTrack',
    image: fintrackImg,
    desc: 'A personal expense tracker with category-wise spending breakdowns, budgets, and a live dashboard. Full CRUD on expenses, backed by a secure JWT-authenticated REST API.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://fintrack-brown-beta.vercel.app/',
    github: 'https://github.com/karanmaurya-git/fintrack',
  },
  {
    id: 'library',
    name: 'Stacks - Library System',
    image: stacksImg,
    desc: 'A full front-desk library system for librarians: catalog and member management, book issue & return, reservations, fines, and an admin dashboard summarizing titles, overdue books, and recent activity.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    live: 'https://library-management-system-kohl-psi.vercel.app/',
    github: 'https://github.com/karanmaurya-git/Library-Management-System',
  },
];
