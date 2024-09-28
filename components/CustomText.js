import React from "react";
import { Text, StyleSheet } from "react-native";
import styling from "../utils/StyleUtil.js";
import color from "../utils/ColorUtil.js";

const CustomText = ({ children, style }) => {
    return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontSize: styling.mediumFontSize,
        color: color.red, // Default color
    },
});

export default CustomText;