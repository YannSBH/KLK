import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nProvider } from '../i18n';
import { colors } from '../theme';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <I18nProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.bg } }}>
        <Stack.Screen name="chauffeur" options={{ presentation: 'fullScreenModal', animation: 'fade' }} />
      </Stack>
      </I18nProvider>
    </SafeAreaProvider>
  );
}
