import React from "react";
import { Text, StyleSheet } from "react-native";
import styling from "../utils/StyleUtil.js";

const CustomText = ({ children, style }) => { // Change customStyle to style for better standardization
    return <Text style={[styles.text, style]}>{children}</Text>; // Pass the style prop correctly
}

const styles = StyleSheet.create({
    text: {
        fontSize: styling.mediumFontSize,
    },
});

export default CustomText;