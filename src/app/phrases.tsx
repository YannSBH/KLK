import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, Screen, SectionTitle, styles } from '../components/ui';
import { phraseGroups } from '../data/content';
import { useI18n } from '../i18n';
import { colors } from '../theme';

function show(es: string, m: string) {
  router.push({ pathname: '/chauffeur', params: { es, m } });
}

export default function Phrases() {
  const { t, L, lang } = useI18n();
  const [dest, setDest] = useState('');
  const d = dest.trim();

  return (
    <Screen title={t('tPhrases')} subtitle={t('phrasesSub')}>
      <Card>
        <Text style={styles.h}>{t('showDriver')}</Text>
        <Text style={styles.muted}>{t('showDriverDesc')}</Text>
        <TextInput
          value={dest}
          onChangeText={setDest}
          placeholder={t('destPh')}
          placeholderTextColor={colors.muted}
          accessibilityLabel={t('destination')}
          style={s.input}
        />
        <Pressable
          style={[s.button, !d && { opacity: 0.5 }]}
          disabled={!d}
          accessibilityRole="button"
          onPress={() => show(`Lléveme a ${d}, por favor. ¿Cuánto cuesta?`, lang === 'es' ? '' : t('takeMe', { x: d }))}>
          <Ionicons name="expand-outline" size={16} color="#fff" />
          <Text style={s.buttonText}>{t('showBig')}</Text>
        </Pressable>
      </Card>

      {phraseGroups.map((g) => (
        <View key={g.id} style={{ gap: 8 }}>
          <SectionTitle>{L(g.title)}</SectionTitle>
          <View style={s.list}>
            {g.phrases.map((p, i) => (
              <Pressable
                key={p.es}
                onPress={() => show(p.es, L(p.m))}
                accessibilityRole="button"
                style={({ pressed }) => [s.row, i > 0 && s.rowBorder, pressed && { backgroundColor: colors.bg }]}>
                <View style={{ flex: 1 }}>
                  <Text style={s.es}>{p.es}</Text>
                  {L(p.m) && L(p.m) !== p.es ? <Text style={styles.muted}>{L(p.m)}</Text> : null}
                </View>
                <Ionicons name="expand-outline" size={18} color={colors.muted} />
              </Pressable>
            ))}
          </View>
        </View>
      ))}
    </Screen>
  );
}

const s = StyleSheet.create({
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: 12, height: 48, paddingHorizontal: 12, fontSize: 16, color: colors.navy, marginTop: 4 },
  button: { marginTop: 4, minHeight: 44, borderRadius: 12, backgroundColor: colors.navy, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  list: { backgroundColor: colors.card, borderRadius: 16, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, minHeight: 56 },
  rowBorder: { borderTopWidth: 1, borderTopColor: colors.border },
  es: { fontSize: 16, fontWeight: '700', color: colors.navy },
});
