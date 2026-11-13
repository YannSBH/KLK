import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { goBack } from '../components/ui';
import { colors } from '../theme';

export default function Chauffeur() {
  const { es, fr } = useLocalSearchParams<{ es?: string; fr?: string }>();
  const insets = useSafeAreaInsets();

  return (
    <Pressable style={[s.page, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 24 }]} onPress={goBack} accessibilityLabel="Fermer">
      <View style={s.top}>
        <Text style={s.hint}>Montre cet écran</Text>
        <View style={s.close}>
          <Ionicons name="close" size={26} color={colors.navy} />
        </View>
      </View>
      <View style={s.center}>
        <Text style={s.es} adjustsFontSizeToFit numberOfLines={6}>
          {es ?? ''}
        </Text>
      </View>
      {fr ? <Text style={s.fr}>{fr}</Text> : null}
    </Pressable>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 24 },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  hint: { color: colors.muted, fontSize: 14 },
  close: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center' },
  center: { flex: 1, justifyContent: 'center' },
  es: { fontSize: 46, lineHeight: 54, fontWeight: '800', color: colors.navy, textAlign: 'center' },
  fr: { fontSize: 15, color: colors.muted, textAlign: 'center' },
});
