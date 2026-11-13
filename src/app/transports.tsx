import { Text } from 'react-native';
import { Card, Notice, Screen, styles } from '../components/ui';
import { PRICES_CHECKED, transports } from '../data/content';

export default function Transports() {
  return (
    <Screen title="Transports" subtitle={`Prix moyens relevés en ${PRICES_CHECKED}`}>
      <Notice>Règle d’or : sauf Uber et bus, le prix se fixe toujours avant de partir.</Notice>
      {transports.map((t) => (
        <Card key={t.id}>
          <Text style={styles.h}>{t.name}</Text>
          <Text style={[styles.p, { fontWeight: '600' }]}>{t.price}</Text>
          <Text style={styles.muted}>{t.tip}</Text>
        </Card>
      ))}
    </Screen>
  );
}
