import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Notice, Screen, styles } from '../components/ui';
import { PRICES_CHECKED } from '../data/content';
import { priceItems, PRICES_TAX_NOTE } from '../data/extras';
import { imageSource } from '../data/photos';
import { useI18n } from '../i18n';
import { colors } from '../theme';

type IconName = keyof typeof Ionicons.glyphMap;

export default function Prix() {
  const { t, L } = useI18n();
  return (
    <Screen title={t('dPrices')} subtitle={t('pricesSub', { d: L(PRICES_CHECKED) })}>
      <Notice>{t('pricesNotice')}</Notice>

      {priceItems.map((it) => (
        <View key={it.id} style={s.card}>
          {it.photo ? (
            <Pressable onPress={() => Linking.openURL(it.photo!.page)} accessibilityRole="link" accessibilityLabel={`© ${it.photo.credit}`}>
              <Image source={imageSource(it.photo)} style={s.thumb} contentFit="cover" cachePolicy="disk" transition={150} />
            </Pressable>
          ) : (
            <View style={[s.thumb, s.iconBox]}>
              <Ionicons name={(it.icon ?? 'pricetag-outline') as IconName} size={30} color={colors.navy} />
            </View>
          )}
          <View style={s.body}>
            <Text style={styles.h}>{L(it.name)}</Text>
            <View style={s.line}>
              <Text style={s.label}>{t('localPrice')}</Text>
              <Text style={s.price}>{L(it.local)}</Text>
            </View>
            {it.tourist ? (
              <View style={s.line}>
                <Text style={s.label}>{t('touristPrice')}</Text>
                <Text style={s.tourist}>{L(it.tourist)}</Text>
              </View>
            ) : null}
            {it.note ? <Text style={styles.muted}>{L(it.note)}</Text> : null}
            {it.photo ? (
              <Text style={s.credit} numberOfLines={1}>
                © {it.photo.credit} · {it.photo.license}
              </Text>
            ) : null}
          </View>
        </View>
      ))}

      <Notice>{L(PRICES_TAX_NOTE)}</Notice>
    </Screen>
  );
}

const s = StyleSheet.create({
  card: { flexDirection: 'row', gap: 12, padding: 12, backgroundColor: colors.card, borderRadius: 16, borderWidth: 1, borderColor: colors.border },
  thumb: { width: 84, height: 84, borderRadius: 12, backgroundColor: '#DCE6F2' },
  iconBox: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#E7EEF9' },
  body: { flex: 1, gap: 3, minWidth: 0 },
  line: { gap: 1 },
  label: { fontSize: 11, fontWeight: '700', color: colors.muted, textTransform: 'uppercase', letterSpacing: 0.5 },
  price: { fontSize: 15, fontWeight: '700', color: colors.red },
  tourist: { fontSize: 14, fontWeight: '600', color: colors.navy },
  credit: { fontSize: 10, color: colors.muted, marginTop: 2 },
});
