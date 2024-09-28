import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomText = ({ children, style }) => {
    return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({});

export default CustomText;