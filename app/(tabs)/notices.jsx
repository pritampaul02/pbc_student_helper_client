import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const Page = () => {
    const colorScheme = useColorScheme();
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: Colors[colorScheme ?? "light"].background },
            ]}
        >
            <Text>Notices</Text>
        </View>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
