import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const Page = () => {
    const colorScheme = useColorScheme();
    const { top } = useSafeAreaInsets();
    return (
        <View
            style={[
                {
                    backgroundColor: Colors[colorScheme ?? "light"].background,
                    paddingTop: top,
                },
                styles.container,
            ]}
        >
            <Pressable
                onPress={router.back}
                style={{ position: "absolute", top: top + 20, left: 20 }}
            >
                <Ionicons name="arrow-back" size={24} />
            </Pressable>
            <Image source={require("@/assets/images/react-logo.png")} />
            <Text
                style={[
                    { color: Colors[colorScheme ?? "light"].text },
                    styles.heading,
                ]}
            >
                Create an account
            </Text>
            <View style={{ width: "100%", paddingHorizontal: 18 }}>
                <TextInput
                    placeholder="Student ID..."
                    style={styles.inputBox}
                />
                <View style={{ height: 12 }} />
                <TextInput
                    placeholder="Password..."
                    secureTextEntry
                    style={styles.inputBox}
                />
                <View style={{ height: 14 }} />
                <Pressable
                    onPress={() => console.log("button press")}
                    style={[
                        {
                            backgroundColor:
                                Colors[colorScheme ?? "light"].primaryColor,
                        },
                        styles.button,
                    ]}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            color: Colors[colorScheme ?? "light"]
                                .secondaryColor,
                        }}
                    >
                        Register
                    </Text>
                </Pressable>
            </View>
            <View
                style={{
                    width: "100%",
                    paddingHorizontal: 18,
                    alignItems: "flex-end",
                    paddingTop: 10,
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                        style={{
                            color: Colors[colorScheme ?? "light"].text,
                            fontFamily: "Nunito",
                            fontSize: 15,
                        }}
                    >
                        Already have an account?{" "}
                    </Text>
                    <Link href={"/login"}>
                        <Text
                            style={{
                                color: Colors[colorScheme ?? "light"]
                                    .primaryColor,
                                fontWeight: "600",
                                textDecorationStyle: "solid",
                                textDecorationLine: "underline",
                                fontSize: 16,
                            }}
                        >
                            Login
                        </Text>
                    </Link>
                </View>
            </View>
        </View>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: 140,
    },
    heading: {
        fontSize: 35,
        fontFamily: "Nunito",
        fontWeight: "600",
        marginBottom: 45,
    },
    inputBox: {
        borderWidth: 0.4,
        borderColor: "#000",
        width: "100%",
        fontSize: 16,
        height: 44,
        paddingHorizontal: 15,
        fontFamily: "Nunito",
        fontWeight: "500",
        borderRadius: 10,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        height: 44,
        fontSize: 20,
        borderRadius: 10,
    },
});
