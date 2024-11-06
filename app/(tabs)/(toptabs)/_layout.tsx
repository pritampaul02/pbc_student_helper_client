import React from "react";
import {
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationOptions,
    MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
>(Navigator);

const TopTabLayout = () => {
    const colorScheme = useColorScheme();
    return (
        <MaterialTopTabs
            // screenOptions={{
            //     tabBarStyle: { backgroundColor: "red" }, // Set the background color here
            //     tabBarIndicatorStyle: { backgroundColor: "white" }, // Optional: Indicator color
            //     tabBarActiveTintColor: "white", // Text color of active tab
            //     tabBarInactiveTintColor: "black", // Text color of inactive tabs
            // }}
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme ?? "light"].background,
                },
                tabBarActiveTintColor:
                    Colors[colorScheme ?? "light"].primaryColor,
                tabBarInactiveTintColor:
                    Colors[colorScheme ?? "light"].tabIconDefault,
                tabBarIndicatorStyle: {
                    backgroundColor:
                        Colors[colorScheme ?? "light"].primaryColor,
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                },
                tabBarLabelStyle: {
                    fontWeight: "600",
                    textTransform: "capitalize",
                    fontSize: 14,
                },
            }}
        >
            <MaterialTopTabs.Screen
                name="index"
                options={{ title: "Study Materials" }}
            />
        </MaterialTopTabs>
    );
};

export default TopTabLayout;
