import {
    StyleSheet,
    Text,
    useColorScheme,
    useWindowDimensions,
    View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import LottieView from "lottie-react-native";

const NoComplaints = () => {
    const colorScheme = useColorScheme();
    const { width } = useWindowDimensions();

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: Colors[colorScheme ?? "light"].background,
                },
            ]}
        >
            <LottieView
                source={require("@/assets/animations/great.json")}
                autoPlay
                loop
                style={[
                    styles.lottie,
                    { width: width * 0.2, height: width * 0.2 },
                ]}
            />
            <Text
                style={[
                    {
                        fontFamily: "Nunito",
                        fontWeight: "400",
                        fontSize: 14,
                        color: Colors[colorScheme ?? "light"].text,
                    },
                ]}
            >
                Great! You don't have any complaints yet!
            </Text>
        </View>
    );
};

export default NoComplaints;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    lottie: {
        marginBottom: 10,
    },
});
