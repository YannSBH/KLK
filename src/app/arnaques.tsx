import { Text } from 'react-native';
import { Card, Screen, styles } from '../components/ui';
import { scams } from '../data/content';

export default function Arnaques() {
  return (
    <Screen title="Arnaques" subtitle="Les pièges les plus fréquents">
      {scams.map((t, i) => (
        <Card key={t.title}>
          <Text style={styles.h}>
            {i + 1}. {t.title}
          </Text>
          <Text style={styles.p}>{t.text}</Text>
        </Card>
      ))}
    </Screen>
  );
}
