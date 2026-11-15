import { StyleSheet, Text, View } from 'react-native';
import { Card, Notice, Screen, SectionTitle, styles } from '../components/ui';
import { activityGroups } from '../data/discover';
import { colors } from '../theme';

export default function Activites() {
  return (
    <Screen title="Activités" subtitle="Tarifs moyens relevés en nov. 2026">
      <Notice>
        Les prix varient selon l’agence et ce qui est inclus (transport, repas). Compare deux ou trois offres, et négocie sur place.
      </Notice>
      {activityGroups.map((g) => (
        <View key={g.id} style={{ gap: 10 }}>
          <SectionTitle>{g.region}</SectionTitle>
          {g.items.map((a) => (
            <Card key={a.name}>
              <Text style={styles.h}>{a.name}</Text>
              <Text style={s.price}>{a.price}</Text>
              <Text style={styles.muted}>{a.tip}</Text>
            </Card>
          ))}
        </View>
      ))}
    </Screen>
  );
}

const s = StyleSheet.create({
  price: { fontSize: 15, fontWeight: '700', color: colors.red },
});
