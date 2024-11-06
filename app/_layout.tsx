import { useEffect } from "react";

import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";

import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";

// preventing to hide the splash screen upto the all necessity is loaded successfully
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();

    const [loaded] = useFonts({
        Nunito: require("../assets/fonts/Nunito-Reguler.ttf"),
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        Dancing: require("@/assets/fonts/Dancing.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
        NavigationBar.setBackgroundColorAsync(
            Colors[colorScheme ?? "light"].background
        );
        NavigationBar.setButtonStyleAsync(
            colorScheme === "dark" ? "light" : "dark"
        );
    }, [loaded, colorScheme]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <Stack initialRouteName="login">
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="onboarding" />
                <Stack.Screen
                    name="showAllHolidays"
                    options={{
                        title: "Holiday list",
                        headerRight: () => (
                            <Ionicons name="download-outline" size={26} />
                        ),
                        presentation: "modal",
                        animation: "slide_from_bottom",
                        // headerTitleStyle: {
                        //     fontFamily: "Nunito",
                        // },
                    }}
                />
                <Stack.Screen
                    name="login"
                    options={{
                        headerTitle: "",
                        headerShadowVisible: false,
                        headerTransparent: true,
                    }}
                />
                <Stack.Screen
                    name="register"
                    options={{
                        headerTitle: "",
                        headerShadowVisible: false,
                        headerTransparent: true,
                    }}
                />
            </Stack>
        </ThemeProvider>
    );
}
