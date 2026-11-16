import Ionicons from '@expo/vector-icons/Ionicons';
import { Href, router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Converter } from '../components/Converter';
import { phraseGroups, practical, routes, scams, transports } from '../data/content';
import { beaches } from '../data/beaches';
import { activityGroups, cities, countryFacts } from '../data/discover';
import { priceItems } from '../data/extras';
import type { UiKey } from '../data/ui';
import { Lang, LANG_NAMES, LANGS, T, useI18n } from '../i18n';
import { colors, radius } from '../theme';

type IconName = keyof typeof Ionicons.glyphMap;

const TILES: { title: UiKey; sub: UiKey; icon: IconName; href: Href; urgent?: boolean }[] = [
  { title: 'tTaxis', sub: 'tTaxisSub', icon: 'car-outline', href: '/taxis' },
  { title: 'tTransports', sub: 'tTransportsSub', icon: 'bus-outline', href: '/transports' },
  { title: 'tPhrases', sub: 'tPhrasesSub', icon: 'chatbubble-ellipses-outline', href: '/phrases' },
  { title: 'tScams', sub: 'tScamsSub', icon: 'warning-outline', href: '/arnaques' },
  { title: 'tInfo', sub: 'tInfoSub', icon: 'information-circle-outline', href: '/infos' },
  { title: 'tTranslator', sub: 'tTranslatorSub', icon: 'language-outline', href: '/traducteur' },
  { title: 'tEmergency', sub: 'tEmergencySub', icon: 'call-outline', href: '/urgences', urgent: true },
];

const DISCOVER: { title: UiKey; sub: UiKey; icon: IconName; href: Href; color: string }[] = [
  { title: 'dActivities', sub: 'dActivitiesSub', icon: 'boat-outline', href: '/activites', color: '#E7EEF9' },
  { title: 'dBeaches', sub: 'dBeachesSub', icon: 'sunny-outline', href: '/plages', color: '#E3F4F4' },
  { title: 'dPrices', sub: 'dPricesSub', icon: 'pricetags-outline', href: '/prix', color: '#EAF6EC' },
  { title: 'dFood', sub: 'dFoodSub', icon: 'restaurant-outline', href: '/adresses', color: '#FBE9EC' },
  { title: 'dEsim', sub: 'dEsimSub', icon: 'cellular-outline', href: '/esim', color: '#EFEAFB' },
  { title: 'dMap', sub: 'dMapSub', icon: 'map-outline', href: '/carte', color: '#E3F4F4' },
  { title: 'dCountry', sub: 'dCountrySub', icon: 'earth-outline', href: '/pays', color: '#FFF4E0' },
];

type Result = { title: string; sub: string; href: Href; text: string };

const norm = (t: string) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const all = (v: T | string) => (typeof v === 'string' ? v : `${v.fr} ${v.en} ${v.es}`);

// Index de recherche : affiché dans la langue choisie, mais on cherche dans les trois langues.
function buildIndex(lang: Lang, t: (k: UiKey) => string): Result[] {
  const L = (v: T | string) => (typeof v === 'string' ? v : v[lang]);
  return [
    ...routes.map((r) => ({
      title: `${r.from} → ${r.to}`,
      sub: `${t('tTaxis')} · ${L(r.transfer)}`,
      href: '/taxis' as Href,
      text: norm([r.from, r.to, ...r.keywords, 'taxi transfert transfer traslado'].join(' ')),
    })),
    ...transports.map((x) => ({ title: L(x.name), sub: L(x.price), href: '/transports' as Href, text: norm(`${all(x.name)} ${all(x.tip)} transport`) })),
    ...phraseGroups.flatMap((g) =>
      g.phrases.map((p) => ({ title: p.es, sub: L(p.m), href: '/phrases' as Href, text: norm(`${p.es} ${all(p.m)} phrase frase ${all(g.title)}`) })),
    ),
    ...scams.map((x) => ({ title: L(x.title), sub: t('tScams'), href: '/arnaques' as Href, text: norm(`${all(x.title)} ${all(x.text)} arnaque scam estafa`) })),
    ...practical.map((x) => ({ title: L(x.title), sub: t('tInfo'), href: '/infos' as Href, text: norm(`${all(x.title)} ${all(x.text)}`) })),
    { title: t('tTranslator'), sub: t('trSub'), href: '/traducteur', text: norm('traducteur traduire traduction translate translator traductor anglais espagnol francais english spanish idioma langue') },
    { title: t('tEmergency'), sub: '911 · POLITUR', href: '/urgences', text: norm('urgence emergency emergencia police policia ambulance ambulancia politur 911 aide help ayuda') },
    ...activityGroups.flatMap((g) =>
      g.items.map((a) => ({ title: L(a.name), sub: `${g.region} · ${L(a.price)}`, href: '/activites' as Href, text: norm(`${all(a.name)} ${g.region} ${all(a.tip)} activite activity actividad excursion`) })),
    ),
    ...cities.flatMap((c) =>
      c.places.map((p) => ({ title: p.name, sub: `${c.name} · ${L(p.cuisine)}`, href: '/adresses' as Href, text: norm(`${p.name} ${c.name} ${all(p.cuisine)} ${p.kind} restaurant resto restaurante manger eat comer`) })),
    ),
    ...beaches.map((b) => ({ title: b.name, sub: `${t('dBeaches')} · ${L(b.region)}`, href: '/plages' as Href, text: norm(`${b.name} ${all(b.region)} ${b.tags.map(all).join(' ')} plage playa beach`) })),
    ...priceItems.map((x) => ({ title: L(x.name), sub: L(x.local), href: '/prix' as Href, text: norm(`${all(x.name)} prix price precio combien cuanto cuesta`) })),
    { title: t('dEsim'), sub: t('dEsimSub'), href: '/esim', text: norm('esim e-sim sim internet data donnees datos claro altice airalo holafly nomad saily wifi telephone phone') },
    { title: t('dMap'), sub: t('dMapSub'), href: '/carte', text: norm('carte map mapa aeroport airport aeropuerto distributeur atm cajero pharmacie pharmacy farmacia essence gas gasolinera') },
    ...countryFacts.map((f) => ({ title: L(f.title), sub: t('dCountry'), href: '/pays' as Href, text: norm(`${all(f.title)} ${all(f.text)} pays country pais culture`) })),
  ];
}

