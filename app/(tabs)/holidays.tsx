import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import CustomCalender from "@/components/CustomCalender";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

const Page = () => {
    const colorScheme = useColorScheme();

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: Colors[colorScheme ?? "light"].background },
            ]}
        >
            <CustomCalender />
            <Text
                style={{
                    fontSize: 22,
                    fontFamily: "Dancing",
                    fontWeight: "500",
                }}
            >
                Holidays
            </Text>
            <Link href={"/login"}>
                <Text>Show all</Text>
            </Link>
        </View>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
