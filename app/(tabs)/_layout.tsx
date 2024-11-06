import { useColorScheme } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import Header from "@/components/Header";

const TabLayout = () => {
    const colorScheme = useColorScheme();

    // fetch the currentTime
    const currentTime = new Date();
    const hours = currentTime.getHours();

    const timeOfDay =
        hours >= 5 && hours < 12
            ? "Morning"
            : hours >= 12 && hours < 18
            ? "Afternoon"
            : hours >= 18 && hours < 21
            ? "Evening"
            : "Night";

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor:
                    Colors[colorScheme ?? "light"].primaryColor,
                tabBarShowLabel: true,
                headerShadowVisible: false,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme ?? "light"].background,
                },
            }}
        >
            <Tabs.Screen
                name="(toptabs)"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                    // headerTitleStyle: {
                    //     fontFamily: "Nunito",
                    // },
                    header: () => (
                        <Header
                            title="Hay Developer 👋"
                            holidayCount={false}
                            profileIcon={true}
                            subTitle={`Good ${timeOfDay}...`}
                            subTitleShown={true}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="notices"
                options={{
                    title: "Notice",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={
                                focused
                                    ? "notifications"
                                    : "notifications-outline"
                            }
                            color={color}
                        />
                    ),
                    // headerTitleStyle: {
                    //     fontFamily: "Nunito",
                    // },
                    header: () => (
                        <Header
                            title="Notice"
                            subTitle="Check all the notices..."
                            holidayCount={false}
                            profileIcon={false}
                            subTitleShown={true}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="complaints"
                options={{
                    title: "Complaints",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={
                                focused
                                    ? "chatbubble-ellipses"
                                    : "chatbubble-ellipses-outline"
                            }
                            color={color}
                        />
                    ),
                    // headerTitleStyle: {
                    //     fontFamily: "Nunito",
                    // },
                    header: () => (
                        <Header
                            title="Complaints 😞"
                            subTitleShown={true}
                            subTitle="Have you any complaints?"
                            holidayCount={false}
                            profileIcon={false}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="holidays"
                options={{
                    title: "Holidays",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={
                                focused
                                    ? "calendar-number"
                                    : "calendar-number-outline"
                            }
                            color={color}
                        />
                    ),
                    // headerTitleStyle: {
                    //     fontFamily: "Nunito",
                    // },
                    header: () => (
                        <Header
                            holidayCount={true}
                            profileIcon={false}
                            subTitle="Enjoy your holidays..."
                            subTitleShown={true}
                            title="Holidays 🥳"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    title: "More",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "apps" : "apps-outline"}
                            color={color}
                        />
                    ),
                    // headerTitleStyle: {
                    //     fontFamily: "Nunito",
                    // },
                }}
            />
        </Tabs>
    );
};

export default TabLayout;
