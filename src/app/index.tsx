import Ionicons from '@expo/vector-icons/Ionicons';
import { Image as Photo } from 'expo-image';
import { Href, router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Converter } from '../components/Converter';
import { phraseGroups, practical, routes, scams, transports } from '../data/content';
import { beaches } from '../data/beaches';
import { activityGroups, cities, countryFacts } from '../data/discover';
import { priceItems } from '../data/extras';
import { hotels, zoneNames } from '../data/hotels';
import { shopZones } from '../data/shops';
import { dishes, imageSource, Photo as PhotoT, tilePhotos } from '../data/photos';
import type { UiKey } from '../data/ui';
import { Lang, LANG_NAMES, LANGS, T, useI18n } from '../i18n';
import { colors, radius } from '../theme';

type IconName = keyof typeof Ionicons.glyphMap;

const beach = (id: string) => beaches.find((b) => b.id === id)!.photo;

const TILES: { title: UiKey; sub: UiKey; icon: IconName; href: Href; urgent?: boolean; photo?: PhotoT; tint: string }[] = [
  { title: 'tTaxis', sub: 'tTaxisSub', icon: 'car-outline', href: '/taxis', photo: tilePhotos.taxis, tint: '#0E9AA7' },
  { title: 'tTransports', sub: 'tTransportsSub', icon: 'bus-outline', href: '/transports', photo: tilePhotos.transports, tint: '#F29F05' },
  { title: 'tPhrases', sub: 'tPhrasesSub', icon: 'chatbubble-ellipses-outline', href: '/phrases', photo: tilePhotos.phrases, tint: '#E4572E' },
  { title: 'tScams', sub: 'tScamsSub', icon: 'warning-outline', href: '/arnaques', photo: tilePhotos.scams, tint: '#7B4FA0' },
  { title: 'tInfo', sub: 'tInfoSub', icon: 'information-circle-outline', href: '/infos', photo: tilePhotos.info, tint: '#2A9D8F' },
  { title: 'tTranslator', sub: 'tTranslatorSub', icon: 'language-outline', href: '/traducteur', photo: tilePhotos.translator, tint: '#3A86FF' },
  { title: 'tEmergency', sub: 'tEmergencySub', icon: 'call-outline', href: '/urgences', urgent: true, tint: '#C8102E' },
];

