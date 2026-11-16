import { Text } from 'react-native';
import { Card, Screen, styles } from '../components/ui';
import { scams } from '../data/content';
import { useI18n } from '../i18n';

export default function Arnaques() {
  const { t, L } = useI18n();
  return (
    <Screen title={t('tScams')} subtitle={t('scamsSub')}>
      {scams.map((x, i) => (
        <Card key={x.title.fr}>
          <Text style={styles.h}>
            {i + 1}. {L(x.title)}
          </Text>
          <Text style={styles.p}>{L(x.text)}</Text>
        </Card>
      ))}
    </Screen>
  );
}
