import { StyleSheet, Text, View } from 'react-native';
import { GuideList } from '../components/GuideList';
import { Notice, Screen, SectionTitle } from '../components/ui';
import { events, holidays, holidaysNote, seasons } from '../data/guides';
import { useI18n } from '../i18n';
import { colors } from '../theme';

const LOCALE = { fr: 'fr-FR', en: 'en-US', es: 'es-DO' } as const;

export default function Calendrier() {
  const { t, L, lang } = useI18n();
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = holidays.filter((h) => h.date >= today);

  return (
    <Screen title={t('gCalendar')} subtitle={t('gCalendarSub')}>
      <SectionTitle>{t('seasonsTitle')}</SectionTitle>
      <GuideList items={seasons} color="#0E7490" bg="#E0F4F7" />

      <SectionTitle>{t('eventsTitle')}</SectionTitle>
      <GuideList items={events} color="#7B2E8E" bg="#F3E8F7" />

      <SectionTitle>{t('holidaysTitle')}</SectionTitle>
      <Notice>{L(holidaysNote)}</Notice>
      <View style={s.list}>
        {upcoming.map((h, i) => {
          const d = new Date(`${h.date}T12:00:00`);
          return (
            <View key={h.date} style={[s.row, i > 0 && s.border]}>
              <View style={s.date}>
                <Text style={s.day}>{d.getDate()}</Text>
                <Text style={s.month}>{d.toLocaleDateString(LOCALE[lang], { month: 'short' })}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.name}>{L(h.name)}</Text>
                <Text style={s.weekday}>{d.toLocaleDateString(LOCALE[lang], { weekday: 'long', year: 'numeric' })}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </Screen>
  );
}

const s = StyleSheet.create({
  list: { backgroundColor: colors.card, borderRadius: 16, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 12 },
  border: { borderTopWidth: 1, borderTopColor: colors.border },
  date: { width: 52, height: 52, borderRadius: 12, backgroundColor: '#FBE9EC', alignItems: 'center', justifyContent: 'center' },
  day: { fontSize: 20, fontWeight: '900', color: colors.red, lineHeight: 22 },
  month: { fontSize: 11, fontWeight: '700', color: colors.red, textTransform: 'uppercase' },
  name: { fontSize: 15, fontWeight: '700', color: colors.navy },
  weekday: { fontSize: 13, color: colors.muted },
});
