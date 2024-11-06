import { Alert, StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import { Colors } from "@/constants/Colors";

const CustomCalender = () => {
    const colorScheme = useColorScheme();
    const getYear = new Date().getFullYear();

    // const showAlert = (day: any) => {
    //     Alert.alert(
    //         "Holiday", // Title of the alert
    //         `${day.dateString} is selected`, // Message of the alert
    //         [
    //             // { text: "OK", onPress: () => console.log("OK Pressed") }, // Button with callback
    //             {
    //                 text: "Cancel",
    //                 onPress: () => console.log("Cancel Pressed"),
    //                 style: "cancel", // This marks the button as a "Cancel" action
    //             },
    //             { text: "OK", onPress: () => console.log("OK Pressed") },
    //         ],
    //         { cancelable: true } // Optional: Dismiss alert by tapping outside
    //     );
    // };

    return (
        <Calendar
            onDayPress={(day: any) => {
                const formatedDay = day.day.toString().padStart(2, "0");
                const formatedMonth = day.month.toString().padStart(2, "0");
                Alert.alert(
                    "Holiday",
                    `${formatedDay}-${formatedMonth}-${day.year} is Selected`
                );
                // console.log(day);
            }}
            minDate={`${getYear}-01-01`}
            maxDate={`${getYear}-12-31`}
            enableSwipeMonths={true}
            disableAllTouchEventsForDisabledDays={true}
            // hideExtraDays={true}
            theme={{
                "stylesheet.calendar.header": {
                    dayTextAtIndex0: {
                        color: Colors[colorScheme ?? "light"].redColor,
                    },
                },
                backgroundColor: Colors[colorScheme ?? "light"].background,
                calendarBackground: Colors[colorScheme ?? "light"].background,
                arrowColor: Colors[colorScheme ?? "light"].primaryColor,
                dayTextColor: Colors[colorScheme ?? "light"].text,
                disabledArrowColor: Colors[colorScheme ?? "light"].disableColor,
                textDisabledColor: Colors[colorScheme ?? "light"].disableColor,
                textMonthFontSize: 16,
                textMonthFontWeight: "700",
                monthTextColor: Colors[colorScheme ?? "light"].primaryColor,
                // textMonthFontFamily: "Dancing",
            }}
            style={[styles.calenderStyle]}
        />
    );
};

export default CustomCalender;

const styles = StyleSheet.create({
    calenderStyle: {
        // borderWidth: 0.5,
        // borderColor: "#c0c0c0",
        // marginHorizontal: 5,
        // borderRadius: 10,
        marginBottom: 12,
    },
});
