import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NoComplaints from "@/components/NoComplaints";

const Page = () => {
    return (
        <View style={[styles.container]}>
            <NoComplaints />
        </View>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
