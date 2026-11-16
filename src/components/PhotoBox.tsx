import { Image } from 'expo-image';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { imageSource, Photo } from '../data/photos';
import { colors } from '../theme';

// Photo en haut d'une carte, avec crédit discret par-dessus (lien vers la licence).
export function PhotoBox({ photo, label, caption }: { photo: Photo; label: string; caption?: string }) {
  return (
    <View style={s.wrap}>
      <Image source={imageSource(photo)} style={s.img} contentFit="cover" cachePolicy="disk" transition={200} accessibilityLabel={label} />
      {caption ? (
        <View style={s.caption}>
          <Text style={s.captionText}>{caption}</Text>
        </View>
      ) : null}
      <Pressable style={s.credit} onPress={() => Linking.openURL(photo.page)} accessibilityRole="link" hitSlop={6}>
        <Text style={s.creditText} numberOfLines={1}>
          © {photo.credit} · {photo.license}
        </Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { width: '100%', aspectRatio: 16 / 9, backgroundColor: '#DCE6F2' },
  img: { width: '100%', height: '100%' },
  caption: { position: 'absolute', left: 10, top: 10, backgroundColor: 'rgba(11,46,92,0.85)', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  captionText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  credit: { position: 'absolute', right: 6, bottom: 6, maxWidth: '80%', backgroundColor: 'rgba(0,0,0,0.55)', borderRadius: 6, paddingHorizontal: 6, paddingVertical: 2 },
  creditText: { color: '#fff', fontSize: 10 },
});

export const cardStyle = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: 16, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  body: { padding: 16, gap: 6 },
});
