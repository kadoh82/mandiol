import "../global.css";

import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { colors, navigationTheme } from "@/constants/theme";

// Keep the native splash screen visible while we load fonts. This also
// helps the "Daily Planner" decoy: users never see a flash of unstyled
// content before the locked splash takes over.
SplashScreen.preventAutoHideAsync().catch(() => {
  /* ignore — harmless if it has already hidden */
});

export default function RootLayout() {
  // Fonts are loaded lazily from expo-google-fonts packages when those are
  // added. For now we only need the system fallback so the app boots cleanly
  // on a fresh `npx expo start`. Adding the real font packages later will
  // wire them in without touching this layout.
  const [fontsLoaded, fontError] = useFonts({});

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {
        /* ignore */
      });
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.cream }}>
      <SafeAreaProvider>
        <ThemeProvider value={navigationTheme}>
          <StatusBar style="dark" />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: colors.cream },
              // No animation on the initial decoy → unlocked transition
              // so the app never flashes its real name during auth.
              animation: "fade",
            }}
          />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
