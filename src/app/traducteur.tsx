import Ionicons from '@expo/vector-icons/Ionicons';
import * as Clipboard from 'expo-clipboard';
import { router } from 'expo-router';
import * as Speech from 'expo-speech';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Linking, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, Screen, SectionTitle, styles } from '../components/ui';
import { Entry, googleTranslateUrl, Lang, LANGS, loadHistory, MAX_CHARS, saveHistory, translate } from '../lib/translate';
import { colors } from '../theme';

const label = (l: Lang) => LANGS.find((x) => x.code === l)!;

function speak(text: string, lang: Lang) {
  Speech.stop();
  Speech.speak(text, { language: label(lang).speech, rate: 0.9 });
}

export default function Traducteur() {
  const [from, setFrom] = useState<Lang>('fr');
  const [to, setTo] = useState<Lang>('es');
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<Entry[]>([]);

  useEffect(() => {
    let alive = true;
    loadHistory().then((h) => alive && setHistory(h));
    return () => {
      alive = false;
      Speech.stop();
    };
  }, []);

  function pickFrom(l: Lang) {
    if (l === to) setTo(from);
    setFrom(l);
    setResult('');
  }
  function pickTo(l: Lang) {
    if (l === from) setFrom(to);
    setTo(l);
    setResult('');
  }
  function swap() {
    setFrom(to);
    setTo(from);
    if (result) {
      setText(result);
      setResult(text);
    }
  }

  async function run() {
    const q = text.trim();
    if (!q) return;
    setBusy(true);
    setError('');
    setCopied(false);
    try {
      const out = await translate(q, from, to);
      setResult(out);
      const next = [{ from, to, source: q, result: out, at: Date.now() }, ...history.filter((h) => !(h.source === q && h.to === to))];
      setHistory(next.slice(0, 15));
      saveHistory(next);
    } catch {
      setResult('');
      setError('Pas de connexion ou service indisponible. Tu peux réessayer, ou ouvrir Google Traduction.');
    } finally {
      setBusy(false);
    }
  }

  async function copy() {
    try {
      await Clipboard.setStringAsync(result);
      setCopied(true);
    } catch {}
  }

  return (
    <Screen title="Traducteur" subtitle="Français, anglais, espagnol latino">
      <Card>
        <LangRow value={from} onPick={pickFrom} title="De" />
        <Pressable onPress={swap} style={s.swap} accessibilityRole="button" accessibilityLabel="Inverser les langues">
          <Ionicons name="swap-vertical" size={20} color={colors.navy} />
          <Text style={s.swapText}>Inverser</Text>
        </Pressable>
        <LangRow value={to} onPick={pickTo} title="Vers" />

        <TextInput
          value={text}
          onChangeText={(t) => setText(t.slice(0, MAX_CHARS))}
          placeholder={from === 'fr' ? 'Écris ta phrase…' : from === 'en' ? 'Type your sentence…' : 'Escribe tu frase…'}
          placeholderTextColor={colors.muted}
          accessibilityLabel="Texte à traduire"
          multiline
          style={s.input}
        />
        <View style={s.rowBetween}>
          <Text style={styles.muted}>
            {text.length}/{MAX_CHARS}
          </Text>
          {text ? (
            <Pressable
              onPress={() => {
                setText('');
                setResult('');
                setError('');
              }}
              hitSlop={8}
              accessibilityRole="button">
              <Text style={s.link}>Effacer</Text>
            </Pressable>
          ) : null}
        </View>

        <Pressable style={[s.primary, (!text.trim() || busy) && { opacity: 0.5 }]} disabled={!text.trim() || busy} onPress={run} accessibilityRole="button">
          {busy ? <ActivityIndicator color="#fff" /> : <Ionicons name="language" size={18} color="#fff" />}
          <Text style={s.primaryText}>Traduire</Text>
        </Pressable>
      </Card>

      {error ? (
        <Card style={{ borderColor: '#F0C7CE' }}>
          <Text style={styles.p}>{error}</Text>
          <Pressable style={s.secondary} onPress={() => Linking.openURL(googleTranslateUrl(text, from, to))} accessibilityRole="link">
            <Ionicons name="open-outline" size={16} color={colors.navy} />
            <Text style={s.secondaryText}>Ouvrir Google Traduction</Text>
          </Pressable>
        </Card>
      ) : null}

      {result ? (
        <Card style={s.resultCard}>
          <Text style={s.resultLabel}>{label(to).label}</Text>
          <Text style={s.result} selectable>
            {result}
          </Text>
          <View style={s.actions}>
            <Action icon="volume-high" text="Écouter" onPress={() => speak(result, to)} />
            <Action icon={copied ? 'checkmark' : 'copy-outline'} text={copied ? 'Copié' : 'Copier'} onPress={copy} />
            <Action
              icon="expand-outline"
              text="En grand"
              onPress={() => router.push({ pathname: '/chauffeur', params: { es: result, fr: text.trim() } })}
            />
          </View>
        </Card>
      ) : null}

      {history.length ? (
        <View style={{ gap: 8 }}>
          <SectionTitle>Récentes (dispo hors ligne)</SectionTitle>
          <View style={s.list}>
            {history.map((h, i) => (
              <Pressable
                key={h.at}
                onPress={() => {
                  setFrom(h.from);
                  setTo(h.to);
                  setText(h.source);
                  setResult(h.result);
                  setError('');
                }}
                style={[s.item, i > 0 && s.itemBorder]}
                accessibilityRole="button">
                <Text style={s.itemTop} numberOfLines={2}>
                  {h.result}
                </Text>
                <Text style={styles.muted} numberOfLines={1}>
                  {label(h.from).short} → {label(h.to).short} · {h.source}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      ) : null}

      <Text style={styles.muted}>Traduction automatique : pour une info importante (santé, argent), fais confirmer par la personne en face.</Text>
    </Screen>
  );
}

function LangRow({ value, onPick, title }: { value: Lang; onPick: (l: Lang) => void; title: string }) {
  return (
    <View style={{ gap: 6 }}>
      <Text style={s.rowTitle}>{title}</Text>
      <View style={s.tabs}>
        {LANGS.map((l) => (
          <Pressable
            key={l.code}
            onPress={() => onPick(l.code)}
            accessibilityRole="button"
            accessibilityState={{ selected: l.code === value }}
            style={[s.tab, l.code === value && s.tabOn]}>
            <Text style={[s.tabText, l.code === value && s.tabTextOn]} numberOfLines={1}>
              {l.code === 'es' ? 'Espagnol' : l.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function Action({ icon, text, onPress }: { icon: keyof typeof Ionicons.glyphMap; text: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={s.action} accessibilityRole="button">
      <Ionicons name={icon} size={20} color={colors.navy} />
      <Text style={s.actionText}>{text}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  rowTitle: { fontSize: 12, fontWeight: '700', color: colors.muted, textTransform: 'uppercase', letterSpacing: 0.6 },
  tabs: { flexDirection: 'row', backgroundColor: colors.bg, borderRadius: 12, padding: 4, gap: 4 },
  tab: { flex: 1, minHeight: 42, borderRadius: 9, alignItems: 'center', justifyContent: 'center' },
  tabOn: { backgroundColor: colors.navy },
  tabText: { color: colors.navy, fontWeight: '700', fontSize: 14 },
  tabTextOn: { color: '#fff' },
  swap: { flexDirection: 'row', alignItems: 'center', gap: 6, alignSelf: 'center', minHeight: 40, paddingHorizontal: 12 },
  swapText: { color: colors.navy, fontWeight: '700' },
  input: { minHeight: 110, borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 12, fontSize: 17, color: colors.navy, textAlignVertical: 'top', marginTop: 6 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  link: { color: colors.navy, fontWeight: '700', textDecorationLine: 'underline' },
  primary: { marginTop: 6, minHeight: 50, borderRadius: 12, backgroundColor: colors.red, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  primaryText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  secondary: { marginTop: 4, minHeight: 44, borderRadius: 12, borderWidth: 1, borderColor: colors.border, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  secondaryText: { color: colors.navy, fontWeight: '700' },
  resultCard: { backgroundColor: '#EEF3FB', borderColor: '#C9D6E8' },
  resultLabel: { fontSize: 12, fontWeight: '700', color: colors.muted, textTransform: 'uppercase', letterSpacing: 0.6 },
  result: { fontSize: 22, lineHeight: 30, fontWeight: '700', color: colors.navy },
  actions: { flexDirection: 'row', gap: 8, marginTop: 8 },
  action: { flex: 1, minHeight: 56, borderRadius: 12, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', gap: 2 },
  actionText: { fontSize: 12, fontWeight: '700', color: colors.navy },
  list: { backgroundColor: colors.card, borderRadius: 16, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  item: { padding: 14, gap: 2 },
  itemBorder: { borderTopWidth: 1, borderTopColor: colors.border },
  itemTop: { fontSize: 15, fontWeight: '700', color: colors.navy },
});
