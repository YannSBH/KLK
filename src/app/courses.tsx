import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Card, Screen, SectionTitle, styles } from '../components/ui';
import { nearbyUrl } from '../data/extras';
import { mapsQuery, ShopKind, shopTips, shopZones } from '../data/shops';
import type { UiKey } from '../data/ui';
import { useI18n } from '../i18n';
import { colors } from '../theme';

type IconName = keyof typeof Ionicons.glyphMap;

const KINDS: { id: ShopKind; label: UiKey; icon: IconName; color: string; bg: string }[] = [
  { id: 'super', label: 'kSuper', icon: 'cart', color: '#1E5B34', bg: '#E6F2EA' },
  { id: 'mall', label: 'kMall', icon: 'bag-handle', color: '#0B2E5C', bg: '#E7EEF9' },
  { id: 'market', label: 'kMarket', icon: 'basket', color: '#8A4B00', bg: '#FFF1DC' },
];

export default function Courses() {
  const { t, L } = useI18n();
  const [zone, setZone] = useState(shopZones[0].id);
  const current = shopZones.find((z) => z.id === zone)!;

  return (
    <Screen title={t('dShops')} subtitle={t('shopsSub')}>
      <View style={s.quick}>
        <Pressable style={[s.quickBtn, { backgroundColor: '#1E8A4C' }]} accessibilityRole="link" onPress={() => Linking.openURL(nearbyUrl('supermercado'))}>
          <Ionicons name="cart" size={22} color="#fff" />
          <Text style={s.quickText}>{t('nearSuper')}</Text>
        </Pressable>
        <Pressable style={[s.quickBtn, { backgroundColor: colors.red }]} accessibilityRole="link" onPress={() => Linking.openURL(nearbyUrl('farmacia'))}>
          <Ionicons name="medkit" size={22} color="#fff" />
          <Text style={s.quickText}>{t('nearPharmacy')}</Text>
        </Pressable>
      </View>

      <View style={s.chips}>
        {shopZones.map((z) => (
          <Pressable
            key={z.id}
            onPress={() => setZone(z.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: zone === z.id }}
            style={[s.chip, zone === z.id && s.chipOn]}>
            <Text style={[s.chipText, zone === z.id && s.chipTextOn]}>{z.name}</Text>
          </Pressable>
        ))}
      </View>

      {KINDS.map((k) => {
        const items = current.shops.filter((x) => x.kind === k.id);
        if (!items.length) return null;
        return (
          <View key={k.id} style={{ gap: 10 }}>
            <SectionTitle>{t(k.label)}</SectionTitle>
            {items.map((x) => (
              <Pressable
                key={x.id}
                onPress={() => Linking.openURL(mapsQuery(x.query))}
                accessibilityRole="link"
                accessibilityHint={t('goMaps')}
                style={({ pressed }) => [s.row, pressed && { opacity: 0.85 }]}>
                <View style={[s.badge, { backgroundColor: k.bg }]}>
                  <Ionicons name={k.icon} size={24} color={k.color} />
                </View>
                <View style={{ flex: 1, gap: 2 }}>
                  <Text style={styles.h}>{x.name}</Text>
                  <Text style={styles.muted}>{L(x.note)}</Text>
                  <View style={s.go}>
                    <Ionicons name="navigate" size={14} color={colors.red} />
                    <Text style={s.goText}>{t('goMaps')}</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        );
      })}

      <SectionTitle>{t('goodToKnow')}</SectionTitle>
      <Card>
        {shopTips.map((tip, i) => (
          <View key={i} style={s.tip}>
            <View style={s.dot} />
            <Text style={[styles.p, { flex: 1 }]}>{L(tip)}</Text>
          </View>
        ))}
      </Card>
    </Screen>
  );
}

const s = StyleSheet.create({
  quick: { flexDirection: 'row', gap: 10 },
  quickBtn: { flex: 1, minHeight: 64, borderRadius: 16, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 10 },
  quickText: { flex: 1, color: '#fff', fontWeight: '800', fontSize: 14 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { paddingHorizontal: 14, minHeight: 38, justifyContent: 'center', borderRadius: 999, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card },
  chipOn: { backgroundColor: colors.navy, borderColor: colors.navy },
  chipText: { fontWeight: '700', color: colors.navy },
  chipTextOn: { color: '#fff' },
  row: { flexDirection: 'row', gap: 12, padding: 14, backgroundColor: colors.card, borderRadius: 16, borderWidth: 1, borderColor: colors.border },
  badge: { width: 48, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  go: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  goText: { color: colors.red, fontWeight: '700', fontSize: 13 },
  tip: { flexDirection: 'row', gap: 10, alignItems: 'flex-start', paddingVertical: 4 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.red, marginTop: 7 },
});
