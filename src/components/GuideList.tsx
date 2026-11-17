import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import type { GuideItem } from '../data/guides';
import { useI18n } from '../i18n';
import { colors } from '../theme';

type IconName = keyof typeof Ionicons.glyphMap;

// Liste de conseils : icône colorée + titre + texte.
export function GuideList({ items, color = colors.navy, bg = '#E7EEF9' }: { items: GuideItem[]; color?: string; bg?: string }) {
  const { L } = useI18n();
  return (
    <View style={{ gap: 10 }}>
      {items.map((it, i) => (
        <View key={i} style={s.row}>
          <View style={[s.icon, { backgroundColor: bg }]}>
            <Ionicons name={it.icon as IconName} size={22} color={color} />
          </View>
          <View style={{ flex: 1, gap: 3, minWidth: 0 }}>
            <Text style={s.title}>{L(it.title)}</Text>
            <Text style={s.text}>{L(it.text)}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12, padding: 14, backgroundColor: colors.card, borderRadius: 16, borderWidth: 1, borderColor: colors.border },
  icon: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: '700', color: colors.navy },
  text: { fontSize: 15, lineHeight: 21, color: colors.muted },
});
