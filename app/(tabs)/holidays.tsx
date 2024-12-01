import {
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomCalender from "@/components/CustomCalender";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

const Page = () => {
    const colorScheme = useColorScheme();

    // const [refreshing, setRefreshing] = useState(false);

    // const onRefresh = useEffect(() => {
    //     setRefreshing(true);
    //     setTimeout(() => {
    //         setRefreshing(false);
    //     }, 2000);
    // }, []);

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: Colors[colorScheme ?? "light"].background },
            ]}
        >
            <CustomCalender />
            {/* <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            > */}
            <Text
                style={{
                    fontSize: 22,
                    fontFamily: "Dancing",
                    fontWeight: "500",
                }}
            >
                Holidays
            </Text>
            <Link href={"/login"}>
                <Text>Show all</Text>
            </Link>
            {/* </ScrollView> */}
        </View>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
