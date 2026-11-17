import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { Notice, Screen, SectionTitle } from '../components/ui';
import { tipRows, tipsNote } from '../data/guides';
import { useI18n } from '../i18n';
import { colors } from '../theme';

type IconName = keyof typeof Ionicons.glyphMap;

export default function Pourboires() {
  const { t, L } = useI18n();
  return (
    <Screen title={t('gTips')} subtitle={t('gTipsSub')}>
      <Notice>{L(tipsNote)}</Notice>
      <SectionTitle>{t('tipsHow')}</SectionTitle>
      <View style={s.list}>
        {tipRows.map((r, i) => (
          <View key={i} style={[s.row, i > 0 && s.border]}>
            <View style={s.icon}>
              <Ionicons name={r.icon as IconName} size={20} color="#8A4B00" />
            </View>
            <View style={{ flex: 1, gap: 2, minWidth: 0 }}>
              <Text style={s.who}>{L(r.who)}</Text>
              <Text style={s.amount}>{L(r.amount)}</Text>
              {r.note ? <Text style={s.note}>{L(r.note)}</Text> : null}
            </View>
          </View>
        ))}
      </View>
    </Screen>
  );
}

const s = StyleSheet.create({
  list: { backgroundColor: colors.card, borderRadius: 16, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  row: { flexDirection: 'row', gap: 12, padding: 14 },
  border: { borderTopWidth: 1, borderTopColor: colors.border },
  icon: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#FFF1DC', alignItems: 'center', justifyContent: 'center' },
  who: { fontSize: 15, fontWeight: '700', color: colors.navy },
  amount: { fontSize: 15, fontWeight: '700', color: colors.red },
  note: { fontSize: 13, color: colors.muted },
});
