import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Screen, styles } from '../components/ui';
import { emergencyNumbers } from '../data/content';
import { colors } from '../theme';

export default function Urgences() {
  return (
    <Screen title="Urgences" subtitle="Touche un numéro pour appeler">
      {emergencyNumbers.map((n) => (
        <Pressable
          key={n.number}
          accessibilityRole="button"
          accessibilityLabel={`Appeler ${n.label}, ${n.number}`}
          onPress={() => Linking.openURL(`tel:${n.number.replace(/-/g, '')}`)}
          style={({ pressed }) => [s.call, n.main && s.main, pressed && { opacity: 0.85 }]}>
          <Ionicons name="call" size={24} color={n.main ? '#fff' : colors.navy} />
          <View style={{ flex: 1 }}>
            <Text style={[s.number, n.main && { color: '#fff' }]}>{n.number}</Text>
            <Text style={[styles.muted, n.main && { color: '#fff' }]}>{n.label}</Text>
          </View>
        </Pressable>
      ))}

      <Pressable
        style={s.phrase}
        accessibilityRole="button"
        onPress={() => router.push({ pathname: '/chauffeur', params: { es: '¡Ayuda! Llame a la policía, por favor.', fr: 'À l’aide ! Appelez la police.' } })}>
        <Text style={styles.h}>Afficher « Appelez la police » en espagnol</Text>
      </Pressable>

      <Text style={styles.muted}>Pense aussi à noter le numéro de ton ambassade et de ton hôtel avant de partir.</Text>
    </Screen>
  );
}

const s = StyleSheet.create({
  call: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 18, borderRadius: 16, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card },
  main: { backgroundColor: colors.red, borderColor: colors.red },
  number: { fontSize: 24, fontWeight: '800', color: colors.navy },
  phrase: { padding: 16, borderRadius: 16, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, minHeight: 44 },
});