const DISCOVER: { title: UiKey; sub: UiKey; icon: IconName; href: Href; color: string; photo: PhotoT }[] = [
  { title: 'dActivities', sub: 'dActivitiesSub', icon: 'boat-outline', href: '/activites', color: '#E7EEF9', photo: tilePhotos.activities },
  { title: 'dBeaches', sub: 'dBeachesSub', icon: 'sunny-outline', href: '/plages', color: '#E3F4F4', photo: beach('rincon') },
  { title: 'dHotels', sub: 'dHotelsSub', icon: 'bed-outline', href: '/hotels', color: '#FFF4E0', photo: hotels.find((h) => h.id === 'hardrock')!.photo! },
  { title: 'dPrices', sub: 'dPricesSub', icon: 'pricetags-outline', href: '/prix', color: '#EAF6EC', photo: priceItems[0].photo! },
  { title: 'dFood', sub: 'dFoodSub', icon: 'restaurant-outline', href: '/adresses', color: '#FBE9EC', photo: dishes.bandera.photo },
  { title: 'dShops', sub: 'dShopsSub', icon: 'cart-outline', href: '/courses', color: '#E6F2EA', photo: priceItems.find((p) => p.id === 'fruit')!.photo! },
  { title: 'dEsim', sub: 'dEsimSub', icon: 'cellular-outline', href: '/esim', color: '#EFEAFB', photo: tilePhotos.esim },
  { title: 'dMap', sub: 'dMapSub', icon: 'map-outline', href: '/carte', color: '#E3F4F4', photo: beach('aguilas') },
  { title: 'dCountry', sub: 'dCountrySub', icon: 'earth-outline', href: '/pays', color: '#FFF4E0', photo: tilePhotos.country },
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
    ...hotels.map((h) => ({ title: h.name, sub: `${L(zoneNames[h.zone])} · ${h.from} $`, href: '/hotels' as Href, text: norm(`${h.name} ${all(zoneNames[h.zone])} hotel hôtel resort all inclusive tout compris todo incluido`) })),
    ...shopZones.flatMap((z) => z.shops.map((x) => ({ title: x.name, sub: `${z.name} · ${t('dShops')}`, href: '/courses' as Href, text: norm(`${x.name} ${z.name} supermarche supermarket supermercado courses groceries compras mall centre commercial centro comercial`) }))),
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
        <Photo source={imageSource(tilePhotos.hero)} style={StyleSheet.absoluteFill} contentFit="cover" cachePolicy="disk" transition={300} accessibilityIgnoresInvertColors />
        <View style={s.heroShade} />
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
          <Text style={s.heroCredit}>© {tilePhotos.hero.credit} · {tilePhotos.hero.license}</Text>
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
              style={({ pressed }) => [s.tile, { backgroundColor: x.tint }, x.urgent && s.tileUrgent, pressed && { opacity: 0.85 }]}>
              {x.urgent ? null : <Ionicons name={x.icon} size={34} color="rgba(255,255,255,0.55)" style={s.tileIcon} />}
              {x.photo ? (
                <Photo source={imageSource(x.photo)} style={StyleSheet.absoluteFill} contentFit="cover" cachePolicy="disk" transition={200} />
              ) : null}
              {x.photo ? <View style={s.tileShade} /> : null}
              <View style={s.tileText}>
                {x.urgent ? <Ionicons name={x.icon} size={22} color="#fff" /> : null}
                <Text style={s.tileTitleOn}>{t(x.title)}</Text>
                <Text style={s.tileSubOn} numberOfLines={1}>{t(x.sub)}</Text>
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
                <Photo source={imageSource(d.photo)} style={StyleSheet.absoluteFill} contentFit="cover" cachePolicy="disk" transition={200} />
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
  hero: { backgroundColor: '#0E9AA7', paddingBottom: 12, borderBottomLeftRadius: 28, borderBottomRightRadius: 28, overflow: 'hidden' },
  heroShade: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(4,38,78,0.42)' },
  heroCredit: { alignSelf: 'flex-end', color: 'rgba(255,255,255,0.8)', fontSize: 10, marginTop: -8 },
  inner: { paddingHorizontal: 20, gap: 16, maxWidth: 560, width: '100%', alignSelf: 'center' },
  body: { paddingTop: 20 },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 12, flexShrink: 1 },
  logoImg: { width: 48, height: 48, borderRadius: 14 },
  logo: { fontSize: 30, fontWeight: '900', color: '#fff', letterSpacing: -0.5, lineHeight: 34, textShadowColor: 'rgba(0,0,0,0.45)', textShadowRadius: 6 },
  tagline: { fontSize: 13, color: '#fff', fontWeight: '600', textShadowColor: 'rgba(0,0,0,0.5)', textShadowRadius: 4 },
  langs: { flexDirection: 'row', backgroundColor: 'rgba(4,38,78,0.55)', borderRadius: 999, padding: 3, gap: 2 },
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
  tile: { width: '47.5%', flexGrow: 1, height: 124, borderRadius: radius.lg, overflow: 'hidden', justifyContent: 'flex-end' },
  tileIcon: { position: 'absolute', top: 14, right: 14 },
  tileShade: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.3)' },
  tileText: { padding: 12, gap: 1 },
  tileTitleOn: { fontSize: 17, fontWeight: '800', color: '#fff', textShadowColor: 'rgba(0,0,0,0.6)', textShadowRadius: 4 },
  tileSubOn: { fontSize: 12, color: '#fff', fontWeight: '600', textShadowColor: 'rgba(0,0,0,0.6)', textShadowRadius: 4 },
  tileUrgent: { width: '100%', height: 84 },
  tileTitle: { fontSize: 16, fontWeight: '700', color: colors.navy },
  tileSub: { fontSize: 12, color: colors.muted, marginTop: 2 },
  discover: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 10, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, minHeight: 76 },
  discoverIcon: { width: 64, height: 64, borderRadius: 16, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
});
