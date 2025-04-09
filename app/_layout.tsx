import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import "@/global.css";
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "Rubik-ExtraBold": require("../src/assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../src/assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../src/assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../src/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../src/assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="details/[id]" />
    </Stack>
  );
};

export default RootLayout;
