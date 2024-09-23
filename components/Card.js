import react from "react";
import { StyleSheet, View } from "react-native";

export default function Card({ children, style }) {
    return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        width: '75%',
        height: '50%',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#434343',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5, // For Android shadow
        padding: 20,
        marginVertical: 10,
    },
});