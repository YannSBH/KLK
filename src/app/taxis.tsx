import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Card, Notice, Screen, styles } from '../components/ui';
import { PRICES_CHECKED, routes } from '../data/content';
import { colors } from '../theme';

export default function Taxis() {
  return (
    <Screen title="Prix des taxis" subtitle={`Repères relevés en ${PRICES_CHECKED}`}>
      <Notice>
        Ces montants sont ceux d’un transfert privé réservé à l’avance, par véhicule. Un taxi pris sur place se négocie : vise ce prix ou
        moins, et fixe-le avant de monter.
      </Notice>

      {routes.map((r) => (
        <Card key={r.id}>
          <Text style={styles.h}>
            {r.from} → {r.to}
          </Text>
          {r.duration ? <Text style={styles.muted}>Durée {r.duration}</Text> : null}
          <View style={s.line}>
            <Ionicons name="car-outline" size={18} color={colors.navy} />
            <Text style={[styles.p, s.flex]}>{r.transfer}</Text>
          </View>
          {r.bus ? (
            <View style={s.line}>
              <Ionicons name="bus-outline" size={18} color={colors.navy} />
              <Text style={[styles.p, s.flex]}>{r.bus}</Text>
            </View>
          ) : null}
          {r.note ? <Text style={styles.muted}>{r.note}</Text> : null}
          <Pressable
            style={s.button}
            accessibilityRole="button"
            onPress={() =>
              router.push({ pathname: '/chauffeur', params: { es: `¿Cuánto cuesta hasta ${r.to.replace(/ \(.*\)/, '')}?`, fr: `Combien jusqu’à ${r.to} ?` } })
            }>
            <Ionicons name="expand-outline" size={16} color="#fff" />
            <Text style={s.buttonText}>Demander le prix au chauffeur</Text>
          </Pressable>
        </Card>
      ))}
    </Screen>
  );
}

const s = StyleSheet.create({
  line: { flexDirection: 'row', gap: 8, alignItems: 'flex-start', marginTop: 4 },
  flex: { flex: 1 },
  button: { marginTop: 8, minHeight: 44, borderRadius: 12, backgroundColor: colors.navy, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 15 },
});
