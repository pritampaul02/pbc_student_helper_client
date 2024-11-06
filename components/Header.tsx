import React from "react";

import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    Image,
    ImageStyle,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    useColorScheme,
    View,
    ViewStyle,
} from "react-native";

import { Colors } from "@/constants/Colors";

interface headerProps {
    title: string;
    subTitle: string;
    subTitleShown: boolean;
    profileIcon: boolean;
    holidayCount: boolean;
}

const Header: React.FC<headerProps> = ({
    title,
    subTitle,
    subTitleShown,
    profileIcon,
    holidayCount,
}) => {
    const { top } = useSafeAreaInsets();
    const colorScheme = useColorScheme();

    return (
        <View
            style={[
                styles.headerContainer,
                {
                    paddingTop: top,
                    backgroundColor: Colors[colorScheme ?? "light"].background,
                },
            ]}
        >
            <View>
                <Text
                    style={[
                        styles.helloText,
                        { color: Colors[colorScheme ?? "light"].primaryColor },
                    ]}
                >
                    {title ?? "No title found"}
                </Text>
                {subTitleShown && (
                    <Text
                        style={[
                            {
                                color: Colors.dark.secondaryColor,
                                fontSize: 14,
                                fontWeight: "400",
                                // fontFamily: "Nunito",
                            },
                        ]}
                    >
                        {subTitle ?? "Good {timeOfDay}..."}
                    </Text>
                )}
            </View>
            {profileIcon && (
                <TouchableOpacity
                    style={[
                        styles.profileBack,
                        {
                            backgroundColor: Colors.dark.secondaryColor,
                        },
                    ]}
                    onPress={() => router.push("/profile")}
                >
                    <Image
                        source={require("@/assets/images/favicon.png")}
                        style={[styles.profilePic]}
                    />
                </TouchableOpacity>
            )}
            {holidayCount && (
                <View style={[styles.totalHolidayCount]}>
                    <Text style={[styles.totalHolidayText]}>
                        Total Holidays
                    </Text>
                    <Text
                        style={[
                            styles.totalHolidayNumber,
                            {
                                backgroundColor:
                                    Colors[colorScheme ?? "light"]
                                        .secondaryColor,
                                color: Colors[colorScheme ?? "light"]
                                    .primaryColor,
                            },
                        ]}
                    >
                        100
                        {/* {isLoading ? (
                            <Loader size="small" showText={false} />
                        ) : (
                            res.length
                        )} */}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 5,
    } as ViewStyle,
    helloText: {
        fontFamily: "Nunito",
        fontWeight: "700",
        fontSize: 26,
    } as TextStyle,
    profileBack: {
        borderRadius: 50,
        objectFit: "contain",
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
    } as ViewStyle,
    profilePic: {
        height: 30,
        width: 30,
    } as ImageStyle,
    totalHolidayCount: {
        alignItems: "flex-end",
        justifyContent: "space-between",
    } as ViewStyle,
    totalHolidayText: {
        fontSize: 14,
        fontWeight: "500",
        color: Colors.dark.secondaryColor,
    } as TextStyle,
    totalHolidayNumber: {
        fontSize: 17,
        fontWeight: "700",
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 16,
    } as TextStyle,
});
