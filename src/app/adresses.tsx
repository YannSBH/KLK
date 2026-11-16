import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { cardStyle, PhotoBox } from "../components/PhotoBox";
import { Notice, Screen, styles } from "../components/ui";
import { dishes } from "../data/photos";
import { cities, Place } from "../data/discover";
import { colors } from "../theme";

const KINDS: (Place["kind"] | "Tout")[] = [
  "Tout",
  "Local",
  "Français",
  "Top noté",
  "Petit budget",
];

const KIND_STYLE: Record<Place["kind"], { bg: string; fg: string }> = {
  Local: { bg: colors.greenBg, fg: colors.greenText },
  Français: { bg: "#E7EEF9", fg: colors.navy },
  "Top noté": { bg: colors.amberBg, fg: colors.amberText },
  "Petit budget": { bg: "#FBE9EC", fg: "#8E0B21" },
};

function openMaps(name: string, city: string) {
  const q = encodeURIComponent(`${name} ${city} República Dominicana`);
  Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${q}`);
}

export default function Adresses() {
  const [cityId, setCityId] = useState(cities[0].id);
  const [kind, setKind] = useState<(typeof KINDS)[number]>("Tout");
  const city = cities.find((c) => c.id === cityId)!;
  const places = city.places.filter((p) => kind === "Tout" || p.kind === kind);

  return (
    <Screen title="Bonnes adresses" subtitle="Où manger, du local au français">
      <View style={s.tabs}>
        {cities.map((c) => (
          <Pressable
            key={c.id}
            onPress={() => setCityId(c.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: c.id === cityId }}
            style={[s.tab, c.id === cityId && s.tabOn]}
          >
            <Text
              style={[s.tabText, c.id === cityId && s.tabTextOn]}
              numberOfLines={1}
            >
              {c.name}
            </Text>
          </Pressable>
        ))}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.chips}
      >
        {KINDS.map((k) => (
          <Pressable
            key={k}
            onPress={() => setKind(k)}
            accessibilityRole="button"
            accessibilityState={{ selected: k === kind }}
            style={[s.chip, k === kind && s.chipOn]}
          >
            <Text style={[s.chipText, k === kind && s.chipTextOn]}>{k}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {places.length === 0 ? (
        <Text style={styles.muted}>Pas encore d’adresse de ce type ici.</Text>
      ) : null}

      {places.map((p) => (
        <View key={p.name} style={cardStyle.card}>
          {p.dish && dishes[p.dish] ? (
            <PhotoBox
              photo={dishes[p.dish].photo}
              label={`Plat : ${dishes[p.dish].label}`}
              caption={`Plat typique : ${dishes[p.dish].label}`}
            />
          ) : null}
          <View style={cardStyle.body}>
            <View style={s.row}>
              <Text style={[styles.h, { flex: 1 }]}>{p.name}</Text>
              <View
                style={[s.badge, { backgroundColor: KIND_STYLE[p.kind].bg }]}
              >
                <Text style={[s.badgeText, { color: KIND_STYLE[p.kind].fg }]}>
                  {p.kind}
                </Text>
              </View>
            </View>
            <Text style={styles.p}>
              {p.cuisine}
              {p.price ? (
                <Text style={{ fontWeight: "700" }}> · {p.price}</Text>
              ) : null}
            </Text>
            <Text style={styles.muted}>{p.tip}</Text>
            <Pressable
              style={s.maps}
              accessibilityRole="link"
              onPress={() => openMaps(p.name, city.name)}
            >
              <Ionicons name="map-outline" size={16} color={colors.navy} />
              <Text style={s.mapsText}>
                Voir le resto et ses photos sur Google Maps
              </Text>
            </Pressable>
          </View>
        </View>
      ))}

      <Notice>
        Les photos montrent un plat typique de la cuisine proposée, pas le resto
        lui-même. Pour voir le lieu, les horaires et les avis récents, ouvre
        Google Maps.
      </Notice>
    </Screen>
  );
}

const s = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 4,
    gap: 4,
  },
  tab: {
    flex: 1,
    minHeight: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  tabOn: { backgroundColor: colors.navy },
  tabText: { color: colors.navy, fontWeight: "700", fontSize: 14 },
  tabTextOn: { color: "#fff" },
  chips: { gap: 8, paddingVertical: 2 },
  chip: {
    minHeight: 36,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    justifyContent: "center",
  },
  chipOn: { backgroundColor: colors.red, borderColor: colors.red },
  chipText: { color: colors.navy, fontWeight: "600", fontSize: 13 },
  chipTextOn: { color: "#fff" },
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  badgeText: { fontSize: 12, fontWeight: "700" },
  maps: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    minHeight: 44,
    marginTop: 2,
    alignSelf: "flex-start",
  },
  mapsText: {
    color: colors.navy,
    fontWeight: "700",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
