import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui, UiKey } from './data/ui';

export type Lang = 'fr' | 'en' | 'es';
export const LANGS: Lang[] = ['fr', 'en', 'es'];
export const LANG_NAMES: Record<Lang, string> = { fr: 'Français', en: 'English', es: 'Español' };

/** Texte disponible dans les trois langues. */
export type T = { fr: string; en: string; es: string };

const KEY = 'klk.lang.v1';

function deviceLang(): Lang {
  try {
    const code = getLocales()[0]?.languageCode;
    return code === 'fr' || code === 'es' ? code : 'en';
  } catch {
    return 'en';
  }
}

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Texte d'interface par clé, avec remplacement de {x}. */
  t: (key: UiKey, vars?: Record<string, string | number>) => string;
  /** Texte de contenu trilingue. */
  L: (v: T | string | undefined) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(deviceLang);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((v) => {
        if (v === 'fr' || v === 'en' || v === 'es') setLangState(v);
      })
      .catch(() => {});
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    AsyncStorage.setItem(KEY, l).catch(() => {});
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (key, vars) => {
        let s = ui[key][lang];
        if (vars) for (const k of Object.keys(vars)) s = s.split(`{${k}}`).join(String(vars[k]));
        return s;
      },
      L: (v) => (v == null ? '' : typeof v === 'string' ? v : v[lang]),
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n hors de I18nProvider');
  return ctx;
}
