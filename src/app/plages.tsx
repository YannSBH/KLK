import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Screen, styles } from '../components/ui';
import { beaches, directionsUrl } from '../data/beaches';
import { imageSource } from '../data/photos';
import { colors } from '../theme';

export default function Plages() {
  return (
    <Screen title="Plages" subtitle="Touche « Y aller » pour l’itinéraire dans Maps">
      {beaches.map((b) => (
        <View key={b.id} style={s.card}>
          <Image
            source={imageSource(b.photo)}
            style={s.photo}
            contentFit="cover"
            cachePolicy="disk"
            transition={200}
            accessibilityLabel={`Photo de ${b.name}`}
          />
          <View style={s.body}>
            <Text style={styles.h}>{b.name}</Text>
            <Text style={s.region}>{b.region}</Text>
            <View style={s.tags}>
              {b.tags.map((t) => (
                <View key={t} style={s.tag}>
                  <Text style={s.tagText}>{t}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.p}>{b.text}</Text>
            <Pressable style={s.go} accessibilityRole="link" onPress={() => Linking.openURL(directionsUrl(b))}>
              <Ionicons name="navigate" size={18} color="#fff" />
              <Text style={s.goText}>Y aller</Text>
            </Pressable>
            <Pressable accessibilityRole="link" onPress={() => Linking.openURL(b.photo.page)} hitSlop={6}>
              <Text style={s.credit}>
                Photo : {b.photo.credit} · {b.photo.license}
              </Text>
            </Pressable>
          </View>
        </View>
      ))}
      <Text style={styles.muted}>Les photos se chargent avec Internet, puis restent visibles hors ligne.</Text>
    </Screen>
  );
}

const s = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: 16, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  photo: { width: '100%', aspectRatio: 16 / 10, backgroundColor: '#DCE6F2' },
  body: { padding: 16, gap: 6 },
  region: { fontSize: 13, color: colors.muted, fontWeight: '600' },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginVertical: 2 },
  tag: { backgroundColor: '#E7EEF9', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  tagText: { fontSize: 12, fontWeight: '700', color: colors.navy },
  go: { marginTop: 6, minHeight: 46, borderRadius: 12, backgroundColor: colors.red, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  goText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  credit: { fontSize: 11, color: colors.muted, marginTop: 4 },
});
