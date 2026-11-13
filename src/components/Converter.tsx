import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { CURRENCIES, Currency, convert, formatDate, formatMoney, parseAmount, useRates } from '../lib/rates';
import { colors, radius } from '../theme';

const LABEL: Record<Currency, string> = { DOP: 'Pesos', USD: 'Dollars', EUR: 'Euros' };
const QUICK = ['100', '500', '1000', '5000'];

export function Converter() {
  const { rates, status, refresh } = useRates();
  const [from, setFrom] = useState<Currency>('DOP');
  const [text, setText] = useState('1000');
  const amount = parseAmount(text);
  const others = CURRENCIES.filter((c) => c !== from);

  let info = '';
  if (status === 'loading' && !rates) info = 'Chargement des taux…';
  else if (status === 'fallback') info = 'Taux de secours du 12/11/2026';
  else if (rates) info = `${status === 'offline' ? 'Hors ligne · ' : ''}Taux du ${formatDate(rates.updatedAt)}`;

  return (
    <View style={s.box}>
      <View style={s.row}>
        <Text style={s.title}>Convertisseur</Text>
        <Pressable onPress={() => refresh(true)} accessibilityRole="button" accessibilityLabel="Mettre à jour les taux" hitSlop={10} style={s.refresh}>
          <Text style={s.info}>{info}</Text>
          <Ionicons name="refresh" size={14} color={colors.mutedOnNavy} />
        </Pressable>
      </View>

      <View style={s.tabs}>
        {CURRENCIES.map((c) => (
          <Pressable
            key={c}
            onPress={() => setFrom(c)}
            accessibilityRole="button"
            accessibilityState={{ selected: c === from }}
            style={[s.tab, c === from && s.tabOn]}>
            <Text style={[s.tabText, c === from && s.tabTextOn]}>{c}</Text>
          </Pressable>
        ))}
      </View>

      <View style={s.inputRow}>
        <TextInput
          value={text}
          onChangeText={setText}
          keyboardType="decimal-pad"
          accessibilityLabel={`Montant en ${LABEL[from].toLowerCase()}`}
          style={s.input}
          selectTextOnFocus
        />
        <Text style={s.code}>{from}</Text>
      </View>

      <View style={s.quick}>
        {QUICK.map((q) => (
          <Pressable key={q} onPress={() => setText(q)} style={s.chip} accessibilityRole="button">
            <Text style={s.chipText}>{formatMoney(Number(q), 'DOP')}</Text>
          </Pressable>
        ))}
      </View>

      <View style={s.results}>
        {others.map((c) => (
          <View key={c} style={s.result}>
            <Text style={s.resultLabel}>{LABEL[c]}</Text>
            <Text style={s.resultValue} numberOfLines={1} adjustsFontSizeToFit>
              {rates ? `${formatMoney(convert(amount, from, c, rates), c)} ${c}` : '—'}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  box: { backgroundColor: colors.navy, borderRadius: radius.lg, padding: 16, gap: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 },
  title: { color: '#fff', fontWeight: '700', fontSize: 15 },
  refresh: { flexDirection: 'row', alignItems: 'center', gap: 4, flexShrink: 1 },
  info: { color: colors.mutedOnNavy, fontSize: 12, flexShrink: 1, textAlign: 'right' },
  tabs: { flexDirection: 'row', backgroundColor: colors.navySoft, borderRadius: radius.sm, padding: 4, gap: 4 },
  tab: { flex: 1, minHeight: 40, borderRadius: 9, alignItems: 'center', justifyContent: 'center' },
  tabOn: { backgroundColor: '#fff' },
  tabText: { color: colors.mutedOnNavy, fontWeight: '700' },
  tabTextOn: { color: colors.navy },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.navySoft, borderRadius: radius.sm, paddingHorizontal: 14 },
  input: { flex: 1, color: '#fff', fontSize: 30, fontWeight: '800', paddingVertical: 8, minWidth: 0 },
  code: { color: colors.mutedOnNavy, fontWeight: '700', fontSize: 15 },
  quick: { flexDirection: 'row', gap: 8 },
  chip: { flex: 1, minHeight: 36, borderRadius: 999, borderWidth: 1, borderColor: colors.navySoft, alignItems: 'center', justifyContent: 'center' },
  chipText: { color: colors.mutedOnNavy, fontSize: 13, fontWeight: '600' },
  results: { flexDirection: 'row', gap: 10 },
  result: { flex: 1, backgroundColor: '#fff', borderRadius: radius.sm, padding: 12 },
  resultLabel: { color: colors.muted, fontSize: 12 },
  resultValue: { color: colors.navy, fontWeight: '700', fontSize: 19, marginTop: 2 },
});
