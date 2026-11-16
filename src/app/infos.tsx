import Ionicons from '@expo/vector-icons/Ionicons';
import { Linking, Pressable, StyleSheet, Text } from 'react-native';
import { Card, Screen, styles } from '../components/ui';
import { ETICKET_URL, practical } from '../data/content';
import { useI18n } from '../i18n';
import { colors } from '../theme';

export default function Infos() {
  const { t, L } = useI18n();
  return (
    <Screen title={t('tInfo')} subtitle={t('infoSub')}>
      {practical.map((x, i) => (
        <Card key={x.title.fr}>
          <Text style={styles.h}>{L(x.title)}</Text>
          <Text style={styles.p}>{L(x.text)}</Text>
          {i === 0 ? (
            <Pressable style={s.button} accessibilityRole="link" onPress={() => Linking.openURL(ETICKET_URL)}>
              <Text style={s.buttonText}>{t('eticketBtn')}</Text>
              <Ionicons name="open-outline" size={16} color="#fff" />
            </Pressable>
          ) : null}
        </Card>
      ))}
    </Screen>
  );
}

const s = StyleSheet.create({
  button: { marginTop: 8, minHeight: 44, borderRadius: 12, backgroundColor: colors.navy, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingHorizontal: 12 },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 14 },
});
