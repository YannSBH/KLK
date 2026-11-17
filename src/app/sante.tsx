import Ionicons from '@expo/vector-icons/Ionicons';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { GuideList } from '../components/GuideList';
import { Notice, Screen, SectionTitle, styles } from '../components/ui';
import { healthTips, hospitals } from '../data/guides';
import { mapsQuery } from '../data/shops';
import { useI18n } from '../i18n';
import { colors } from '../theme';

const fmt = (p: string) => `${p.slice(0, 3)}-${p.slice(3, 6)}-${p.slice(6)}`;

export default function Sante() {
  const { t, L } = useI18n();
  return (
    <Screen title={t('gHealth')} subtitle={t('gHealthSub')}>
      <Pressable style={s.sos} accessibilityRole="button" onPress={() => Linking.openURL('tel:911')}>
        <Ionicons name="call" size={24} color="#fff" />
        <Text style={s.sosText}>911</Text>
      </Pressable>
      <Notice>{t('healthNotice')}</Notice>

      <SectionTitle>{t('healthHospitals')}</SectionTitle>
      {hospitals.map((h) => (
        <View key={h.id} style={s.card}>
          <Text style={styles.h}>{h.name}</Text>
          <Text style={s.zone}>{h.zone}</Text>
          <Text style={styles.muted}>{L(h.note)}</Text>
          <View style={s.actions}>
            {h.phone ? (
              <Pressable style={[s.btn, s.btnCall]} accessibilityRole="button" onPress={() => Linking.openURL(`tel:${h.phone}`)}>
                <Ionicons name="call-outline" size={16} color="#fff" />
                <Text style={[s.btnText, { color: '#fff' }]}>{fmt(h.phone)}</Text>
              </Pressable>
            ) : null}
            <Pressable style={s.btn} accessibilityRole="link" onPress={() => Linking.openURL(mapsQuery(h.query))}>
              <Ionicons name="navigate-outline" size={16} color={colors.navy} />
              <Text style={s.btnText}>{t('goMaps')}</Text>
            </Pressable>
          </View>
        </View>
      ))}

      <SectionTitle>{t('healthTipsTitle')}</SectionTitle>
      <GuideList items={healthTips} color="#B3261E" bg="#FCE8E6" />
    </Screen>
  );
}

const s = StyleSheet.create({
  sos: { minHeight: 60, borderRadius: 16, backgroundColor: colors.red, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 },
  sosText: { color: '#fff', fontSize: 24, fontWeight: '900' },
  card: { gap: 4, padding: 14, backgroundColor: colors.card, borderRadius: 16, borderWidth: 1, borderColor: colors.border },
  zone: { fontSize: 12, fontWeight: '700', color: colors.red, textTransform: 'uppercase', letterSpacing: 0.5 },
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 6 },
  btn: { flexGrow: 1, minHeight: 44, borderRadius: 12, borderWidth: 1, borderColor: colors.border, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, paddingHorizontal: 12 },
  btnCall: { backgroundColor: colors.navy, borderColor: colors.navy },
  btnText: { fontWeight: '700', color: colors.navy },
});
