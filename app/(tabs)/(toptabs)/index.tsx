import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Loader from "@/components/Loader";

const Page = () => {
    const colorScheme = useColorScheme();
    return (
        <View
            style={[
                styles.viewContainer,
                { backgroundColor: Colors[colorScheme ?? "light"].background },
            ]}
        >
            {/* <Text style={[{ color: Colors[colorScheme ?? "light"].text }]}>
                Study Material
            </Text> */}
            <Loader size="large" showText={true} fullPage={true} />
        </View>
    );
};

export default Page;

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
