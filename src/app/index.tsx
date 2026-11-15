import Ionicons from '@expo/vector-icons/Ionicons';
import { Href, router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Converter } from '../components/Converter';
import { phraseGroups, practical, routes, scams, transports } from '../data/content';
import { activityGroups, cities, countryFacts } from '../data/discover';
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

const DISCOVER: { title: string; sub: string; icon: IconName; href: Href; color: string }[] = [
  { title: 'Activités', sub: 'Buggy, Saona, baleines… et leurs prix', icon: 'boat-outline', href: '/activites', color: '#E7EEF9' },
  { title: 'Bonnes adresses', sub: 'Restos locaux, français et top notés', icon: 'restaurant-outline', href: '/adresses', color: '#FBE9EC' },
  { title: 'Le pays', sub: 'Cacao, café, cigares, or, larimar…', icon: 'earth-outline', href: '/pays', color: '#FFF4E0' },
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
  ...activityGroups.flatMap((g) =>
    g.items.map((a) => ({ title: a.name, sub: `${g.region} · ${a.price}`, href: '/activites' as Href, text: norm(`${a.name} ${g.region} ${a.tip} activite excursion`) })),
  ),
  ...cities.flatMap((c) =>
    c.places.map((p) => ({ title: p.name, sub: `${c.name} · ${p.cuisine}`, href: '/adresses' as Href, text: norm(`${p.name} ${c.name} ${p.cuisine} ${p.kind} restaurant resto manger`) })),
  ),
  ...countryFacts.map((f) => ({ title: f.title, sub: 'Le pays', href: '/pays' as Href, text: norm(`${f.title} ${f.text} pays culture`) })),
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
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg }} contentContainerStyle={{ paddingBottom: insets.bottom + 32 }} keyboardShouldPersistTaps="handled">
      <View style={[s.hero, { paddingTop: insets.top + 16 }]}>
        <View style={s.inner}>
          <View style={s.top}>
            <View style={s.brand}>
              <Image source={require('../../assets/icon.png')} style={s.logoImg} accessibilityIgnoresInvertColors />
              <View>
                <Text style={s.logo}>KLK</Text>
                <Text style={s.tagline}>Ton guide anti-galère en Rép. Dom.</Text>
              </View>
            </View>
            <View style={s.badge}>
              <Ionicons name="cloud-offline-outline" size={14} color="#fff" />
              <Text style={s.badgeText}>Hors ligne</Text>
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
        </View>
      </View>
      <View style={s.stripe}>
        <View style={[s.stripePart, { backgroundColor: '#002D62' }]} />
        <View style={[s.stripePart, { backgroundColor: '#FFFFFF', flex: 0.35 }]} />
        <View style={[s.stripePart, { backgroundColor: '#CE1126' }]} />
      </View>

      <View style={[s.inner, s.body]}>
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

        <Text style={s.section}>Découvrir</Text>
        <View style={{ gap: 12 }}>
          {DISCOVER.map((d) => (
            <Pressable
              key={d.title}
              onPress={() => router.push(d.href)}
              accessibilityRole="button"
              style={({ pressed }) => [s.discover, pressed && { opacity: 0.85 }]}>
              <View style={[s.discoverIcon, { backgroundColor: d.color }]}>
                <Ionicons name={d.icon} size={26} color={colors.navy} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.tileTitle}>{d.title}</Text>
                <Text style={s.tileSub}>{d.sub}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.muted} />
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  hero: { backgroundColor: '#082447', paddingBottom: 20, borderBottomLeftRadius: 28, borderBottomRightRadius: 28 },
  inner: { paddingHorizontal: 20, gap: 16, maxWidth: 560, width: '100%', alignSelf: 'center' },
  body: { paddingTop: 20 },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 12, flexShrink: 1 },
  logoImg: { width: 48, height: 48, borderRadius: 14 },
  logo: { fontSize: 30, fontWeight: '900', color: '#fff', letterSpacing: -0.5, lineHeight: 34 },
  tagline: { fontSize: 13, color: colors.mutedOnNavy },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: 'rgba(255,255,255,0.12)', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: colors.card, borderRadius: 14, height: 52, paddingHorizontal: 14 },
  searchInput: { flex: 1, fontSize: 16, color: colors.navy, minWidth: 0, height: '100%' },
  results: { backgroundColor: colors.card, borderRadius: radius.md, marginTop: -6 },
  result: { padding: 14, gap: 2 },
  resultBorder: { borderTopWidth: 1, borderTopColor: colors.border },
  resultTitle: { fontSize: 15, fontWeight: '600', color: colors.navy },
  resultSub: { fontSize: 13, color: colors.muted },
  stripe: { flexDirection: 'row', height: 4, width: 120, alignSelf: 'center', marginTop: 12, borderRadius: 2, overflow: 'hidden' },
  stripePart: { flex: 1 },
  section: { fontSize: 15, fontWeight: '700', color: colors.navy, marginTop: 4 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  tile: { width: '47.5%', flexGrow: 1, height: 96, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, padding: 14, justifyContent: 'space-between' },
  tileUrgent: { backgroundColor: colors.red, borderColor: colors.red },
  tileTitle: { fontSize: 16, fontWeight: '700', color: colors.navy },
  tileSub: { fontSize: 12, color: colors.muted, marginTop: 2 },
  discover: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 14, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, minHeight: 76 },
  discoverIcon: { width: 48, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
});
