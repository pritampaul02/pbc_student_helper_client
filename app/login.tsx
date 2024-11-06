import React, { FC, useState } from "react";

import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    useWindowDimensions,
    View,
} from "react-native";

import { Colors } from "@/constants/Colors";
import InputBox from "@/components/InputBox";
import ButtonBox from "@/components/ButtonBox";

const LoginPage: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { top } = useSafeAreaInsets();
    const colorScheme = useColorScheme();
    const { width } = useWindowDimensions();

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={top + 20}
        >
            <ScrollView
                contentContainerStyle={[
                    styles.container,
                    {
                        backgroundColor:
                            Colors[colorScheme ?? "light"].background,
                    },
                ]}
                keyboardShouldPersistTaps="handled"
            >
                {/* Lottie Animation */}
                <LottieView
                    source={require("@/assets/animations/studyBoy.json")}
                    autoPlay
                    loop
                    style={[styles.lottie, { width: width, height: width }]}
                />

                {/* Page Title */}
                <Text
                    style={[
                        styles.title,
                        {
                            color: Colors[colorScheme ?? "light"].text,
                        },
                    ]}
                >
                    Welcome Back!
                </Text>

                {/* Login Form */}
                <View style={styles.formContainer}>
                    <InputBox
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        style={{
                            backgroundColor:
                                Colors[colorScheme ?? "light"].inputBackground,
                            color: Colors[colorScheme ?? "light"].text,
                        }}
                    />
                    <InputBox
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                        passwordBox
                        style={{
                            backgroundColor:
                                Colors[colorScheme ?? "light"].inputBackground,
                            color: Colors[colorScheme ?? "light"].text,
                        }}
                    />
                    <ButtonBox
                        title="Login"
                        onPress={() => console.log("Login button pressed")}
                        buttonStyle={{
                            backgroundColor:
                                Colors[colorScheme ?? "light"].primaryColor,
                        }}
                        textStyle={{
                            color: Colors[colorScheme ?? "light"]
                                .secondaryColor,
                        }}
                    />
                </View>

                {/* Sign Up Link */}
                <View style={styles.footer}>
                    <Text
                        style={{ color: Colors[colorScheme ?? "light"].text }}
                    >
                        Don’t have an account?
                    </Text>
                    <Pressable onPress={() => router.push("/register")}>
                        <Text
                            style={[
                                styles.signUpText,
                                {
                                    color: Colors[colorScheme ?? "light"]
                                        .primaryColor,
                                },
                            ]}
                        >
                            Sign Up
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    lottie: {
        marginBottom: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "Nunito",
    },
    formContainer: {
        width: "100%",
        alignItems: "center",
    },
    footer: {
        flexDirection: "row",
        marginTop: 20,
        alignSelf: "flex-end",
        // marginRight: 10,
    },
    signUpText: {
        marginLeft: 5,
        fontWeight: "bold",
    },
});

export default LoginPage;
