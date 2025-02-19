import TopBar from '@/Shared/ui/TopBar';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function tabLayout() {

  // const [loginId, setLoginId] = useState(false);
  // useEffect(() => {
  //   const user = false
  //   setLoginId(user)
  //   if (user) {
  //     router.replace("/(tabs)")
  //   }
  // })

  return (
    <>

      <Stack>
        <Stack.Screen name="index" options={{ title: "Главная" }} />
        <Stack.Screen name="ChatScreen" options={{ title: "Чат" }} />
        <Stack.Screen name="ContactScreen" options={{ title: "Контакты" }} />
      </Stack>
      <TopBar />
    </>
  );
}
