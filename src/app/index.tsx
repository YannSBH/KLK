import Ionicons from '@expo/vector-icons/Ionicons';
import { Href, router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Converter } from '../components/Converter';
import { phraseGroups, practical, routes, scams, transports } from '../data/content';
import { colors, radius } from '../theme';

type IconName = keyof typeof Ionicons.glyphMap;

const TILES: { title: string; sub: string; icon: IconName; href: Href; urgent?: boolean }[] = [
  { title: 'Prix des taxis', sub: 'Ne te fais pas avoir', icon: 'car-outline', href: '/taxis' },
  { title: 'Transports', sub: 'Uber, concho, guagua…', icon: 'bus-outline', href: '/transports' },
  { title: 'Phrases', sub: 'Montre au chauffeur', icon: 'chatbubble-ellipses-outline', href: '/phrases' },
  { title: 'Arnaques', sub: 'Les pièges à éviter', icon: 'warning-outline', href: '/arnaques' },
  { title: 'Infos pratiques', sub: 'E-Ticket, prises, eau', icon: 'information-circle-outline', href: '/infos' },
  { title: 'Urgences', sub: '911 · police touristique', icon: 'call-outline', href: '/urgences', urgent: true },
];

type Result = { title: string; sub: string; href: Href };

const norm = (t: string) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

const INDEX: (Result & { text: string })[] = [
  ...routes.map((r) => ({
    title: `${r.from} → ${r.to}`,
    sub: `Taxi / transfert : ${r.transfer}`,
    href: '/taxis' as Href,
    text: norm([r.from, r.to, ...r.keywords, 'taxi transfert'].join(' ')),
  })),
  ...transports.map((t) => ({ title: t.name, sub: t.price, href: '/transports' as Href, text: norm(`${t.name} ${t.tip} transport`) })),
  ...phraseGroups.flatMap((g) =>
    g.phrases.map((p) => ({ title: p.es, sub: p.fr, href: '/phrases' as Href, text: norm(`${p.es} ${p.fr} phrase ${g.title}`) })),
  ),
  ...scams.map((t) => ({ title: t.title, sub: 'Arnaques', href: '/arnaques' as Href, text: norm(`${t.title} ${t.text} arnaque`) })),
  ...practical.map((t) => ({ title: t.title, sub: 'Infos pratiques', href: '/infos' as Href, text: norm(`${t.title} ${t.text}`) })),
  { title: 'Urgences', sub: '911 · POLITUR', href: '/urgences', text: norm('urgence police ambulance politur cestur 911 aide') },
];

export default function Home() {
  const insets = useSafeAreaInsets();
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    const words = norm(q).split(/\s+/).filter((w) => w.length > 1);
    if (!words.length) return [];
    return INDEX.filter((item) => words.every((w) => item.text.includes(w))).slice(0, 8);
  }, [q]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.bg }}
      contentContainerStyle={[s.page, { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 32 }]}
      keyboardShouldPersistTaps="handled">
      <View style={s.top}>
        <View>
          <Text style={s.logo}>
            KLK<Text style={{ color: colors.red }}>.</Text>
          </Text>
          <Text style={s.tagline}>Ton guide anti-galère en Rép. Dom.</Text>
        </View>
        <View style={s.badge}>
          <Ionicons name="checkmark" size={14} color={colors.greenText} />
          <Text style={s.badgeText}>Hors ligne OK</Text>
        </View>
      </View>

      <View style={s.search}>
        <Ionicons name="search" size={20} color={colors.muted} />
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Où vas-tu ? Ex. Las Terrenas"
          placeholderTextColor={colors.muted}
          accessibilityLabel="Rechercher"
          style={s.searchInput}
          returnKeyType="search"
        />
        {q ? (
          <Pressable onPress={() => setQ('')} accessibilityRole="button" accessibilityLabel="Effacer" hitSlop={10}>
            <Ionicons name="close-circle" size={20} color={colors.muted} />
          </Pressable>
        ) : null}
      </View>

      {q.trim().length > 1 ? (
        <View style={s.results}>
          {results.length ? (
            results.map((r, i) => (
              <Pressable key={i} onPress={() => router.push(r.href)} style={[s.result, i > 0 && s.resultBorder]} accessibilityRole="button">
                <Text style={s.resultTitle}>{r.title}</Text>
                <Text style={s.resultSub} numberOfLines={2}>
                  {r.sub}
                </Text>
              </Pressable>
            ))
          ) : (
            <Text style={[s.resultSub, { padding: 14 }]}>Rien trouvé pour « {q.trim()} ».</Text>
          )}
        </View>
      ) : null}

      <Converter />

      <Text style={s.section}>L’essentiel</Text>
      <View style={s.grid}>
        {TILES.map((t) => (
          <Pressable
            key={t.title}
            onPress={() => router.push(t.href)}
            accessibilityRole="button"
            style={({ pressed }) => [s.tile, t.urgent && s.tileUrgent, pressed && { opacity: 0.8 }]}>
            <Ionicons name={t.icon} size={26} color={t.urgent ? '#fff' : colors.navy} />
            <View>
              <Text style={[s.tileTitle, t.urgent && { color: '#fff' }]}>{t.title}</Text>
              <Text style={[s.tileSub, t.urgent && { color: '#fff' }]}>{t.sub}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { paddingHorizontal: 20, gap: 16, maxWidth: 560, width: '100%', alignSelf: 'center' },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontSize: 36, fontWeight: '900', color: colors.navy, letterSpacing: -0.5 },
  tagline: { fontSize: 13, color: colors.muted },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: colors.greenBg, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 },
  badgeText: { color: colors.greenText, fontSize: 12, fontWeight: '600' },
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 14, height: 52, paddingHorizontal: 14 },
  searchInput: { flex: 1, fontSize: 16, color: colors.navy, minWidth: 0, height: '100%' },
  results: { backgroundColor: colors.card, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, marginTop: -6 },
  result: { padding: 14, gap: 2 },
  resultBorder: { borderTopWidth: 1, borderTopColor: colors.border },
  resultTitle: { fontSize: 15, fontWeight: '600', color: colors.navy },
  resultSub: { fontSize: 13, color: colors.muted },
  section: { fontSize: 15, fontWeight: '700', color: colors.navy, marginTop: 4 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  tile: { width: '47.5%', flexGrow: 1, height: 96, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, padding: 14, justifyContent: 'space-between' },
  tileUrgent: { backgroundColor: colors.red, borderColor: colors.red },
  tileTitle: { fontSize: 16, fontWeight: '700', color: colors.navy },
  tileSub: { fontSize: 12, color: colors.muted, marginTop: 2 },
});
