import {
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";

const Page = () => {
    const colorScheme = useColorScheme();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        console.log("Refreshing");
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return (
        // {refreshing  ? <Loader  /> : null }
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            style={[
                styles.container,
                { backgroundColor: Colors[colorScheme ?? "light"].background },
            ]}
        >
            <Text>Notices</Text>
        </ScrollView>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
