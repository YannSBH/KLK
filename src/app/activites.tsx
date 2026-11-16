import { StyleSheet, Text, View } from "react-native";
import { cardStyle, PhotoBox } from "../components/PhotoBox";
import { Card, Notice, Screen, SectionTitle, styles } from "../components/ui";
import { activityPhotos } from "../data/photos";
import { activityGroups } from "../data/discover";
import { PRICES_CHECKED } from "../data/content";
import { useI18n } from "../i18n";
import { colors } from "../theme";

export default function Activites() {
  const { t, L } = useI18n();
  return (
    <Screen title={t('dActivities')} subtitle={t('activitiesSub', { d: L(PRICES_CHECKED) })}>
      <Notice>{t('activitiesNotice')}</Notice>
      {activityGroups.map((g) => (
        <View key={g.id} style={{ gap: 10 }}>
          <SectionTitle>{g.region}</SectionTitle>
          {g.items.map((a) =>
            a.photo && activityPhotos[a.photo] ? (
              <View key={a.name.fr} style={cardStyle.card}>
                <PhotoBox
                  photo={activityPhotos[a.photo]}
                  label={t('photoOf', { x: L(a.name) })}
                  caption={
                    ["buggy", "catamaran", "snorkeling", "zipline"].includes(a.photo)
                      ? t('illustration')
                      : undefined
                  }
                />
                <View style={cardStyle.body}>
                  <Text style={styles.h}>{L(a.name)}</Text>
                  <Text style={s.price}>{L(a.price)}</Text>
                  <Text style={styles.muted}>{L(a.tip)}</Text>
                </View>
              </View>
            ) : (
              <Card key={a.name.fr}>
                <Text style={styles.h}>{L(a.name)}</Text>
                <Text style={s.price}>{L(a.price)}</Text>
                <Text style={styles.muted}>{L(a.tip)}</Text>
              </Card>
            ),
          )}
        </View>
      ))}
    </Screen>
  );
}

const s = StyleSheet.create({
  price: { fontSize: 15, fontWeight: "700", color: colors.red },
});
