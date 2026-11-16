import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Screen, SectionTitle, styles } from '../components/ui';
import { anecdotes, countryFacts } from '../data/discover';
import { useI18n } from '../i18n';
import { colors } from '../theme';

type IconName = keyof typeof Ionicons.glyphMap;

export default function Pays() {
  const { t, L } = useI18n();
  return (
    <Screen title={t('dCountry')} subtitle={t('countrySub')}>
      {countryFacts.map((f) => (
        <Card key={f.id}>
          <View style={s.row}>
            <View style={s.icon}>
              <Ionicons name={f.icon as IconName} size={22} color={colors.navy} />
            </View>
            <Text style={[styles.h, { flex: 1 }]}>{L(f.title)}</Text>
          </View>
          <Text style={styles.p}>{L(f.text)}</Text>
        </Card>
      ))}

      <SectionTitle>{t('didYouKnow')}</SectionTitle>
      <View style={s.list}>
        {anecdotes.map((a, i) => (
          <View key={a.fr} style={[s.item, i > 0 && s.itemBorder]}>
            <View style={s.dot} />
            <Text style={[styles.p, { flex: 1 }]}>{L(a)}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 2 },
  icon: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#E7EEF9', alignItems: 'center', justifyContent: 'center' },
  list: { backgroundColor: colors.card, borderRadius: 16, borderWidth: 1, borderColor: colors.border },
  item: { flexDirection: 'row', gap: 12, padding: 14, alignItems: 'flex-start' },
  itemBorder: { borderTopWidth: 1, borderTopColor: colors.border },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.red, marginTop: 7 },
});
