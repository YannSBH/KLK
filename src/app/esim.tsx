import Ionicons from '@expo/vector-icons/Ionicons';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Card, Notice, Screen, SectionTitle, styles } from '../components/ui';
import { ESIM_CHECKED, esimProviders, esimTips, localSimTips } from '../data/extras';
import { useI18n } from '../i18n';
import { colors } from '../theme';

export default function Esim() {
  const { t, L, lang } = useI18n();
  const money = (n: number) => `${n.toLocaleString(lang === 'en' ? 'en-US' : lang === 'es' ? 'es-DO' : 'fr-FR', { maximumFractionDigits: 2 })} $`;

  return (
    <Screen title={t('dEsim')} subtitle={t('esimSub', { d: L(ESIM_CHECKED) })}>
      <Notice>{t('esimIntro')}</Notice>

      <SectionTitle>{t('esimPlans')}</SectionTitle>
      {esimProviders.map((p) => (
        <Card key={p.id}>
          <View style={s.head}>
            <Text style={[styles.h, { flex: 1 }]}>{p.name}</Text>
            {p.network ? <Text style={styles.muted}>{p.network}</Text> : null}
          </View>
          <View style={s.plans}>
            {p.plans.map((pl, i) => (
              <View key={i} style={s.plan}>
                <Text style={s.data}>{pl.data === '∞' ? t('unlimited') : pl.data}</Text>
                <Text style={s.days}>{t('days', { n: pl.days })}</Text>
                <Text style={s.price}>{money(pl.usd)}</Text>
              </View>
            ))}
          </View>
          {p.note ? <Text style={styles.muted}>{L(p.note)}</Text> : null}
          <Pressable style={s.button} accessibilityRole="link" onPress={() => Linking.openURL(p.url)}>
            <Text style={s.buttonText}>{t('seeOffer')}</Text>
            <Ionicons name="open-outline" size={16} color={colors.navy} />
          </Pressable>
        </Card>
      ))}

      <SectionTitle>{t('esimLocal')}</SectionTitle>
      <Card>
        {localSimTips.map((x, i) => (
          <View key={i} style={s.tip}>
            <View style={s.dot} />
            <Text style={[styles.p, { flex: 1 }]}>{L(x)}</Text>
          </View>
        ))}
      </Card>

      <SectionTitle>{t('esimTips')}</SectionTitle>
      <Card>
        {esimTips.map((x, i) => (
          <View key={i} style={s.tip}>
            <View style={s.dot} />
            <Text style={[styles.p, { flex: 1 }]}>{L(x)}</Text>
          </View>
        ))}
      </Card>
    </Screen>
  );
}

const s = StyleSheet.create({
  head: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  plans: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 4 },
  plan: { flexGrow: 1, minWidth: 90, backgroundColor: colors.bg, borderRadius: 12, padding: 10, alignItems: 'center' },
  data: { fontSize: 16, fontWeight: '800', color: colors.navy },
  days: { fontSize: 12, color: colors.muted },
  price: { fontSize: 15, fontWeight: '700', color: colors.red, marginTop: 2 },
  button: { marginTop: 6, minHeight: 44, borderRadius: 12, borderWidth: 1, borderColor: colors.border, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  buttonText: { color: colors.navy, fontWeight: '700' },
  tip: { flexDirection: 'row', gap: 10, alignItems: 'flex-start', paddingVertical: 4 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.red, marginTop: 7 },
});
