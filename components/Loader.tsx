import { Colors } from "@/constants/Colors";
import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    ViewStyle,
    TextStyle,
    useColorScheme,
} from "react-native";

interface LoaderProps {
    size: "small" | "large";
    showText: boolean;
    fullPage: boolean;
}

const Loader: React.FC<LoaderProps> = ({ size, showText, fullPage }) => {
    const colorScheme = useColorScheme();

    return (
        <View style={fullPage ? styles.fullPageContainer : styles.container}>
            <ActivityIndicator
                size={size}
                color={Colors[colorScheme ?? "light"].primaryColor}
            />
            {showText && (
                <Text
                    style={[
                        styles.text,
                        { color: Colors[colorScheme ?? "light"].primaryColor },
                    ]}
                >
                    Loading...
                </Text>
            )}
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    fullPageContainer: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    } as ViewStyle,
    container: {
        justifyContent: "center",
        alignItems: "center",
    } as ViewStyle,
    text: {
        fontSize: 14,
        fontWeight: "500",
    } as TextStyle,
});
