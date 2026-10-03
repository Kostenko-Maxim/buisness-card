import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import type { Lang } from './i18n/translations';

export function render(lang: Lang) {
  return renderToString(<StrictMode><App initialLang={lang} /></StrictMode>);
}
