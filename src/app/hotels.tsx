import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { cardStyle, PhotoBox } from '../components/PhotoBox';
import { Notice, Screen, SectionTitle, styles } from '../components/ui';
import { Audience, hotels, HOTELS_CHECKED, hotelUrl, tiers, zoneNames, zonePhotos } from '../data/hotels';
import type { UiKey } from '../data/ui';
import { useI18n } from '../i18n';
import { colors } from '../theme';

const FILTERS: { id: Audience | 'all'; label: UiKey }[] = [
  { id: 'all', label: 'hAll' },
  { id: 'family', label: 'hFamily' },
  { id: 'adults', label: 'hAdults' },
];

export default function Hotels() {
  const { t, L } = useI18n();
  const [filter, setFilter] = useState<Audience | 'all'>('all');
  const list = hotels.filter((h) => filter === 'all' || h.audience === filter);

  return (
    <Screen title={t('dHotels')} subtitle={t('hotelsSub', { d: L(HOTELS_CHECKED) })}>
      <Notice>{t('hotelsNotice')}</Notice>

      <View style={s.chips}>
        {FILTERS.map((f) => (
          <Pressable
            key={f.id}
            onPress={() => setFilter(f.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: filter === f.id }}
            style={[s.chip, filter === f.id && s.chipOn]}>
            <Text style={[s.chipText, filter === f.id && s.chipTextOn]}>{t(f.label)}</Text>
          </Pressable>
        ))}
      </View>

      {tiers.map((tier) => {
        const items = list.filter((h) => h.from >= tier.min && h.from <= tier.max);
        if (!items.length) return null;
        return (
          <View key={tier.id} style={{ gap: 12 }}>
            <SectionTitle>{L(tier.label)}</SectionTitle>
            {items.map((h) => (
              <View key={h.id} style={cardStyle.card}>
                <PhotoBox photo={h.photo ?? zonePhotos[h.zone]} label={h.name} caption={h.photo ? undefined : t('zonePhoto')} />
                <View style={cardStyle.body}>
                  <View style={s.head}>
                    <Text style={[styles.h, { flex: 1 }]}>{h.name}</Text>
                    <Text style={s.price}>{t('fromPrice', { n: h.from })}</Text>
                  </View>
                  <View style={s.meta}>
                    <Ionicons name="location-outline" size={14} color={colors.muted} />
                    <Text style={styles.muted}>{L(zoneNames[h.zone])}</Text>
                    {h.audience ? (
                      <View style={[s.tag, h.audience === 'adults' ? s.tagAdults : s.tagFamily]}>
                        <Text style={[s.tagText, { color: h.audience === 'adults' ? '#6B2A86' : colors.greenText }]}>
                          {t(h.audience === 'adults' ? 'hAdults' : 'hFamily')}
                        </Text>
                      </View>
                    ) : null}
                  </View>
                  <Pressable style={s.button} accessibilityRole="link" onPress={() => Linking.openURL(hotelUrl(h))}>
                    <Ionicons name="images-outline" size={16} color={colors.navy} />
                    <Text style={s.buttonText}>{t('seePrices')}</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        );
      })}
    </Screen>
  );
}

const s = StyleSheet.create({
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { paddingHorizontal: 14, minHeight: 38, justifyContent: 'center', borderRadius: 999, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card },
  chipOn: { backgroundColor: colors.navy, borderColor: colors.navy },
  chipText: { fontWeight: '700', color: colors.navy },
  chipTextOn: { color: '#fff' },
  head: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  price: { fontSize: 15, fontWeight: '800', color: colors.red, marginTop: 2 },
  meta: { flexDirection: 'row', alignItems: 'center', gap: 6, flexWrap: 'wrap' },
  tag: { borderRadius: 999, paddingHorizontal: 8, paddingVertical: 2, marginLeft: 4 },
  tagFamily: { backgroundColor: colors.greenBg },
  tagAdults: { backgroundColor: '#F1E6F7' },
  tagText: { fontSize: 12, fontWeight: '700' },
  button: { marginTop: 6, minHeight: 44, borderRadius: 12, borderWidth: 1, borderColor: colors.border, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  buttonText: { color: colors.navy, fontWeight: '700' },
});
