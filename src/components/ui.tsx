import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, radius } from '../theme';

export function goBack() {
  if (router.canGoBack()) router.back();
  else router.replace('/');
}

export function Screen({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable accessibilityRole="button" accessibilityLabel="Retour" onPress={goBack} style={styles.back} hitSlop={8}>
          <Ionicons name="chevron-back" size={24} color={colors.navy} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
      </View>
      <ScrollView contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 32 }]}>{children}</ScrollView>
    </View>
  );
}

export function Card({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <View style={styles.notice}>
      <Text style={styles.noticeText}>{children}</Text>
    </View>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <Text style={styles.section}>{children}</Text>;
}

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  header: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 12, paddingVertical: 10, backgroundColor: colors.bg },
  back: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 22, backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border },
  backText: { fontSize: 30, lineHeight: 32, color: colors.navy, marginTop: -3 },
  title: { fontSize: 22, fontWeight: '800', color: colors.navy },
  subtitle: { fontSize: 13, color: colors.muted, marginTop: 2 },
  content: { padding: 16, gap: 12 },
  card: { backgroundColor: colors.card, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, padding: 16, gap: 6 },
  notice: { backgroundColor: colors.amberBg, borderRadius: radius.sm, padding: 12 },
  noticeText: { color: colors.amberText, fontSize: 13, lineHeight: 19 },
  section: { fontSize: 15, fontWeight: '700', color: colors.navy, marginTop: 8 },
  h: { fontSize: 17, fontWeight: '700', color: colors.navy },
  p: { fontSize: 15, lineHeight: 21, color: colors.navy },
  muted: { fontSize: 13, lineHeight: 19, color: colors.muted },
});
