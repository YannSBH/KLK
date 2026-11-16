import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Card, Notice, Screen, SectionTitle, styles } from '../components/ui';
import { PRICES_CHECKED, routeGroups } from '../data/content';
import { useI18n } from '../i18n';
import { colors } from '../theme';

export default function Taxis() {
  const { t, L } = useI18n();
  return (
    <Screen title={t('tTaxis')} subtitle={t('taxisSub', { d: L(PRICES_CHECKED) })}>
      <Notice>{t('taxisNotice')}</Notice>

      {routeGroups.map((g) => (
        <View key={g.id} style={{ gap: 10 }}>
          <SectionTitle>{L(g.title)}</SectionTitle>
          {g.routes.map((r) => (
            <Card key={r.id}>
              <Text style={styles.h}>
                {r.from} → {r.to}
              </Text>
              {r.duration ? <Text style={styles.muted}>{t('duration', { d: r.duration })}</Text> : null}
              <View style={s.line}>
                <Ionicons name="car-outline" size={18} color={colors.navy} />
                <Text style={[styles.p, s.flex, s.price]}>{L(r.transfer)}</Text>
              </View>
              {r.bus ? (
                <View style={s.line}>
                  <Ionicons name="bus-outline" size={18} color={colors.navy} />
                  <Text style={[styles.p, s.flex]}>{L(r.bus)}</Text>
                </View>
              ) : null}
              {r.note ? <Text style={styles.muted}>{L(r.note)}</Text> : null}
              <Pressable
                style={s.button}
                accessibilityRole="button"
                onPress={() =>
                  router.push({
                    pathname: '/chauffeur',
                    params: { es: `¿Cuánto cuesta hasta ${r.driverTo}?`, m: `${r.from} → ${r.to}` },
                  })
                }>
                <Ionicons name="expand-outline" size={16} color="#fff" />
                <Text style={s.buttonText}>{t('askDriver')}</Text>
              </Pressable>
            </Card>
          ))}
        </View>
      ))}
    </Screen>
  );
}

const s = StyleSheet.create({
  line: { flexDirection: 'row', gap: 8, alignItems: 'flex-start', marginTop: 4 },
  flex: { flex: 1 },
  price: { fontWeight: '600' },
  button: { marginTop: 8, minHeight: 44, borderRadius: 12, backgroundColor: colors.navy, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 15 },
});
