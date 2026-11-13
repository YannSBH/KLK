import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, Screen, SectionTitle, styles } from '../components/ui';
import { phraseGroups } from '../data/content';
import { colors } from '../theme';

function show(es: string, fr: string) {
  router.push({ pathname: '/chauffeur', params: { es, fr } });
}

export default function Phrases() {
  const [dest, setDest] = useState('');

  return (
    <Screen title="Phrases" subtitle="Touche une phrase pour l’afficher en grand">
      <Card>
        <Text style={styles.h}>Montrer au chauffeur</Text>
        <Text style={styles.muted}>Écris ta destination, on prépare la phrase en espagnol.</Text>
        <TextInput
          value={dest}
          onChangeText={setDest}
          placeholder="Ex. Playa Bávaro, hotel Riu…"
          placeholderTextColor={colors.muted}
          accessibilityLabel="Destination"
          style={s.input}
        />
        <Pressable
          style={[s.button, !dest.trim() && { opacity: 0.5 }]}
          disabled={!dest.trim()}
          accessibilityRole="button"
          onPress={() => show(`Lléveme a ${dest.trim()}, por favor. ¿Cuánto cuesta?`, `Emmenez-moi à ${dest.trim()}. Combien ça coûte ?`)}>
          <Ionicons name="expand-outline" size={16} color="#fff" />
          <Text style={s.buttonText}>Afficher en grand</Text>
        </Pressable>
      </Card>

      {phraseGroups.map((g) => (
        <View key={g.id} style={{ gap: 8 }}>
          <SectionTitle>{g.title}</SectionTitle>
          <View style={s.list}>
            {g.phrases.map((p, i) => (
              <Pressable
                key={p.es}
                onPress={() => show(p.es, p.fr)}
                accessibilityRole="button"
                style={({ pressed }) => [s.row, i > 0 && s.rowBorder, pressed && { backgroundColor: colors.bg }]}>
                <View style={{ flex: 1 }}>
                  <Text style={s.es}>{p.es}</Text>
                  <Text style={styles.muted}>{p.fr}</Text>
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
