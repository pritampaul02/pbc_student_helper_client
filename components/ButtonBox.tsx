import React, { FC } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    ViewStyle,
    TextStyle,
} from "react-native";

interface ButtonBoxProps {
    title: string;
    onPress: () => void;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
}

const ButtonBox: FC<ButtonBoxProps> = ({
    title,
    onPress,
    buttonStyle,
    textStyle,
}) => {
    return (
        <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#4A90E2",
    },
    buttonText: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: "bold",
    },
});

export default ButtonBox;

// import React from "react";
// import {
//     Pressable,
//     StyleSheet,
//     Text,
//     TextStyle,
//     useColorScheme,
//     ViewStyle,
// } from "react-native";
// import { Colors } from "@/constants/Colors";

// interface ButtonProps {
//     pressEvent: () => void;
//     title: string;
//     buttonStyle?: ViewStyle;
//     textStyle?: TextStyle;
// }

// const ButtonBox: React.FC<ButtonProps> = ({
//     pressEvent,
//     title,
//     buttonStyle,
//     textStyle,
// }) => {
//     const colorScheme = useColorScheme();
//     const isDark = colorScheme === "dark";

//     return (
//         <Pressable
//             onPress={pressEvent}
//             style={[
//                 {
//                     backgroundColor:
//                         Colors[colorScheme ?? "light"].primaryColor,
//                 },
//                 styles.button,
//                 buttonStyle, // Merge custom styles
//             ]}
//         >
//             <Text
//                 style={[
//                     {
//                         fontSize: 18,
//                         color: isDark
//                             ? Colors.dark.secondaryColor
//                             : Colors.light.secondaryColor,
//                     },
//                     textStyle, // Merge custom text styles
//                 ]}
//             >
//                 {title}
//             </Text>
//         </Pressable>
//     );
// };

// export default ButtonBox;

// const styles = StyleSheet.create({
//     button: {
//         alignItems: "center",
//         justifyContent: "center",
//         height: 44,
//         borderRadius: 10,
//         paddingHorizontal: 20,
//     },
// });
