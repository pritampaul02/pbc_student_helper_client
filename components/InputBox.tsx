import { Colors } from "@/constants/Colors";
import React, { FC } from "react";
import {
    TextInput,
    StyleSheet,
    ViewStyle,
    TextStyle,
    ImageStyle,
    useColorScheme,
    TextInputProps,
} from "react-native";

interface InputBoxProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    passwordBox?: boolean;
    style?: ViewStyle | TextStyle | ImageStyle;
}

const InputBox: FC<InputBoxProps> = ({
    value,
    onChangeText,
    placeholder,
    passwordBox = false,
    style,
}) => {
    const colorScheme = useColorScheme();
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={Colors[colorScheme ?? "light"].text}
            secureTextEntry={passwordBox}
            cursorColor={Colors[colorScheme ?? "light"].primaryColor}
            style={[styles.input, style]}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
});

export default InputBox;

// import React, { FC } from "react";
// import {
//     ImageStyle,
//     StyleSheet,
//     TextInput,
//     TextStyle,
//     ViewStyle,
//     TextInputProps,
// } from "react-native";

// interface InputBoxProps extends TextInputProps {
//     passwordBox?: boolean;
//     placeholder: string;
//     style?: ViewStyle | TextStyle | ImageStyle;
// }

// const InputBox: FC<InputBoxProps> = ({
//     passwordBox = false,
//     placeholder,
//     style,
//     ...rest
// }) => {
//     return (
//         <TextInput
//             placeholder={placeholder}
//             secureTextEntry={passwordBox}
//             style={[styles.inputBox, style]} // Merge custom styles
//             {...rest} // Spread the remaining props like onChangeText, value, etc.
//         />
//     );
// };

// const styles = StyleSheet.create({
//     inputBox: {
//         borderWidth: 0.4,
//         borderColor: "#000",
//         width: "100%",
//         fontSize: 16,
//         height: 44,
//         paddingHorizontal: 15,
//         fontFamily: "Nunito",
//         fontWeight: "500",
//         borderRadius: 10,
//     },
// });

// export default InputBox;
