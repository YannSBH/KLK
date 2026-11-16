import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

export type Currency = 'DOP' | 'USD' | 'EUR';
export const CURRENCIES: Currency[] = ['DOP', 'USD', 'EUR'];

// Unités de la devise pour 1 USD.
export type Rates = { DOP: number; USD: number; EUR: number; updatedAt: number };

// Taux de secours (Banque centrale RD + BCE, 12/11/2026), utilisés seulement
// si l'app n'a encore jamais pu charger les taux du jour.
export const FALLBACK: Rates = { DOP: 60.87, USD: 1, EUR: 1 / 1.1081, updatedAt: Date.UTC(2026, 10, 12, 16) };

const KEY = 'klk.rates.v1';
const URL = 'https://open.er-api.com/v6/latest/USD';
const MAX_AGE = 6 * 60 * 60 * 1000;

async function readCache(): Promise<Rates | null> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Rates) : null;
  } catch {
    return null;
  }
}

async function fetchRates(): Promise<Rates> {
  const res = await fetch(URL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const r = json?.rates;
  if (!r?.DOP || !r?.EUR) throw new Error('Taux manquants');
  const rates: Rates = { DOP: r.DOP, EUR: r.EUR, USD: 1, updatedAt: Date.now() };
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(rates));
  } catch {}
  return rates;
}

export function useRates() {
  const [rates, setRates] = useState<Rates | null>(null);
  const [status, setStatus] = useState<'loading' | 'ok' | 'offline' | 'fallback'>('loading');

  const refresh = useCallback(async (force = false) => {
    const cached = await readCache();
    if (cached) setRates(cached);
    if (!force && cached && Date.now() - cached.updatedAt < MAX_AGE) {
      setStatus('ok');
      return;
    }
    try {
      setRates(await fetchRates());
      setStatus('ok');
    } catch {
      if (cached) setStatus('offline');
      else {
        setRates(FALLBACK);
        setStatus('fallback');
      }
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => refresh(), 0);
    return () => clearTimeout(t);
  }, [refresh]);

  return { rates, status, refresh };
}

export function convert(amount: number, from: Currency, to: Currency, rates: Rates) {
  return (amount / rates[from]) * rates[to];
}

export function formatMoney(value: number, currency: Currency) {
  const digits = currency === 'DOP' ? 0 : 2;
  const fixed = value.toFixed(digits);
  const [int, dec] = fixed.split('.');
  const spaced = int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return dec ? `${spaced},${dec}` : spaced;
}

export function parseAmount(text: string) {
  const n = parseFloat(text.replace(/[\s ]/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : 0;
}

export function formatDate(ts: number, lang: 'fr' | 'en' | 'es' = 'fr') {
  const d = new Date(ts);
  const pad = (n: number) => String(n).padStart(2, '0');
  const time = lang === 'fr' ? `${pad(d.getHours())}h${pad(d.getMinutes())}` : `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  const day = lang === 'en' ? `${pad(d.getMonth() + 1)}/${pad(d.getDate())}` : `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`;
  return `${day} ${lang === 'fr' ? 'à' : lang === 'es' ? 'a las' : 'at'} ${time}`;
}
