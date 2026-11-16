import AsyncStorage from '@react-native-async-storage/async-storage';

export type Lang = 'fr' | 'en' | 'es';

export const LANGS: { code: Lang; label: string; short: string; speech: string }[] = [
  { code: 'fr', label: 'Français', short: 'FR', speech: 'fr-FR' },
  { code: 'en', label: 'Anglais', short: 'EN', speech: 'en-US' },
  // Espagnol d'Amérique latine : voix es-US (la plus répandue sur Android et iOS).
  { code: 'es', label: 'Espagnol (latino)', short: 'ES', speech: 'es-US' },
];

export const MAX_CHARS = 450; // l'API accepte 500 octets par requête

export type Entry = { from: Lang; to: Lang; source: string; result: string; at: number };

export async function translate(text: string, from: Lang, to: Lang): Promise<string> {
  const pair = `${from}|${to === 'es' ? 'es-419' : to}`;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(pair)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const out: string | undefined = json?.responseData?.translatedText;
  if (json?.responseStatus !== 200 || !out) {
    throw new Error(json?.responseDetails || 'Traduction indisponible');
  }
  return decodeEntities(out).trim();
}

function decodeEntities(s: string) {
  return s
    .replace(/&#39;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

export function googleTranslateUrl(text: string, from: Lang, to: Lang) {
  return `https://translate.google.com/?sl=${from}&tl=${to}&text=${encodeURIComponent(text)}&op=translate`;
}

const KEY = 'klk.translations.v1';

export async function loadHistory(): Promise<Entry[]> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Entry[]) : [];
  } catch {
    return [];
  }
}

export async function saveHistory(list: Entry[]) {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(list.slice(0, 15)));
  } catch {}
}