export default function Home() {
  const insets = useSafeAreaInsets();
  const { t, lang, setLang } = useI18n();
  const [q, setQ] = useState('');

  const index = useMemo(() => buildIndex(lang, t), [lang, t]);
  const results = useMemo(() => {
    const words = norm(q).split(/\s+/).filter((w) => w.length > 1);
    if (!words.length) return [];
    return index.filter((item) => words.every((w) => item.text.includes(w))).slice(0, 8);
  }, [q, index]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg }} contentContainerStyle={{ paddingBottom: insets.bottom + 32 }} keyboardShouldPersistTaps="handled">
      <View style={[s.hero, { paddingTop: insets.top + 16 }]}>
        <View style={s.inner}>
          <View style={s.top}>
            <View style={s.brand}>
              <Image source={require('../../assets/icon.png')} style={s.logoImg} accessibilityIgnoresInvertColors />
              <View style={{ flexShrink: 1 }}>
                <Text style={s.logo}>KLK</Text>
                <Text style={s.tagline}>{t('tagline')}</Text>
              </View>
            </View>
            <View style={s.langs} accessibilityRole="radiogroup" accessibilityLabel={t('language')}>
              {LANGS.map((l) => (
                <Pressable
                  key={l}
                  onPress={() => setLang(l)}
                  accessibilityRole="radio"
                  accessibilityLabel={LANG_NAMES[l]}
                  accessibilityState={{ checked: l === lang }}
                  hitSlop={4}
                  style={[s.lang, l === lang && s.langOn]}>
                  <Text style={[s.langText, l === lang && s.langTextOn]}>{l.toUpperCase()}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={s.search}>
            <Ionicons name="search" size={20} color={colors.muted} />
            <TextInput
              value={q}
              onChangeText={setQ}
              placeholder={t('searchPh')}
              placeholderTextColor={colors.muted}
              accessibilityLabel={t('search')}
              style={s.searchInput}
              returnKeyType="search"
            />
            {q ? (
              <Pressable onPress={() => setQ('')} accessibilityRole="button" accessibilityLabel={t('clear')} hitSlop={10}>
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
                <Text style={[s.resultSub, { padding: 14 }]}>{t('noResult', { q: q.trim() })}</Text>
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
        <Text style={s.section}>{t('essentials')}</Text>
        <View style={s.grid}>
          {TILES.map((x) => (
            <Pressable
              key={x.title}
              onPress={() => router.push(x.href)}
              accessibilityRole="button"
              style={({ pressed }) => [s.tile, x.urgent && s.tileUrgent, pressed && { opacity: 0.8 }]}>
              <Ionicons name={x.icon} size={26} color={x.urgent ? '#fff' : colors.navy} />
              <View>
                <Text style={[s.tileTitle, x.urgent && { color: '#fff' }]}>{t(x.title)}</Text>
                <Text style={[s.tileSub, x.urgent && { color: '#fff' }]}>{t(x.sub)}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        <Text style={s.section}>{t('discover')}</Text>
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
                <Text style={s.tileTitle}>{t(d.title)}</Text>
                <Text style={s.tileSub}>{t(d.sub)}</Text>
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
  langs: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 999, padding: 3, gap: 2 },
  lang: { minWidth: 36, minHeight: 32, borderRadius: 999, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6 },
  langOn: { backgroundColor: '#fff' },
  langText: { color: '#fff', fontWeight: '800', fontSize: 12 },
  langTextOn: { color: colors.navy },
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
