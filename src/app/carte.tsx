import Ionicons from '@expo/vector-icons/Ionicons';
import { useMemo, useState } from 'react';
import { Linking, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Card, Screen, SectionTitle, styles } from '../components/ui';
import { MapPoint, mapPoints, nearbySearches, nearbyUrl, pointUrl } from '../data/extras';
import { useI18n } from '../i18n';
import { colors } from '../theme';

type IconName = keyof typeof Ionicons.glyphMap;

const KIND_COLOR: Record<MapPoint['kind'], string> = { beach: '#0E9AA7', airport: '#002D62', sight: '#CE1126' };

// Carte MapLibre (tuiles OpenFreeMap, sans clé) dans une WebView. Un tap sur « Y aller » renvoie l'id à l'app.
function mapHtml(goLabel: string) {
  const pts = JSON.stringify(mapPoints.map((p) => ({ ...p, color: KIND_COLOR[p.kind] })));
  return `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
<link rel="stylesheet" href="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css">
<style>html,body,#m{margin:0;height:100%;background:#DCE6F2}
.pin{width:18px;height:18px;border-radius:50%;border:3px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)}
.maplibregl-popup-content{font:14px system-ui,sans-serif;color:#0B2E5C;padding:10px 12px;border-radius:12px}
.go{display:block;margin-top:8px;background:#CE1126;color:#fff;border:0;border-radius:10px;padding:9px 12px;font-weight:700;font-size:14px;width:100%}</style>
</head><body><div id="m"></div>
<script src="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js"></script>
<script>
var P=${pts};
function send(id){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(id)}
try{
var map=new maplibregl.Map({container:'m',style:'https://tiles.openfreemap.org/styles/liberty',center:[-70.1,18.8],zoom:6.3,attributionControl:{compact:true}});
map.addControl(new maplibregl.NavigationControl({showCompass:false}),'top-right');
P.forEach(function(p){
  var el=document.createElement('div');el.className='pin';el.style.background=p.color;
  var box=document.createElement('div');var b=document.createElement('b');b.textContent=p.name;box.appendChild(b);
  var btn=document.createElement('button');btn.className='go';btn.textContent=${JSON.stringify(goLabel)};btn.onclick=function(){send(p.id)};box.appendChild(btn);
  new maplibregl.Marker({element:el}).setLngLat([p.lng,p.lat]).setPopup(new maplibregl.Popup({offset:14}).setDOMContent(box)).addTo(map);
});
}catch(e){send('error')}
</script></body></html>`;
}

function MapView({ goLabel, onError }: { goLabel: string; onError: () => void }) {
  const html = useMemo(() => mapHtml(goLabel), [goLabel]);
  if (Platform.OS === 'web') return null;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { WebView } = require('react-native-webview') as typeof import('react-native-webview');
  return (
    <WebView
      source={{ html, baseUrl: 'https://localhost/' }}
      originWhitelist={['*']}
      style={{ flex: 1, backgroundColor: '#DCE6F2' }}
      onError={onError}
      onHttpError={onError}
      onMessage={(e) => {
        const id = e.nativeEvent.data;
        if (id === 'error') return onError();
        const p = mapPoints.find((x) => x.id === id);
        if (p) Linking.openURL(pointUrl(p));
      }}
      setSupportMultipleWindows={false}
    />
  );
}

export default function Carte() {
  const { t } = useI18n();
  const [failed, setFailed] = useState(false);
  const native = Platform.OS !== 'web';
  const kindLabel = { beach: t('legendBeach'), airport: t('legendAirport'), sight: t('legendSight') };

  return (
    <Screen title={t('dMap')} subtitle={t('mapSub')}>
      {native && !failed ? (
        <View style={s.map}>
          <MapView goLabel={t('go')} onError={() => setFailed(true)} />
        </View>
      ) : null}
      {native ? <Text style={styles.muted}>{t('mapNeedsNet')}</Text> : null}

      <View style={s.legend}>
        {(Object.keys(KIND_COLOR) as MapPoint['kind'][]).map((k) => (
          <View key={k} style={s.legendItem}>
            <View style={[s.pin, { backgroundColor: KIND_COLOR[k] }]} />
            <Text style={styles.muted}>{kindLabel[k]}</Text>
          </View>
        ))}
      </View>

      <SectionTitle>{t('aroundMe')}</SectionTitle>
      <Text style={styles.muted}>{t('aroundMeDesc')}</Text>
      <View style={s.grid}>
        {nearbySearches.map((n) => (
          <Pressable key={n.id} style={({ pressed }) => [s.near, pressed && { opacity: 0.8 }]} accessibilityRole="link" onPress={() => Linking.openURL(nearbyUrl(n.q))}>
            <Ionicons name={n.icon as IconName} size={22} color={colors.navy} />
            <Text style={s.nearText}>{t(n.key)}</Text>
          </Pressable>
        ))}
      </View>

      <SectionTitle>{t('mapSub')}</SectionTitle>
      <Card style={{ padding: 0, gap: 0, overflow: 'hidden' }}>
        {mapPoints.map((p, i) => (
          <Pressable key={p.id} style={[s.row, i > 0 && s.rowBorder]} accessibilityRole="link" onPress={() => Linking.openURL(pointUrl(p))}>
            <View style={[s.pin, { backgroundColor: KIND_COLOR[p.kind] }]} />
            <View style={{ flex: 1 }}>
              <Text style={s.rowTitle}>{p.name}</Text>
              <Text style={styles.muted}>{kindLabel[p.kind]}</Text>
            </View>
            <Ionicons name="navigate-outline" size={18} color={colors.red} />
          </Pressable>
        ))}
      </Card>
    </Screen>
  );
}

const s = StyleSheet.create({
  map: { height: 380, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: colors.border, backgroundColor: '#DCE6F2' },
  legend: { flexDirection: 'row', gap: 16, flexWrap: 'wrap' },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  pin: { width: 12, height: 12, borderRadius: 6, borderWidth: 2, borderColor: '#fff' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  near: { width: '31%', flexGrow: 1, minHeight: 72, borderRadius: 14, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, alignItems: 'center', justifyContent: 'center', gap: 4, padding: 8 },
  nearText: { fontSize: 13, fontWeight: '700', color: colors.navy, textAlign: 'center' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, minHeight: 56 },
  rowBorder: { borderTopWidth: 1, borderTopColor: colors.border },
  rowTitle: { fontSize: 15, fontWeight: '600', color: colors.navy },
});
