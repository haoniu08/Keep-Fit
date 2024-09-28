import React from "react";
import { TextInput, StyleSheet } from "react-native";
import color from "../utils/ColorUtil.js";

const CustomTextInput = ({ style, ...props }) => {
    return <TextInput style={[styles.input, style]} {...props} />;
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: color.purple,
    }
});

export default CustomTextInput;