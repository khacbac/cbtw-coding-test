import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigations/type";

const Stack = createStackNavigator<RootStackParamList>();

import { useColorScheme } from "@/hooks/useColorScheme";
import { HomeScreen } from "./home";
import { FeedbackScreen } from "./feedback";
import { SearchScreen } from "./search";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
