import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import App from './App';

const root = document.getElementById('root')!;
const initialLang = window.location.pathname.startsWith('/en') ? 'en' : 'ru';
const app = (
  <StrictMode>
    <App initialLang={initialLang} />
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
