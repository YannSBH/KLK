import { Text } from 'react-native';
import { Card, Notice, Screen, styles } from '../components/ui';
import { PRICES_CHECKED, transports } from '../data/content';
import { useI18n } from '../i18n';

export default function Transports() {
  const { t, L } = useI18n();
  return (
    <Screen title={t('tTransports')} subtitle={t('transportsSub', { d: L(PRICES_CHECKED) })}>
      <Notice>{t('transportsNotice')}</Notice>
      {transports.map((x) => (
        <Card key={x.id}>
          <Text style={styles.h}>{L(x.name)}</Text>
          <Text style={[styles.p, { fontWeight: '600' }]}>{L(x.price)}</Text>
          <Text style={styles.muted}>{L(x.tip)}</Text>
        </Card>
      ))}
    </Screen>
  );
}
