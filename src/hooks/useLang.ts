import { createContext, useContext, useState, useCallback } from 'react';
import translations, { type Lang, type TranslationKey } from '../i18n/translations';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

export const LangContext = createContext<LangContextValue>({
  lang: 'ru',
  setLang: () => {},
  t: (key) => key,
});

export function useLangState(): LangContextValue {
  const [lang, setLangState] = useState<Lang>('ru');

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => translations[lang][key] as string,
    [lang],
  );

  return { lang, setLang, t };
}

export function useLang(): LangContextValue {
  return useContext(LangContext);
}
