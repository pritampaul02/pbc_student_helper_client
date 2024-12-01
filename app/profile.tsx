import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
    return (
        <View>
            <Link href={"/login"}>
                <Text>Login</Text>
            </Link>
        </View>
    );
};

export default Page;

const styles = StyleSheet.create({});
