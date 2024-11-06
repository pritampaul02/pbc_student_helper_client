import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const Page = () => {
    const colorScheme = useColorScheme();
    return (
        <View
            style={[
                styles.viewContainer,
                { backgroundColor: Colors[colorScheme ?? "light"].background },
            ]}
        >
            <Text>Syllabus</Text>
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
