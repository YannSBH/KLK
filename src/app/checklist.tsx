import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Screen } from '../components/ui';
import { checklist } from '../data/guides';
import { useI18n } from '../i18n';
import { colors } from '../theme';

const KEY = 'klk.checklist.v1';

export default function Checklist() {
  const { t, L } = useI18n();
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((v) => v && setDone(JSON.parse(v)))
      .catch(() => {});
  }, []);

  const save = (next: Record<string, boolean>) => {
    setDone(next);
    AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => {});
  };

  const count = checklist.filter((c) => done[c.id]).length;
  const all = count === checklist.length;

  return (
    <Screen title={t('gChecklist')} subtitle={t('gChecklistSub')}>
      <View style={s.progressBox}>
        <Text style={s.progressText}>{all ? t('checkDone') : t('checkProgress', { n: count, t: checklist.length })}</Text>
        <View style={s.bar}>
          <View style={[s.fill, { width: `${(count / checklist.length) * 100}%` }]} />
        </View>
      </View>

      <View style={s.list}>
        {checklist.map((c, i) => {
          const on = !!done[c.id];
          return (
            <Pressable
              key={c.id}
              onPress={() => save({ ...done, [c.id]: !on })}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: on }}
              style={[s.row, i > 0 && s.border]}>
              <Ionicons name={on ? 'checkmark-circle' : 'ellipse-outline'} size={28} color={on ? '#1E8A4C' : colors.muted} />
              <View style={{ flex: 1, gap: 2 }}>
                <Text style={[s.title, on && s.titleOn]}>{L(c.title)}</Text>
                {c.text ? <Text style={s.text}>{L(c.text)}</Text> : null}
              </View>
            </Pressable>
          );
        })}
      </View>

      {count > 0 ? (
        <Pressable onPress={() => save({})} accessibilityRole="button" style={s.reset}>
          <Text style={s.resetText}>{t('checkReset')}</Text>
        </Pressable>
      ) : null}
    </Screen>
  );
}

const s = StyleSheet.create({
  progressBox: { gap: 8, padding: 14, borderRadius: 16, backgroundColor: colors.navy },
  progressText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  bar: { height: 10, borderRadius: 5, backgroundColor: 'rgba(255,255,255,0.2)', overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: '#34C759' },
  list: { backgroundColor: colors.card, borderRadius: 16, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  row: { flexDirection: 'row', gap: 12, padding: 14, alignItems: 'flex-start', minHeight: 56 },
  border: { borderTopWidth: 1, borderTopColor: colors.border },
  title: { fontSize: 16, fontWeight: '700', color: colors.navy },
  titleOn: { color: colors.muted, textDecorationLine: 'line-through' },
  text: { fontSize: 14, color: colors.muted, lineHeight: 20 },
  reset: { alignSelf: 'center', padding: 12 },
  resetText: { color: colors.red, fontWeight: '700' },
});
